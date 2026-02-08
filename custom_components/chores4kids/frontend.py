from __future__ import annotations

import hashlib
import logging
import shutil
from pathlib import Path
from uuid import uuid4

from homeassistant.core import HomeAssistant  # type: ignore[reportMissingImports]
from homeassistant.helpers.storage import Store  # type: ignore[reportMissingImports]
from homeassistant.helpers.event import async_call_later  # type: ignore[reportMissingImports]

_LOGGER = logging.getLogger(__name__)

# The JS file shipped with this integration under ./www/
JS_FILENAME = "chores4kids-card.js"

# Where Home Assistant serves files from config/www/ as /local/
RESOURCE_URL = f"/local/{JS_FILENAME}"
RESOURCE_TYPE = "module"  # modern custom cards should be loaded as ES modules


def _strip_query(url: str) -> str:
    try:
        return str(url).split("?", 1)[0]
    except Exception:
        return str(url)


def _token_from_hash(sha_hex: str) -> str:
    """Make a stable, numeric-ish token (similar vibe to HACS hacstag)."""
    try:
        # 48-bit is plenty; keeps token reasonably short and numeric.
        return str(int(sha_hex[:12], 16))
    except Exception:
        return sha_hex[:12] or "0"


def _get_lovelace_resources(hass: HomeAssistant):
    """Return the Lovelace ResourceStorageCollection when in storage mode, else None."""
    try:
        lovelace_data = hass.data.get("lovelace")
        if lovelace_data is None:
            return None

        resources = None
        if hasattr(lovelace_data, "resources"):
            resources = lovelace_data.resources
        elif isinstance(lovelace_data, dict):
            resources = lovelace_data.get("resources")

        if resources is None:
            return None

        # YAML mode: store is missing/None.
        if not hasattr(resources, "store") or resources.store is None:
            return None

        # Basic capability check.
        for attr in ("async_items", "async_create_item", "async_update_item"):
            if not hasattr(resources, attr):
                return None

        return resources
    except Exception:
        return None


def _sha256(path: Path) -> str:
    h = hashlib.sha256()
    with path.open("rb") as f:
        for chunk in iter(lambda: f.read(1024 * 256), b""):
            h.update(chunk)
    return h.hexdigest()


async def ensure_frontend(hass: HomeAssistant) -> None:
    """Best-effort:

    1) Copy bundled JS from the integration package to /config/www/
    2) Register the JS as a Lovelace resource (storage mode)

    This is intentionally best-effort: failures must not block the integration
    (and must not break config flow loading).
    """
    try:
        await _ensure_js_in_www(hass)
    except Exception:
        _LOGGER.debug("ensure_frontend: failed copying JS to /config/www", exc_info=True)

    try:
        await _ensure_lovelace_resource_retry(hass, attempts_left=6)
    except Exception:
        _LOGGER.debug("ensure_frontend: failed registering Lovelace resource", exc_info=True)


async def _ensure_lovelace_resource_retry(hass: HomeAssistant, attempts_left: int) -> None:
    """Retry resource registration if Lovelace isn't fully ready yet."""
    if attempts_left <= 0:
        return

    resources = _get_lovelace_resources(hass)
    if resources is None:
        async_call_later(
            hass,
            5,
            lambda _now: hass.async_create_task(
                _ensure_lovelace_resource_retry(hass, attempts_left - 1)
            ),
        )
        return

    await _ensure_lovelace_resource(hass)


async def _ensure_js_in_www(hass: HomeAssistant) -> None:
    src = Path(__file__).parent / "www" / JS_FILENAME
    dst = Path(hass.config.path("www", JS_FILENAME))

    if not src.exists():
        # If the file isn't shipped, do nothing.
        _LOGGER.debug("ensure_frontend: bundled JS not found at %s", src)
        return

    dst.parent.mkdir(parents=True, exist_ok=True)

    # Copy only if missing or changed
    if dst.exists():
        try:
            if _sha256(src) == _sha256(dst):
                return
        except Exception:
            # If hashing fails for any reason, overwrite.
            pass

    await hass.async_add_executor_job(shutil.copyfile, src, dst)


async def _ensure_lovelace_resource(hass: HomeAssistant) -> None:
    """Add/update /local/... as a Lovelace resource (storage mode) with cache-busting."""

    # Prefer HA's resource collection API (what the UI uses).
    resources = _get_lovelace_resources(hass)
    if resources is not None:
        if not getattr(resources, "loaded", True):
            await resources.async_load()

        deployed = Path(hass.config.path("www", JS_FILENAME))
        token = "0"
        if deployed.exists():
            try:
                token = _token_from_hash(_sha256(deployed))
            except Exception:
                token = "0"
        url = f"{RESOURCE_URL}?v={token}"

        matches = []
        for entry in resources.async_items():
            try:
                if _strip_query(entry.get("url", "")) == RESOURCE_URL:
                    matches.append(entry)
            except Exception:
                continue

        if matches:
            entry = matches[0]
            entry_url = str(entry.get("url", ""))
            if entry_url != url or entry.get("res_type") != RESOURCE_TYPE:
                await resources.async_update_item(
                    entry["id"],
                    {"res_type": RESOURCE_TYPE, "url": url},
                )
                _LOGGER.info("Updated Lovelace resource: %s", url)

            # Remove duplicates (keep first)
            for dup in matches[1:]:
                try:
                    await resources.async_delete_item(dup["id"])
                except Exception:
                    pass
            return

        await resources.async_create_item({"res_type": RESOURCE_TYPE, "url": url})
        _LOGGER.info("Added Lovelace resource: %s", url)
        return

    # Fallback: older setups / YAML mode. This may not show up in the UI, but keep it
    # as a best-effort compatibility path.
    try:
        from homeassistant.components.lovelace.resources import (  # type: ignore[reportMissingImports]
            STORAGE_KEY,
            STORAGE_VERSION,
        )

        store = Store(hass, STORAGE_VERSION, STORAGE_KEY)
    except Exception:
        store = Store(hass, 1, "lovelace.resources")

    resources = await store.async_load()
    if resources is None:
        resources = []

    # Some older / custom setups could theoretically store dicts; keep it safe.
    if isinstance(resources, dict):
        resources = resources.get("resources", [])

    deployed = Path(hass.config.path("www", JS_FILENAME))
    token = "0"
    if deployed.exists():
        try:
            token = _token_from_hash(_sha256(deployed))
        except Exception:
            token = "0"
    url = f"{RESOURCE_URL}?v={token}"

    for r in resources:
        if isinstance(r, dict) and _strip_query(r.get("url", "")) == RESOURCE_URL:
            if r.get("url") != url or r.get("type") != RESOURCE_TYPE:
                r["url"] = url
                r["type"] = RESOURCE_TYPE
                await store.async_save(resources)
                _LOGGER.info("Updated Lovelace resource (fallback): %s", url)
            return

    resources.append(
        {
            "id": str(uuid4()),
            "type": RESOURCE_TYPE,
            "url": url,
        }
    )

    await store.async_save(resources)
    _LOGGER.info("Added Lovelace resource (fallback): %s", url)
