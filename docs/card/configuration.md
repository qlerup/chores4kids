# Card configuration

Add **Chores4Kids** in the dashboard card editor. Use a separate card for each view.

| Option | What it controls |
| --- | --- |
| `mode: admin` | Manage children, categories, chores, approvals and rewards. The parent editor also exposes shared appearance and notification settings. |
| `admin_sections` | Choose the sections shown on this parent card. Omit to use the full parent view. See [parent widgets](features/parent-widgets.md). |
| `mode: kid` | Show the selected child’s chores, balance and shop. Set `child` to the child’s name. |
| `mode: overview` | Show recent tasks on a separate dashboard card. |
| `language` | Follow the viewer’s Home Assistant profile with `auto` or save one language on this card. |
| `show_scoreboard` | Show or hide the ranking on the parent card when points are enabled. |
| `debug_mode` | Expose testing controls such as manually marking a task overdue. |

Use the parent editor for shared colors, task icons, points, notifications and completion feedback. For copyable dashboard configurations see [card examples](examples.md).
