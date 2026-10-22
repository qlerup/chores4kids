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
        self.store.async_save = AsyncMock()

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

if __name__ == "__main__":
    unittest.main()
