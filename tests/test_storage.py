"""Service/store regressions with HA boundary objects stubbed (no HA server needed)."""
import importlib.util
import sys
import types
import unittest
from datetime import datetime, timezone
from pathlib import Path
from unittest.mock import AsyncMock
from types import SimpleNamespace

ROOT = Path(__file__).resolve().parents[1] / "custom_components" / "chores4kids"
for name in ("homeassistant", "homeassistant.core", "homeassistant.helpers",
             "homeassistant.helpers.storage", "homeassistant.util", "homeassistant.util.dt",
             "homeassistant.helpers.event", "chores_test"):
    sys.modules.setdefault(name, types.ModuleType(name))
sys.modules["homeassistant.core"].HomeAssistant = object
sys.modules["homeassistant.helpers.storage"].Store = object
sys.modules["homeassistant.helpers.event"].async_call_later = lambda *args: None
dt = sys.modules["homeassistant.util.dt"]
dt.now = dt.utcnow = lambda: datetime.now(timezone.utc)
dt.as_local = lambda value: value

def load(name):
    spec = importlib.util.spec_from_file_location(f"chores_test.{name}", ROOT / f"{name}.py")
    module = importlib.util.module_from_spec(spec)
    sys.modules[spec.name] = module
    spec.loader.exec_module(module)
    return module

load("const")
storage = load("storage")
frontend = load("frontend")

class ResourceTests(unittest.IsolatedAsyncioTestCase):
    async def test_old_hacs_and_local_resource_become_one_current_resource(self):
        entries = [
            {"id": "hacs", "url": "/hacsfiles/lovelace-chores4kids-card/chores4kids-card.js?hacstag=old", "type": "module"},
            {"id": "local", "url": "/local/chores4kids-card.js?v=old", "type": "module"},
            {"id": "other", "url": "/local/other-card.js", "type": "module"},
        ]
        resources = SimpleNamespace(store=object(), loaded=True, async_items=lambda: entries,
            async_create_item=AsyncMock(), async_update_item=AsyncMock(), async_delete_item=AsyncMock())
        async def executor(fn, *args):
            return fn(*args)
        hass = SimpleNamespace(data={"lovelace": {"resources": resources}},
            config=SimpleNamespace(path=lambda *args: str(ROOT / "missing.js")), async_add_executor_job=executor)
        await frontend._ensure_lovelace_resource(hass)
        resources.async_update_item.assert_awaited_once_with("hacs", {"type": "module", "url": "/local/chores4kids-card.js?v=0"})
        resources.async_delete_item.assert_awaited_once_with("local")
        resources.async_create_item.assert_not_awaited()

