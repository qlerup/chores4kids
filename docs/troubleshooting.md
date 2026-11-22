# Troubleshooting

## The card is missing or still shows older controls

Confirm Chores4Kids is configured under **Settings → Devices & services**. After upgrading, restart Home Assistant and fully reload the dashboard on each device. The integration copies the bundled JavaScript file to `/local/chores4kids-card.js`. Storage-mode dashboards register the resource automatically. For YAML resources, keep a single JavaScript module entry for that URL. Remove any older standalone card resource that registers the same card.

## A child or task is missing

Create the child on the parent card first. In the child card editor, select that name. Check that the task is assigned to that child and that a scheduled task is due on the expected day. The template alone appears in the parent's task list.

## The shop is empty or an image is missing

Check that points are enabled, the item is active and its image is accessible on the child’s device. Shop images use `/local/chores4kids/<filename>`. For a task icon from a third-party pack, check the pack in Home Assistant or [upload the artwork directly](card/features/appearance.md).

## Yesterday’s completed task has disappeared

The daily rollover cleans up older approved task instances. **Finished tasks** shows the retained tasks. A completion still awaiting approval survives rollover. The reward shop has a separate purchase history.

## An automation finds several copies of a task

Use the assigned instance ID from the child sensor, especially if the chore allows multiple completions per day. See [approve a specific completion](integration/services.md#approve-a-specific-completion).

## Old entities remain after an upgrade

Review your entities under the integration. The maintenance action `chores4kids.purge_orphans` cleans up leftover registry entries associated with the integration.
