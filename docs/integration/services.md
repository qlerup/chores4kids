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

## Action directory

All names below use the `chores4kids.` prefix.

| Area | Actions |
| --- | --- |
| Children and points | `add_child`, `rename_child`, `remove_child`, `add_points`, `reset_points` |
| Tasks | `add_task`, `update_task`, `delete_task`, `assign_task`, `set_task_status`, `approve_task`, `complete_bonus_task`, `approve_bonus_task`, `set_task_repeat`, `set_task_icon` |
| Categories | `add_category`, `rename_category`, `delete_category`, `set_category_color`, `reorder_categories` |
| Shop | `add_shop_item`, `update_shop_item`, `delete_shop_item`, `buy_shop_item`, `clear_shop_history` (also available as `reset_shop_history`) |
| Shared settings and files | `set_ui_colors`, `upload_task_icon`, `upload_shop_image`, `delete_uploaded_file`, `delete_completion_sound` |
| Maintenance and testing | `force_rollover`, `debug_mark_overdue`, `purge_orphans` |
