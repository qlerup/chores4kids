# Integration actions

In **Developer tools → Actions**, search for `chores4kids`. Find child and task IDs in the [integration sensors](entities.md).

## Approve a specific completion

```yaml
action: chores4kids.approve_task
data:
  task_id: "<assigned task instance ID>"
```

Approval awards points once for the occurrence. You can also use `set_task_status` with `status: approved`. For a repeating template, provide the template ID together with `child_id` when exactly one active copy matches. If several copies match, select the individual instance ID.

## Create an everyday chore

```yaml
action: chores4kids.add_task
data:
  title: Empty the dishwasher
  points: 5
  child_id: "<child ID>"
  multiple_per_day: true
```

## Read activity history

Use `chores4kids.get_activity_history` to read completions within inclusive local dates. Omit both dates for the last seven days. The response contains `start`, `end` and `entries`. Each entry includes the task and child IDs, their display names, completion timestamp in milliseconds, local day, status, awarded points and any bonus task title.

```yaml
action: chores4kids.get_activity_history
data:
  start: "2026-11-14"
  end: "2026-11-20"
response_variable: family_activity
```

## Action directory

All names below use the `chores4kids.` prefix.

| Area | Actions |
| --- | --- |
| Children and points | `add_child`, `rename_child`, `remove_child`, `add_points`, `reset_points` |
| Tasks | `add_task`, `update_task`, `delete_task`, `assign_task`, `set_task_status`, `approve_task`, `complete_bonus_task`, `approve_bonus_task`, `set_task_repeat`, `set_task_icon` |
| Categories | `add_category`, `rename_category`, `delete_category`, `set_category_color`, `reorder_categories` |
| Shop | `add_shop_item`, `update_shop_item`, `delete_shop_item`, `buy_shop_item`, `mark_purchase_delivered`, `clear_shop_history` (also available as `reset_shop_history`) |
| Shared settings and files | `set_ui_colors`, `upload_task_icon`, `upload_shop_image`, `delete_uploaded_file`, `delete_completion_sound` |
| Maintenance and testing | `force_rollover`, `debug_mark_overdue`, `purge_orphans` |

## Choose a reward’s audience

Pass `child_ids` to `chores4kids.add_shop_item` or `chores4kids.update_shop_item` with the list of child IDs allowed to buy the reward. An empty list makes the item available to all children. Omitting the field on an update preserves the current selection.

## Record a reward delivery

Pass `requires_delivery: true` to `chores4kids.add_shop_item` or `chores4kids.update_shop_item` to track future purchases of that reward. Use `chores4kids.mark_purchase_delivered` with the `purchase_id` from the shop sensor’s `purchases` list (the entry’s `id`). Repeating the action preserves the original delivery time. The shop sensor exposes `requires_delivery`, `delivered` and `delivered_at` per purchase.