class AutomationTests(unittest.IsolatedAsyncioTestCase):
    def setUp(self):
        self.store = storage.KidsChoresStore.__new__(storage.KidsChoresStore)
        self.child = storage.Child("child", "Child")
        self.store.children = [self.child, storage.Child("other", "Other")]
        self.template = storage.Task("template", "Tidy", 5)
        self.instance = storage.Task("instance", "Tidy", 5, assigned_to="child", repeat_template_id="template")
        self.store.tasks = [self.template, self.instance]
        self.store.activity_history = []
        self.store.async_save = AsyncMock()

    async def test_deadline_opt_in_and_restart(self):
        self.store.enable_points = True
        self.store.categories = []
        today = dt.now().date()
        future = (today + storage.timedelta(days=2)).isoformat()
        template = await self.store.add_task("Pack bag", 0, due=future)
        await self.store.assign_task(template.id, self.child.id)
        task = self.store.tasks[-1]
        self.assertEqual(task.penalty_deadline, 0)
        await self.store.update_task(template.id, penalty_time="20:00", penalty_points=2)
        deadline = datetime.fromisoformat(future + "T20:00:00+00:00")
        self.assertEqual(task.penalty_deadline, int(deadline.timestamp() * 1000))
        late = deadline + storage.timedelta(minutes=1)
        self.assertFalse(self.store.settle_due_penalties(deadline))
        self.assertTrue(self.store.settle_due_penalties(late))
        self.store.tasks = [storage.Task(**storage.asdict(task))]
        self.assertFalse(self.store.settle_due_penalties(late))
        self.assertEqual(self.child.points, -2)
        self.assertEqual(self.store.get_activity_history(future, future)["entries"][0]["status"], "deadline_missed")

    async def test_deadline_uses_submission_and_excludes_claimed_copies(self):
        self.store.enable_points = True
        now = dt.now()
        deadline = int(now.timestamp()*1000) - 1000
        self.instance.penalty_deadline = deadline
        self.instance.penalty_points = 2
        await self.store.set_task_status(self.instance.id, "awaiting_approval", deadline)
        await self.store.approve_task(self.instance.id)
        self.assertEqual(self.child.points, 5)
        late = storage.replace(self.instance, id="late", completed_ts=deadline+1, penalty_settled=False)
        taken = storage.replace(late, id="taken", fastest_wins_claimed_by_child_id="other")
        self.store.tasks.extend([late, taken])
        self.store.settle_due_penalties(now)
        self.assertEqual(self.child.points, 3)
        self.assertEqual([r["task_id"] for r in self.store.activity_history if r["points"] < 0], ["late"])

    async def test_reward_delivery_is_snapshotted_and_idempotent(self):
        self.store.items = []
        self.store.purchases = []
        self.child.points = 12
        item = await self.store.add_shop_item("Board game", 3)
        instant = await self.store.buy_shop_item(self.child.id, item.id)
        await self.store.update_shop_item(item.id, requires_delivery=True)
        first = await self.store.buy_shop_item(self.child.id, item.id)
        second = await self.store.buy_shop_item(self.child.id, item.id)
        await self.store.update_shop_item(item.id, requires_delivery=False)
        with self.assertRaises(ValueError):
            await self.store.mark_purchase_delivered(instant.id)
        await self.store.mark_purchase_delivered(first.id)
        timestamp = first.delivered_at
        self.assertIsNotNone(timestamp)
        await self.store.mark_purchase_delivered(first.id)
        self.assertEqual(first.delivered_at, timestamp)
        self.assertIsNone(second.delivered_at)
        self.assertEqual(self.child.points, 3)
        await self.store.clear_shop_history()
        self.assertEqual(self.store.purchases, [second])

    async def test_multiple_completions_are_independent_and_rewarded_once(self):
        self.instance.multiple_per_day = True
        for occurrence, timestamp in [(0, 1000), (1, 2000)]:
            task = self.store.tasks[occurrence + 1]
            await self.store.set_task_status(task.id, "awaiting_approval", timestamp)
            await self.store.set_task_status(task.id, "awaiting_approval", timestamp + 1)
            self.assertEqual(task.completed_ts, timestamp)
        self.assertEqual([t.status for t in self.store.tasks[1:]],
                         ["awaiting_approval", "awaiting_approval", "assigned"])
        self.assertEqual(self.child.points, 0)
        for task in self.store.tasks[1:3]:
            await self.store.approve_task(task.id)
            await self.store.approve_task(task.id)
        self.assertEqual(self.child.points, 10)
        self.assertEqual(len(self.store.tasks), 4)

    async def test_unscheduled_multi_use_task_is_still_available_tomorrow(self):
        self.instance.multiple_per_day = True
        await self.store.set_task_status("instance", "awaiting_approval", 1000)
        successor = self.store.tasks[-1]
        successor.created = "2020-01-01T08:00:00+00:00"
        await self.store.daily_rollover()
        self.assertIn(successor, self.store.tasks)
        self.assertIn(self.instance, self.store.tasks)
        self.assertEqual(successor.status, "assigned")

    async def test_multiple_completions_with_automatic_approval(self):
        self.instance.multiple_per_day = self.instance.skip_approval = True
        await self.store.set_task_status("instance", "awaiting_approval", 1000)
        await self.store.set_task_status("instance", "awaiting_approval", 1001)
        self.assertEqual(self.child.points, 5)
        self.assertEqual(len(self.store.tasks), 3)
        successor = self.store.tasks[-1]
        self.assertEqual(successor.assigned_to, self.instance.assigned_to)
        self.assertIsNone(successor.completed_ts)
        await self.store.set_task_status(successor.id, "awaiting_approval", 2000)
        self.assertEqual(self.child.points, 10)

    async def test_history_tracks_occurrences_bonus_and_actual_awards_across_rollover(self):
        self.instance.multiple_per_day = self.instance.bonus_enabled = True
        self.instance.bonus_points, self.instance.bonus_title = 3, "Sort recycling"
        ts = int(datetime(2025, 2, 8, 12, tzinfo=timezone.utc).timestamp() * 1000)
        self.instance.created = "2025-02-08T08:00:00+00:00"
        await self.store.set_task_status("instance", "awaiting_approval", ts)
        await self.store.set_task_bonus_completed("instance", ts + 60_000)
        second = self.store.tasks[-1]
        await self.store.set_task_status(second.id, "awaiting_approval", ts + 120_000)
        week = lambda: self.store.get_activity_history("2025-02-08", "2025-02-14")["entries"]
        self.assertEqual([r["points"] for r in week()], [0, 0, 0])
        await self.store.approve_bonus_task("instance")
        await self.store.approve_task("instance")
        await self.store.approve_task("instance")
        self.child.name = "New name"
        await self.store.daily_rollover()
        self.assertNotIn(self.instance, self.store.tasks)
        rows = week()
        self.assertEqual([r["points"] for r in rows], [0, 3, 5])
        self.assertEqual(rows[1]["bonus_title"], "Sort recycling")
        self.assertEqual(rows[2]["child_name"], "Child")
        self.assertEqual(self.store.get_activity_history("2025-02-09", "2025-02-14")["entries"], [])
        with self.assertRaises(ValueError):
            self.store.get_activity_history("2025-02-10", "2025-02-08")

    async def test_template_and_child_approves_assigned_copy(self):
        await self.store.approve_task("template", child_id="child")
        self.assertEqual(self.instance.status, "approved")
        self.assertEqual(self.template.status, "assigned")
        self.assertEqual(self.child.points, 5)

    async def test_status_approved_awards_points_once(self):
        await self.store.set_task_status("template", "approved", child_id="child")
        await self.store.set_task_status("instance", "approved", child_id="child")
        self.assertEqual(self.child.points, 5)

    async def test_never_approves_another_childs_copy(self):
        with self.assertRaisesRegex(ValueError, "different_child"):
            await self.store.approve_task("instance", child_id="other")
        self.assertEqual(self.child.points, 0)

    async def test_ambiguous_copies_require_instance_id(self):
        self.store.tasks.append(storage.Task("second", "Tidy", 5, assigned_to="child", repeat_template_id="template"))
        with self.assertRaisesRegex(ValueError, "ambiguous_task"):
            await self.store.approve_task("template", child_id="child")

    async def test_unassigned_template_does_not_award_points(self):
        with self.assertRaisesRegex(ValueError, "task_not_assigned"):
            await self.store.approve_task("template")


