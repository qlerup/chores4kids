# Installation

## Install with HACS

1. [Open Chores4Kids in HACS](https://my.home-assistant.io/redirect/hacs_repository/?owner=qlerup&repository=chores4kids). If it does not appear in search, open **HACS → Custom repositories** and add `https://github.com/qlerup/chores4kids` with type **Integration**.
2. Download **Chores4Kids** and restart Home Assistant.
3. Open **Settings → Devices & services → Add integration**, search for **Chores4Kids** and submit the setup form.
4. Edit a dashboard and add the Chores4Kids card. Continue with the [quick start](quick-start.md).

## Dashboard resource

The integration places the bundled module at `/local/chores4kids-card.js` and registers it on storage-mode dashboards. If you manage dashboard resources in YAML, add that URL once with type `module` and reload the dashboard. If the editor still cannot find the card, see [resource troubleshooting](../troubleshooting.md).

## Upgrade from the separate card and integration

Remove the old standalone HACS entries, install the bundled integration, then restart Home Assistant. Check dashboard resources for duplicate copies of the card and reload any open dashboards.
