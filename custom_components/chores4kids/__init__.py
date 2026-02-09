from __future__ import annotations

from homeassistant.config_entries import ConfigEntry
from homeassistant.core import HomeAssistant, ServiceCall
from homeassistant.const import Platform
from homeassistant.helpers.dispatcher import async_dispatcher_send
from homeassistant.helpers import entity_registry as er
from homeassistant.helpers import device_registry as dr
from homeassistant.helpers.entity import DeviceInfo
from homeassistant.helpers.event import async_track_time_change
from homeassistant.util import dt as dt_util

import logging

from .const import DOMAIN, SIGNAL_CHILDREN_UPDATED, SIGNAL_DATA_UPDATED
from .storage import KidsChoresStore

_LOGGER = logging.getLogger(__name__)

PLATFORMS: list[Platform] = [Platform.SENSOR]


async def async_setup_entry(hass: HomeAssistant, entry: ConfigEntry) -> bool:
    """Set up the Chores4Kids integration."""
    store = KidsChoresStore(hass)
    await store.async_load()

    hass.data.setdefault(DOMAIN, {})
    hass.data[DOMAIN]["store"] = store

    # Ensure Lovelace card JS is available and resource is registered (best-effort)
    try:
        from .frontend import ensure_frontend
        await ensure_frontend(hass)
    except Exception:
        _LOGGER.debug("%s: ensure_frontend failed", DOMAIN, exc_info=True)

    await hass.config_entries.async_forward_entry_setups(entry, PLATFORMS)

    def _get_lang_key() -> str:
        raw = str(getattr(hass.config, "language", "en") or "en").lower()
        return raw.split("-", 1)[0]

    _NOTIFY_I18N = {
        "en": {
            "child": "A child",
            "message": "{who} completed: {title} ({dt})",
            "approve": "Approve",
            "reassign": "Reassign",
            "purchase": "{who} bought {item} for {price} points ({dt})",
        },
        "da": {
            "child": "Et barn",
            "message": "{who} har meldt opgaven færdig: {title} ({dt})",
            "approve": "Godkend",
            "reassign": "Gentildel",
            "purchase": "{who} købte {item} for {price} point ({dt})",
        },
        "sv": {
            "child": "Ett barn",
            "message": "{who} har markerat uppgiften som klar: {title} ({dt})",
            "approve": "Godkänn",
            "reassign": "Tilldela igen",
            "purchase": "{who} köpte {item} för {price} poäng ({dt})",
        },
        "nb": {
            "child": "Et barn",
            "message": "{who} har meldt oppgaven ferdig: {title} ({dt})",
            "approve": "Godkjenn",
            "reassign": "Tildel på nytt",
            "purchase": "{who} kjøpte {item} for {price} poeng ({dt})",
        },
        "de": {
            "child": "Ein Kind",
            "message": "{who} hat die Aufgabe erledigt: {title} ({dt})",
            "approve": "Genehmigen",
            "reassign": "Neu zuweisen",
            "purchase": "{who} kaufte {item} für {price} Punkte ({dt})",
        },
        "es": {
            "child": "Un niño",
            "message": "{who} completó: {title} ({dt})",
            "approve": "Aprobar",
            "reassign": "Reasignar",
            "purchase": "{who} compró {item} por {price} puntos ({dt})",
        },
        "fr": {
            "child": "Un enfant",
            "message": "{who} a terminé : {title} ({dt})",
            "approve": "Approuver",
            "reassign": "Réattribuer",
            "purchase": "{who} a acheté {item} pour {price} points ({dt})",
        },
        "fi": {
            "child": "Lapsi",
            "message": "{who} suoritti: {title} ({dt})",
            "approve": "Hyväksy",
            "reassign": "Määritä uudelleen",
            "purchase": "{who} osti {item} {price} pisteellä ({dt})",
        },
        "it": {
            "child": "Un bambino",
            "message": "{who} ha completato: {title} ({dt})",
            "approve": "Approva",
            "reassign": "Riassegna",
            "purchase": "{who} ha comprato {item} per {price} punti ({dt})",
        },
    }

    def _get_notify_texts() -> dict:
        lang = _get_lang_key()
        return _NOTIFY_I18N.get(lang, _NOTIFY_I18N["en"])

    def _format_dt(dt):
        try:
            return dt_util.as_local(dt).strftime("%Y-%m-%d %H:%M")
        except Exception:
            try:
                return dt_util.as_local(dt_util.utcnow()).strftime("%Y-%m-%d %H:%M")
            except Exception:
                return ""

    def _resolve_notify_image_url(raw: str) -> str:
        try:
            url = str(raw or "").strip()
            if not url:
                return ""
            if url.startswith("http://") or url.startswith("https://"):
                return url
            base = str(getattr(hass.config, "external_url", "") or "").strip() or str(getattr(hass.config, "internal_url", "") or "").strip()
            if not base:
                api = getattr(hass.config, "api", None)
                base = str(getattr(api, "base_url", "") or "").strip()
            if not base:
                return url
            if url.startswith("/"):
                return base.rstrip("/") + url
            return base.rstrip("/") + "/" + url
        except Exception:
            return ""



    def _get_notify_settings() -> dict:
        try:
            raw = getattr(store, "notify_service_settings", {}) or {}
            if isinstance(raw, dict):
                return raw
        except Exception:
            pass
        return {}

    def _is_notify_enabled(service: str, key: str) -> bool:
        try:
            settings = _get_notify_settings()
            if not settings:
                return True
            svc_key = str(service or "").strip()
            svc_plain = svc_key.split(".", 1)[1] if svc_key.startswith("notify.") else svc_key
            svc_settings = settings.get(svc_key) or settings.get(svc_plain)
            if svc_settings is None:
                return True
            if isinstance(svc_settings, dict) and key in svc_settings:
                return bool(svc_settings.get(key))
            return True
        except Exception:
            return True

    def _get_notify_targets(kind: str) -> list[str]:
        try:
            raw = getattr(store, "notify_services", None)
            if isinstance(raw, list):
                targets = [str(x).strip() for x in raw if str(x).strip()]
            else:
                targets = []
            single = str(getattr(store, "notify_service", "") or "").strip()
            if single and single not in targets:
                targets.append(single)
            return [t for t in targets if _is_notify_enabled(t, kind)]
        except Exception:
            single = str(getattr(store, "notify_service", "") or "").strip()
            return [single] if single and _is_notify_enabled(single, kind) else []

    # Services
    async def _notify_task_completed(task_id: str):
        try:
            targets = _get_notify_targets("task_complete")
            if not targets:
                return

            task = next((t for t in store.tasks if t.id == task_id), None)
            if not task:
                return

            child_name = None
            try:
                if task.assigned_to:
                    child_name = next((c.name for c in store.children if c.id == task.assigned_to), None)
            except Exception:
                child_name = None

            texts = _get_notify_texts()
            title = "Chores4Kids"
            who = child_name or texts["child"]
            dt = _format_dt(dt_util.utcnow())
            message = str(texts["message"]).format(who=who, title=task.title, dt=dt)
            tag = f"chores4kids_task_done_{task_id}"
            data = {"tag": tag}

            if not getattr(task, "skip_approval", False):
                approve_label = texts["approve"]
                reassign_label = texts["reassign"]
                data["actions"] = [
                    {"action": f"C4K_APPROVE_{task_id}", "title": approve_label},
                    {"action": f"C4K_REASSIGN_{task_id}", "title": reassign_label},
                ]

            for svc in targets:
                domain = "notify"
                service = svc
                if svc.startswith("notify."):
                    service = svc.split(".", 1)[1]

                if not hass.services.has_service(domain, service):
                    _LOGGER.warning("%s: notify service %s.%s not found", DOMAIN, domain, service)
                    continue

                await hass.services.async_call(
                    domain,
                    service,
                    {"title": title, "message": message, "data": data},
                    blocking=False,
                )
        except Exception:
            _LOGGER.debug("%s: notification failed", DOMAIN, exc_info=True)

    async def _notify_shop_purchase(purchase):
        try:
            targets = _get_notify_targets("shop_purchase")
            if not targets:
                return

            texts = _get_notify_texts()
            title = "Chores4Kids"
            who = str(getattr(purchase, "child_name", "") or texts["child"])
            item = str(getattr(purchase, "title", "") or "")
            price = int(getattr(purchase, "price", 0) or 0)
            ts_raw = getattr(purchase, "ts", None)
            ts = dt_util.parse_datetime(str(ts_raw)) if ts_raw else None
            dt = _format_dt(ts or dt_util.utcnow())
            message = str(texts["purchase"]).format(who=who, item=item, price=price, dt=dt)
            data = {"tag": "chores4kids_shop_purchase"}

            for svc in targets:
                domain = "notify"
                service = svc
                if svc.startswith("notify."):
                    service = svc.split(".", 1)[1]

                if not hass.services.has_service(domain, service):
                    _LOGGER.warning("%s: notify service %s.%s not found", DOMAIN, domain, service)
                    continue

                payload = {"title": title, "message": message, "data": data}
                if _is_notify_enabled(svc, "shop_image"):
                    img = _resolve_notify_image_url(getattr(purchase, "image", "") or "")
                    if img:
                        payload["data"] = {**data, "image": img}
                await hass.services.async_call(
                    domain,
                    service,
                    payload,
                    blocking=False,
                )
        except Exception:
            _LOGGER.debug("%s: purchase notification failed", DOMAIN, exc_info=True)

    async def _handle_mobile_app_action(event):
        try:
            action = str(event.data.get("action") or "")
            if action.startswith("C4K_APPROVE_"):
                task_id = action.split("C4K_APPROVE_", 1)[1].strip()
                if not task_id:
                    return
                await store.approve_task(task_id)
            elif action.startswith("C4K_REASSIGN_"):
                task_id = action.split("C4K_REASSIGN_", 1)[1].strip()
                if not task_id:
                    return
                await store.set_task_status(task_id, "assigned")
            else:
                return
            async_dispatcher_send(hass, SIGNAL_DATA_UPDATED)
        except Exception:
            _LOGGER.debug("%s: notification action failed", DOMAIN, exc_info=True)

    hass.data[DOMAIN]["notify_action_unsub"] = hass.bus.async_listen(
        "mobile_app_notification_action", _handle_mobile_app_action
    )

    async def svc_add_child(call: ServiceCall):
        await store.add_child(call.data["name"])
        async_dispatcher_send(hass, SIGNAL_CHILDREN_UPDATED)
        async_dispatcher_send(hass, SIGNAL_DATA_UPDATED)

    async def svc_rename_child(call: ServiceCall):
        await store.rename_child(call.data["child_id"], call.data["new_name"])
        async_dispatcher_send(hass, SIGNAL_CHILDREN_UPDATED)
        async_dispatcher_send(hass, SIGNAL_DATA_UPDATED)

    async def svc_remove_child(call: ServiceCall):
        await store.remove_child(call.data["child_id"])
        async_dispatcher_send(hass, SIGNAL_CHILDREN_UPDATED)
        async_dispatcher_send(hass, SIGNAL_DATA_UPDATED)

    async def svc_add_task(call: ServiceCall):
        await store.add_task(
            title=call.data["title"],
            points=int(call.data["points"]),
            description=call.data.get("description", ""),
            due=call.data.get("due"),
            early_bonus_enabled=call.data.get("early_bonus_enabled"),
            early_bonus_days=call.data.get("early_bonus_days"),
            early_bonus_points=call.data.get("early_bonus_points"),
            assigned_to=call.data.get("child_id"),
            repeat_days=call.data.get("repeat_days"),
            repeat_child_id=call.data.get("repeat_child_id"),
            repeat_child_ids=call.data.get("repeat_child_ids"),
            icon=call.data.get("icon"),
            persist_until_completed=call.data.get("persist_until_completed"),
            quick_complete=call.data.get("quick_complete"),
            skip_approval=call.data.get("skip_approval"),
            categories=call.data.get("categories"),
            fastest_wins=call.data.get("fastest_wins"),
            schedule_mode=call.data.get("schedule_mode"),
            mark_overdue=call.data.get("mark_overdue"),
        )
        async_dispatcher_send(hass, SIGNAL_DATA_UPDATED)

    async def svc_assign_task(call: ServiceCall):
        await store.assign_task(call.data["task_id"], call.data["child_id"])
        async_dispatcher_send(hass, SIGNAL_DATA_UPDATED)

    async def svc_set_task_status(call: ServiceCall):
        await store.set_task_status(
            call.data["task_id"], 
            call.data["status"],
            call.data.get("completed_ts")
        )
        if call.data.get("status") == "awaiting_approval":
            await _notify_task_completed(call.data["task_id"])
        async_dispatcher_send(hass, SIGNAL_DATA_UPDATED)

    async def svc_approve_task(call: ServiceCall):
        await store.approve_task(call.data["task_id"])
        async_dispatcher_send(hass, SIGNAL_DATA_UPDATED)

    async def svc_delete_task(call: ServiceCall):
        await store.delete_task(call.data["task_id"])
        async_dispatcher_send(hass, SIGNAL_DATA_UPDATED)

    async def svc_update_task(call: ServiceCall):
        await store.update_task(
            task_id=call.data["task_id"],
            title=call.data.get("title"),
            points=(int(call.data["points"]) if "points" in call.data else None),
            description=call.data.get("description"),
            due=call.data.get("due"),
            early_bonus_enabled=call.data.get("early_bonus_enabled"),
            early_bonus_days=call.data.get("early_bonus_days"),
            early_bonus_points=call.data.get("early_bonus_points"),
            icon=call.data.get("icon"),
            persist_until_completed=call.data.get("persist_until_completed"),
            quick_complete=call.data.get("quick_complete"),
            skip_approval=call.data.get("skip_approval"),
            categories=call.data.get("categories"),
            fastest_wins=call.data.get("fastest_wins"),
            mark_overdue=call.data.get("mark_overdue"),
        )
        async_dispatcher_send(hass, SIGNAL_DATA_UPDATED)

    async def svc_reset_points(call: ServiceCall):
        await store.reset_points(call.data.get("child_id"))
        async_dispatcher_send(hass, SIGNAL_DATA_UPDATED)

    async def svc_add_points(call: ServiceCall):
        await store.add_points(call.data["child_id"], int(call.data.get("points", 0)))
        async_dispatcher_send(hass, SIGNAL_DATA_UPDATED)

    async def svc_set_task_repeat(call: ServiceCall):
        await store.set_task_repeat(
            call.data["task_id"],
            call.data.get("repeat_days"),
            call.data.get("repeat_child_id"),
            call.data.get("repeat_child_ids"),
            call.data.get("schedule_mode"),
        )
        async_dispatcher_send(hass, SIGNAL_DATA_UPDATED)

    async def svc_set_task_icon(call: ServiceCall):
        await store.set_task_icon(call.data["task_id"], call.data.get("icon"))
        async_dispatcher_send(hass, SIGNAL_DATA_UPDATED)

    # Shop services
    async def svc_add_shop_item(call: ServiceCall):
        await store.add_shop_item(
            title=call.data["title"],
            price=int(call.data["price"]),
            icon=call.data.get("icon"),
            image=call.data.get("image"),
            active=bool(call.data.get("active", True)),
            actions=call.data.get("actions"),
        )
        async_dispatcher_send(hass, SIGNAL_DATA_UPDATED)

    async def svc_update_shop_item(call: ServiceCall):
        await store.update_shop_item(
            item_id=call.data["item_id"],
            title=call.data.get("title"),
            price=(int(call.data["price"]) if "price" in call.data else None),
            icon=call.data.get("icon"),
            image=call.data.get("image"),
            active=call.data.get("active"),
            actions=call.data.get("actions"),
        )
        async_dispatcher_send(hass, SIGNAL_DATA_UPDATED)

    async def svc_delete_shop_item(call: ServiceCall):
        await store.delete_shop_item(call.data["item_id"])
        async_dispatcher_send(hass, SIGNAL_DATA_UPDATED)

    async def svc_buy_shop_item(call: ServiceCall):
        pur = await store.buy_shop_item(call.data["child_id"], call.data["item_id"])
        await _notify_shop_purchase(pur)
        async_dispatcher_send(hass, SIGNAL_DATA_UPDATED)

    async def svc_clear_shop_history(call: ServiceCall):
        # Optional: clear for specific child_id
        await store.clear_shop_history(call.data.get("child_id"))
        async_dispatcher_send(hass, SIGNAL_DATA_UPDATED)

    hass.services.async_register(DOMAIN, "add_child", svc_add_child)
    hass.services.async_register(DOMAIN, "rename_child", svc_rename_child)
    hass.services.async_register(DOMAIN, "remove_child", svc_remove_child)
    hass.services.async_register(DOMAIN, "add_task", svc_add_task)
    hass.services.async_register(DOMAIN, "assign_task", svc_assign_task)
    hass.services.async_register(DOMAIN, "set_task_status", svc_set_task_status)
    hass.services.async_register(DOMAIN, "approve_task", svc_approve_task)
    hass.services.async_register(DOMAIN, "delete_task", svc_delete_task)
    hass.services.async_register(DOMAIN, "update_task", svc_update_task)
    hass.services.async_register(DOMAIN, "reset_points", svc_reset_points)
    hass.services.async_register(DOMAIN, "add_points", svc_add_points)
    hass.services.async_register(DOMAIN, "set_task_repeat", svc_set_task_repeat)
    hass.services.async_register(DOMAIN, "set_task_icon", svc_set_task_icon)
    # Categories
    async def svc_add_category(call: ServiceCall):
        await store.add_category(call.data["name"], call.data.get("color", ""))
        async_dispatcher_send(hass, SIGNAL_DATA_UPDATED)

    async def svc_rename_category(call: ServiceCall):
        await store.rename_category(call.data["category_id"], call.data["new_name"])
        async_dispatcher_send(hass, SIGNAL_DATA_UPDATED)

    async def svc_delete_category(call: ServiceCall):
        await store.delete_category(call.data["category_id"])
        async_dispatcher_send(hass, SIGNAL_DATA_UPDATED)

    async def svc_set_category_color(call: ServiceCall):
        await store.set_category_color(call.data["category_id"], call.data.get("color", ""))
        async_dispatcher_send(hass, SIGNAL_DATA_UPDATED)

    hass.services.async_register(DOMAIN, "add_category", svc_add_category)
    hass.services.async_register(DOMAIN, "rename_category", svc_rename_category)
    hass.services.async_register(DOMAIN, "delete_category", svc_delete_category)
    hass.services.async_register(DOMAIN, "set_category_color", svc_set_category_color)
    # Shop
    hass.services.async_register(DOMAIN, "add_shop_item", svc_add_shop_item)
    hass.services.async_register(DOMAIN, "update_shop_item", svc_update_shop_item)
    hass.services.async_register(DOMAIN, "delete_shop_item", svc_delete_shop_item)
    hass.services.async_register(DOMAIN, "buy_shop_item", svc_buy_shop_item)
    hass.services.async_register(DOMAIN, "clear_shop_history", svc_clear_shop_history)
    # Backwards/alias
    hass.services.async_register(DOMAIN, "reset_shop_history", svc_clear_shop_history)

    # Upload images for shop items into /config/www/chores4kids
    async def svc_upload_shop_image(call: ServiceCall):
        import os, base64, re
        rel_dir = hass.config.path('www', 'chores4kids')
        os.makedirs(rel_dir, exist_ok=True)
        filename = call.data.get('filename') or 'upload.bin'
        # sanitize filename
        filename = re.sub(r'[^a-zA-Z0-9._-]+', '_', filename)
        data = call.data.get('data') or ''
        if ',' in data:
            data = data.split(',',1)[1]
        try:
            raw = base64.b64decode(data)
        except Exception:
            raise ValueError('invalid_base64')
        path = os.path.join(rel_dir, filename)
        def _write():
            with open(path, 'wb') as f:
                f.write(raw)
        await hass.async_add_executor_job(_write)
        async_dispatcher_send(hass, SIGNAL_DATA_UPDATED)

    hass.services.async_register(DOMAIN, 'upload_shop_image', svc_upload_shop_image)

    async def svc_delete_uploaded_file(call: ServiceCall):
        """Delete a previously uploaded file from /config/www/chores4kids.

        Safety: only allows deleting a single filename (no paths) after sanitization.
        """
        import os, re
        rel_dir = hass.config.path('www', 'chores4kids')
        os.makedirs(rel_dir, exist_ok=True)
        filename = call.data.get('filename') or ''
        filename = re.sub(r'[^a-zA-Z0-9._-]+', '_', filename)
        if not filename or '/' in filename or '\\' in filename or filename.startswith('.'):
            raise ValueError('invalid_filename')
        path = os.path.join(rel_dir, filename)

        def _remove():
            if not os.path.exists(path):
                return False
            try:
                os.remove(path)
                return True
            except Exception as ex:
                # surface error to caller
                raise ex

        try:
            removed = await hass.async_add_executor_job(_remove)
            _LOGGER.info("delete_uploaded_file: filename=%s removed=%s", filename, removed)
        except Exception as ex:
            _LOGGER.exception("delete_uploaded_file failed for %s", filename)
            raise ValueError('delete_failed') from ex
        async_dispatcher_send(hass, SIGNAL_DATA_UPDATED)

    hass.services.async_register(DOMAIN, 'delete_uploaded_file', svc_delete_uploaded_file)

    async def svc_delete_completion_sound(call: ServiceCall):
        """Delete completion sound files from /config/www/chores4kids.

        Deletes legacy and current filenames like:
        - completion.mp3 / completion.wav / completion.ogg / completion.m4a / completion.aac
        - completion_<timestamp>.<ext>
        """
        import os, re
        rel_dir = hass.config.path('www', 'chores4kids')
        os.makedirs(rel_dir, exist_ok=True)
        pattern = re.compile(r'^completion(_\d+)?\.(mp3|wav|ogg|m4a|aac)$', re.IGNORECASE)

        def _remove_all():
            matched = 0
            removed = 0
            errors: list[str] = []
            for name in os.listdir(rel_dir):
                if not pattern.match(name):
                    continue
                matched += 1
                try:
                    os.remove(os.path.join(rel_dir, name))
                    removed += 1
                except Exception as ex:
                    errors.append(f"{name}: {type(ex).__name__}")
            return matched, removed, errors

        try:
            matched, removed, errors = await hass.async_add_executor_job(_remove_all)
            _LOGGER.info(
                "delete_completion_sound: matched=%s removed=%s errors=%s", matched, removed, errors
            )
            if matched > 0 and removed == 0:
                raise ValueError('delete_failed')
        except FileNotFoundError:
            _LOGGER.info("delete_completion_sound: directory missing")
        except Exception as ex:
            _LOGGER.exception("delete_completion_sound failed")
            raise
        async_dispatcher_send(hass, SIGNAL_DATA_UPDATED)

    hass.services.async_register(DOMAIN, 'delete_completion_sound', svc_delete_completion_sound)

    async def svc_debug_mark_overdue(call: ServiceCall):
        """DEBUG: Manually mark a task as overdue for testing."""
        task_id = call.data["task_id"]
        task = None
        for t in store.tasks:
            if t.id == task_id:
                task = t
                break
        if task:
            task.carried_over = True
            await store.async_save()
            async_dispatcher_send(hass, SIGNAL_DATA_UPDATED)

    hass.services.async_register(DOMAIN, 'debug_mark_overdue', svc_debug_mark_overdue)

    # Global UI colors (shared across devices/users)
    async def svc_set_ui_colors(call: ServiceCall):
        await store.set_ui_colors(
            start_task_bg=call.data.get("start_task_bg"),
            complete_task_bg=call.data.get("complete_task_bg"),
            kid_points_bg=call.data.get("kid_points_bg"),
            start_task_text=call.data.get("start_task_text"),
            complete_task_text=call.data.get("complete_task_text"),
            kid_points_text=call.data.get("kid_points_text"),
            task_done_bg=call.data.get("task_done_bg"),
            task_done_text=call.data.get("task_done_text"),
            task_points_bg=call.data.get("task_points_bg"),
            task_points_text=call.data.get("task_points_text"),
            kid_task_title_size=call.data.get("kid_task_title_size"),
            kid_task_points_size=call.data.get("kid_task_points_size"),
            kid_task_button_size=call.data.get("kid_task_button_size"),
            enable_points=call.data.get("enable_points"),
            confetti_enabled=call.data.get("confetti_enabled"),
            notify_service=call.data.get("notify_service"),
            notify_services=call.data.get("notify_services"),
            notify_service_settings=call.data.get("notify_service_settings"),
        )
        async_dispatcher_send(hass, SIGNAL_DATA_UPDATED)

    hass.services.async_register(DOMAIN, "set_ui_colors", svc_set_ui_colors)

    async def svc_purge_orphans(call: ServiceCall):
        """Fjern forældreløse entiteter/devices fra tidligere versioner."""
        registry = er.async_get(hass)
        dev_registry = dr.async_get(hass)
        child_ids = {c.id for c in store.children}

        removed = []
        # Gå alle entiteter for denne config entry igennem
        reg_entries = er.async_entries_for_config_entry(registry, entry.entry_id)
        for e in reg_entries:
            if e.platform != Platform.SENSOR:
                continue
            uid = e.unique_id or ""
            if uid.startswith("chores4kids_points_"):
                suffix = uid.replace("chores4kids_points_", "")
                # hvis suffix ikke er nuværende child_id, fjern entiteten
                if suffix not in child_ids:
                    device_id = e.device_id
                    registry.async_remove(e.entity_id)
                    removed.append(e.entity_id)
                    if device_id:
                        device = dev_registry.async_get(device_id)
                        if device and not [x for x in registry.entities.values() if x.device_id == device_id]:
                            dev_registry.async_remove_device(device_id)
                    continue

                # Ellers: sørg for at entiteten er knyttet til korrekt device baseret på child_id
                desired_ident = (DOMAIN, f"child_{suffix}")
                desired = dev_registry.async_get_device(identifiers={desired_ident})
                if desired is None:
                    desired = dev_registry.async_get_or_create(
                        config_entry_id=entry.entry_id,
                        identifiers={desired_ident},
                        manufacturer="Chores4Kids",
                        model="Virtual Child",
                        name=f"Chores4Kids – {suffix}",
                    )
                if e.device_id != desired.id:
                    registry.async_update_entity(e.entity_id, device_id=desired.id)

        # Tving sensorer til at opdatere state efter oprydning
        async_dispatcher_send(hass, SIGNAL_DATA_UPDATED)
        async_dispatcher_send(hass, SIGNAL_CHILDREN_UPDATED)

        # Fjern resterende tomme devices knyttet til denne integration
        for device in list(dev_registry.devices.values()):
            if entry.entry_id not in device.config_entries:
                continue
            has_entities = any(x.device_id == device.id for x in registry.entities.values())
            if not has_entities:
                dev_registry.async_remove_device(device.id)

    hass.services.async_register(DOMAIN, "purge_orphans", svc_purge_orphans)

    # Schedule midnight rollover and run once on startup
    async def _midnight_cb(now):
        await store.daily_rollover()
        async_dispatcher_send(hass, SIGNAL_DATA_UPDATED)

    async_track_time_change(hass, _midnight_cb, hour=0, minute=0, second=0)
    hass.async_create_task(store.daily_rollover())

    return True


async def async_unload_entry(hass: HomeAssistant, entry: ConfigEntry) -> bool:
    unload_ok = await hass.config_entries.async_unload_platforms(entry, PLATFORMS)
    if unload_ok:
        unsub = hass.data.get(DOMAIN, {}).pop("notify_action_unsub", None)
        if unsub:
            try:
                unsub()
            except Exception:
                _LOGGER.debug("%s: notify action unsubscribe failed", DOMAIN, exc_info=True)
        hass.data.pop(DOMAIN, None)
    return unload_ok