class FrontendSetupTests(unittest.IsolatedAsyncioTestCase):
    async def test_copy_and_resource_hash_do_not_read_files_on_event_loop(self):
        import asyncio
        import hashlib
        import tempfile
        import threading
        from unittest.mock import Mock, patch

        frontend = load("frontend")
        loop_thread = threading.get_ident()
        resources = SimpleNamespace(store=object(), loaded=True, async_items=lambda: [],
                                    async_create_item=AsyncMock(), async_update_item=AsyncMock())
        with tempfile.TemporaryDirectory() as work:
            root = Path(work)
            src = root / "package/www" / frontend.JS_FILENAME
            src.parent.mkdir(parents=True)
            src.write_bytes(b"bundled card")
            hass = SimpleNamespace(config=SimpleNamespace(path=lambda *p: str(root.joinpath(*p))),
                                   async_add_executor_job=asyncio.to_thread,
                                   data={"lovelace": {"resources": resources}})
            deployed = root / "www" / frontend.JS_FILENAME
            original_open = Path.open
            def guarded_open(path, *args, **kwargs):
                self.assertNotEqual(threading.get_ident(), loop_thread)
                return original_open(path, *args, **kwargs)
            with patch.object(frontend, "__file__", str(root / "package/frontend.py")), patch.object(Path, "open", guarded_open):
                await frontend._ensure_js_in_www(hass)
                await frontend._ensure_js_in_www(hass)
                await frontend._ensure_lovelace_resource(hass)
                legacy = Mock(async_load=AsyncMock(return_value=[]), async_save=AsyncMock())
                with patch.object(frontend, "Store", return_value=legacy):
                    hass.data = {}
                    await frontend._ensure_lovelace_resource(hass)
            token = frontend._token_from_hash(hashlib.sha256(src.read_bytes()).hexdigest())
            self.assertEqual(deployed.read_bytes(), src.read_bytes())
            expected = frontend.RESOURCE_URL + "?v=" + token
            self.assertEqual(resources.async_create_item.await_args.args[0]["url"], expected)
            self.assertEqual(legacy.async_save.await_args.args[0][0]["url"], expected)

if __name__ == "__main__":
    unittest.main()
