import { LitElement, html, css } from "https://unpkg.com/lit?module";

// Unified i18n (admin + child keys)
const C4K_I18N = {
	en: {
		// Shared/admin
		'overview.title': 'Assigned tasks',
		'overview.finished_title': 'Finished tasks',
		'overview.show_all': 'Show all ({pending} pending)',
		'overview.none_active': 'No active tasks right now.',
		'overview.none': 'No tasks yet.',
		'overview.finished_none': 'No finished tasks yet.',
		'card.admin_title': 'Chores4Kids – Parents',
		'input.new_child_name': 'New child — name',
			'input.new_category_name': 'New category — name',
		'btn.add_child': 'Add child',
			'btn.add_category': 'Add category',
		'section.children': 'Children',
			'section.categories': 'Categories',
		'th.name': 'Name', 'th.color': 'Color', 'th.points': 'Points', 'th.pending': 'Pending', 'th.actions': 'Actions', 'th.status':'Status', 'th.assign':'Assigned to',
		'th.categories':'Categories', 'th.completed':'Completed',
		'btn.rename': 'Rename', 'btn.delete': 'Delete',
		'section.new_task': 'Create Task',
			'ph.title': 'Title', 'ph.points': 'Points', 'ph.description': 'Description (optional)',
			'ph.due': 'Deadline (date)',
			'ph.early_bonus_days': 'Early bonus days',
			'ph.early_bonus_points': 'Early bonus points',
			'ui.early_bonus_enabled': 'Enable early completion bonus',
			'warn.repeat_overrides_due': 'Repeat is enabled, so the deadline is based on the selected weekdays instead of this date.',
			'warn.schedule_overrides_due': 'A schedule is enabled, so the deadline is based on the schedule instead of this date.',
			'schedule.weekly': 'Weekly task',
			'schedule.monthly': 'Monthly task',
			'ph.categories': 'Categories',
		'select.assign_child': 'Assign child',
			'select.categories': 'Select categories',
		'ph.icon': 'Icon (mdi:...)',
		'icon.choose': 'Choose icon', 'icon.clear': 'Clear icon', 'icon.none': 'None', 'icon.search': 'Search icon',
		'btn.create_task': 'Create task', 'btn.update_task': 'Update task', 'btn.edit': 'Edit', 'editor.loaded_task': 'Editing existing task',
		'section.unassigned': 'Unassigned tasks', 'btn.assign': 'Assign',
		'section.tasks_per_child': 'Tasks per child',
		'btn.start': 'Start', 'btn.back': 'Reassign', 'btn.awaiting': 'Awaiting', 'btn.approve': 'Approve', 'lbl.approved': 'Approved',
		'section.scoreboard': 'Scoreboard',
		'confirm.delete_child': 'Delete {name}?', 'confirm.delete_task': 'Delete task?',
		'alert.choose_child_first': 'Choose a child first',
		'ui.auto_recycle': 'Auto recycle approved tasks',
		'ui.quick_complete': 'One-tap completion',
		'ui.skip_approval': 'Skip parent approval',
			'ui.fastest_wins': 'Fastest wins (first child claims the task)',
		'ui.persist_until_done': 'Carry unfinished task to next day',
		'ui.persist_help': 'Unfinished task will automatically move to next day',
		'ui.mark_overdue': 'Mark unfinished task as overdue',
		'ui.toggle_off_on': 'Off/On',
		'section.tasks': 'Tasks',
		'form.save': 'Save', 'form.add':'Add', 'form.cancel':'Cancel', 'form.close':'Close', 'form.clear':'Clear',
		'repeat.label': 'Repeat', 'repeat.enable': 'Repeat task', 'repeat.auto_assign': 'Auto-assign (repeat)', 'repeat.save': 'Save plan',
		'repeat.days.mon':'Mon','repeat.days.tue':'Tue','repeat.days.wed':'Wed','repeat.days.thu':'Thu','repeat.days.fri':'Fri','repeat.days.sat':'Sat','repeat.days.sun':'Sun',
		'assign.disabled_auto': 'Disabled: auto-assign (repeat) is active',
		'assign.auto_to': 'Auto-assigned to {names}',
			'btn.add_points': 'Add points', 'btn.reset_points': 'Reset points',
			'sort.configure': 'Sorting', 'sort.title': 'Choose order', 'sort.categories_order': 'Categories order', 'sort.none': 'No category', 'sort.save': 'Save', 'sort.reset': 'Reset',
		'points.title': 'Add points to {name}', 'points.quick':'Quick add', 'points.remove':'Quick remove', 'points.custom':'Custom amount',
		'err.title_required':'Title is required','err.points_required':'Points are required','err.points_number':'Points must be a number','err.points_positive':'Points must be 0 or more',
		'status.assigned':'Assigned','status.in_progress':'In progress','status.awaiting_approval':'Awaiting approval','status.approved':'Approved','status.rejected':'Rejected','status.unassigned':'Unassigned','status.taken':'Taken',
		'status.overdue':'Overdue','overdue.reassign_prompt':'This task is also scheduled for today. Assign it again?','overdue.yes':'Yes, assign again','overdue.no':'No thanks',
		// Shop
		'shop.title':'Point shop','shop.open':'Open shop','shop.item':'Item','shop.price':'Price','shop.icon':'Icon','shop.image':'Image','shop.upload':'Upload image','shop.add_item':'Add item','shop.history':'Purchase history','shop.child':'Child','shop.when':'When','shop.date':'Date','shop.time':'Time','shop.advanced':'Advanced actions','shop.entity':'Entity','shop.operation':'Operation','shop.add_action':'Add action','shop.add_delay':'Add delay','shop.steps':'Steps','shop.seconds':'Seconds','shop.minutes':'Minutes','shop.hours':'Hours','shop.delay':'Delay','shop.active':'Active','shop.buy':'Buy','shop.clear_history':'Clear history','confirm.clear_history':'Clear all purchase history?',
		// Child specific
		'card.child_title_fallback': 'Chores4Kids – {name}',
		'msg.child_not_found': 'Child not found. Check the name in card configuration.',
		'msg.no_tasks': 'No tasks right now.',
			'btn.done': 'Done', 'btn.start_task': 'Start task', 'btn.complete_task': 'Complete task', 'btn.task_done': 'Task done',
			'lbl.awaiting':'Awaiting approval',
			'lbl.taken_by':'Task taken by {name}',
			'lbl.points': 'points',
			'section.daily_tasks': 'Today',
			'section.weekly_tasks': 'Weekly tasks',
			'lbl.deadline': 'Deadline: {date}',
			'lbl.early_bonus_by': '+{points} bonus points if done on {date} or before',
			// Editor UI
			'editor.mode':'Mode', 'editor.mode_admin':'Parents', 'editor.mode_kid':'Kid', 'editor.mode_overview':'Recent tasks',
			'editor.child_label':'Child', 'editor.child_placeholder':'Child name', 'editor.child_select_prompt':'— Select child —', 'editor.child_hint':'No children found yet — type the name manually.',
			'editor.developer_mode':'Developer Mode',
			'editor.developer_mode_help':'Shows debug controls like manual overdue marking',
			'editor.enable_points':'Points',
			'editor.enable_points_help':'Show points, point shop, and point actions',
			'editor.completion_sound':'Completion Sound',
			'editor.completion_sound_help':'Saved as /local/chores4kids/completion.<ext> and used across dashboards',
			'editor.delete_sound':'Delete sound file',
			'editor.delete_sound_confirm':'Delete the uploaded completion sound file?',
			'editor.delete_sound_failed':'Failed to delete sound file',
			'editor.confetti':'Confetti',
			'editor.confetti_help':'Show confetti animation on completion',
			'editor.notify_target':'Completion notification',
			'editor.notify_target_help':'Send a push notification when a child marks a task done.',
			'editor.notify_target_none':'Add person',
			'editor.notify_toggle_complete':'Notify on task completion',
			'editor.notify_toggle_shop':'Notify on shop purchase',
			'editor.notify_toggle_shop_image':'Show image in shop notification',
			'section.notifications':'Notifications',
			'editor.colors':'Colors',
			'editor.color_field_bg':'Background',
			'editor.color_field_text':'Text',
			'editor.color_group_start':'Start task button',
			'editor.color_group_complete':'Complete task button',
			'editor.color_group_kid_points':'Kids Total Points',
			'editor.color_group_task_points':'Task points',
			'editor.color_start_bg':'Start task button (background)',
			'editor.color_start_text':'Start task button (text)',
			'editor.color_complete_bg':'Complete task button (background)',
			'editor.color_complete_text':'Complete task button (text)',
			'editor.color_kid_points_bg':'Kids Total Points (background)',
			'editor.color_kid_points_text':'Kids Total Points (text)',
			'editor.color_task_points_bg':'Task points (background)',
			'editor.color_task_points_text':'Task points (text)',
			'editor.color_empty_default':'Empty = default'
	},
	da: {
		'overview.title': 'Tildelte opgaver',
		'overview.finished_title': 'Færdige opgaver',
		'overview.show_all': 'Vis alle ({pending} afventer)',
		'overview.none_active': 'Ingen aktive opgaver lige nu.',
		'overview.none': 'Ingen opgaver endnu.',
		'overview.finished_none': 'Ingen færdige opgaver endnu.',
		'card.admin_title': 'Chores4Kids – Forældre',
		'input.new_child_name': 'Nyt barn – navn',
			'input.new_category_name': 'Ny kategori – navn',
		'btn.add_child': 'Tilføj barn',
			'btn.add_category': 'Tilføj kategori',
		'section.children': 'Børn',
			'section.categories': 'Kategorier',
		'th.name': 'Navn', 'th.color': 'Farve', 'th.points': 'Point', 'th.pending': 'Ventende', 'th.actions': 'Handling', 'th.status':'Status', 'th.assign':'Tildelt til',
			'th.categories':'Kategorier', 'th.completed':'Fuldført',
		'btn.rename': 'Omdøb', 'btn.delete': 'Slet',
		'section.new_task': 'Ny opgave',
			'ph.title': 'Titel', 'ph.points': 'Point', 'ph.description': 'Beskrivelse (valgfri)',
			'ph.due': 'Deadline (dato)',
			'ph.early_bonus_days': 'Bonus dage før',
			'ph.early_bonus_points': 'Bonus point',
			'ui.early_bonus_enabled': 'Aktivér førtidig bonus',
			'warn.repeat_overrides_due': 'Gentagelse er slået til, så deadline beregnes ud fra de valgte ugedage i stedet for denne dato.',
			'warn.schedule_overrides_due': 'En plan er slået til, så deadline er baseret på planen i stedet for denne dato.',
			'schedule.weekly': 'Ugentlig opgave',
			'schedule.monthly': 'Månedlig opgave',
			'ph.categories': 'Kategorier',
		'select.assign_child': 'Tildel barn',
			'select.categories': 'Vælg kategorier',
		'ph.icon': 'Ikon (mdi:...)',
		'icon.choose': 'Vælg ikon', 'icon.clear': 'Fjern ikon', 'icon.none': 'Ingen', 'icon.search': 'Søg ikon',
		'btn.create_task': 'Opret opgave', 'btn.update_task': 'Opdatér opgave', 'btn.edit': 'Redigér', 'editor.loaded_task': 'Redigerer eksisterende opgave',
		'section.unassigned': 'Utildelte opgaver', 'btn.assign': 'Tildel',
		'section.tasks_per_child': 'Opgaver pr. barn',
		'btn.start': 'Start', 'btn.back': 'Gentildel', 'btn.awaiting': 'Afventer', 'btn.approve': 'Godkend', 'lbl.approved': 'Godkendt',
		'section.scoreboard': 'Scoreboard',
		'confirm.delete_child': 'Slet {name}?', 'confirm.delete_task': 'Slet opgave?',
		'alert.choose_child_first': 'Vælg et barn først',
		'ui.auto_recycle': 'Genopret automatisk efter godkendelse',
		'ui.quick_complete': 'Ét-tryk færdig',
		'ui.skip_approval': 'Spring forældre godkendelse over',
			'ui.fastest_wins': 'Hurtigst vinder (første barn tager opgaven)',
		'ui.persist_until_done': 'Flyt ufærdig opgave til næste dag',
		'ui.persist_help': 'Ufærdig opgave flyttes automatisk til næste dag',
		'ui.mark_overdue': 'Markér ufærdig opgave som forfalden',
		'ui.toggle_off_on': 'Fra/Til',
		'section.tasks': 'Opgaver',
		'form.save': 'Gem', 'form.add':'Tilføj', 'form.cancel':'Annullér', 'form.close':'Luk', 'form.clear':'Ryd',
		'repeat.label': 'Gentagelse', 'repeat.enable': 'Gentag opgave', 'repeat.auto_assign': 'Auto-tildel (gentagelse)', 'repeat.save': 'Gem plan',
		'repeat.days.mon':'Man','repeat.days.tue':'Tir','repeat.days.wed':'Ons','repeat.days.thu':'Tor','repeat.days.fri':'Fre','repeat.days.sat':'Lør','repeat.days.sun':'Søn',
		'assign.disabled_auto': 'Deaktiveret: auto-tildeling (gentagelse) er aktiv',
		'assign.auto_to': 'Auto-tildelt til {names}',
		'btn.add_points': 'Tilføj point', 'btn.reset_points': 'Nulstil point',
			'sort.configure': 'Sortering', 'sort.title': 'Vælg rækkefølge', 'sort.categories_order': 'Rækkefølge for kategorier', 'sort.none': 'Ingen kategori', 'sort.save': 'Gem', 'sort.reset': 'Nulstil',
		'points.title': 'Tilføj point til {name}', 'points.quick':'Hurtig tilføj', 'points.remove':'Hurtig fratræk', 'points.custom':'Valgfrit antal',
		'err.title_required':'Titel er påkrævet','err.points_required':'Point skal udfyldes','err.points_number':'Point skal være et tal','err.points_positive':'Point skal være 0 eller mere',
		'status.assigned':'Tildelt','status.in_progress':'I gang','status.awaiting_approval':'Afventer godkendelse','status.approved':'Godkendt','status.rejected':'Afvist','status.unassigned':'Ikke tildelt','status.taken':'Taget',
		'status.overdue':'Forfalden','overdue.reassign_prompt':'Denne opgave er også planlagt i dag. Tildel den igen?','overdue.yes':'Ja, tildel igen','overdue.no':'Nej tak',
		'debug.mark_overdue':'[TEST] Markér forfalden',
		'shop.title':'Pointshop','shop.open':'Åbn shop','shop.item':'Vare','shop.price':'Pris','shop.icon':'Ikon','shop.image':'Billede','shop.upload':'Upload billede','shop.add_item':'Tilføj vare','shop.history':'Købshistorik','shop.child':'Barn','shop.when':'Tidspunkt','shop.date':'Dato','shop.time':'Tidspunkt','shop.advanced':'Avancerede handlinger','shop.entity':'Enhed','shop.operation':'Handling','shop.add_action':'Tilføj handling','shop.add_delay':'Tilføj delay','shop.steps':'Trin','shop.seconds':'Sekunder','shop.minutes':'Minutter','shop.hours':'Timer','shop.delay':'Forsinkelse','shop.active':'Aktiv','shop.buy':'Køb','shop.clear_history':'Ryd historik','confirm.clear_history':'Ryd hele købshistorikken?',
			'card.child_title_fallback': 'Chores4Kids – {name}', 'msg.child_not_found': 'Barn ikke fundet. Tjek navn i kort-konfigurationen.', 'msg.no_tasks':'Ingen opgaver lige nu.', 'btn.done':'Fuldført', 'btn.start_task':'Start opgave', 'btn.complete_task':'Opgave klaret', 'btn.task_done':'Opgave færdig', 'lbl.awaiting':'Afventer godkendelse', 'lbl.taken_by':'Opgave taget af {name}', 'lbl.points': 'point',
			'section.daily_tasks': 'Dagens opgaver',
			'section.weekly_tasks': 'Ugens opgaver',
			'lbl.deadline': 'Deadline: {date}',
			'lbl.early_bonus_by': '+{points} bonus point hvis klaret {date} eller før'
			,
			// Editor UI
			'editor.mode':'Tilstand','editor.mode_admin':'Forældre','editor.mode_kid':'Barn','editor.mode_overview':'Seneste opgaver',
			'editor.child_label':'Barn','editor.child_placeholder':'Navn på barn','editor.child_select_prompt':'— Vælg barn —','editor.child_hint':'Ingen børn fundet endnu – skriv navnet manuelt.',
			'editor.developer_mode':'Developer Mode',
			'editor.developer_mode_help':'Viser debug-kontroller som manuel forfaldsmarkering',
			'editor.enable_points':'Point',
			'editor.enable_points_help':'Vis point, pointshop og point-handlinger',
			'editor.completion_sound':'Completion Sound',
			'editor.completion_sound_help':'Gemmes som /local/chores4kids/completion.<ext> og bruges på tværs af dashboards',
			'editor.delete_sound':'Slet lydfil',
			'editor.delete_sound_confirm':'Slet den uploadede completion-lydfil?',
			'editor.delete_sound_failed':'Kunne ikke slette lydfilen',
			'editor.confetti':'Konfetti',
			'editor.confetti_help':'Vis konfetti-animation ved færdiggørelse',
			'editor.notify_target':'Notifikation ved færdig',
			'editor.notify_target_help':'Send en push-notifikation når et barn markerer en opgave som færdig.',
			'editor.notify_target_none':'Tilføj person',
			'editor.notify_toggle_complete':'Notifikation ved færdig opgave',
			'editor.notify_toggle_shop':'Notifikation ved køb i shoppen',
			'editor.notify_toggle_shop_image':'Vis billede i shop-notifikation',
			'section.notifications':'Notifikationer',
			'editor.colors':'Farver',
			'editor.color_field_bg':'Baggrund',
			'editor.color_field_text':'Tekst',
			'editor.color_group_start':'Start opgave knap',
			'editor.color_group_complete':'Opgave klaret knap',
			'editor.color_group_kid_points':'Børnenes samlede point',
			'editor.color_group_task_points':'Opgavepoint',
			'editor.color_start_bg':'Start opgave (knap – baggrund)',
			'editor.color_start_text':'Start opgave (knap – tekst)',
			'editor.color_complete_bg':'Opgave klaret (knap – baggrund)',
			'editor.color_complete_text':'Opgave klaret (knap – tekst)',
			'editor.color_kid_points_bg':'Børnenes samlede point (baggrund)',
			'editor.color_kid_points_text':'Børnenes samlede point (tekst)',
			'editor.color_task_points_bg':'Opgavepoint (baggrund)',
			'editor.color_task_points_text':'Opgavepoint (tekst)',
			'editor.color_empty_default':'Tom = standard'
		},
			sv: {
			'overview.title': 'Tilldelade uppgifter', 'overview.show_all': 'Visa alla ({pending} väntar)', 'overview.none': 'Inga uppgifter ännu.',
			'card.admin_title': 'Chores4Kids – Förälder', 'input.new_child_name': 'Nytt barn — namn', 'btn.add_child': 'Lägg till barn',
			'input.new_category_name':'Ny kategori — namn','btn.add_category':'Lägg till kategori','section.categories':'Kategorier','th.categories':'Kategorier','ph.categories':'Kategorier','select.categories':'Välj kategorier',
			'section.children': 'Barn', 'th.name':'Namn','th.points':'Poäng','th.pending':'Väntar','th.actions':'Åtgärder','th.status':'Status','th.assign':'Tilldelad till','th.completed':'Slutförd',
			'btn.rename':'Byt namn','btn.delete':'Ta bort', 'section.new_task':'Ny uppgift', 'ph.title':'Titel','ph.points':'Poäng','ph.description':'Beskrivning (valfritt)',
			'ph.due':'Deadline (datum)',
			'ph.early_bonus_days':'Bonusdagar i förväg',
			'ph.early_bonus_points':'Bonuspoäng',
			'ui.early_bonus_enabled':'Aktivera tidig bonus',
			'warn.repeat_overrides_due':'Upprepa är aktiverat, så deadlinen baseras på valda veckodagar istället för detta datum.',
			'select.assign_child':'Tilldela barn', 'ph.icon':'Ikon (mdi:...)', 'icon.choose':'Välj ikon','icon.clear':'Rensa ikon','icon.none':'Ingen','icon.search':'Sök ikon',
			'btn.create_task':'Skapa uppgift','btn.update_task':'Uppdatera uppgift','btn.edit':'Redigera','editor.loaded_task':'Redigerar befintlig uppgift',
			'section.unassigned':'Otilldelade uppgifter','btn.assign':'Tilldela','section.tasks_per_child':'Uppgifter per barn',
			'btn.start':'Starta','btn.back':'Tilldela igen','btn.awaiting':'Väntar','btn.approve':'Godkänn','lbl.approved':'Godkänd',
			'section.scoreboard':'Poängtavla', 'confirm.delete_child':'Ta bort {name}?','confirm.delete_task':'Ta bort uppgift?', 'alert.choose_child_first':'Välj ett barn först',
			'ui.toggle_off_on':'Av/På', 'ui.persist_until_done':'Flytta ofärdig uppgift till nästa dag', 'ui.persist_help':'Ofärdig uppgift flyttas automatiskt till nästa dag', 'ui.quick_complete':'Klar med ett tryck', 'ui.skip_approval':'Hoppa över föräldragodkännande',
			'section.tasks':'Uppgifter', 'form.save':'Spara','form.add':'Lägg till','form.cancel':'Avbryt','form.close':'Stäng','form.clear':'Rensa',
			'repeat.label':'Upprepa','repeat.auto_assign':'Auto-tilldela (upprepa)','repeat.save':'Spara plan',
			'repeat.days.mon':'Mån','repeat.days.tue':'Tis','repeat.days.wed':'Ons','repeat.days.thu':'Tor','repeat.days.fri':'Fre','repeat.days.sat':'Lör','repeat.days.sun':'Sön',
			'assign.disabled_auto':'Inaktiverad: auto-tilldelning (upprepning) är aktiv', 'assign.auto_to':'Auto-tilldelad till {names}',
			'btn.add_points':'Lägg till poäng','btn.reset_points':'Återställ poäng', 'points.title':'Lägg till poäng till {name}','points.quick':'Snabbtillägg','points.remove':'Snabb borttagning','points.custom':'Anpassat antal',
			'err.title_required':'Titel krävs','err.points_required':'Poäng krävs','err.points_number':'Poäng måste vara ett tal','err.points_positive':'Poängen måste vara 0 eller mer',
			'status.assigned':'Tilldelad','status.in_progress':'Pågår','status.awaiting_approval':'Väntar på godkännande','status.approved':'Godkänd','status.rejected':'Avvisad','status.unassigned':'Ej tilldelad','status.taken':'Tagen',
			'shop.title':'Shop','shop.open':'Öppna shop','shop.item':'Vara','shop.price':'Pris','shop.icon':'Ikon','shop.image':'Bild','shop.upload':'Ladda upp bild','shop.add_item':'Lägg till vara','shop.history':'Köphistorik','shop.child':'Barn','shop.when':'Tidpunkt','shop.date':'Datum','shop.time':'Tid','shop.active':'Aktiv','shop.buy':'Köp','shop.clear_history':'Rensa historik','confirm.clear_history':'Rensa all köphistorik?',
			'shop.advanced':'Avancerade åtgärder','shop.entity':'Enhet','shop.operation':'Åtgärd','shop.add_action':'Lägg till åtgärd','shop.add_delay':'Lägg till fördröjning','shop.steps':'Steg','shop.seconds':'Sekunder','shop.minutes':'Minuter','shop.hours':'Timmar','shop.delay':'Fördröjning',
			'sort.configure':'Sortering','sort.title':'Välj ordning','sort.categories_order':'Ordning för kategorier','sort.none':'Ingen kategori','sort.save':'Spara','sort.reset':'Återställ',
			'card.child_title_fallback':'Chores4Kids – {name}','msg.child_not_found':'Barn hittades inte. Kontrollera namnet i kortets konfiguration.','msg.no_tasks':'Inga uppgifter just nu.', 'btn.done':'Klar','btn.start_task':'Starta uppgift','btn.complete_task':'Uppgift klar','btn.task_done':'Uppgift klar','lbl.awaiting':'Väntar på godkännande','lbl.taken_by':'Uppgiften är tagen av {name}','lbl.points':'poäng',
			'section.daily_tasks':'Idag',
			'section.weekly_tasks':'Veckouppgifter',
			'lbl.deadline':'Deadline: {date}',
			'lbl.early_bonus_by':'+{points} bonuspoäng om klart {date} eller tidigare',
			// Editor UI
			'editor.mode':'Läge','editor.mode_admin':'Förälder','editor.mode_kid':'Barn','editor.mode_overview':'Senaste uppgifter',
			'editor.child_label':'Barn','editor.child_placeholder':'Barnets namn','editor.child_select_prompt':'— Välj barn —','editor.child_hint':'Inga barn hittades ännu – skriv namnet manuellt.',
			'editor.developer_mode':'Utvecklarläge',
			'editor.developer_mode_help':'Visar debug-kontroller som manuell förseningsmarkering',
			'editor.completion_sound':'Klar-ljud',
			'editor.completion_sound_help':'Sparas som /local/chores4kids/completion.<ext> och används på alla dashboards',
			'editor.notify_target':'Notifikation vid slutförande',
			'editor.notify_target_help':'Skicka en push-notis när ett barn markerar en uppgift som klar.',
			'editor.notify_target_none':'Lägg till person',
			'editor.notify_toggle_complete':'Notis vid slutförd uppgift',
			'editor.notify_toggle_shop':'Notis vid köp i shoppen',
			'editor.notify_toggle_shop_image':'Visa bild i shop-notis',
			'section.notifications':'Notiser',
			'editor.colors':'Färger',
			'editor.color_field_bg':'Bakgrund',
			'editor.color_field_text':'Text',
			'editor.color_group_start':'Starta uppgift-knapp',
			'editor.color_group_complete':'Uppgift klar-knapp',
			'editor.color_group_kid_points':'Barnens totalpoäng',
			'editor.color_group_task_points':'Uppgiftspoäng',
			'editor.color_start_bg':'Starta uppgift-knapp (bakgrund)',
			'editor.color_start_text':'Starta uppgift-knapp (text)',
			'editor.color_complete_bg':'Uppgift klar-knapp (bakgrund)',
			'editor.color_complete_text':'Uppgift klar-knapp (text)',
			'editor.color_kid_points_bg':'Barnens totalpoäng (bakgrund)',
			'editor.color_kid_points_text':'Barnens totalpoäng (text)',
			'editor.color_task_points_bg':'Uppgiftspoäng (bakgrund)',
			'editor.color_task_points_text':'Uppgiftspoäng (text)',
			'editor.color_empty_default':'Tomt = standard'
		},
			nb: {
				'overview.title':'Tildelte oppgaver','overview.show_all':'Vis alle ({pending} venter)','overview.none':'Ingen oppgaver ennå.',
			'card.admin_title':'Chores4Kids – Forelder','input.new_child_name':'Nytt barn — navn','btn.add_child':'Legg til barn',
				'input.new_category_name':'Ny kategori — navn','btn.add_category':'Legg til kategori','section.categories':'Kategorier','th.categories':'Kategorier','ph.categories':'Kategorier','select.categories':'Velg kategorier',
			'section.children':'Barn','th.name':'Navn','th.points':'Poeng','th.pending':'Ventende','th.actions':'Handlinger','th.status':'Status','th.assign':'Tildelt til','th.completed':'Fullført',
			'btn.rename':'Gi nytt navn','btn.delete':'Slett','section.new_task':'Ny oppgave','ph.title':'Tittel','ph.points':'Poeng','ph.description':'Beskrivelse (valgfritt)',
			'ph.due':'Frist (dato)',
			'ph.early_bonus_days':'Bonusdager før',
			'ph.early_bonus_points':'Bonuspoeng',
			'ui.early_bonus_enabled':'Aktiver tidlig bonus',
			'warn.repeat_overrides_due':'Gjentakelse er aktiv, så fristen beregnes ut fra de valgte ukedagene i stedet for denne datoen.',
			'select.assign_child':'Tildel barn', 'ph.icon':'Ikon (mdi:...)','icon.choose':'Velg ikon','icon.clear':'Fjern ikon','icon.none':'Ingen','icon.search':'Søk ikon',
			'btn.create_task':'Opprett oppgave','btn.update_task':'Oppdater oppgave','btn.edit':'Rediger','editor.loaded_task':'Redigerer eksisterende oppgave',
			'section.unassigned':'Ikke tildelte oppgaver','btn.assign':'Tildel','section.tasks_per_child':'Oppgaver per barn',
			'btn.start':'Start','btn.back':'Tildel på nytt','btn.awaiting':'Avventer','btn.approve':'Godkjenn','lbl.approved':'Godkjent',
			'section.scoreboard':'Poengtavle','confirm.delete_child':'Slette {name}?','confirm.delete_task':'Slette oppgave?','alert.choose_child_first':'Velg et barn først',
			'ui.toggle_off_on':'Av/På', 'ui.persist_until_done':'Flytt uferdig oppgave til neste dag', 'ui.persist_help':'Uferdig oppgave flyttes automatisk til neste dag', 'ui.quick_complete':'Ferdig med ett trykk', 'ui.skip_approval':'Hopp over foreldregodkjenning',
			'section.tasks':'Oppgaver','form.save':'Lagre','form.add':'Legg til','form.cancel':'Avbryt','form.close':'Lukk','form.clear':'Tøm',
			'repeat.label':'Gjentakelse','repeat.auto_assign':'Auto-tildel (gjentakelse)','repeat.save':'Lagre plan',
			'repeat.days.mon':'Man','repeat.days.tue':'Tir','repeat.days.wed':'Ons','repeat.days.thu':'Tor','repeat.days.fri':'Fre','repeat.days.sat':'Lør','repeat.days.sun':'Søn',
			'assign.disabled_auto':'Deaktivert: auto-tildeling (gjentakelse) er aktiv', 'assign.auto_to':'Auto-tildelt til {names}',
			'btn.add_points':'Legg til poeng','btn.reset_points':'Nullstill poeng', 'points.title':'Legg til poeng til {name}','points.quick':'Hurtig legg til','points.remove':'Hurtig trekk fra','points.custom':'Valgfritt antall',
			'err.title_required':'Tittel er påkrevd','err.points_required':'Poeng må fylles ut','err.points_number':'Poeng må være et tall','err.points_positive':'Poeng må være 0 eller mer',
			'status.assigned':'Tildelt','status.in_progress':'Pågår','status.awaiting_approval':'Avventer godkjenning','status.approved':'Godkjent','status.rejected':'Avvist','status.unassigned':'Ikke tildelt','status.taken':'Tatt',
			'shop.title':'Butikk','shop.open':'Åpne butikk','shop.item':'Vare','shop.price':'Pris','shop.icon':'Ikon','shop.image':'Bilde','shop.upload':'Last opp bilde','shop.add_item':'Legg til vare','shop.history':'Kjøpshistorikk','shop.child':'Barn','shop.when':'Tidspunkt','shop.date':'Dato','shop.time':'Tidspunkt','shop.active':'Aktiv','shop.buy':'Kjøp','shop.clear_history':'Rydd historikk','confirm.clear_history':'Rydd hele kjøpshistorikken?',
			'shop.advanced':'Avanserte handlinger','shop.entity':'Enhet','shop.operation':'Handling','shop.add_action':'Legg til handling','shop.add_delay':'Legg til forsinkelse','shop.steps':'Steg','shop.seconds':'Sekunder','shop.minutes':'Minutter','shop.hours':'Timer','shop.delay':'Forsinkelse',
			'sort.configure':'Sortering','sort.title':'Velg rekkefølge','sort.categories_order':'Rekkefølge for kategorier','sort.none':'Ingen kategori','sort.save':'Lagre','sort.reset':'Nullstill',
			'card.child_title_fallback':'Chores4Kids – {name}','msg.child_not_found':'Barn ikke funnet. Sjekk navnet i kortkonfigurasjonen.','msg.no_tasks':'Ingen oppgaver nå.', 'btn.done':'Ferdig','btn.start_task':'Start oppgave','btn.complete_task':'Oppgave klar','btn.task_done':'Oppgave ferdig','lbl.awaiting':'Venter på godkjenning','lbl.taken_by':'Oppgave tatt av {name}','lbl.points':'poeng',
			'section.daily_tasks':'I dag',
			'section.weekly_tasks':'Ukens oppgaver',
			'lbl.deadline':'Frist: {date}',
			'lbl.early_bonus_by':'+{points} bonuspoeng hvis gjort {date} eller før',
			// Editor UI
			'editor.mode':'Modus','editor.mode_admin':'Forelder','editor.mode_kid':'Barn','editor.mode_overview':'Siste oppgaver',
			'editor.child_label':'Barn','editor.child_placeholder':'Barnets navn','editor.child_select_prompt':'— Velg barn —','editor.child_hint':'Ingen barn funnet ennå – skriv inn navnet manuelt.',
			'editor.developer_mode':'Utviklermodus',
			'editor.developer_mode_help':'Viser debug-kontroller som manuell forfallsmarkering',
			'editor.completion_sound':'Fullføringslyd',
			'editor.completion_sound_help':'Lagres som /local/chores4kids/completion.<ext> og brukes på tvers av dashboards',
			'editor.notify_target':'Varsling ved fullføring',
			'editor.notify_target_help':'Send en push-varsling når et barn markerer en oppgave som ferdig.',
			'editor.notify_target_none':'Legg til person',
			'editor.notify_toggle_complete':'Varsling ved fullført oppgave',
			'editor.notify_toggle_shop':'Varsling ved kjøp i butikken',
			'editor.notify_toggle_shop_image':'Vis bilde i butikkvarsling',
			'section.notifications':'Varsler',
			'editor.colors':'Farger',
			'editor.color_field_bg':'Bakgrunn',
			'editor.color_field_text':'Tekst',
			'editor.color_group_start':'Start oppgave-knapp',
			'editor.color_group_complete':'Oppgave klar-knapp',
			'editor.color_group_kid_points':'Barnas totalpoeng',
			'editor.color_group_task_points':'Oppgavepoeng',
			'editor.color_start_bg':'Start oppgave-knapp (bakgrunn)',
			'editor.color_start_text':'Start oppgave-knapp (tekst)',
			'editor.color_complete_bg':'Oppgave klar-knapp (bakgrunn)',
			'editor.color_complete_text':'Oppgave klar-knapp (tekst)',
			'editor.color_kid_points_bg':'Barnas totalpoeng (bakgrunn)',
			'editor.color_kid_points_text':'Barnas totalpoeng (tekst)',
			'editor.color_task_points_bg':'Oppgavepoeng (bakgrunn)',
			'editor.color_task_points_text':'Oppgavepoeng (tekst)',
			'editor.color_empty_default':'Tom = standard'
		},
			de: {
				'overview.title':'Zugewiesene Aufgaben','overview.show_all':'Alle anzeigen ({pending} ausstehend)','overview.none':'Noch keine Aufgaben.',
			'card.admin_title':'Chores4Kids – Eltern','input.new_child_name':'Neues Kind — Name','btn.add_child':'Kind hinzufügen',
				'input.new_category_name':'Neue Kategorie — Name','btn.add_category':'Kategorie hinzufügen','section.categories':'Kategorien','th.categories':'Kategorien','ph.categories':'Kategorien','select.categories':'Kategorien wählen',
			'section.children':'Kinder', 'th.name':'Name','th.points':'Punkte','th.pending':'Ausstehend','th.actions':'Aktionen','th.status':'Status','th.assign':'Zugewiesen an','th.completed':'Erledigt',
			'btn.rename':'Umbenennen','btn.delete':'Löschen','section.new_task':'Neue Aufgabe','ph.title':'Titel','ph.points':'Punkte','ph.description':'Beschreibung (optional)',
			'ph.due':'Frist (Datum)',
			'ph.early_bonus_days':'Bonus-Tage vorher',
			'ph.early_bonus_points':'Bonuspunkte',
			'ui.early_bonus_enabled':'Frühbonus aktivieren',
			'warn.repeat_overrides_due':'Wiederholung ist aktiv, daher basiert die Frist auf den ausgewählten Wochentagen statt auf diesem Datum.',
			'select.assign_child':'Kind zuweisen','ph.icon':'Symbol (mdi:...)','icon.choose':'Symbol wählen','icon.clear':'Symbol entfernen','icon.none':'Keins','icon.search':'Symbol suchen',
			'btn.create_task':'Aufgabe erstellen','btn.update_task':'Aufgabe aktualisieren','btn.edit':'Bearbeiten','editor.loaded_task':'Vorhandene Aufgabe bearbeiten',
			'section.unassigned':'Nicht zugewiesene Aufgaben','btn.assign':'Zuweisen','section.tasks_per_child':'Aufgaben pro Kind',
			'btn.start':'Starten','btn.back':'Neu zuweisen','btn.awaiting':'Wartet','btn.approve':'Genehmigen','lbl.approved':'Genehmigt',
			'section.scoreboard':'Bestenliste','confirm.delete_child':'{name} löschen?','confirm.delete_task':'Aufgabe löschen?','alert.choose_child_first':'Bitte zuerst ein Kind wählen',
			'ui.toggle_off_on':'Aus/An', 'ui.persist_until_done':'Unfertige Aufgabe auf den nächsten Tag verschieben', 'ui.persist_help':'Unfertige Aufgabe wird automatisch auf den nächsten Tag verschoben', 'ui.quick_complete':'Mit einem Tip erledigen', 'ui.skip_approval':'Elternbestätigung überspringen',
			'section.tasks':'Aufgaben','form.save':'Speichern','form.add':'Hinzufügen','form.cancel':'Abbrechen','form.clear':'Leeren',
			'repeat.label':'Wiederholen','repeat.auto_assign':'Automatisch zuweisen (Wiederholung)','repeat.save':'Plan speichern',
			'repeat.days.mon':'Mo','repeat.days.tue':'Di','repeat.days.wed':'Mi','repeat.days.thu':'Do','repeat.days.fri':'Fr','repeat.days.sat':'Sa','repeat.days.sun':'So',
			'assign.disabled_auto':'Deaktiviert: automatische Zuweisung (Wiederholung) aktiv', 'assign.auto_to':'Automatisch zugewiesen an {names}',
			'btn.add_points':'Punkte hinzufügen','btn.reset_points':'Punkte zurücksetzen','points.title':'Punkte hinzufügen für {name}','points.quick':'Schnell hinzufügen','points.remove':'Schnell abziehen','points.custom':'Eigene Anzahl',
			'err.title_required':'Titel ist erforderlich','err.points_required':'Punkte sind erforderlich','err.points_number':'Punkte müssen eine Zahl sein','err.points_positive':'Punkte müssen 0 oder mehr sein',
			'status.assigned':'Zugewiesen','status.in_progress':'In Arbeit','status.awaiting_approval':'Wartet auf Genehmigung','status.approved':'Genehmigt','status.rejected':'Abgelehnt','status.unassigned':'Nicht zugewiesen','status.taken':'Vergeben',
			'shop.title':'Shop','shop.open':'Shop öffnen','shop.item':'Artikel','shop.price':'Preis','shop.icon':'Symbol','shop.image':'Bild','shop.upload':'Bild hochladen','shop.add_item':'Artikel hinzufügen','shop.history':'Kaufhistorie','shop.child':'Kind','shop.when':'Zeitpunkt','shop.date':'Datum','shop.time':'Uhrzeit','shop.active':'Aktiv','shop.buy':'Kaufen','shop.clear_history':'Historie löschen','confirm.clear_history':'Gesamte Kaufhistorie löschen?',
			'shop.advanced':'Erweiterte Aktionen','shop.entity':'Entität','shop.operation':'Aktion','shop.add_action':'Aktion hinzufügen','shop.add_delay':'Verzögerung hinzufügen','shop.steps':'Schritte','shop.seconds':'Sekunden','shop.minutes':'Minuten','shop.hours':'Stunden','shop.delay':'Verzögerung',
			'sort.configure':'Sortierung','sort.title':'Reihenfolge wählen','sort.categories_order':'Reihenfolge der Kategorien','sort.none':'Keine Kategorie','sort.save':'Speichern','sort.reset':'Zurücksetzen',
			'card.child_title_fallback':'Chores4Kids – {name}','msg.child_not_found':'Kind nicht gefunden. Prüfe den Namen in der Kartenkonfiguration.','msg.no_tasks':'Keine Aufgaben gerade.', 'btn.done':'Fertig','btn.start_task':'Aufgabe starten','btn.complete_task':'Aufgabe erledigt','btn.task_done':'Aufgabe erledigt','lbl.awaiting':'Wartet auf Genehmigung','lbl.taken_by':'Aufgabe übernommen von {name}','lbl.points':'Punkte',
			'section.daily_tasks':'Heute',
			'section.weekly_tasks':'Wöchentliche Aufgaben',
			'lbl.deadline':'Frist: {date}',
			'lbl.early_bonus_by':'+{points} Bonuspunkte, wenn erledigt am {date} oder früher',
			// Editor UI
			'editor.mode':'Modus','editor.mode_admin':'Eltern','editor.mode_kid':'Kind','editor.mode_overview':'Aktuelle Aufgaben',
			'editor.child_label':'Kind','editor.child_placeholder':'Name des Kindes','editor.child_select_prompt':'— Kind auswählen —','editor.child_hint':'Noch keine Kinder gefunden – Namen manuell eingeben.',
			'editor.developer_mode':'Entwicklermodus',
			'editor.developer_mode_help':'Zeigt Debug-Steuerungen wie manuelles Überfällig-Markieren',
			'editor.completion_sound':'Abschluss-Sound',
			'editor.completion_sound_help':'Wird als /local/chores4kids/completion.<ext> gespeichert und auf allen Dashboards verwendet',
			'editor.notify_target':'Abschlussbenachrichtigung',
			'editor.notify_target_help':'Sende eine Push-Benachrichtigung, wenn ein Kind eine Aufgabe als erledigt markiert.',
			'editor.notify_target_none':'Person hinzufügen',
			'editor.notify_toggle_complete':'Benachrichtigung bei Aufgabenabschluss',
			'editor.notify_toggle_shop':'Benachrichtigung bei Shop-Kauf',
			'editor.notify_toggle_shop_image':'Bild in Shop-Benachrichtigung anzeigen',
			'section.notifications':'Benachrichtigungen',
			'editor.colors':'Farben',
			'editor.color_field_bg':'Hintergrund',
			'editor.color_field_text':'Text',
			'editor.color_group_start':'"Aufgabe starten"-Button',
			'editor.color_group_complete':'"Aufgabe erledigt"-Button',
			'editor.color_group_kid_points':'Gesamtpunkte der Kinder',
			'editor.color_group_task_points':'Aufgabenpunkte',
			'editor.color_start_bg':'"Aufgabe starten"-Button (Hintergrund)',
			'editor.color_start_text':'"Aufgabe starten"-Button (Text)',
			'editor.color_complete_bg':'"Aufgabe erledigt"-Button (Hintergrund)',
			'editor.color_complete_text':'"Aufgabe erledigt"-Button (Text)',
			'editor.color_kid_points_bg':'Gesamtpunkte der Kinder (Hintergrund)',
			'editor.color_kid_points_text':'Gesamtpunkte der Kinder (Text)',
			'editor.color_task_points_bg':'Aufgabenpunkte (Hintergrund)',
			'editor.color_task_points_text':'Aufgabenpunkte (Text)',
			'editor.color_empty_default':'Leer = Standard'
		},
			es: {
				'overview.title':'Tareas asignadas','overview.show_all':'Ver todas ({pending} pendientes)','overview.none':'Aún no hay tareas.',
			'card.admin_title':'Chores4Kids – Padres','input.new_child_name':'Nuevo niño — nombre','btn.add_child':'Añadir niño',
				'input.new_category_name':'Nueva categoría — nombre','btn.add_category':'Añadir categoría','section.categories':'Categorías','th.categories':'Categorías','ph.categories':'Categorías','select.categories':'Seleccionar categorías',
			'section.children':'Niños','th.name':'Nombre','th.points':'Puntos','th.pending':'Pendiente','th.actions':'Acciones','th.status':'Estado','th.assign':'Asignado a','th.completed':'Completado',
			'btn.rename':'Renombrar','btn.delete':'Eliminar','section.new_task':'Nueva tarea','ph.title':'Título','ph.points':'Puntos','ph.description':'Descripción (opcional)',
			'ph.due':'Fecha límite (fecha)',
			'ph.early_bonus_days':'Días de bono por anticipación',
			'ph.early_bonus_points':'Puntos de bono',
			'ui.early_bonus_enabled':'Activar bono por finalizar antes',
			'warn.repeat_overrides_due':'Repetir está habilitado, así que la fecha límite se basa en los días de la semana seleccionados en lugar de esta fecha.',
			'select.assign_child':'Asignar niño', 'ph.icon':'Icono (mdi:...)','icon.choose':'Elegir icono','icon.clear':'Quitar icono','icon.none':'Ninguno','icon.search':'Buscar icono',
			'btn.create_task':'Crear tarea','btn.update_task':'Actualizar tarea','btn.edit':'Editar','editor.loaded_task':'Editando tarea existente',
			'section.unassigned':'Tareas sin asignar','btn.assign':'Asignar','section.tasks_per_child':'Tareas por niño',
			'btn.start':'Iniciar','btn.back':'Reasignar','btn.awaiting':'En espera','btn.approve':'Aprobar','lbl.approved':'Aprobada',
			'section.scoreboard':'Marcador','confirm.delete_child':'¿Eliminar a {name}?','confirm.delete_task':'¿Eliminar tarea?','alert.choose_child_first':'Elige un niño primero',
			'ui.toggle_off_on':'Apagado/Encendido', 'ui.persist_until_done':'Pasar tarea no terminada al día siguiente', 'ui.persist_help':'La tarea no terminada se moverá automáticamente al día siguiente', 'ui.quick_complete':'Completar con un toque', 'ui.skip_approval':'Omitir aprobación de padres',
			'section.tasks':'Tareas','form.save':'Guardar','form.add':'Añadir','form.cancel':'Cancelar','form.clear':'Borrar',
			'repeat.label':'Repetir','repeat.auto_assign':'Auto-asignar (repetir)','repeat.save':'Guardar plan',
			'repeat.days.mon':'Lun','repeat.days.tue':'Mar','repeat.days.wed':'Mié','repeat.days.thu':'Jue','repeat.days.fri':'Vie','repeat.days.sat':'Sáb','repeat.days.sun':'Dom',
			'assign.disabled_auto':'Deshabilitado: auto-asignación (repetición) activa', 'assign.auto_to':'Autoasignada a {names}',
			'btn.add_points':'Añadir puntos','btn.reset_points':'Reiniciar puntos','points.title':'Añadir puntos a {name}','points.quick':'Añadir rápido','points.remove':'Quitar rápido','points.custom':'Cantidad personalizada',
			'err.title_required':'El título es obligatorio','err.points_required':'Los puntos son obligatorios','err.points_number':'Los puntos deben ser un número','err.points_positive':'Los puntos deben ser 0 o más',
			'status.assigned':'Asignada','status.in_progress':'En curso','status.awaiting_approval':'En espera de aprobación','status.approved':'Aprobada','status.rejected':'Rechazada','status.unassigned':'Sin asignar','status.taken':'Tomada',
			'shop.title':'Tienda','shop.open':'Abrir tienda','shop.item':'Artículo','shop.price':'Precio','shop.icon':'Icono','shop.image':'Imagen','shop.upload':'Subir imagen','shop.add_item':'Añadir artículo','shop.history':'Historial de compras','shop.child':'Niño','shop.when':'Fecha y hora','shop.date':'Fecha','shop.time':'Hora','shop.active':'Activo','shop.buy':'Comprar','shop.clear_history':'Limpiar historial','confirm.clear_history':'¿Limpiar todo el historial de compras?',
			'shop.advanced':'Acciones avanzadas','shop.entity':'Entidad','shop.operation':'Operación','shop.add_action':'Añadir acción','shop.add_delay':'Añadir retraso','shop.steps':'Pasos','shop.seconds':'Segundos','shop.minutes':'Minutos','shop.hours':'Horas','shop.delay':'Retraso',
			'sort.configure':'Ordenación','sort.title':'Elegir orden','sort.categories_order':'Orden de categorías','sort.none':'Sin categoría','sort.save':'Guardar','sort.reset':'Restablecer',
			'card.child_title_fallback':'Chores4Kids – {name}','msg.child_not_found':'Niño no encontrado. Revisa el nombre en la configuración de la tarjeta.','msg.no_tasks':'No hay tareas por ahora.', 'btn.done':'Hecho','btn.start_task':'Iniciar tarea','btn.complete_task':'Tarea hecha','btn.task_done':'Tarea hecha','lbl.awaiting':'En espera de aprobación','lbl.taken_by':'Tarea tomada por {name}','lbl.points':'puntos',
			'section.daily_tasks':'Hoy',
			'section.weekly_tasks':'Tareas semanales',
			'lbl.deadline':'Fecha límite: {date}',
			'lbl.early_bonus_by':'+{points} puntos de bono si se completa el {date} o antes',
			// Editor UI
			'editor.mode':'Modo','editor.mode_admin':'Padres','editor.mode_kid':'Niño','editor.mode_overview':'Tareas recientes',
			'editor.child_label':'Niño','editor.child_placeholder':'Nombre del niño','editor.child_select_prompt':'— Seleccionar niño —','editor.child_hint':'Aún no se encontraron niños — escribe el nombre manualmente.',
			'editor.developer_mode':'Modo desarrollador',
			'editor.developer_mode_help':'Muestra controles de depuración como marcar vencido manualmente',
			'editor.completion_sound':'Sonido de finalización',
			'editor.completion_sound_help':'Se guarda como /local/chores4kids/completion.<ext> y se usa en todos los paneles',
			'editor.notify_target':'Notificación de finalización',
			'editor.notify_target_help':'Enviar una notificación push cuando un niño marque una tarea como hecha.',
			'editor.notify_target_none':'Añadir persona',
			'editor.notify_toggle_complete':'Notificar al completar una tarea',
			'editor.notify_toggle_shop':'Notificar compra en la tienda',
			'editor.notify_toggle_shop_image':'Mostrar imagen en notificación de tienda',
			'section.notifications':'Notificaciones',
			'editor.colors':'Colores',
			'editor.color_field_bg':'Fondo',
			'editor.color_field_text':'Texto',
			'editor.color_group_start':'Botón "Empezar tarea"',
			'editor.color_group_complete':'Botón "Completar tarea"',
			'editor.color_group_kid_points':'Puntos totales de los niños',
			'editor.color_group_task_points':'Puntos de tarea',
			'editor.color_start_bg':'Botón "Empezar tarea" (fondo)',
			'editor.color_start_text':'Botón "Empezar tarea" (texto)',
			'editor.color_complete_bg':'Botón "Completar tarea" (fondo)',
			'editor.color_complete_text':'Botón "Completar tarea" (texto)',
			'editor.color_kid_points_bg':'Puntos totales de los niños (fondo)',
			'editor.color_kid_points_text':'Puntos totales de los niños (texto)',
			'editor.color_task_points_bg':'Puntos de tarea (fondo)',
			'editor.color_task_points_text':'Puntos de tarea (texto)',
			'editor.color_empty_default':'Vacío = predeterminado'
		},
			fr: {
				'overview.title':'Tâches assignées','overview.show_all':'Tout afficher ({pending} en attente)','overview.none':'Aucune tâche pour le moment.',
			'card.admin_title':'Chores4Kids – Parents','input.new_child_name':'Nouvel enfant — nom','btn.add_child':'Ajouter un enfant',
				'input.new_category_name':'Nouvelle catégorie — nom','btn.add_category':'Ajouter une catégorie','section.categories':'Catégories','th.categories':'Catégories','ph.categories':'Catégories','select.categories':'Sélectionner des catégories',
			'section.children':'Enfants','th.name':'Nom','th.points':'Points','th.pending':'En attente','th.actions':'Actions','th.status':'Statut','th.assign':'Attribué à','th.completed':'Terminé',
			'btn.rename':'Renommer','btn.delete':'Supprimer','section.new_task':'Nouvelle tâche','ph.title':'Titre','ph.points':'Points','ph.description':'Description (facultatif)',
			'ph.due':'Date limite (date)',
			'ph.early_bonus_days':'Jours de bonus (avance)',
			'ph.early_bonus_points':'Points de bonus',
			'ui.early_bonus_enabled':'Activer le bonus d\'avance',
			'warn.repeat_overrides_due':'La répétition est activée, donc la date limite est basée sur les jours de semaine sélectionnés plutôt que sur cette date.',
			'select.assign_child':'Attribuer un enfant','ph.icon':'Icône (mdi:...)','icon.choose':'Choisir une icône','icon.clear':'Effacer l’icône','icon.none':'Aucune','icon.search':'Rechercher une icône',
			'btn.create_task':'Créer la tâche','btn.update_task':'Mettre à jour la tâche','btn.edit':'Modifier','editor.loaded_task':'Modification d’une tâche existante',
			'section.unassigned':'Tâches non attribuées','btn.assign':'Attribuer','section.tasks_per_child':'Tâches par enfant',
			'btn.start':'Démarrer','btn.back':'Réattribuer','btn.awaiting':'En attente','btn.approve':'Approuver','lbl.approved':'Approuvée',
			'section.scoreboard':'Classement','confirm.delete_child':'Supprimer {name} ?','confirm.delete_task':'Supprimer la tâche ?','alert.choose_child_first':'Veuillez d’abord choisir un enfant',
			'ui.toggle_off_on':'Arrêt/Marche', 'ui.persist_until_done':'Reporter la tâche inachevée au lendemain', 'ui.persist_help':'La tâche inachevée est automatiquement reportée au lendemain', 'ui.quick_complete':'Terminer en un clic', 'ui.skip_approval':'Ignorer l’approbation des parents',
			'section.tasks':'Tâches','form.save':'Enregistrer','form.add':'Ajouter','form.cancel':'Annuler','form.clear':'Effacer',
			'repeat.label':'Répéter','repeat.auto_assign':'Auto-attribuer (répéter)','repeat.save':'Enregistrer le plan',
			'repeat.days.mon':'Lun','repeat.days.tue':'Mar','repeat.days.wed':'Mer','repeat.days.thu':'Jeu','repeat.days.fri':'Ven','repeat.days.sat':'Sam','repeat.days.sun':'Dim',
			'assign.disabled_auto':'Désactivé : auto-attribution (répétition) active', 'assign.auto_to':'Attribuée automatiquement à {names}',
			'btn.add_points':'Ajouter des points','btn.reset_points':'Réinitialiser les points','points.title':'Ajouter des points à {name}','points.quick':'Ajout rapide','points.remove':'Retrait rapide','points.custom':'Montant personnalisé',
			'err.title_required':'Le titre est requis','err.points_required':'Les points sont requis','err.points_number':'Les points doivent être un nombre','err.points_positive':'Les points doivent être 0 ou plus',
			'status.assigned':'Attribuée','status.in_progress':'En cours','status.awaiting_approval':'En attente d’approbation','status.approved':'Approuvée','status.rejected':'Rejetée','status.unassigned':'Non attribuée','status.taken':'Prise',
			'shop.title':'Boutique','shop.open':'Ouvrir la boutique','shop.item':'Article','shop.price':'Prix','shop.icon':'Icône','shop.image':'Image','shop.upload':'Téléverser une image','shop.add_item':'Ajouter un article','shop.history':'Historique des achats','shop.child':'Enfant','shop.when':'Date et heure','shop.date':'Date','shop.time':'Heure','shop.active':'Actif','shop.buy':'Acheter','shop.clear_history':'Effacer l`historique','confirm.clear_history':'Effacer tout l`historique des achats?',
			'shop.advanced':'Actions avancées','shop.entity':'Entité','shop.operation':'Opération','shop.add_action':'Ajouter une action','shop.add_delay':'Ajouter un délai','shop.steps':'Étapes','shop.seconds':'Secondes','shop.minutes':'Minutes','shop.hours':'Heures','shop.delay':'Délai',
			'sort.configure':'Tri','sort.title':'Choisir l’ordre','sort.categories_order':'Ordre des catégories','sort.none':'Aucune catégorie','sort.save':'Enregistrer','sort.reset':'Réinitialiser',
			'card.child_title_fallback':'Chores4Kids – {name}','msg.child_not_found':'Enfant introuvable. Vérifiez le nom dans la configuration de la carte.','msg.no_tasks':'Aucune tâche pour le moment.', 'btn.done':'Terminé','btn.start_task':'Démarrer la tâche','btn.complete_task':'Tâche terminée','btn.task_done':'Tâche terminée','lbl.awaiting':'En attente d’approbation','lbl.taken_by':'Tâche prise par {name}','lbl.points':'points',
			'section.daily_tasks':'Aujourd’hui',
			'section.weekly_tasks':'Tâches hebdomadaires',
			'lbl.deadline':'Date limite : {date}',
			'lbl.early_bonus_by':'+{points} points de bonus si terminé le {date} ou avant',
			// Editor UI
			'editor.mode':'Mode','editor.mode_admin':'Parents','editor.mode_kid':'Enfant','editor.mode_overview':'Tâches récentes',
			'editor.child_label':'Enfant','editor.child_placeholder':'Nom de l’enfant','editor.child_select_prompt':'— Sélectionner un enfant —','editor.child_hint':'Aucun enfant trouvé pour l’instant — saisissez le nom manuellement.',
			'editor.developer_mode':'Mode développeur',
			'editor.developer_mode_help':'Affiche des contrôles de débogage comme marquer en retard manuellement',
			'editor.completion_sound':'Son de fin',
			'editor.completion_sound_help':'Enregistré sous /local/chores4kids/completion.<ext> et utilisé sur tous les tableaux de bord',
			'editor.notify_target':'Notification d’achèvement',
			'editor.notify_target_help':'Envoyer une notification push lorsqu’un enfant marque une tâche comme terminée.',
			'editor.notify_target_none':'Ajouter une personne',
			'editor.notify_toggle_complete':'Notifier la fin d’une tâche',
			'editor.notify_toggle_shop':'Notifier un achat dans la boutique',
			'editor.notify_toggle_shop_image':'Afficher l’image dans la notification d’achat',
			'section.notifications':'Notifications',
			'editor.colors':'Couleurs',
			'editor.color_field_bg':'Fond',
			'editor.color_field_text':'Texte',
			'editor.color_group_start':'Bouton "Démarrer"',
			'editor.color_group_complete':'Bouton "Terminer"',
			'editor.color_group_kid_points':'Points totaux des enfants',
			'editor.color_group_task_points':'Points de tâche',
			'editor.color_start_bg':'Bouton "Démarrer" (fond)',
			'editor.color_start_text':'Bouton "Démarrer" (texte)',
			'editor.color_complete_bg':'Bouton "Terminer" (fond)',
			'editor.color_complete_text':'Bouton "Terminer" (texte)',
			'editor.color_kid_points_bg':'Points totaux des enfants (fond)',
			'editor.color_kid_points_text':'Points totaux des enfants (texte)',
			'editor.color_task_points_bg':'Points de tâche (fond)',
			'editor.color_task_points_text':'Points de tâche (texte)',
			'editor.color_empty_default':'Vide = par défaut'
		},
			fi: {
				'overview.title':'Määritetyt tehtävät','overview.show_all':'Näytä kaikki ({pending} odottaa)','overview.none':'Ei vielä tehtäviä.',
			'card.admin_title':'Chores4Kids – Vanhemmat','input.new_child_name':'Uusi lapsi — nimi','btn.add_child':'Lisää lapsi',
				'input.new_category_name':'Uusi kategoria — nimi','btn.add_category':'Lisää kategoria','section.categories':'Kategoriat','th.categories':'Kategoriat','ph.categories':'Kategoriat','select.categories':'Valitse kategoriat',
			'section.children':'Lapset','th.name':'Nimi','th.points':'Pisteet','th.pending':'Odottaa','th.actions':'Toiminnot','th.status':'Tila','th.assign':'Määritetty','th.completed':'Valmis',
			'btn.rename':'Nimeä uudelleen','btn.delete':'Poista','section.new_task':'Uusi tehtävä','ph.title':'Otsikko','ph.points':'Pisteet','ph.description':'Kuvaus (valinnainen)',
			'ph.due':'Määräpäivä (päivä)',
			'ph.early_bonus_days':'Bonuspäiviä ennen',
			'ph.early_bonus_points':'Bonuspisteet',
			'ui.early_bonus_enabled':'Ota käyttöön aikaisen valmistumisen bonus',
			'warn.repeat_overrides_due':'Toisto on käytössä, joten määräpäivä perustuu valittuihin viikonpäiviin tämän päivämäärän sijaan.',
			'select.assign_child':'Määritä lapsi','ph.icon':'Kuvake (mdi:...)','icon.choose':'Valitse kuvake','icon.clear':'Poista kuvake','icon.none':'Ei mitään','icon.search':'Hae kuvaketta',
			'btn.create_task':'Luo tehtävä','btn.update_task':'Päivitä tehtävä','btn.edit':'Muokkaa','editor.loaded_task':'Muokataan olemassa olevaa tehtävää',
			'section.unassigned':'Määrittämättömät tehtävät','btn.assign':'Määritä','section.tasks_per_child':'Tehtävät per lapsi',
			'btn.start':'Aloita','btn.back':'Määritä uudelleen','btn.awaiting':'Odottaa','btn.approve':'Hyväksy','lbl.approved':'Hyväksytty',
			'section.scoreboard':'Pistetaulukko','confirm.delete_child':'Poistetaanko {name}?','confirm.delete_task':'Poistetaanko tehtävä?','alert.choose_child_first':'Valitse ensin lapsi',
			'ui.toggle_off_on':'Pois/Päällä', 'ui.persist_until_done':'Siirrä keskeneräinen tehtävä seuraavalle päivälle', 'ui.persist_help':'Keskeneräinen tehtävä siirtyy automaattisesti seuraavalle päivälle', 'ui.quick_complete':'Valmis yhdellä painalluksella', 'ui.skip_approval':'Ohita vanhemman hyväksyntä',
			'section.tasks':'Tehtävät','form.save':'Tallenna','form.add':'Lisää','form.cancel':'Peruuta','form.clear':'Tyhjennä',
			'repeat.label':'Toisto','repeat.auto_assign':'Automaattinen määritys (toisto)','repeat.save':'Tallenna suunnitelma',
			'repeat.days.mon':'Ma','repeat.days.tue':'Ti','repeat.days.wed':'Ke','repeat.days.thu':'To','repeat.days.fri':'Pe','repeat.days.sat':'La','repeat.days.sun':'Su',
			'assign.disabled_auto':'Pois käytöstä: automaattinen määritys (toisto) käytössä', 'assign.auto_to':'Automaattisesti määritetty: {names}',
			'btn.add_points':'Lisää pisteitä','btn.reset_points':'Nollaa pisteet','points.title':'Lisää pisteitä: {name}','points.quick':'Pikalisäys','points.remove':'Pikavähennys','points.custom':'Mukautettu määrä',
			'err.title_required':'Otsikko on pakollinen','err.points_required':'Pisteet ovat pakolliset','err.points_number':'Pisteiden on oltava numero','err.points_positive':'Pisteiden on oltava 0 tai enemmän',
			'status.assigned':'Määritetty','status.in_progress':'Käynnissä','status.awaiting_approval':'Odottaa hyväksyntää','status.approved':'Hyväksytty','status.rejected':'Hylätty','status.unassigned':'Ei määritetty','status.taken':'Varattu',
			'shop.title':'Kauppa','shop.open':'Avaa kauppa','shop.item':'Tuote','shop.price':'Hinta','shop.icon':'Kuvake','shop.image':'Kuva','shop.upload':'Lataa kuva','shop.add_item':'Lisää tuote','shop.history':'Ostohistoria','shop.child':'Lapsi','shop.when':'Aika','shop.date':'Päiväys','shop.time':'Aika','shop.active':'Aktiivinen','shop.buy':'Osta','shop.clear_history':'Tyhjennä historia','confirm.clear_history':'Tyhjennä koko ostohistoria?',
			'shop.advanced':'Edistyneet toiminnot','shop.entity':'Entiteetti','shop.operation':'Toiminto','shop.add_action':'Lisää toiminto','shop.add_delay':'Lisää viive','shop.steps':'Vaiheet','shop.seconds':'Sekuntia','shop.minutes':'Minuuttia','shop.hours':'Tuntia','shop.delay':'Viive',
			'sort.configure':'Lajittelu','sort.title':'Valitse järjestys','sort.categories_order':'Kategorioiden järjestys','sort.none':'Ei kategoriaa','sort.save':'Tallenna','sort.reset':'Palauta',
			'card.child_title_fallback':'Chores4Kids – {name}','msg.child_not_found':'Lasta ei löytynyt. Tarkista nimi kortin asetuksista.','msg.no_tasks':'Ei tehtäviä juuri nyt.', 'btn.done':'Valmis','btn.start_task':'Aloita tehtävä','btn.complete_task':'Tehtävä valmis','btn.task_done':'Tehtävä valmis','lbl.awaiting':'Odottaa hyväksyntää','lbl.taken_by':'Tehtävän otti {name}','lbl.points':'pistettä',
			'section.daily_tasks':'Tänään',
			'section.weekly_tasks':'Viikkotehtävät',
			'lbl.deadline':'Määräpäivä: {date}',
			'lbl.early_bonus_by':'+{points} bonuspistettä, jos valmis {date} tai aiemmin',
			// Editor UI
			'editor.mode':'Tila','editor.mode_admin':'Vanhemmat','editor.mode_kid':'Lapsi','editor.mode_overview':'Viimeisimmät tehtävät',
			'editor.child_label':'Lapsi','editor.child_placeholder':'Lapsen nimi','editor.child_select_prompt':'— Valitse lapsi —','editor.child_hint':'Lapsia ei vielä löytynyt — kirjoita nimi manuaalisesti.',
			'editor.developer_mode':'Kehittäjätila',
			'editor.developer_mode_help':'Näyttää debug-ohjaimet, kuten manuaalisen myöhässä-merkinnän',
			'editor.completion_sound':'Valmistumisääni',
			'editor.completion_sound_help':'Tallennetaan muotoon /local/chores4kids/completion.<ext> ja käytetään kaikilla näkymillä',
			'editor.notify_target':'Valmistumisilmoitus',
			'editor.notify_target_help':'Lähetä push-ilmoitus, kun lapsi merkitsee tehtävän valmiiksi.',
			'editor.notify_target_none':'Lisää henkilö',
			'editor.notify_toggle_complete':'Ilmoitus tehtävän valmistumisesta',
			'editor.notify_toggle_shop':'Ilmoitus ostosta kaupassa',
			'editor.notify_toggle_shop_image':'Näytä kuva oston ilmoituksessa',
			'section.notifications':'Ilmoitukset',
			'editor.colors':'Värit',
			'editor.color_field_bg':'Tausta',
			'editor.color_field_text':'Teksti',
			'editor.color_group_start':'Aloita tehtävä -painike',
			'editor.color_group_complete':'Suorita tehtävä -painike',
			'editor.color_group_kid_points':'Lasten kokonaispisteet',
			'editor.color_group_task_points':'Tehtäväpisteet',
			'editor.color_start_bg':'Aloita tehtävä -painike (tausta)',
			'editor.color_start_text':'Aloita tehtävä -painike (teksti)',
			'editor.color_complete_bg':'Suorita tehtävä -painike (tausta)',
			'editor.color_complete_text':'Suorita tehtävä -painike (teksti)',
			'editor.color_kid_points_bg':'Lasten kokonaispisteet (tausta)',
			'editor.color_kid_points_text':'Lasten kokonaispisteet (teksti)',
			'editor.color_task_points_bg':'Tehtäväpisteet (tausta)',
			'editor.color_task_points_text':'Tehtäväpisteet (teksti)',
			'editor.color_empty_default':'Tyhjä = oletus'
		},
			it: {
				'overview.title':'Attività assegnate','overview.show_all':'Mostra tutto ({pending} in attesa)','overview.none':'Nessuna attività.',
			'card.admin_title':'Chores4Kids – Genitori','input.new_child_name':'Nuovo bambino — nome','btn.add_child':'Aggiungi bambino',
				'input.new_category_name':'Nuova categoria — nome','btn.add_category':'Aggiungi categoria','section.categories':'Categorie','th.categories':'Categorie','ph.categories':'Categorie','select.categories':'Seleziona categorie',
			'section.children':'Bambini','th.name':'Nome','th.points':'Punti','th.pending':'In sospeso','th.actions':'Azioni','th.status':'Stato','th.assign':'Assegnato a','th.completed':'Completato',
			'btn.rename':'Rinomina','btn.delete':'Elimina','section.new_task':'Nuova attività','ph.title':'Titolo','ph.points':'Punti','ph.description':'Descrizione (opzionale)',
			'ph.due':'Scadenza (data)',
			'ph.early_bonus_days':'Giorni di bonus (anticipo)',
			'ph.early_bonus_points':'Punti bonus',
			'ui.early_bonus_enabled':'Attiva bonus per completamento anticipato',
			'warn.repeat_overrides_due':'La ripetizione è attiva, quindi la scadenza si basa sui giorni della settimana selezionati invece di questa data.',
			'select.assign_child':'Assegna bambino','ph.icon':'Icona (mdi:...)','icon.choose':'Scegli icona','icon.clear':'Rimuovi icona','icon.none':'Nessuna','icon.search':'Cerca icona',
			'btn.create_task':'Crea attività','btn.update_task':'Aggiorna attività','btn.edit':'Modifica','editor.loaded_task':'Modifica attività esistente',
			'section.unassigned':'Attività non assegnate','btn.assign':'Assegna','section.tasks_per_child':'Attività per bambino',
			'btn.start':'Avvia','btn.back':'Riassegna','btn.awaiting':'In attesa','btn.approve':'Approva','lbl.approved':'Approvato',
			'section.scoreboard':'Classifica','confirm.delete_child':'Eliminare {name}?','confirm.delete_task':'Eliminare attività?','alert.choose_child_first':'Scegli prima un bambino',
			'ui.toggle_off_on':'Spento/Acceso', 'ui.persist_until_done':'Sposta l’attività non completata al giorno successivo', 'ui.persist_help':'L’attività non completata verrà spostata automaticamente al giorno successivo', 'ui.quick_complete':'Completa con un tocco', 'ui.skip_approval':'Salta approvazione genitori',
			'section.tasks':'Attività','form.save':'Salva','form.add':'Aggiungi','form.cancel':'Annulla','form.clear':'Cancella',
			'repeat.label':'Ripeti','repeat.auto_assign':'Assegnazione automatica (ripeti)','repeat.save':'Salva piano',
			'repeat.days.mon':'Lun','repeat.days.tue':'Mar','repeat.days.wed':'Mer','repeat.days.thu':'Gio','repeat.days.fri':'Ven','repeat.days.sat':'Sab','repeat.days.sun':'Dom',
			'assign.disabled_auto':'Disabilitato: assegnazione automatica (ripetizione) attiva', 'assign.auto_to':'Assegnata automaticamente a {names}',
			'btn.add_points':'Aggiungi punti','btn.reset_points':'Azzera punti','points.title':'Aggiungi punti a {name}','points.quick':'Aggiunta rapida','points.remove':'Rimozione rapida','points.custom':'Quantità personalizzata',
			'err.title_required':'Titolo obbligatorio','err.points_required':'Punti obbligatori','err.points_number':'I punti devono essere un numero','err.points_positive':'I punti devono essere 0 o più',
			'status.assigned':'Assegnata','status.in_progress':'In corso','status.awaiting_approval':'In attesa di approvazione','status.approved':'Approvata','status.rejected':'Rifiutata','status.unassigned':'Non assegnata','status.taken':'Presa',
			'shop.title':'Negozio','shop.open':'Apri negozio','shop.item':'Articolo','shop.price':'Prezzo','shop.icon':'Icona','shop.image':'Immagine','shop.upload':'Carica immagine','shop.add_item':'Aggiungi articolo','shop.history':'Storico acquisti','shop.child':'Bambino','shop.when':'Data e ora','shop.date':'Data','shop.time':'Ora','shop.active':'Attivo','shop.buy':'Compra','shop.clear_history':'Cancella storico','confirm.clear_history':'Cancellare tutto lo storico acquisti?',
			'shop.advanced':'Azioni avanzate','shop.entity':'Entità','shop.operation':'Operazione','shop.add_action':'Aggiungi azione','shop.add_delay':'Aggiungi ritardo','shop.steps':'Passi','shop.seconds':'Secondi','shop.minutes':'Minuti','shop.hours':'Ore','shop.delay':'Ritardo',
			'sort.configure':'Ordinamento','sort.title':'Scegli ordine','sort.categories_order':'Ordine categorie','sort.none':'Nessuna categoria','sort.save':'Salva','sort.reset':'Reimposta',
			'card.child_title_fallback':'Chores4Kids – {name}','msg.child_not_found':'Bambino non trovato. Controlla il nome nella configurazione della scheda.','msg.no_tasks':'Nessuna attività al momento.', 'btn.done':'Fatto','btn.start_task':'Avvia attività','btn.complete_task':'Attività completata','btn.task_done':'Attività completata','lbl.awaiting':'In attesa di approvazione','lbl.taken_by':'Attività presa da {name}','lbl.points':'punti',
			'section.daily_tasks':'Oggi',
			'section.weekly_tasks':'Attività settimanali',
			'lbl.deadline':'Scadenza: {date}',
			'lbl.early_bonus_by':'+{points} punti bonus se completata il {date} o prima',
			// Editor UI
			'editor.mode':'Modalità','editor.mode_admin':'Genitori','editor.mode_kid':'Bambino','editor.mode_overview':'Attività recenti',
			'editor.child_label':'Bambino','editor.child_placeholder':'Nome del bambino','editor.child_select_prompt':'— Seleziona bambino —','editor.child_hint':'Ancora nessun bambino trovato — inserisci il nome manualmente.',
			'editor.developer_mode':'Modalità sviluppatore',
			'editor.developer_mode_help':'Mostra controlli di debug come segnare scaduto manualmente',
			'editor.completion_sound':'Suono di completamento',
			'editor.completion_sound_help':'Salvato come /local/chores4kids/completion.<ext> e usato su tutte le dashboard',
			'editor.notify_target':'Notifica di completamento',
			'editor.notify_target_help':'Invia una notifica push quando un bambino segna un’attività come completata.',
			'editor.notify_target_none':'Aggiungi persona',
			'editor.notify_toggle_complete':'Notifica completamento attività',
			'editor.notify_toggle_shop':'Notifica acquisto nel negozio',
			'editor.notify_toggle_shop_image':'Mostra immagine nella notifica di acquisto',
			'section.notifications':'Notifiche',
			'editor.colors':'Colori',
			'editor.color_field_bg':'Sfondo',
			'editor.color_field_text':'Testo',
			'editor.color_group_start':'Pulsante "Avvia"',
			'editor.color_group_complete':'Pulsante "Completa"',
			'editor.color_group_kid_points':'Punti totali dei bambini',
			'editor.color_group_task_points':'Punti attività',
			'editor.color_start_bg':'Pulsante "Avvia" (sfondo)',
			'editor.color_start_text':'Pulsante "Avvia" (testo)',
			'editor.color_complete_bg':'Pulsante "Completa" (sfondo)',
			'editor.color_complete_text':'Pulsante "Completa" (testo)',
			'editor.color_kid_points_bg':'Punti totali dei bambini (sfondo)',
			'editor.color_kid_points_text':'Punti totali dei bambini (testo)',
			'editor.color_task_points_bg':'Punti attività (sfondo)',
			'editor.color_task_points_text':'Punti attività (testo)',
			'editor.color_empty_default':'Vuoto = predefinito'
		}
};
const C4K_LANG_ALIAS = { no: 'nb' };
try {
	const __EN = C4K_I18N.en || {};
	for (const __lang of Object.keys(C4K_I18N)){
		if (__lang==='en') continue; const __m = C4K_I18N[__lang] ||= {};
		for (const __k of Object.keys(__EN)){ if (!(__k in __m)) __m[__k] = __EN[__k]; }
	}
} catch {}
function c4kGetLangFromHass(hass){ const raw = hass?.locale?.language || hass?.language || navigator.language || 'en'; return String(raw).toLowerCase(); }
function c4kLocalize(key, langOrHass, vars){
	const raw = typeof langOrHass==='string'? langOrHass : c4kGetLangFromHass(langOrHass);
	const lang = String(raw).toLowerCase();
	const parts = lang.split('-');
	const candidates = [lang, parts[0], C4K_LANG_ALIAS[lang], C4K_LANG_ALIAS[parts[0]], 'en'].filter(Boolean);
	let txt = null; for (const c of candidates){ const d=C4K_I18N[c]; if (d && d[key]) { txt=d[key]; break; } }
	if (!txt) txt = C4K_I18N.en[key] || key;
	if (vars && typeof vars==='object') txt = String(txt).replace(/\{(\w+)\}/g,(_,k)=> vars[k]!==undefined?String(vars[k]):'{'+k+'}');
	return txt;
}

// Curated icon set (full list from original admin card)
const C4K_ICON_SET = [
	{ id:'mdi:broom', label:'Sweep' },
	{ id:'mdi:bucket', label:'Mop' },
	{ id:'mdi:vacuum', label:'Vacuum' },
	{ id:'mdi:robot-vacuum', label:'Robot vacuum' },
	{ id:'mdi:spray-bottle', label:'Wipe surfaces' },
	{ id:'mdi:window-closed-variant', label:'Windows' },
	{ id:'mdi:bucket-outline', label:'Bucket' },
	{ id:'mdi:washing-machine', label:'Laundry wash' },
	{ id:'mdi:tumble-dryer', label:'Laundry dry' },
	{ id:'mdi:iron', label:'Iron clothes' },
	{ id:'mdi:hanger', label:'Put away clothes' },
	{ id:'mdi:wardrobe-outline', label:'Closet' },
	{ id:'mdi:bed', label:'Make bed' },
	{ id:'mdi:bed-single', label:'Tidy room' },
	{ id:'mdi:trash-can-outline', label:'Take out trash' },
	{ id:'mdi:recycle', label:'Recycling' },
	{ id:'mdi:watering-can', label:'Water plants' },
	{ id:'mdi:flower', label:'Garden' },
	{ id:'mdi:leaf', label:'Leaves' },
	{ id:'mdi:car-wash', label:'Wash car' },
	{ id:'mdi:silverware-clean', label:'Dishes' },
	{ id:'mdi:dishwasher', label:'Load dishwasher' },
	{ id:'mdi:dishwasher-off', label:'Unload dishwasher' },
	{ id:'mdi:table-furniture', label:'Set table' },
	{ id:'mdi:table-chair', label:'Clear table' },
	{ id:'mdi:pot-steam', label:'Cook' },
	{ id:'mdi:stove', label:'Kitchen' },
	{ id:'mdi:toothbrush-paste', label:'Brush teeth' },
	{ id:'mdi:shower', label:'Shower' },
	{ id:'mdi:toilet', label:'Bathroom' },
	{ id:'mdi:book', label:'Homework' },
	{ id:'mdi:school', label:'Study' },
	{ id:'mdi:dog-side', label:'Walk dog' },
	{ id:'mdi:cat', label:'Feed cat' },
	{ id:'mdi:paw', label:'Pet care' },
	{ id:'mdi:fish', label:'Feed fish' },
	{ id:'mdi:sofa', label:'Living room' },
	{ id:'mdi:bookshelf', label:'Books' },
];

class Chores4KidsDevCard extends LitElement {
	static get properties(){
		return {
			hass: {},
			config: {},
			// Shared state
			_mode: { state: true },
			_childName: { state: true },
			// Per-task in-flight locks (prevents double taps sending multiple requests)
			_taskBusy: { state: true },
			// UI collapse state
			_collapsed: { state: true },
			// Admin state
			_name: { state: true }, _taskTitle: { state: true }, _taskPoints: { state: true }, _taskDesc: { state: true }, _taskIcon: { state: true }, _iconModalOpen: { state: true },
			_taskCategories: { state: true }, _openCategoriesMenu: { state: true }, _newCategoryName: { state: true }, _newCategoryColor: { state: true },
			_repeatEnabled: { state: true }, _weeklyEnabled: { state: true }, _monthlyEnabled: { state: true }, _repeatAssign: { state: true }, _persistUntilDone: { state: true }, _markOverdue: { state: true }, _quickComplete: { state: true }, _skipApproval: { state: true }, _fastestWins: { state: true }, _editingTask: { state: true }, _tasksModalOpen: { state: true },
			_customIconModalOpen: { state: true }, _customIconSearch: { state: true }, _customIconPreview: { state: true }, _customIconLabel: { state: true },
			_shopModalOpen: { state: true }, _shopTitle: { state: true }, _shopPrice: { state: true }, _shopImage: { state: true }, _editItem: { state: true }, _advItem: { state: true },
			// UI for nicer multi-assign dropdown
			_openAssignMenuFor: { state: true }, _assignMenuStyle: { state: true },
			_openRepeatMenu: { state: true },
			// Re-assign modal
			_reassignTask: { state: true },
			// Child state
			_shopOpen: { state: true },
			// Sorting/categories order
			_sortModalOpen: { state: true }, _catOrder: { state: true },
			// Task description view
			_viewingTaskDesc: { state: true }
		};
	}
	static get styles(){ return css`
		ha-card { padding: 16px; }
		.row { display:flex; flex-wrap:wrap; gap:12px; align-items:flex-start; margin-bottom:12px; }
		.row.fields{ display:grid; grid-template-columns: repeat(2, minmax(0,1fr)); gap:12px; align-items:flex-start; margin-bottom:18px; padding-right:8px; }
		@media (max-width: 900px){ .row.fields{ grid-template-columns: 1fr; } }
		.row > * { flex:1 1 220px; min-width:180px; }
		/* On smaller screens stack row items to avoid horizontal overflow */
		@media (max-width: 700px){ .row > * { flex:1 1 100%; min-width:0; } }
		.row button { flex:0 0 auto; min-height:40px; }
		.section { margin-top:16px; }
		.list { margin-top:12px; }
		button { padding:8px 14px; border-radius:10px; border:1px solid var(--divider-color); background: var(--secondary-background-color); color: var(--primary-text-color); cursor:pointer; }
		button:hover { filter: brightness(1.05); }
		.btn-primary { background: var(--primary-color); color: var(--text-primary-color, #fff); border-color: transparent; }
		.btn-primary.start-task{ background: var(--c4k-start-task-bg, var(--primary-color)); color: var(--c4k-start-task-text, var(--text-primary-color, #fff)); }
		.btn-primary.complete-task{ background: var(--c4k-complete-task-bg, var(--primary-color)); color: var(--c4k-complete-task-text, var(--text-primary-color, #fff)); }
		.btn-primary.task-done{ background: var(--c4k-task-done-bg, var(--primary-color)); color: var(--c4k-task-done-text, var(--text-primary-color, #fff)); }
		.btn-danger { background: var(--error-color, #d32f2f); color:#fff; border-color: transparent; }
		.btn-ghost { background: transparent; }
		.icon-btn{ padding:4px 6px; border-radius:8px; min-height:auto; }
		button:disabled { opacity:.55; cursor:not-allowed; }
		input, select, textarea { width:100%; padding:10px 12px; border-radius:10px; border:1px solid var(--divider-color); background: var(--card-background-color); color: var(--primary-text-color); box-sizing:border-box; font: inherit; }
		/* Ensure native color inputs look like color pickers (and don't stretch as text inputs) */
		input[type="color"]{ width:44px; min-width:44px; height:42px; padding:0; border-radius:10px; cursor:pointer; }
		input[type="color"]::-webkit-color-swatch-wrapper{ padding:0; }
		input[type="color"]::-webkit-color-swatch{ border:none; border-radius:8px; }
		.color-cell{ display:inline-flex; align-items:center; }
		/* Make disabled checkboxes/radios look disabled including label text */
		label input:disabled + span{ color: var(--secondary-text-color); opacity: .75; }
		label input:disabled{ opacity: .75; }
		input::placeholder, textarea::placeholder{ color: var(--secondary-text-color); opacity:.85; }
		textarea { resize: vertical; }
		.form-field{ width:100%; display:flex; flex-direction:column; min-width:0; box-sizing:border-box; }
		.invalid{ border-color: var(--error-color, #d32f2f) !important; }
		.error-text{ color: var(--error-color, #d32f2f); font-size:.85rem; }
		.error-space{ height:18px; margin-top:4px; }
		/* Pretty multi-select dropdown */
		.multi-dd{ position: relative; width:100%; max-width:100%; min-width:0; }
		.multi-dd .box{ display:flex; align-items:center; justify-content:space-between; gap:8px; padding:10px 12px; border:1px solid var(--divider-color); border-radius:10px; background: var(--card-background-color); color: var(--primary-text-color); cursor:pointer; width:100%; box-sizing:border-box; }
		.multi-dd .placeholder{ color: var(--secondary-text-color); }
		.multi-dd .multi-dd-value{ display:block; white-space:nowrap; overflow:hidden; text-overflow:ellipsis; flex:1 1 auto; min-width:0; }
		.multi-dd .box ha-icon{ flex:0 0 auto; }
		/* Menu matches trigger width */
		.multi-dd-menu{ position:absolute; left:0; right:0; width:100%; min-width:0; top: calc(100% + 4px); z-index: 200000; border:1px solid var(--divider-color); border-radius:10px; background: var(--card-background-color); color: var(--primary-text-color); box-shadow: var(--ha-card-box-shadow, 0 6px 16px rgba(0,0,0,.35)); max-height: 260px; overflow-y:auto; overflow-x:hidden; padding:6px; box-sizing:border-box; }
		.multi-dd-menu{ text-align:left; }
		.multi-dd-menu label{ display:grid; grid-template-columns: 20px 1fr; align-items:center; gap:8px; padding:6px 8px; border-radius:8px; justify-content:flex-start !important; width:100%; text-align:left !important; }
		.multi-dd-menu label input[type="checkbox"]{ margin:0; }
		.multi-dd-menu label span{ text-align:left !important; margin-left:6px; margin-right:0 !important; white-space:normal; overflow:hidden; text-overflow:ellipsis; }
		.multi-dd-menu label *{ text-align:left !important; }
		.table-center td > .multi-dd{ margin-left:0 !important; margin-right:auto !important; }
		@media (min-width:901px){ .table-center td .multi-dd{ margin-left:0 !important; margin-right:auto !important; } }
		.multi-dd-menu label:hover{ background: color-mix(in srgb, var(--primary-color) 10%, transparent); }
		/* Ensure wide tables can scroll horizontally instead of bleeding out */
		.table-wrap { width:100%; max-width:100%; overflow-x:auto; overflow-y:visible; -webkit-overflow-scrolling: touch; }
		table{ width:100%; border-collapse: collapse; border-radius:14px; }
		.table-fixed{ table-layout: fixed; }
		/* (Reverted: no scoped fixed widths to avoid affecting other tables) */
		/* (Reverted fixed widths for tables to avoid affecting other sections) */
		/* Centering helper for specific tables (applied on desktop widths) */
		@media (min-width:901px){
			.table-center th, .table-center td { text-align: center !important; }
			.table-center td > div { margin-left:auto; margin-right:auto; justify-content:center; }
		}
		@media (min-width:901px){ .table-wrap table{ min-width:640px; } }
		thead{ background: color-mix(in srgb, var(--primary-color) 8%, transparent); }
		th{ text-align:left; padding:10px 12px; font-weight:600; color: var(--secondary-text-color); border-bottom:1px solid var(--divider-color); }
		td{ padding:10px 12px; border-bottom:1px solid var(--divider-color); vertical-align: middle; }
		tr:hover{ background: color-mix(in srgb, var(--primary-color) 6%, transparent); }
		tbody tr:last-child td{ border-bottom: none; }
		@media (max-width:900px){
			.table-wrap{ overflow: visible; }
			table thead{ display:none; }
			table, tbody, tr, td{ display:block; width:100%; }
			tbody tr{ border:1px solid var(--divider-color); border-radius:12px; padding:8px 12px; margin-bottom:12px; background: var(--card-background-color); }
			/* Stack label and content vertically for mobile */
			td{ display:flex; flex-direction:column; justify-content:flex-start; align-items:stretch; border:0; padding:8px 0; gap:8px; word-break: break-word; }
			td::before{ content: attr(data-label); font-weight:600; color: var(--secondary-text-color); margin:0 0 6px 0; }
			/* Make the last column (usually actions) a responsive grid of buttons */
			tbody tr td:last-child{ display:grid; gap:6px; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); padding-bottom:0; }
			tbody tr td:last-child button{ width:100%; }
		}
		.badge{ display:inline-flex; align-items:center; gap:6px; padding:4px 10px; border-radius:999px; font-size:12px; font-weight:600; }
		.status-assigned { background: color-mix(in srgb, var(--warning-color, #ff9800) 18%, transparent); color: var(--warning-color, #ff9800); }
		.status-in_progress { background: color-mix(in srgb, var(--primary-color) 18%, transparent); color: var(--primary-color); }
		.status-awaiting_approval { background: color-mix(in srgb, var(--info-color, #03a9f4) 18%, transparent); color: var(--info-color, #03a9f4); }
		.status-approved { background: color-mix(in srgb, var(--success-color, #43a047) 18%, transparent); color: var(--success-color, #43a047); }
		.status-unassigned { background: color-mix(in srgb, var(--secondary-text-color) 18%, transparent); color: var(--secondary-text-color); }
		.status-taken { background: color-mix(in srgb, var(--secondary-text-color) 18%, transparent); color: var(--secondary-text-color); }
		.status-overdue, .task-overdue { background: color-mix(in srgb, var(--error-color, #d32f2f) 18%, transparent); color: var(--error-color, #d32f2f); }
		.task-overdue .title { color: var(--error-color, #d32f2f); font-weight: 700; }
		.task-overdue { border-color: var(--error-color, #d32f2f); }
		.repeat-line{ display:flex; align-items:flex-start; gap:12px; width:fit-content; max-width:100%; flex-wrap:wrap; }
		.repeat-days{ flex:0 1 auto; min-width:0; }
		.repeat-assign{ flex:0 0 180px; width:180px; }
		@media (max-width:700px){
			.repeat-line{ flex-direction:column; }
			.repeat-assign{ flex:1 1 auto; width:100%; }
		}
		.days{ display:flex; flex-wrap:wrap; gap:6px; }
		.day{ padding:4px 10px; border-radius:999px; border:1px solid var(--divider-color); cursor:pointer; user-select:none; }
		.day.on{ background: color-mix(in srgb, var(--primary-color) 18%, transparent); color: var(--primary-color); border-color: transparent; }
		.overlay{position:fixed;inset:0;display:none;place-items:center;background:rgba(0,0,0,.35);z-index:10000}
		.overlay.open{display:grid}
		.modal{min-width:260px;max-width:900px;border-radius:10px;border:1px solid var(--divider-color);background:var(--card-background-color);color:var(--primary-text-color);padding:12px; max-height: 90vh; overflow:auto}
		/* Child shop modal sizing with responsive side padding gutters */
		.shop-child-modal{ width:100%; max-width:600px; }
		/* Use clamp so modal always has comfortable gutters without being too smal */
		.shop-child-overlay{ padding-left: clamp(12px, 6vw, 40px); padding-right: clamp(12px, 6vw, 40px); }
		/* Apply same responsive gutters for admin shop and ensure modal fits inside */
		.shop-admin-overlay{ padding-left: clamp(12px, 6vw, 40px); padding-right: clamp(12px, 6vw, 40px); }
		.shop-admin-overlay .shop-admin-modal{ width: 100% !important; max-width: 860px; }
		/* Konfetti animation */
		.confetti-container { position: fixed; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none; z-index: 9999; overflow: hidden; }
		.confetti { position: absolute; width: 10px; height: 10px; background: #f0f; opacity: 0; animation: confetti-fall 3s linear forwards; }
		@keyframes confetti-fall {
			0% { transform: translateY(-10vh) rotate(0deg); opacity: 1; }
			100% { transform: translateY(110vh) rotate(720deg); opacity: 0; }
		}
		.confetti:nth-child(1) { left: 10%; animation-delay: 0s; background: #ff6b6b; }
		.confetti:nth-child(2) { left: 20%; animation-delay: 0.1s; background: #4ecdc4; }
		.confetti:nth-child(3) { left: 30%; animation-delay: 0.2s; background: #ffe66d; }
		.confetti:nth-child(4) { left: 40%; animation-delay: 0.3s; background: #a8e6cf; }
		.confetti:nth-child(5) { left: 50%; animation-delay: 0.4s; background: #ff8b94; }
		.confetti:nth-child(6) { left: 60%; animation-delay: 0.1s; background: #ffd3b6; }
		.confetti:nth-child(7) { left: 70%; animation-delay: 0.2s; background: #dcedc1; }
		.confetti:nth-child(8) { left: 80%; animation-delay: 0.3s; background: #a8dadc; }
		.confetti:nth-child(9) { left: 90%; animation-delay: 0s; background: #f1c0e8; }
		.confetti:nth-child(10) { left: 15%; animation-delay: 0.5s; background: #cfbaf0; }
		.confetti:nth-child(11) { left: 25%; animation-delay: 0.4s; background: #90dbf4; }
		.confetti:nth-child(12) { left: 35%; animation-delay: 0.3s; background: #ffaaa5; }
		.confetti:nth-child(13) { left: 45%; animation-delay: 0.2s; background: #ffd700; }
		.confetti:nth-child(14) { left: 55%; animation-delay: 0.1s; background: #98d8c8; }
		.confetti:nth-child(15) { left: 65%; animation-delay: 0s; background: #ff6f69; }
		.confetti:nth-child(16) { left: 75%; animation-delay: 0.5s; background: #b4e7ce; }
		.confetti:nth-child(17) { left: 85%; animation-delay: 0.4s; background: #f7cac9; }
		.confetti:nth-child(18) { left: 95%; animation-delay: 0.3s; background: #dec5e3; }
		.confetti:nth-child(19) { left: 5%; animation-delay: 0.2s; background: #9ddfd3; }
		.confetti:nth-child(20) { left: 50%; animation-delay: 0.1s; background: #ffcf9d; }
		.sort-list{ list-style:none; padding:0; margin:8px 0; display:grid; gap:8px; }
		.sort-item{ border:1px dashed var(--divider-color); padding:8px 10px; border-radius:8px; display:flex; align-items:center; gap:10px; background: color-mix(in srgb, var(--primary-color) 6%, transparent); }
		.sort-handle{ cursor: grab; opacity:.8; }
		.sort-item.dragover{ outline:2px solid var(--primary-color); }
		/* Admin shop responsive tweaks */
		.shop-modal h3{ margin: 0 0 8px; }
		.shop-add-row{ display:flex; align-items:center; gap:12px; }
		.shop-add-left{ display:flex; align-items:center; gap:10px; flex:2 1 360px; }
		@media (max-width: 700px){
			.shop-add-row{ flex-direction: column; align-items: stretch; }
			.shop-add-left{ width:100%; flex:0 1 auto; align-items:stretch; }
			.shop-add-row .btn-primary{ width:100%; }
			.shop-modal .img-preview{ width:56px; height:56px; }
			/* Stack action buttons inside table rows */
			.shop-modal .table-wrap td [class^="btn"],
			.shop-modal .table-wrap td .btn-ghost,
			.shop-modal .table-wrap td .btn-primary,
			.shop-modal .table-wrap td .btn-danger{ width:100%; margin:2px 0; }
			/* Make actions cell grid for better stacking */
			.shop-modal .table-wrap tbody tr td:last-child{ display:grid; gap:6px; }
			/* Allow long titles/prices to wrap without overflow */
			.shop-modal .table-wrap tbody tr td{ align-items: flex-start; word-break: break-word; }
		}
		@media (max-width:700px){ .shop-modal .shop-add-left{ flex:0 1 auto !important; } }
		/* Child view */
		.header-row{ display:flex; align-items:center; gap:10px; margin-bottom:12px; }
		.header-points{ display:inline-flex; align-items:center; gap:8px; padding:4px 10px; border-radius:999px; background: var(--c4k-kid-points-bg, color-mix(in srgb, var(--primary-color) 18%, transparent)); color: var(--c4k-kid-points-text, var(--primary-color)); font-weight:600; }
		.tasks{ display:grid; gap:12px; }
		.cat-title{ font-weight:700; color: var(--secondary-text-color); margin: 6px 0 2px; padding-left:2px; }
		.task{ display:grid; grid-template-columns: auto 1fr auto; gap: 12px; align-items:center; padding: 12px; border: 1px solid var(--divider-color); border-radius: 14px; background: var(--card-background-color); }
		.task:hover{ background: color-mix(in srgb, var(--primary-color) 6%, transparent); }
		.task-icon{ display:flex; align-items:center; justify-content:center; width: 48px; }
		.task-icon ha-icon{ --mdc-icon-size: 40px; width: 40px; height: 40px; opacity: .95; }
		.title{ font-weight:700; }
		.task .title{ font-size: var(--c4k-kid-task-title-size, 1rem); }
		.title.completed{ text-decoration: line-through; }
		.meta{ color: var(--secondary-text-color); font-size: 12px; display:flex; flex-wrap:wrap; gap:10px; }
		.chip{ display:inline-flex; align-items:center; gap:6px; padding:4px 10px; border-radius:999px; font-size:12px; font-weight:600; }
		.notify-chips{ display:flex; flex-wrap:wrap; gap:6px; margin:6px 0 8px; }
		.notify-chip{ display:inline-flex; align-items:center; gap:6px; padding:4px 10px; border-radius:999px; font-size:12px; font-weight:600; background: color-mix(in srgb, var(--primary-color) 12%, transparent); color: var(--primary-text-color); }
		.notify-chip .chip-x{ border:0; background: transparent; color: inherit; padding:0; margin:0; line-height:1; font-size:14px; cursor:pointer; }
		.notify-empty{ color: var(--secondary-text-color); font-size: .9rem; }
		.chip-points{ background: var(--c4k-task-points-bg, color-mix(in srgb, var(--warning-color, #ff9800) 18%, transparent)); color: var(--c4k-task-points-text, var(--warning-color, #ff9800)); }
		.task .chip-points{ font-size: var(--c4k-kid-task-points-size, 12px); }
		.chip-deadline{ background: color-mix(in srgb, var(--secondary-text-color) 14%, transparent); color: var(--secondary-text-color); }
		.chip-bonus{ background: color-mix(in srgb, var(--success-color, #43a047) 18%, transparent); color: var(--success-color, #43a047); }
		.chip-bonus-expired{ background: color-mix(in srgb, var(--error-color, #f44336) 18%, transparent); color: var(--error-color, #f44336); text-decoration: line-through; }
		.actions{ display:flex; gap:8px; }
		.task .actions button{ font-size: var(--c4k-kid-task-button-size, 14px); padding: .55em 1.05em; min-height: 2.4em; }
		.img-preview{ width:72px; height:72px; border-radius:10px; border:1px solid var(--divider-color); background: color-mix(in srgb, var(--primary-color) 6%, transparent); object-fit:cover; }
		.file-hidden{ display:none; }
		/* Child shop grid – responsive */
		.shop-grid{ display:grid; grid-template-columns: repeat(auto-fill, minmax(170px, 1fr)); gap:12px; width:100%; box-sizing:border-box; }
		@media (max-width: 900px){
			.shop-grid{ grid-template-columns: repeat(auto-fill, minmax(160px, 1fr)); }
		}
		@media (max-width: 700px){
			.shop-grid{ grid-template-columns: repeat(2, minmax(0, 1fr)); }
		}
		@media (max-width: 420px){
			.shop-grid{ grid-template-columns: 1fr; }
			.shop-item .body button{ width:100%; }
		}
		.shop-item{ border: 1px solid var(--divider-color); border-radius: 12px; overflow:hidden; background: var(--card-background-color); display:flex; flex-direction:column; }
		.shop-item.is-buying .btn-primary{ animation: c4k-buy-pulse 0.6s ease; }
		.shop-item.is-bought{ animation: c4k-buy-pop 0.5s ease; }
		.shop-item.is-bought .btn-primary{ background: var(--success-color, #43a047); box-shadow: 0 0 0 2px color-mix(in srgb, var(--success-color, #43a047) 35%, transparent); }
		@keyframes c4k-buy-pulse{
			0%{ transform: scale(1); box-shadow: 0 0 0 0 color-mix(in srgb, var(--primary-color) 40%, transparent); }
			50%{ transform: scale(0.96); box-shadow: 0 0 0 6px color-mix(in srgb, var(--primary-color) 30%, transparent); }
			100%{ transform: scale(1); box-shadow: 0 0 0 0 transparent; }
		}
		@keyframes c4k-buy-pop{
			0%{ transform: scale(1); }
			40%{ transform: scale(1.03); }
			100%{ transform: scale(1); }
		}
		.shop-item .img-wrap{ width:100%; aspect-ratio: 1/1; background: color-mix(in srgb, var(--primary-color) 6%, transparent); overflow:hidden; display:block; }
		.shop-item .img-wrap img{ width:100%; height:100%; object-fit:cover; display:block; }
		.shop-item .body{ padding:10px; display:flex; flex-direction:column; gap:8px; align-items:center; text-align:center; }
		.shop-item .title{ font-weight:700; text-align:center; }
		.shop-item .meta{ display:flex; justify-content:center; }

		/* Mobile/desktop togglers */
			.mobile-only{ display:none; }
			.mobile-only-grid{ display:none; }
			@media (max-width:700px){
				.mobile-only{ display:block; }
				.mobile-only-grid{ display:grid; gap:10px; }
				.desktop-only{ display:none !important; }
			}

		/* Admin shop mobile cards */
		.shop-admin-card{ border:1px solid var(--divider-color); border-radius:12px; padding:10px; background: var(--card-background-color); display:flex; flex-direction:column; gap:8px; overflow:hidden; }
		.shop-admin-head{ display:flex; align-items:center; gap:10px; flex-wrap: wrap; }
		.shop-admin-head img{ width:44px; height:44px; border-radius:8px; object-fit:cover; }
		.shop-admin-title{ font-weight:700; }
		.shop-admin-price{ font-weight:700; color: var(--warning-color, #ff9800); margin-top:2px; }
		.shop-admin-meta{ flex:1; display:flex; flex-direction:column; }
		.shop-admin-toggle{ margin-left:auto; display:flex; align-items:center; gap:6px; }
		.shop-admin-actions{ display:grid; grid-template-columns: 1fr; gap:6px; }
		.purchase-card{ border:1px solid var(--divider-color); border-radius:12px; padding:10px; background: var(--card-background-color); display:grid; gap:6px; }
		.kv{ display:flex; justify-content:space-between; gap:10px; }

		/* Reduce extra whitespace inside shop modal */
		.shop-modal h3{ margin: 0 0 8px; }
		.shop-modal .row{ margin: 4px 0 !important; }
		.shop-modal .row.fields{ margin: 4px 0 !important; gap:6px !important; }
		.shop-modal .row.fields .form-field{ margin:0 !important; }
		.shop-modal .shop-add-row{ margin: 4px 0 !important; }
		.shop-modal .shop-add-left{ gap:8px; }
		@media (max-width:700px){ .shop-admin-toggle{ width:100%; justify-content:flex-end; } }
		/* Animations */
		@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
		/* Collapsible headers */
		.h3-row{ display:flex; align-items:center; gap:8px; }
		.collapsible{ display:inline-flex; align-items:center; gap:6px; cursor:pointer; user-select:none; }
		.chev{ transition: transform .2s ease; }
		.chev.rot{ transform: rotate(-90deg); }
	`; }

	constructor(){
		super();
		// Defaults
		this._mode = 'admin';
		this._childName = '';
		this._taskBusy = {};
		// Admin
		this._repeatDays = new Set();
		this._repeatAssign = new Set();
		this._repeatEnabled = false;
		this._weeklyEnabled = false;
		this._monthlyEnabled = false;
		this._editingTask = null;
		this._taskIcon = '';
		this._iconModalOpen = false;
		this._customIconModalOpen = false;
		this._customIconSearch = '';
		this._customIconPreview = '';
		this._customIconLabel = '';
		this._iconDisplayLimit = 200;
		this._taskCategories = new Set();
		this._openCategoriesMenu = false;
		this._newCategoryName = '';
		this._newCategoryColor = '';
		this._tasksModalOpen = false;
		this._shopModalOpen = false;
		this._shopTitle = ''; this._shopPrice = ''; this._shopImage = '';
		this._editItem = null; this._advItem = null; this._advSteps = [];
		this._touchedTitle = false; this._touchedPoints = false;
		this._openAssignMenuFor = null;
		this._openRepeatMenu = false;
		this._persistUntilDone = false;
		this._markOverdue = true;
		this._quickComplete = false;
		this._skipApproval = false;
		this._fastestWins = false;
		// Child
		this._shopOpen = false;
		this._viewingTaskDesc = null;
		// caches
		this._idTasks = null; this._idShop = null; this._idChild = null;
		try{ this._iconRecents = JSON.parse(localStorage.getItem('c4k_icn_recent')||'[]') || []; }catch{ this._iconRecents = []; }
		try{ this._customIcons = JSON.parse(localStorage.getItem('c4k_custom_icons')||'[]') || []; }catch{ this._customIcons = []; }
		this._iconSearch = '';
		this._availableIcons = [];
		// sorting
		try{ this._catOrder = JSON.parse(localStorage.getItem('c4k_cat_order')||'[]') || []; }catch{ this._catOrder = []; }
		// collapsed sections
		try{ this._collapsed = JSON.parse(localStorage.getItem('c4k_admin_collapsed')||'{}') || {}; }catch{ this._collapsed = {}; }
		// completed timestamps
		try{ this._completed = JSON.parse(localStorage.getItem('c4k_completed_ts')||'{}') || {}; }catch{ this._completed = {}; }
		
		// Bind storage listener
		this._storageListener = this._handleStorageChange.bind(this);
	}
	_normalizeScheduleFlags(){
		try{
			// Carry unfinished cannot be combined with weekly/monthly
			if (this._persistUntilDone){
				this._weeklyEnabled = false;
				this._monthlyEnabled = false;
			}
			// Weekly/monthly are mutually exclusive with repeat and with each other
			if (this._weeklyEnabled){
				this._monthlyEnabled = false;
				this._repeatEnabled = false;
				this._repeatDays = new Set();
				this._openRepeatMenu = false;
				this._persistUntilDone = false;
				this._markOverdue = true;
			}
			if (this._monthlyEnabled){
				this._weeklyEnabled = false;
				this._repeatEnabled = false;
				this._repeatDays = new Set();
				this._openRepeatMenu = false;
				this._persistUntilDone = false;
				this._markOverdue = true;
			}
			if (this._repeatEnabled){
				this._weeklyEnabled = false;
				this._monthlyEnabled = false;
			}
		}catch{ /* ignore */ }
	}

	connectedCallback() {
		super.connectedCallback();
		// Listen for localStorage changes from other tabs/cards
		window.addEventListener('storage', this._storageListener);
		// Also poll localStorage for changes (for same-page updates)
		this._storageInterval = setInterval(() => {
			try {
				const stored = JSON.parse(localStorage.getItem('c4k_completed_ts') || '{}');
				if (JSON.stringify(stored) !== JSON.stringify(this._completed)) {
					console.log('Detected completed timestamp changes, updating...');
					this._completed = stored;
					this.requestUpdate();
				}
			} catch {}
		}, 1000);
	}

	disconnectedCallback() {
		super.disconnectedCallback();
		window.removeEventListener('storage', this._storageListener);
		if (this._storageInterval) {
			clearInterval(this._storageInterval);
		}
	}

	_handleStorageChange(e) {
		if (e.key === 'c4k_completed_ts' && e.newValue) {
			try {
				console.log('Storage event detected for completed timestamps');
				this._completed = JSON.parse(e.newValue);
				this.requestUpdate();
			} catch {}
		}
	}

	updated(changedProps){
		// Ensure CSS variables follow both config changes and backend state updates.
		if (changedProps?.has?.('hass') || changedProps?.has?.('config')){
			this._applyColorVars();
		}
	}

	setConfig(config){
		// config: { mode: 'admin' | 'kid', child?: 'Name' }
		this.config = config || {};
		this._mode = this.config.mode || 'admin';
		this._childName = this.config.child || '';
		this._applyColorVars();
	}

	_pointsEnabled(){
		try{
			const global = this._getBackendUiColors?.() || {};
			if (typeof global.enable_points === 'boolean') return global.enable_points;
		}catch{ /* ignore */ }
		return this.config?.enable_points !== false;
	}

	_confettiEnabled(){
		// Global only (admin card controls this); default ON.
		try{
			const global = this._getBackendUiColors?.() || {};
			if (typeof global.confetti_enabled === 'boolean') return global.confetti_enabled;
		}catch{ /* ignore */ }
		return true;
	}

	_isTaskBusy(taskId){
		const id = String(taskId ?? '');
		if (!id) return false;
		return !!(this._taskBusy && this._taskBusy[id]);
	}

	_setTaskBusy(taskId, busy){
		const id = String(taskId ?? '');
		if (!id) return;
		const cur = this._taskBusy || {};
		if (busy){
			if (cur[id]) return;
			this._taskBusy = { ...cur, [id]: true };
			return;
		}
		if (!cur[id]) return;
		const next = { ...cur };
		delete next[id];
		this._taskBusy = next;
	}

	_getBackendUiColors(){
		try{
			const states = this.hass?.states || {};
			let s = states['sensor.chores4kids_ui'];
			if (!s){
				s = Object.values(states).find(st=>{
					try{
						if (!st?.entity_id?.startsWith('sensor.')) return false;
						const a = st.attributes || {};
						return ('enable_points' in a) || ('start_task_bg' in a) || ('complete_task_bg' in a) || ('kid_points_bg' in a)
							|| ('task_done_bg' in a) || ('task_done_text' in a)
							|| ('start_task_text' in a) || ('complete_task_text' in a) || ('kid_points_text' in a)
							|| ('task_points_bg' in a) || ('task_points_text' in a)
							|| ('kid_task_title_size' in a) || ('kid_task_points_size' in a) || ('kid_task_button_size' in a)
							|| ('confetti_enabled' in a);
					}catch{ return false; }
				});
			}
			const a = s?.attributes || {};
			const out = {
				start_task_bg: a.start_task_bg,
				complete_task_bg: a.complete_task_bg,
				kid_points_bg: a.kid_points_bg,
				task_done_bg: a.task_done_bg,
				start_task_text: a.start_task_text,
				complete_task_text: a.complete_task_text,
				kid_points_text: a.kid_points_text,
				task_done_text: a.task_done_text,
				task_points_bg: a.task_points_bg,
				task_points_text: a.task_points_text,
				kid_task_title_size: a.kid_task_title_size,
				kid_task_points_size: a.kid_task_points_size,
				kid_task_button_size: a.kid_task_button_size,
			};
			if (typeof a.enable_points === 'boolean') out.enable_points = a.enable_points;
			if (typeof a.confetti_enabled === 'boolean') out.confetti_enabled = a.confetti_enabled;
			return out;
		}catch{ return {}; }
	}

	_applyColorVars(){
		try{
			const setVar = (name, value)=>{
				if (value) this.style.setProperty(name, String(value));
				else this.style.removeProperty(name);
			};
			const global = this._getBackendUiColors();
			setVar('--c4k-start-task-bg', this.config?.start_task_bg || global.start_task_bg);
			setVar('--c4k-complete-task-bg', this.config?.complete_task_bg || global.complete_task_bg);
			setVar('--c4k-kid-points-bg', this.config?.kid_points_bg || global.kid_points_bg);
			setVar('--c4k-task-done-bg', this.config?.task_done_bg || global.task_done_bg);
			setVar('--c4k-start-task-text', this.config?.start_task_text || global.start_task_text);
			setVar('--c4k-complete-task-text', this.config?.complete_task_text || global.complete_task_text);
			setVar('--c4k-kid-points-text', this.config?.kid_points_text || global.kid_points_text);
			setVar('--c4k-task-done-text', this.config?.task_done_text || global.task_done_text);
			setVar('--c4k-task-points-bg', this.config?.task_points_bg || global.task_points_bg);
			setVar('--c4k-task-points-text', this.config?.task_points_text || global.task_points_text);
			// Font sizes are global (synced via integration)
			setVar('--c4k-kid-task-title-size', global.kid_task_title_size);
			setVar('--c4k-kid-task-points-size', global.kid_task_points_size);
			setVar('--c4k-kid-task-button-size', global.kid_task_button_size);
		}catch{ /* ignore */ }
	}

	_toggleRepeat(e){
		const enabled = !!(e?.target?.checked);
		this._repeatEnabled = enabled;
		if (enabled){
			this._weeklyEnabled = false;
			this._monthlyEnabled = false;
		}
		if (!enabled){
			this._repeatDays = new Set();
			this._repeatAssign = new Set();
			this._openRepeatMenu = false;
		}
		this._normalizeScheduleFlags();
		this.requestUpdate();
	}
	_toggleWeekly(e){
		const enabled = !!(e?.target?.checked);
		this._weeklyEnabled = enabled;
		if (enabled){
			this._monthlyEnabled = false;
			this._repeatEnabled = false;
			this._repeatDays = new Set();
			this._openRepeatMenu = false;
			// Weekly/monthly must not be used with carry unfinished
			this._persistUntilDone = false;
			this._markOverdue = true;
		}
		this._normalizeScheduleFlags();
		this.requestUpdate();
	}
	_toggleMonthly(e){
		const enabled = !!(e?.target?.checked);
		this._monthlyEnabled = enabled;
		if (enabled){
			this._weeklyEnabled = false;
			this._repeatEnabled = false;
			this._repeatDays = new Set();
			this._openRepeatMenu = false;
			// Weekly/monthly must not be used with carry unfinished
			this._persistUntilDone = false;
			this._markOverdue = true;
		}
		this._normalizeScheduleFlags();
		this.requestUpdate();
	}

	static getConfigElement(){ return document.createElement('chores4kids-card-editor'); }
	static getStubConfig(){ return { mode: 'admin' }; }

	getCardSize(){ return this._mode==='admin'? 8 : 3; }

	// Helpers
	_t(key, vars){ return c4kLocalize(key, this.hass || navigator.language || 'en', vars); }
	_resolveUrl(url){
		if (!url) return '';
		if (String(url).startsWith('http') || String(url).startsWith('data:')) return url;
		try{
			const baseUrl = this.hass?.auth?.data?.hassUrl || '';
			if (baseUrl && String(url).startsWith('/')) {
				const base = baseUrl.endsWith('/') ? baseUrl.slice(0,-1) : baseUrl;
				return base + url;
			}
		}catch(e){}
		return url;
	}
	_statusLabel(s){ return this._t(`status.${s}`) || s; }
	_effectiveStatus(t){
		try{
			if (!t) return t?.status;
			if (!t?.fastest_wins) return t?.status;
			const claimedBy = t?.fastest_wins_claimed_by_child_id;
			const assignedTo = t?.assigned_to;
			if (claimedBy && assignedTo && claimedBy !== assignedTo) return 'taken';
			return t?.status;
		}catch{
			return t?.status;
		}
	}
	_renderStatusBadge(t){
		const st = this._effectiveStatus(t);
		const claimedByName = t?.fastest_wins_claimed_by_child_name || t?.fastest_wins_claimed_by_child_id;
		const tip = st==='taken' ? this._t('lbl.taken_by',{name: claimedByName||'—'}) : '';
		return html`<span class="badge status-${st}" title="${tip}">${this._statusLabel(st)}</span>${this._isTaskOverdue(t)? html` <span class="badge status-overdue">${this._t('status.overdue')}</span>`:''}`;
	}
	_autoAssignActive(task){
		try{
			const mode = String(task?.schedule_mode||'').toLowerCase();
			const d=Array.isArray(task?.repeat_days)? task.repeat_days:[];
			const ks = Array.isArray(task?.repeat_child_ids)? task.repeat_child_ids:[];
			const k=task?.repeat_child_id;
			const hasTargets = (ks.length>0 || !!k);
			const hasSchedule = (mode==='weekly' || mode==='monthly' || d.length>0);
			return hasSchedule && hasTargets;
		}catch{ return false; }
	}
	_isScheduledToday(task){
		try{
			const mode = String(task?.schedule_mode||'').toLowerCase();
			const today = new Date();
			if (mode === 'monthly') return today.getDate() === 1;
			if (mode === 'weekly'){
				const jsDay = today.getDay(); // 0=Sun
				const weekdayMap = [6, 0, 1, 2, 3, 4, 5];
				const todayBackend = weekdayMap[jsDay];
				return todayBackend === 0; // Mon
			}
			const repeatDays = Array.isArray(task?.repeat_days) ? task.repeat_days : [];
			const jsDay = today.getDay();
			const weekdayMap = [6, 0, 1, 2, 3, 4, 5];
			const todayBackend = weekdayMap[jsDay];
			const map = ['mon','tue','wed','thu','fri','sat','sun'];
			const todayKey = map[todayBackend];
			return (repeatDays.includes(todayBackend) || repeatDays.includes(todayKey));
		}catch{ return false; }
	}
	_isTaskOverdue(task){ try{ if(task?.mark_overdue === false) return false; if(!task?.carried_over) return false; return task.carried_over === true; }catch{ return false; } }
	_isFromBeforeToday(task){
		try{
			const created = task?.created;
			if(!created) return false;
			const ms = new Date(created).getTime();
			if(!Number.isFinite(ms)) return false;
			const start = new Date();
			start.setHours(0,0,0,0);
			return ms < start.getTime();
		}catch{ return false; }
	}
	_locale(){ return c4kGetLangFromHass(this.hass || navigator.language || 'en'); }
	_fmtDateTime(ts){
		try{
			const d = ts ? new Date(ts) : null;
			if (!d || isNaN(d.getTime())) return { formatted:'—', date:'—', time:'—' };
			const loc = this._locale();
			const weekday = new Intl.DateTimeFormat(loc, { weekday: 'short' }).format(d);
			const day = new Intl.DateTimeFormat(loc, { day: 'numeric' }).format(d);
			const month = new Intl.DateTimeFormat(loc, { month: 'short' }).format(d);
			const year = new Intl.DateTimeFormat(loc, { year: 'numeric' }).format(d);
			const time = new Intl.DateTimeFormat(loc, { hour:'2-digit', minute:'2-digit', second:'2-digit', hour12: false }).format(d);
			const date = new Intl.DateTimeFormat(loc, { year:'numeric', month:'2-digit', day:'2-digit' }).format(d);
			const formatted = `${weekday} d. ${day} ${month} ${year} - kl ${time}`;
			return { formatted, date, time };
		}catch{
			const fallback = String(ts||'—');
			return { formatted: fallback, date: fallback, time: '—' };
		}
	}

	_parseDueToDate(due){
		try{
			if (!due) return null;
			let d;
			if (due instanceof Date){
				d = due;
			}else if (typeof due === 'string'){
				if (/^\d{4}-\d{2}-\d{2}$/.test(due)) d = new Date(`${due}T00:00:00`);
				else d = new Date(due);
			}else{
				return null;
			}
			if (!d || isNaN(d.getTime())) return null;
			// Normalize to local date (midnight)
			const local = new Date(d.getFullYear(), d.getMonth(), d.getDate());
			local.setHours(0,0,0,0);
			return local;
		}catch{ return null; }
	}
	_formatDueDate(due){
		try{
			const d = this._parseDueToDate(due);
			if (!d) return '—';
			const loc = this._locale();
			return new Intl.DateTimeFormat(loc, { year:'numeric', month:'short', day:'numeric' }).format(d);
		}catch{ return String(due||'—'); }
	}
	_formatDateISO(dateObj){
		try{
			const d = dateObj instanceof Date ? new Date(dateObj.getTime()) : null;
			if (!d || isNaN(d.getTime())) return '';
			d.setHours(0,0,0,0);
			const y = d.getFullYear();
			const m = String(d.getMonth()+1).padStart(2,'0');
			const day = String(d.getDate()).padStart(2,'0');
			return `${y}-${m}-${day}`;
		}catch{ return ''; }
	}
	_bonusByDateStr(task){
		try{
			const enabledRaw = task?.early_bonus_enabled;
			if (enabledRaw === false) return null;
			const days = Number(task?.early_bonus_days || 0);
			const points = Number(task?.early_bonus_points || 0);
			const dueDate = this._parseDueToDate(task?.due);
			const enabled = (enabledRaw === true) || (enabledRaw == null && (days > 0) && (points > 0));
			if (!enabled || !dueDate || !(days > 0) || !(points > 0)) return null;
			const by = new Date(dueDate.getTime());
			by.setDate(by.getDate() - days);
			return this._formatDueDate(by);
		}catch{ return null; }
	}
	_bonusByDateInfo(task){
		try{
			const enabledRaw = task?.early_bonus_enabled;
			if (enabledRaw === false) return null;
			const days = Number(task?.early_bonus_days || 0);
			const points = Number(task?.early_bonus_points || 0);
			const dueDate = this._parseDueToDate(task?.due);
			const enabled = (enabledRaw === true) || (enabledRaw == null && (days > 0) && (points > 0));
			if (!enabled || !dueDate || !(days > 0) || !(points > 0)) return null;

			const by = new Date(dueDate.getTime());
			by.setDate(by.getDate() - days);
			by.setHours(0,0,0,0);

			const toLocalDate = (ts)=>{
				try{
					if (ts == null) return null;
					let d;
					if (ts instanceof Date) d = ts;
					else if (typeof ts === 'number') d = new Date(ts < 1000000000000 ? ts * 1000 : ts);
					else d = new Date(ts);
					if (!d || isNaN(d.getTime())) return null;
					const local = new Date(d.getFullYear(), d.getMonth(), d.getDate());
					local.setHours(0,0,0,0);
					return local;
				}catch{ return null; }
			};

			const completedDate = toLocalDate(task?.completed_ts);
			const compareDate = completedDate || new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());
			compareDate.setHours(0,0,0,0);

			return {
				dateStr: this._formatDueDate(by),
				expired: compareDate.getTime() > by.getTime(),
			};
		}catch{ return null; }
	}

	// Completed timestamp helpers
	_completedTsFor(task){ 
		try{ 
			// Prefer timestamp from task entity (stored in backend)
			const ts = task?.completed_ts || this._completed?.[task?.id]; 
			if(task?.status === 'awaiting_approval' && ts) {
				console.log('Getting timestamp for task', task.id, ':', ts);
			}
			return ts;
		}catch{ return undefined; } 
	}
	_takenTsFor(task){ try{ return task?.fastest_wins_claimed_ts; }catch{ return undefined; } }
	_displayedTsFor(task){
		try{
			return this._effectiveStatus(task)==='taken' ? (this._takenTsFor(task) || undefined) : this._completedTsFor(task);
		}catch{ return this._completedTsFor(task); }
	}
	_recordCompleted(taskId, ts){ try{ const map={...(this._completed||{})}; map[String(taskId)]=ts; this._completed=map; localStorage.setItem('c4k_completed_ts', JSON.stringify(map)); }catch{} }
	_clearCompleted(taskId){ try{ const map={...(this._completed||{})}; delete map[String(taskId)]; this._completed=map; localStorage.setItem('c4k_completed_ts', JSON.stringify(map)); }catch{} }

	// ===== CATEGORY SORTING HELPERS =====
	_catOrderResolved(){
		const cats = this._store.categories||[];
		const NONE='__none__';
		let order = Array.isArray(this._catOrder)? [...this._catOrder]:[];
		order = order.filter(id=> id===NONE || cats.some(c=> c.id===id));
		for (const c of cats){ if (!order.includes(c.id)) order.push(c.id); }
		if (!order.includes(NONE)) order.push(NONE);
		return order;
	}
	_catRankForId(id){ const order=this._catOrderResolved(); const idx=order.indexOf(id); return idx>=0? idx : 9999; }
	_taskCatRank(t){ const ids=Array.isArray(t?.categories)? t.categories:[]; if(ids.length){ let best=9999; for(const cid of ids){ const r=this._catRankForId(cid); if(r<best) best=r; } return best; } return this._catRankForId('__none__'); }
	_sortTasks(list, withStatus=false){
		const parse=(x)=>{ try{ return x? new Date(x).getTime():0; }catch{return 0;} };
		const stWeight=(s)=> s==='awaiting_approval'?0: s==='in_progress'?1: s==='assigned'?2: 3;
		return [...list].sort((a,b)=>{
			const ra=this._taskCatRank(a), rb=this._taskCatRank(b);
			if (ra!==rb) return ra-rb;
			if (withStatus){ const sw=stWeight(a.status)-stWeight(b.status); if (sw!==0) return sw; return parse(b.created)-parse(a.created); }
			return String(a.title||'').localeCompare(String(b.title||''));
		});
	}
	_categoryById(id){ try{ return (this._store.categories||[]).find(c=> c.id===id); }catch{ return null; } }
	_normalizeHexColor(value){
		try{
			let v = String(value||'').trim().toLowerCase();
			if (!v) return '';
			if (!v.startsWith('#')) v = '#' + v;
			const m3 = v.match(/^#([0-9a-f]{3})$/);
			if (m3){ const s=m3[1]; return `#${s[0]}${s[0]}${s[1]}${s[1]}${s[2]}${s[2]}`; }
			if (/^#[0-9a-f]{6}$/.test(v)) return v;
			return '';
		}catch{ return ''; }
	}
	_colorInputValue(value){ return this._normalizeHexColor(value) || '#808080'; }
	_textColorForBg(bg){
		try{
			const hex = this._normalizeHexColor(bg);
			if (!hex) return '';
			const r = parseInt(hex.slice(1,3), 16);
			const g = parseInt(hex.slice(3,5), 16);
			const b = parseInt(hex.slice(5,7), 16);
			const lum = (0.299*r + 0.587*g + 0.114*b) / 255;
			return lum > 0.6 ? '#000000' : '#ffffff';
		}catch{ return ''; }
	}
	_renderCategoryChip(cat){
		try{
			const name = String(cat?.name||'').trim();
			if (!name) return '';
			const bg = this._normalizeHexColor(cat?.color);
			if (!bg) return html`<span class="chip">${name}</span>`;
			const fg = this._textColorForBg(bg) || 'var(--primary-text-color)';
			return html`<span class="chip" style="background:${bg}; color:${fg};">${name}</span>`;
		}catch{ return html``; }
	}
	_orderedCategories(ids){
		try{
			const cats=this._store.categories||[];
			const catMap=new Map(cats.map(c=>[c.id,c]));
			const clean=(ids||[]).filter(id=> catMap.has(id));
			const sorted=[...clean].sort((a,b)=> this._catRankForId(a)-this._catRankForId(b));
			return sorted.map(id=> catMap.get(id)).filter(Boolean);
		}catch{ return []; }
	}
	_orderedCategoryNames(ids){ const cats=this._store.categories||[]; const catMap=new Map(cats.map(c=>[c.id,c.name])); const clean=(ids||[]).filter(id=> catMap.has(id)); const sorted=[...clean].sort((a,b)=> this._catRankForId(a)-this._catRankForId(b)); return sorted.map(id=> catMap.get(id)); }

	// ===== STORE =====
	get _store(){
		const states = this.hass?.states || {};
		const children = Object.values(states)
			.filter((s)=> s && s.entity_id?.startsWith('sensor.') && s.attributes?.child_id && (s.attributes?.slug !== undefined))
			.map((s)=> ({ id: s.attributes.child_id, name: s.attributes.name, slug: s.attributes.slug, points: Number(s.state||0), tasks: s.attributes.tasks||[] }));
		// tasks
		let allTasksSensor = this._idTasks && states[this._idTasks];
		if (!allTasksSensor){ allTasksSensor = Object.values(states).find((s)=> s?.entity_id?.includes('chores4kids_tasks') && s.attributes?.tasks); if (allTasksSensor?.entity_id) this._idTasks = allTasksSensor.entity_id; }
		const allTasks = allTasksSensor?.attributes?.tasks || [];
		const categories = allTasksSensor?.attributes?.categories || [];
		// shop
		let shopSensor = this._idShop && states[this._idShop];
		if (!shopSensor){ shopSensor = Object.values(states).find((s)=> s?.entity_id?.includes('chores4kids_shop')); if (shopSensor?.entity_id) this._idShop = shopSensor.entity_id; }
		const items = shopSensor?.attributes?.items || [];
		const purchases = shopSensor?.attributes?.purchases || [];
		return { children, allTasks, items, purchases, categories };
	}

	// ===== RENDER =====
	render(){
		return this._mode==='admin' ? this._renderAdmin() : (this._mode==='kid' ? this._renderChild() : this._renderOverviewOnly());
	}

	_isCollapsed(key){ try{ return !!(this._collapsed && this._collapsed[key]); }catch{ return false; } }
	_toggleSection(key){ const next={ ...(this._collapsed||{}) }; next[key]=!this._isCollapsed(key); this._collapsed=next; try{ localStorage.setItem('c4k_admin_collapsed', JSON.stringify(next)); }catch{} this.requestUpdate(); }

	// ------- ADMIN VIEW -------
	_renderAdmin(){
		const { children } = this._store; const totalKids = children.length;
		const pointsEnabled = this._pointsEnabled();
		const showScoreboard = pointsEnabled && (this.config?.show_scoreboard !== false);
		return html`
			<ha-card header="${this._t('card.admin_title')}">
				<div class="card-content">
					<div class="row">
						<input placeholder="${this._t('input.new_child_name')}" .value=${this._name||''} @input=${(e)=>this._name=e.target.value} />
						<button class="btn-primary" @click=${this._addChild}>${this._t('btn.add_child')}</button>
						${pointsEnabled ? html`<button class="btn-ghost" style="margin-left:auto; min-height:40px;" @click=${()=>this._shopModalOpen=true}>${this._t('shop.open')}</button>` : ''}
					</div>

					<div class="list section">
						<h3 class="h3-row">
							<span class="collapsible" @click=${()=>this._toggleSection('children')}><ha-icon class="chev ${this._isCollapsed('children')?'rot':''}" icon="mdi:chevron-down"></ha-icon>${this._t('section.children')} (${totalKids})</span>
						</h3>
						${this._isCollapsed('children')? '' : html`<div class="table-wrap"><table class="table-center">
							<thead><tr><th>${this._t('th.name')}</th>${pointsEnabled ? html`<th>${this._t('th.points')}</th>`:''}<th>${this._t('th.pending')}</th><th>${this._t('th.actions')}</th></tr></thead>
							<tbody>
								${children.map((c)=> html`
									<tr>
										<td data-label="${this._t('th.name')}">${c.name}</td>
										${pointsEnabled ? html`<td data-label="${this._t('th.points')}"><b>${c.points}</b></td>`:''}
										<td data-label="${this._t('th.pending')}"><span class="badge status-awaiting_approval">${(c.tasks||[]).filter(t=>t.status==="awaiting_approval").length}</span></td>
										<td data-label="${this._t('th.actions')}">
											<button class="btn-ghost" @click=${()=>this._promptRename(c)}>${this._t('btn.rename')}</button>
											${pointsEnabled ? html`<button class="btn-ghost" @click=${()=>this._openPoints(c)}>${this._t('btn.add_points')}</button>`:''}
											${pointsEnabled ? html`<button class="btn-ghost" @click=${()=>this._resetPoints(c)}>${this._t('btn.reset_points')}</button>`:''}
											<button class="btn-danger" @click=${()=>this._removeChild(c)}>${this._t('btn.delete')}</button>
										</td>
									</tr>
								`)}
							</tbody>
						</table></div>`}
					</div>

					<hr />

					<!-- Categories management -->
					<div class="list section">
						<h3 class="h3-row">
							<span class="collapsible" @click=${()=>this._toggleSection('categories')}><ha-icon class="chev ${this._isCollapsed('categories')?'rot':''}" icon="mdi:chevron-down"></ha-icon>${this._t('section.categories')} (${(this._store.categories||[]).length})</span>
						</h3>
						${this._isCollapsed('categories')? '' : html`<div class="row">
							<input placeholder="${this._t('input.new_category_name')}" .value=${this._newCategoryName||''} @input=${(e)=> this._newCategoryName = e.target.value} />
							<div class="color-cell" style="flex:0 0 auto; align-items:center;">
								<input type="color" .value=${this._colorInputValue(this._newCategoryColor)} @change=${(e)=>{ this._newCategoryColor = e?.target?.value || ''; }} />
							</div>
							<button class="btn-ghost" @click=${this._addCategory}>${this._t('btn.add_category')}</button>
						</div>
						<div class="table-wrap"><table class="table-center">
							<thead><tr><th>${this._t('th.name')}</th><th>${this._t('th.color')}</th><th>${this._t('th.actions')}</th></tr></thead>
							<tbody>
								${(this._store.categories||[]).map(cat=> html`
									<tr>
										<td data-label="${this._t('th.name')}">${cat.name}</td>
										<td data-label="${this._t('th.color')}">
											<div class="color-cell">
												<input type="color" .value=${this._colorInputValue(cat?.color)} @change=${(e)=>this._setCategoryColor(cat, e)} />
											</div>
										</td>
										<td data-label="${this._t('th.actions')}">
											<button class="btn-ghost" @click=${()=> this._promptRenameCategory(cat)}>${this._t('btn.rename')}</button>
											<button class="btn-danger" @click=${()=> this._deleteCategory(cat)}>${this._t('btn.delete')}</button>
										</td>
									</tr>
								`)}
							</tbody>
						</table></div>`}
					</div>

					<hr />
					<h3 class="h3-row"><span class="collapsible" @click=${()=>this._toggleSection('newtask')}><ha-icon class="chev ${this._isCollapsed('newtask')?'rot':''}" icon="mdi:chevron-down"></ha-icon>${this._t('section.new_task')}</span></h3>
					${this._isCollapsed('newtask')? '' : html`<div class="row fields">
						<div class="form-field title">
							<input class="${this._showTitleError? 'invalid':''}" placeholder="${this._t('ph.title')}" .value=${this._taskTitle||''} @input=${e=>{this._taskTitle=e.target.value; this.requestUpdate();}} />
							<div class="error-space">${this._showTitleError? html`<span class="error-text">${this._t('err.title_required')}</span>`:''}</div>
						</div>
						${pointsEnabled ? html`
							<div class="form-field points">
								<input class="${this._showPointsError? 'invalid':''}" type="number" placeholder="${this._t('ph.points')}" .value=${this._taskPoints||''} @input=${e=>{this._taskPoints=e.target.value; this.requestUpdate();}} />
								<div class="error-space">${this._pointsErrorKey? html`<span class="error-text">${this._t(this._pointsErrorKey)}</span>`:''}</div>
							</div>
						` : ''}
					</div>
					<div class="row"><textarea rows="2" placeholder="${this._t('ph.description')}" .value=${this._taskDesc||''} @input=${e=>this._taskDesc=e.target.value}></textarea></div>
					<div class="row">
						<div style="flex:1 1 260px;">
							<div style="font-size:.9rem; color: var(--secondary-text-color); margin-bottom:4px;">${this._t('ph.categories')}</div>
							<div class="multi-dd" @click=${(e)=>{ e.stopPropagation(); this._openCategoriesMenu = !this._openCategoriesMenu; }}>
								<div class="box">
									<span class="multi-dd-value ${this._taskCategories && this._taskCategories.size ? '' : 'placeholder'}">
										${(()=>{ const ids=this._taskCategories||new Set(); const names=(this._store.categories||[]).filter(c=> ids.has(c.id)).map(c=>c.name); return names.length? (names.slice(0,2).join(', ')+(names.length>2?` +${names.length-2}`:'')) : this._t('select.categories'); })()}
									</span>
									<ha-icon icon="mdi:chevron-down"></ha-icon>
								</div>
								${this._openCategoriesMenu ? html`
									<div class="multi-dd-menu" @click=${e=> e.stopPropagation()}>
										${(this._store.categories||[]).map(c=> html`<label><input type="checkbox" .checked=${this._taskCategories?.has?.(c.id)} @change=${(e)=>{ const s=this._taskCategories instanceof Set? this._taskCategories : new Set(this._taskCategories||[]); if(e.target.checked){ s.add(c.id);}else{ s.delete(c.id);} this._taskCategories=s; this.requestUpdate(); }} /><span>${c.name}</span></label>`) }
									</div>
								` : ''}
							</div>
						</div>
					</div>
					<div class="row" style="justify-content:flex-start; align-items:flex-start;">
						<div style="flex:1 1 520px; min-width:260px;">
							<div style="display:flex; flex-direction:column; gap:6px; align-items:flex-start;">
								${pointsEnabled ? html`
									<label style="display:flex; align-items:center; justify-content:flex-start; gap:8px; margin:0; font-size:.95rem; width:fit-content; text-align:left;">
										<input style="margin:0;" type="checkbox" .checked=${!!this._taskEarlyBonusEnabled} @change=${e=>{ this._taskEarlyBonusEnabled = !!e.target.checked; this.requestUpdate(); }} />
										<span style="white-space:nowrap;">${this._t('ui.early_bonus_enabled')}</span>
									</label>
									${(!!this._taskEarlyBonusEnabled || String(this._taskDue||'').trim()) ? html`
										<div style="width:100%;">
											<div class="row fields" style="margin-top:4px;">
												<div class="form-field">
																<input type="date" placeholder="${this._t('ph.due')}" ?disabled=${(!!this._taskEarlyBonusEnabled) && (!!this._repeatEnabled || !!this._weeklyEnabled || !!this._monthlyEnabled)} .value=${this._taskDue||''} @input=${e=>{ this._taskDue=e.target.value; this.requestUpdate(); }} />
																<div class="error-space">${((!!this._taskEarlyBonusEnabled) && (!!this._repeatEnabled || !!this._weeklyEnabled || !!this._monthlyEnabled)) ? html`<span class="error-text">${this._t('warn.schedule_overrides_due')}</span>` : ''}</div>
											</div>
											${this._taskEarlyBonusEnabled ? html`
												<div class="form-field">
													<input type="number" min="0" step="1" placeholder="${this._t('ph.early_bonus_days')}" .value=${this._taskEarlyBonusDays||''} @input=${e=>{ this._taskEarlyBonusDays=e.target.value; this.requestUpdate(); }} />
												</div>
											` : html`<div class="form-field"></div>`}
										</div>
										${this._taskEarlyBonusEnabled ? html`
											<div class="row fields">
												<div class="form-field">
													<input type="number" min="0" step="1" placeholder="${this._t('ph.early_bonus_points')}" .value=${this._taskEarlyBonusPoints||''} @input=${e=>{ this._taskEarlyBonusPoints=e.target.value; this.requestUpdate(); }} />
												</div>
												<div class="form-field"></div>
											</div>
										` : ''}
										</div>
								` : ''}
							` : ''}
																<label style="display:flex; align-items:center; justify-content:flex-start; gap:8px; margin:0; font-size:.95rem; width:fit-content; text-align:left;">
																	<input style="margin:0;" type="checkbox" .checked=${!!this._persistUntilDone} ?disabled=${!!this._weeklyEnabled || !!this._monthlyEnabled} @change=${e=>{ this._persistUntilDone = !!e.target.checked; this._normalizeScheduleFlags(); this.requestUpdate(); }} />
																	<span style="white-space:nowrap;">${this._t('ui.persist_until_done')}</span>
																</label>
																${this._persistUntilDone ? html`
																	<label style="display:flex; align-items:center; justify-content:flex-start; gap:8px; margin-left:24px; font-size:.9rem; width:fit-content; text-align:left;">
																		<input style="margin:0;" type="checkbox" .checked=${this._markOverdue!==false} @change=${e=>{ this._markOverdue = !!e.target.checked; this.requestUpdate(); }} />
																		<span style="white-space:nowrap;">${this._t('ui.mark_overdue')}</span>
																	</label>
																` : ''}
								<label style="display:flex; align-items:center; justify-content:flex-start; gap:8px; margin:0; font-size:.95rem; width:fit-content; text-align:left;">
									<input style="margin:0;" type="checkbox" .checked=${!!this._quickComplete} @change=${e=>{ this._quickComplete = !!e.target.checked; }} />
									<span style="white-space:nowrap;">${this._t('ui.quick_complete')}</span>
								</label>
								<label style="display:flex; align-items:center; justify-content:flex-start; gap:8px; margin:0; font-size:.95rem; width:fit-content; text-align:left;">
									<input style="margin:0;" type="checkbox" .checked=${!!this._skipApproval} @change=${e=>{ this._skipApproval = !!e.target.checked; }} />
									<span style="white-space:nowrap;">${this._t('ui.skip_approval')}</span>
								</label>
								<label style="display:flex; align-items:center; justify-content:flex-start; gap:8px; margin:0; font-size:.95rem; width:fit-content; text-align:left;">
									<input style="margin:0;" type="checkbox" .checked=${!!this._fastestWins} @change=${e=>{ this._fastestWins = !!e.target.checked; }} />
									<span style="white-space:nowrap;">${this._t('ui.fastest_wins')}</span>
								</label>
								<label style="display:flex; align-items:center; justify-content:flex-start; gap:8px; margin:0; font-size:.95rem; width:fit-content; text-align:left;">
																	<input style="margin:0;" type="checkbox" .checked=${!!this._repeatEnabled} ?disabled=${(!!this._weeklyEnabled || !!this._monthlyEnabled) && !this._repeatEnabled} @change=${this._toggleRepeat} />
									<span style="white-space:nowrap;">${this._t('repeat.enable')}</span>
								</label>
																<label style="display:flex; align-items:center; justify-content:flex-start; gap:8px; margin:0; font-size:.95rem; width:fit-content; text-align:left;">
																	<input style="margin:0;" type="checkbox" .checked=${!!this._weeklyEnabled} ?disabled=${!!this._persistUntilDone || ((!!this._repeatEnabled || !!this._monthlyEnabled) && !this._weeklyEnabled)} @change=${this._toggleWeekly} />
																	<span style="white-space:nowrap;">${this._t('schedule.weekly')}</span>
																</label>
																<label style="display:flex; align-items:center; justify-content:flex-start; gap:8px; margin:0; font-size:.95rem; width:fit-content; text-align:left;">
																	<input style="margin:0;" type="checkbox" .checked=${!!this._monthlyEnabled} ?disabled=${!!this._persistUntilDone || ((!!this._repeatEnabled || !!this._weeklyEnabled) && !this._monthlyEnabled)} @change=${this._toggleMonthly} />
																	<span style="white-space:nowrap;">${this._t('schedule.monthly')}</span>
																</label>
							</div>
															${this._repeatEnabled ? html`
								<div class="repeat-line">
									<div class="repeat-days">
										<div style="font-size:.9rem; color: var(--secondary-text-color); margin-bottom:4px;">${this._t('repeat.label')}</div>
										<div class="days">
											${['mon','tue','wed','thu','fri','sat','sun'].map(k=> html`
												<span class="day ${this._repeatDays.has(k)?'on':''}" @click=${()=>{ const s=this._repeatDays; s.has(k)?s.delete(k):s.add(k); this.requestUpdate(); }}>${this._t('repeat.days.'+k)}</span>
											`)}
										</div>
									</div>
									<div class="repeat-assign">
										<div style="font-size:.9rem; color: var(--secondary-text-color); margin-bottom:4px;">${this._t('repeat.auto_assign')}</div>
										<div class="multi-dd" @click=${(e)=>{ e.stopPropagation(); this._openRepeatMenu = !this._openRepeatMenu; }}>
											<div class="box">
												<span class="multi-dd-value ${this._repeatAssign && this._repeatAssign.size ? '' : 'placeholder'}">
													${(()=>{ const ids=this._repeatAssign||new Set(); const names=children.filter(c=>ids.has(c.id)).map(c=>c.name); return names.length? (names.slice(0,2).join(', ')+(names.length>2?` +${names.length-2}`:'')) : '—'; })()}
												</span>
												<ha-icon icon="mdi:chevron-down"></ha-icon>
											</div>
											${this._openRepeatMenu ? html`
												<div class="multi-dd-menu" @click=${e=> e.stopPropagation()}>
													${children.map(c=> html`<label><input type="checkbox" .checked=${this._repeatAssign?.has?.(c.id)} @change=${(e)=>{ const s=this._repeatAssign instanceof Set? this._repeatAssign : new Set(this._repeatAssign||[]); if(e.target.checked){ s.add(c.id);}else{ s.delete(c.id);} this._repeatAssign=s; this.requestUpdate(); }} /><span>${c.name}</span></label>`)}
												</div>
											` : ''}
										</div>
									</div>
								</div>
							` : ''}
						</div>
					</div>
					<div class="row">
						<button type="button" class="btn-ghost" @click=${()=> this._iconModalOpen = true}>${this._t('icon.choose')}</button>
						${this._editingTask ? html`
							<button class="btn-primary" ?disabled=${this._hasFormErrors} @click=${this._saveEditedTask}>${this._t('btn.update_task')}</button>
							<span style="font-size:.9rem; color: var(--secondary-text-color);">${this._t('editor.loaded_task')}</span>
						` : html`
							<button class="btn-primary" ?disabled=${this._hasFormErrors} @click=${this._createTask}>${this._t('btn.create_task')}</button>
						`}
					</div>
					`}

					<hr />
					<h3 class="h3-row">
						<span class="collapsible" @click=${()=>this._toggleSection('tasks')}><ha-icon class="chev ${this._isCollapsed('tasks')?'rot':''}" icon="mdi:chevron-down"></ha-icon>${this._t('section.tasks')}</span>
						<button class="btn-ghost icon-btn" title="${this._t('sort.configure')}" @click=${()=> this._sortModalOpen = true}><ha-icon icon="mdi:sort-variant"></ha-icon></button>
					</h3>
					${this._isCollapsed('tasks')? '' : html`<div class="table-wrap"><table class="table-center">
						<thead><tr><th>${this._t('ph.title')}</th>${pointsEnabled ? html`<th>${this._t('ph.points')}</th>`:''}<th>${this._t('th.categories')}</th><th>${this._t('th.assign')}</th><th>${this._t('th.actions')}</th></tr></thead>
						<tbody @click=${()=>{ this._openAssignMenuFor = null; this._assignMenuStyle=''; }}>
										${this._sortTasks(this._store.allTasks.filter(t=>!t.assigned_to), false).map(t=> html`
								<tr data-task="${t.id}">
									<td data-label="${this._t('ph.title')}">${t.title}${t.icon? html` <ha-icon class="inline-ico" icon="${t.icon}"></ha-icon>`:''}</td>
								${pointsEnabled ? html`<td data-label="${this._t('ph.points')}"><b>${t.points}</b></td>`:''}
									<td data-label="${this._t('th.categories')}">
										${(()=>{ const ids=Array.isArray(t.categories)? t.categories:[]; const cats=this._orderedCategories(ids); return cats.length? cats.map(c=> this._renderCategoryChip(c)) : html`—`; })()}
									</td>
												<td data-label="${this._t('th.assign')}">
													${this._autoAssignActive(t) ? (()=>{
														const ids = (Array.isArray(t.repeat_child_ids)&&t.repeat_child_ids.length)? t.repeat_child_ids : (t.repeat_child_id? [t.repeat_child_id]:[]);
														const names = this._store.children.filter(c=> ids.includes(c.id)).map(c=> c.name);
														return html`<span>${this._t('assign.auto_to',{names: (names.length? names.join(', ') : '—')})}</span>`;
													})() : html`
													<div class="multi-dd" @click=${(e)=>{ e.stopPropagation(); const open = this._openAssignMenuFor===t.id? null : t.id; this._openAssignMenuFor = open; if (open){ try{ const box=e.currentTarget.querySelector('.box'); const r=box.getBoundingClientRect(); this._assignMenuStyle=`position:fixed;left:${Math.round(r.left)}px;top:${Math.round(r.bottom+4)}px;width:${Math.round(r.width)}px;z-index:200000`; }catch{ this._assignMenuStyle=''; } } else { this._assignMenuStyle=''; } }}>
														<div class="box"><span class="multi-dd-value placeholder">${this._t('select.assign_child')}</span><ha-icon icon="mdi:chevron-down"></ha-icon></div>
														${this._openAssignMenuFor===t.id ? html`
															<div class="multi-dd-menu" style="${this._assignMenuStyle||''}" @click=${e=> e.stopPropagation()}>
																${this._store.children.map(c=> html`<label><input class="c4k-assign" type="checkbox" value=${c.id} @change=${(e)=> this._updateAssignSummary(t.id, t)} /><span>${c.name}</span></label>`)}
															</div>
														`: ''}
													</div>`}
												</td>
									<td data-label="${this._t('th.actions')}">
														${(this._weeklyEnabled || this._monthlyEnabled) ? html`
															<div class="repeat-line">
																<div class="repeat-assign">
																	<div style="font-size:.9rem; color: var(--secondary-text-color); margin-bottom:4px;">${this._t('repeat.auto_assign')}</div>
																	<div class="multi-dd" @click=${(e)=>{ e.stopPropagation(); this._openRepeatMenu = !this._openRepeatMenu; }}>
																		<div class="box">
																			<span class="multi-dd-value ${this._repeatAssign && this._repeatAssign.size ? '' : 'placeholder'}">
																				${(()=>{ const ids=this._repeatAssign||new Set(); const names=children.filter(c=>ids.has(c.id)).map(c=>c.name); return names.length? (names.slice(0,2).join(', ')+(names.length>2?` +${names.length-2}`:'')) : '—'; })()}
																			</span>
																			<ha-icon icon="mdi:chevron-down"></ha-icon>
																		</div>
																		${this._openRepeatMenu ? html`
																			<div class="multi-dd-menu" @click=${e=> e.stopPropagation()}>
																				${children.map(c=> html`<label><input type="checkbox" .checked=${this._repeatAssign?.has?.(c.id)} @change=${(e)=>{ const s=this._repeatAssign instanceof Set? this._repeatAssign : new Set(this._repeatAssign||[]); if(e.target.checked){ s.add(c.id);}else{ s.delete(c.id);} this._repeatAssign=s; this.requestUpdate(); }} /><span>${c.name}</span></label>`)}
																			</div>
																		` : ''}
																	</div>
																</div>
															</div>
														` : ''}
										<button class="btn-ghost" @click=${()=> this._editTask(t)}>${this._t('btn.edit')}</button>
										<button class="btn-primary" ?disabled=${this._autoAssignActive(t)} title="${this._autoAssignActive(t)? this._t('assign.disabled_auto') : ''}" @click=${()=> {
											const row = this.shadowRoot.querySelector(`tr[data-task="${t.id}"]`);
											const checkedNow = Array.from(row?.querySelectorAll('.c4k-assign:checked')||[]).map(i=> i.value);
											const ids = (Array.isArray(t._assignToMulti) && t._assignToMulti.length) ? t._assignToMulti : checkedNow;
											this._assignTaskMulti(t, ids);
										}}>${this._t('btn.assign')}</button>
										<button class="btn-danger" @click=${()=> this._deleteTask(t.id)}>${this._t('btn.delete')}</button>
									</td>
								</tr>
							`)}
						</tbody>
						</table></div>`}

					<hr />
					<h3 class="h3-row">
						<span class="collapsible" @click=${()=>this._toggleSection('overview')}><ha-icon class="chev ${this._isCollapsed('overview')?'rot':''}" icon="mdi:chevron-down"></ha-icon>${this._t('overview.title')}</span>
						<button class="btn-ghost icon-btn" title="${this._t('sort.configure')}" @click=${()=> this._sortModalOpen = true}><ha-icon icon="mdi:sort-variant"></ha-icon></button>
					</h3>
					${this._isCollapsed('overview')? '' : (()=>{
						const allAssigned=(this._store.allTasks||[]).filter(t=>!!t.assigned_to);
						const active=allAssigned.filter(t=>!['approved','awaiting_approval','taken'].includes(this._effectiveStatus(t)));
						if(!active.length) return html`<i>${this._t('overview.none_active')}</i>`;
						const sorted=this._sortTasks(active, true);
						const top=sorted.slice(0,3); const pending=allAssigned.filter(t=>t.status==='awaiting_approval').length;
						const row=(t)=> html`<tr>
							<td data-label="${this._t('ph.title')}">${t.title}${t.icon? html` <ha-icon class="inline-ico" icon="${t.icon}"></ha-icon>`:''}</td>
							${pointsEnabled ? html`<td data-label="${this._t('ph.points')}"><b>${t.points}</b></td>`:''}
							<td data-label="${this._t('th.categories')}">${(()=>{ const ids=Array.isArray(t.categories)? t.categories:[]; const names=this._orderedCategoryNames(ids); return names.length? names.map(n=> html`<span class='chip'>${n}</span>`): html`—`; })()}</td>
							<td data-label="${this._t('th.status')}">${this._renderStatusBadge(t)}</td>
							<td data-label="${this._t('th.completed')}">${(()=>{ const ts=this._displayedTsFor(t); if(!ts) return html`—`; const dt=this._fmtDateTime(ts); return html`${dt.formatted}`; })()}</td>
							<td data-label="${this._t('th.assign')}">${t.assigned_to_name || this._t('status.unassigned')}</td>
							<td data-label="${this._t('th.actions')}">
								${t.status==="assigned" ? html`
									${this._canManualReassign(t) ? html`<button class="btn-ghost" @click=${()=>this._manualReassign(t)}>${this._t('btn.back')}</button>`:''}
									<button class="btn-danger" @click=${()=>this._deleteTask(t.id)}>${this._t('btn.delete')}</button>
								`: t.status==="in_progress" ? html`
									<button class="btn-ghost" @click=${()=>this._setStatus(t.id,'awaiting_approval')}>${this._t('btn.awaiting')}</button>
									<button class="btn-ghost" @click=${()=>this._setStatus(t.id,'assigned')}>${this._t('btn.back')}</button>
									<button class="btn-danger" @click=${()=>this._deleteTask(t.id)}>${this._t('btn.delete')}</button>
								`: t.status==="awaiting_approval" ? html`
									<button class="btn-primary" @click=${()=>this._approve(t)}>${this._t('btn.approve')}</button>
									<button class="btn-ghost" @click=${()=>this._setStatus(t.id,'assigned')}>${this._t('btn.back')}</button>
									<button class="btn-danger" @click=${()=>this._deleteTask(t.id)}>${this._t('btn.delete')}</button>
								`: html`${this._canManualReassign(t) ? html`<button class="btn-ghost" @click=${()=>this._manualReassign(t)}>${this._t('btn.back')}</button>`:''}<button class="btn-danger" @click=${()=>this._deleteTask(t.id)}>${this._t('btn.delete')}</button>`}
							</td>
						</tr>`;
						return html`
							<div class="table-wrap"><table class="table-center table-fixed">${this._renderAssignedFinishedColgroup()}
								<thead><tr><th>${this._t('ph.title')}</th>${pointsEnabled ? html`<th>${this._t('ph.points')}</th>`:''}<th>${this._t('th.categories')}</th><th>${this._t('th.status')}</th><th>${this._t('th.completed')}</th><th>${this._t('th.assign')}</th><th>${this._t('th.actions')}</th></tr></thead>
								<tbody>${top.map(row)}</tbody>
							</table></div>
							<div class="row" style="justify-content:flex-end;">${active.length>3? html`<button class="btn-primary" @click=${()=>this._tasksModalOpen=true}>${this._t('overview.show_all',{pending})}</button>`:''}</div>
						`;
					})()}

					<h3 class="h3-row">
						<span class="collapsible" @click=${()=>this._toggleSection('finished')}><ha-icon class="chev ${this._isCollapsed('finished')?'rot':''}" icon="mdi:chevron-down"></ha-icon>${this._t('overview.finished_title')}</span>
					</h3>
					${this._isCollapsed('finished')? '' : (()=>{
						const allAssigned=(this._store.allTasks||[]).filter(t=>!!t.assigned_to);
						const finished=allAssigned.filter(t=>['approved','awaiting_approval','taken'].includes(this._effectiveStatus(t)));
						if(!finished.length) return html`<i>${this._t('overview.finished_none')}</i>`;
						const sorted=this._sortTasks(finished, true);
						const row=(t)=> html`<tr>
							<td data-label="${this._t('ph.title')}">${t.title}${t.icon? html` <ha-icon class="inline-ico" icon="${t.icon}"></ha-icon>`:''}</td>
							${pointsEnabled ? html`<td data-label="${this._t('ph.points')}"><b>${t.points}</b></td>`:''}
							<td data-label="${this._t('th.categories')}">${(()=>{ const ids=Array.isArray(t.categories)? t.categories:[]; const names=this._orderedCategoryNames(ids); return names.length? names.map(n=> html`<span class='chip'>${n}</span>`): html`—`; })()}</td>
								<td data-label="${this._t('th.status')}">${this._renderStatusBadge(t)}</td>
							<td data-label="${this._t('th.completed')}">${(()=>{ const ts=this._displayedTsFor(t); if(!ts) return html`—`; const dt=this._fmtDateTime(ts); return html`${dt.formatted}`; })()}</td>
							<td data-label="${this._t('th.assign')}">${t.assigned_to_name || this._t('status.unassigned')}</td>
							<td data-label="${this._t('th.actions')}">
								${t.status==="awaiting_approval" ? html`
									<button class="btn-primary" @click=${()=>this._approve(t)}>${this._t('btn.approve')}</button>
									<button class="btn-ghost" @click=${()=>this._setStatus(t.id,'assigned')}>${this._t('btn.back')}</button>
									<button class="btn-danger" @click=${()=>this._deleteTask(t.id)}>${this._t('btn.delete')}</button>
								` : html`
									${this._canManualReassign(t) ? html`<button class="btn-ghost" @click=${()=>this._manualReassign(t)}>${this._t('btn.back')}</button>`:''}
									<button class="btn-danger" @click=${()=>this._deleteTask(t.id)}>${this._t('btn.delete')}</button>
								`}
							</td>
						</tr>`;
						return html`
							<div class="table-wrap"><table class="table-center table-fixed">${this._renderAssignedFinishedColgroup()}
								<thead><tr><th>${this._t('ph.title')}</th>${pointsEnabled ? html`<th>${this._t('ph.points')}</th>`:''}<th>${this._t('th.categories')}</th><th>${this._t('th.status')}</th><th>${this._t('th.completed')}</th><th>${this._t('th.assign')}</th><th>${this._t('th.actions')}</th></tr></thead>
								<tbody>${sorted.map(row)}</tbody>
							</table></div>
						`;
					})()}

				${showScoreboard ? html`
					<hr />
					<h3 class="h3-row"><span class="collapsible" @click=${()=>this._toggleSection('scoreboard')}><ha-icon class="chev ${this._isCollapsed('scoreboard')?'rot':''}" icon="mdi:chevron-down"></ha-icon>${this._t('section.scoreboard')}</span></h3>
					${this._isCollapsed('scoreboard')? '' : html`
						<ol style="display:grid; gap:8px; padding-left:18px;">
							${[...children].sort((a,b)=>b.points-a.points).map((c,i)=> html`
								<li style="display:flex; align-items:center; gap:10px;"><span class="badge status-in_progress">#${i+1}</span><span style="flex:1;">${c.name}</span><b>${c.points}</b></li>
							`)}
						</ol>
					`}
				` : ''}
				</div>

				${pointsEnabled ? this._renderPointsModal() : ''}
				${this._renderAllTasksModal()}
				${pointsEnabled ? this._renderShopModal() : ''}
			${this._renderAdvancedModal()}
			${this._renderSortModal()}
				${this._renderReassignModal()}
		</ha-card>
		${this._renderIconModal()}
		${this._renderCustomIconModal()}
	`;
}	// ------- OVERVIEW-ONLY VIEW -------
	_renderOverviewOnly(){
		const pointsEnabled = this._pointsEnabled();
		const all=(this._store.allTasks||[]).filter(t=>!!t.assigned_to && !['approved','awaiting_approval','taken'].includes(this._effectiveStatus(t)));
		return html`
			<ha-card header="${this._t('overview.title')}">
				<div class="card-content">
					${all.length===0 ? html`<i>${this._t('overview.none')}</i>` : (()=>{
						const parse=(x)=>{ try{ return x? new Date(x).getTime():0; }catch{return 0;} };
						const sorted=this._sortTasks(all, true);
						const top=sorted.slice(0,3); const pending=all.filter(t=>t.status==='awaiting_approval').length;
						const row=(t)=> html`<tr>
							<td data-label="${this._t('ph.title')}">${t.title}${t.icon? html` <ha-icon class="inline-ico" icon="${t.icon}"></ha-icon>`:''}</td>
							${pointsEnabled ? html`<td data-label="${this._t('ph.points')}"><b>${t.points}</b></td>`:''}
							<td data-label="${this._t('th.categories')}">${(()=>{ const ids=Array.isArray(t.categories)? t.categories:[]; const names=(this._store.categories||[]).filter(c=> ids.includes(c.id)).map(c=> c.name); return names.length? names.map(n=> html`<span class='chip'>${n}</span>`): html`—`; })()}</td>
							<td data-label="${this._t('th.status')}">${this._renderStatusBadge(t)}</td>
							<td data-label="${this._t('th.assign')}">${t.assigned_to_name || this._t('status.unassigned')}</td>
							<td data-label="${this._t('th.actions')}">
								${t.status==="assigned" ? html`
									${this._canManualReassign(t) ? html`<button class="btn-ghost" @click=${()=>this._manualReassign(t)}>${this._t('btn.back')}</button>`:''}
									<button class="btn-danger" @click=${()=>this._deleteTask(t.id)}>${this._t('btn.delete')}</button>
								` : t.status==="in_progress" ? html`
									<button class="btn-ghost" @click=${()=>this._setStatus(t.id,'awaiting_approval')}>${this._t('btn.awaiting')}</button>
									<button class="btn-ghost" @click=${()=>this._setStatus(t.id,'assigned')}>${this._t('btn.back')}</button>
									<button class="btn-danger" @click=${()=>this._deleteTask(t.id)}>${this._t('btn.delete')}</button>
								` : t.status==="awaiting_approval" ? html`
									<button class="btn-primary" @click=${()=>this._approve(t)}>${this._t('btn.approve')}</button>
									<button class="btn-ghost" @click=${()=>this._setStatus(t.id,'assigned')}>${this._t('btn.back')}</button>
									<button class="btn-danger" @click=${()=>this._deleteTask(t.id)}>${this._t('btn.delete')}</button>
								` : html`${this._canManualReassign(t) ? html`<button class="btn-ghost" @click=${()=>this._manualReassign(t)}>${this._t('btn.back')}</button>`:''}<button class="btn-danger" @click=${()=>this._deleteTask(t.id)}>${this._t('btn.delete')}</button>`}
							</td>
						</tr>`;
						return html`
							<div class="table-wrap"><table class="table-center">
								<thead><tr><th>${this._t('ph.title')}</th>${pointsEnabled ? html`<th>${this._t('ph.points')}</th>`:''}<th>${this._t('th.categories')}</th><th>${this._t('th.status')}</th><th>${this._t('th.completed')}</th><th>${this._t('th.assign')}</th><th>${this._t('th.actions')}</th></tr></thead>
								<tbody>${top.map(row)}</tbody>
							</table></div>
							<div class="row" style="justify-content:flex-end;">${all.length>3? html`<button class="btn-primary" @click=${()=>this._tasksModalOpen=true}>${this._t('overview.show_all',{pending})}</button>`:''}</div>
						`;
					})()}
				</div>
				${this._renderAllTasksModal()}
			</ha-card>`;
	}

	_renderPointsModal(){
		return html`<div class="overlay ${this._pointsChild?'open':''}" @click=${e=>{ if (e.target.classList.contains('overlay')) this._closePoints(); }}>
			<div class="modal" @click=${e=>e.stopPropagation()}>
				<h3>${this._pointsChild ? this._t('points.title', { name: this._pointsChild.name }) : ''}</h3>
				<div style="font-size:.85rem; color: var(--secondary-text-color);">${this._t('points.quick')}</div>
				<div class="row" style="gap:8px;">${[5,10,15,20].map(n=> html`<button class="btn-primary" @click=${()=>this._addPointsQuick(n)}>+${n}</button>`)}</div>
				<div style="font-size:.85rem; color: var(--secondary-text-color);">${this._t('points.remove')}</div>
				<div class="row" style="gap:8px;">${[5,10,15,20].map(n=> html`<button class="btn-danger" @click=${()=>this._addPointsQuick(-n)}>−${n}</button>`)}</div>
				<div style="font-size:.85rem; color: var(--secondary-text-color);">${this._t('points.custom')}</div>
				<div class="row" style="gap:6px; align-items:center;">
					<input type="number" .value=${String(this._pointsValue||0)} @input=${e=> this._pointsValue = Number(e.target.value||0)} style="max-width:120px;" />
					<button class="btn-primary" @click=${()=>this._addPointsQuick(this._pointsValue||0)}>${this._t('form.add')}</button>
					<button class="btn-ghost" @click=${this._closePoints}>${this._t('form.cancel')}</button>
				</div>
			</div>
		</div>`;
	}
	_renderAllTasksModal(){
		const pointsEnabled = this._pointsEnabled();
		return html`<div class="overlay ${this._tasksModalOpen?'open':''}" @click=${e=>{ if (e.target.classList.contains('overlay')) this._tasksModalOpen=false; }}>
			${this._tasksModalOpen ? html`<div class="modal" style="max-width: 820px; width: min(95vw, 820px);" @click=${e=>e.stopPropagation()}>
				<h3>${this._t('overview.title')}</h3>
				<div style="max-height:60vh; overflow:visible;">
						<div class="table-wrap"><table class="table-center table-fixed">${this._renderAssignedFinishedColgroup()}
							<thead><tr><th>${this._t('ph.title')}</th>${pointsEnabled ? html`<th>${this._t('ph.points')}</th>`:''}<th>${this._t('th.categories')}</th><th>${this._t('th.status')}</th><th>${this._t('th.completed')}</th><th>${this._t('th.assign')}</th><th>${this._t('th.actions')}</th></tr></thead>
						<tbody>${(()=>{
							const all=(this._store.allTasks||[]).filter(t=>!!t.assigned_to && !['approved','awaiting_approval','taken'].includes(this._effectiveStatus(t)));
							const parse=(x)=>{ try{ return x? new Date(x).getTime():0; }catch{return 0;} };
							const sorted=this._sortTasks(all, true);
							return sorted.map((t)=> html`<tr>
								<td data-label="${this._t('ph.title')}">${t.title}${t.icon? html` <ha-icon class="inline-ico" icon="${t.icon}"></ha-icon>`:''}</td>
								${pointsEnabled ? html`<td data-label="${this._t('ph.points')}"><b>${t.points}</b></td>`:''}
								<td data-label="${this._t('th.categories')}">${(()=>{ const ids=Array.isArray(t.categories)? t.categories:[]; const names=this._orderedCategoryNames(ids); return names.length? names.map(n=> html`<span class='chip'>${n}</span>`): html`—`; })()}</td>
								<td data-label="${this._t('th.status')}">${this._renderStatusBadge(t)}</td>
								<td data-label="${this._t('th.completed')}">${(()=>{ const ts=this._displayedTsFor(t); if(!ts) return html`—`; const dt=this._fmtDateTime(ts); return html`${dt.formatted}`; })()}</td>
								<td data-label="${this._t('th.assign')}">${t.assigned_to_name || this._t('status.unassigned')}</td>
								<td data-label="${this._t('th.actions')}">
									${t.status==="assigned" ? html`${this._canManualReassign(t) ? html`<button class="btn-ghost" @click=${()=>this._manualReassign(t)}>${this._t('btn.back')}</button>`:''}<button class="btn-danger" @click=${()=>this._deleteTask(t.id)}>${this._t('btn.delete')}</button>`
										: t.status==="in_progress" ? html`
											<button class="btn-ghost" @click=${()=>this._setStatus(t.id,'awaiting_approval')}>${this._t('btn.awaiting')}</button>
											<button class="btn-ghost" @click=${()=>this._setStatus(t.id,'assigned')}>${this._t('btn.back')}</button>
											<button class="btn-danger" @click=${()=>this._deleteTask(t.id)}>${this._t('btn.delete')}</button>`
										: t.status==="awaiting_approval" ? html`
											<button class="btn-primary" @click=${()=>this._approve(t)}>${this._t('btn.approve')}</button>
											<button class="btn-ghost" @click=${()=>this._setStatus(t.id,'assigned')}>${this._t('btn.back')}</button>
											<button class="btn-danger" @click=${()=>this._deleteTask(t.id)}>${this._t('btn.delete')}</button>`
										: html`${this._canManualReassign(t) ? html`<button class="btn-ghost" @click=${()=>this._manualReassign(t)}>${this._t('btn.back')}</button>`:''}<button class="btn-danger" @click=${()=>this._deleteTask(t.id)}>${this._t('btn.delete')}</button>`}
								</td>
							</tr>`);
						})()}</tbody>
					</table></div>
				</div>
				<div class="row" style="justify-content:flex-end; margin-top:8px;"><button class="btn-ghost" @click=${()=>this._tasksModalOpen=false}>${this._t('form.cancel')}</button></div>
			</div>`: ''}
		</div>`;
	}

		_renderAssignedFinishedColgroup(){
			const pointsEnabled = this._pointsEnabled();
			// Keep Assigned/Finished tables aligned by forcing identical column widths.
			// Uses percentages so it scales with the available width.
			return pointsEnabled ? html`<colgroup>
				<col style="width:22%;" />
				<col style="width:8%;" />
				<col style="width:16%;" />
				<col style="width:12%;" />
				<col style="width:22%;" />
				<col style="width:10%;" />
				<col style="width:10%;" />
			</colgroup>` : html`<colgroup>
				<col style="width:24%;" />
				<col style="width:18%;" />
				<col style="width:12%;" />
				<col style="width:24%;" />
				<col style="width:12%;" />
				<col style="width:10%;" />
			</colgroup>`;
		}
	_renderShopModal(){
		if (!this._pointsEnabled()) return '';
		return html`<div class="overlay shop-admin-overlay ${this._shopModalOpen?'open':''}" @click=${e=>{ if (e.target.classList.contains('overlay')) this._shopModalOpen=false; }}>
			<div class="modal shop-modal shop-admin-modal" @click=${e=>e.stopPropagation()}>
                <h3>${this._t('shop.title')}</h3>
				<div class="row fields">
					<div class="form-field title"><input placeholder="${this._t('shop.item')}" .value=${this._shopTitle||''} @input=${e=>this._shopTitle=e.target.value} /></div>
					<div class="form-field points"><input type="number" placeholder="${this._t('shop.price')}" .value=${this._shopPrice||''} @input=${e=>this._shopPrice=e.target.value} /></div>
				</div>
				<div class="shop-add-row">
					<div class="shop-add-left">
						${this._shopImage ? html`<img class="img-preview" src="${this._resolveUrl(this._shopImage)}" alt="preview" loading="lazy" decoding="async"/>` : html`<div class="img-preview" style="display:grid;place-items:center;color:var(--secondary-text-color);">${this._t('shop.image')}</div>`}
						<input id="c4k-shop-file" class="file-hidden" type="file" accept="image/*" @change=${this._onPickImage} />
						<button class="btn-ghost" @click=${()=> this.shadowRoot.getElementById('c4k-shop-file')?.click()}>${this._t('shop.upload')}</button>
					</div>
					<button class="btn-primary" style="flex:0 0 auto;" @click=${this._addShopItem}>${this._t('shop.add_item')}</button>
				</div>
								<div class="table-wrap desktop-only"><table class="table-center">
					<thead><tr><th>${this._t('shop.item')}</th><th>${this._t('shop.price')}</th><th>${this._t('shop.active')}</th><th>${this._t('th.actions')}</th></tr></thead>
					<tbody>
						${this._store.items.map(i=> html`
							${this._editItem && this._editItem.id===i.id ? html`
								<tr>
									<td data-label="${this._t('shop.item')}"><div style="display:flex; align-items:center; gap:8px;">${this._editItem.image? html`<img class="img-preview" style="width:36px;height:36px;" src="${this._resolveUrl(this._editItem.image)}" loading="lazy" decoding="async">`:''}<input style="max-width:220px;" .value=${this._editItem.title||''} @input=${e=> this._editItem={...this._editItem, title:e.target.value}} /><input type="file" accept="image/*" @change=${this._onPickEditImage} /></div></td>
									<td data-label="${this._t('shop.price')}"><input type="number" style="max-width:120px;" .value=${this._editItem.price||0} @input=${e=> this._editItem={...this._editItem, price:Number(e.target.value||0)}} /></td>
									<td data-label="${this._t('shop.active')}"><input type="checkbox" .checked=${this._editItem.active!==false} @change=${e=> this._editItem={...this._editItem, active: e.target.checked}} /></td>
									<td data-label="${this._t('th.actions')}"><button class="btn-primary" @click=${this._saveEditItem}>${this._t('form.save')}</button><button class="btn-ghost" @click=${()=>{this._editItem=null; this.requestUpdate();}}>${this._t('form.cancel')}</button></td>
								</tr>
							`: html`
								<tr>
									<td data-label="${this._t('shop.item')}">${i.image? html`<img class="img-preview" style="width:36px;height:36px;margin-right:6px;vertical-align:middle;" src="${this._resolveUrl(i.image)}" loading="lazy" decoding="async">`:''}${i.title}</td>
									<td data-label="${this._t('shop.price')}"><b>${i.price}</b></td>
									<td data-label="${this._t('shop.active')}"><input type="checkbox" .checked=${i.active!==false} @change=${e=> this._toggleItemActive(i,e)} /></td>
									<td data-label="${this._t('th.actions')}"><button class="btn-ghost" @click=${()=> this._startEditItem(i)}>${this._t('btn.edit')}</button><button class="btn-ghost" @click=${()=> this._openAdvanced(i)}>${this._t('shop.advanced')}</button><button class="btn-danger" @click=${()=>this._deleteShopItem(i.id)}>${this._t('btn.delete')}</button></td>
								</tr>
							`}
						`)}
					</tbody>
				</table></div>
								<!-- Mobile cards for items -->
								<div class="mobile-only mobile-only-grid">
									${this._store.items.map(i=> html`
										<div class="shop-admin-card">
											<div class="shop-admin-head">
												${i.image? html`<img src="${this._resolveUrl(i.image)}" alt="${i.title}" loading="lazy" decoding="async">` : html`<div class="img-preview" style="width:44px;height:44px;display:grid;place-items:center;">?</div>`}
												<div class="shop-admin-meta">
													<div class="shop-admin-title">${i.title}</div>
													<div class="shop-admin-price">${i.price}</div>
												</div>
																								<label class="shop-admin-toggle">
																									<span>${this._t('shop.active')}</span>
																									<ha-switch .checked=${i.active!==false} @change=${e=> this._toggleItemActive(i,e)}></ha-switch>
																								</label>
											</div>
											<div class="shop-admin-actions">
												<button class="btn-ghost" @click=${()=> this._startEditItem(i)}>${this._t('btn.edit')}</button>
												<button class="btn-ghost" @click=${()=> this._openAdvanced(i)}>${this._t('shop.advanced')}</button>
												<button class="btn-danger" @click=${()=> this._deleteShopItem(i.id)}>${this._t('btn.delete')}</button>
											</div>
										</div>
									`)}
								</div>
				<div class="row" style="align-items:center; justify-content:space-between; margin-top:12px;">
					<h3 style="margin:0;">${this._t('shop.history')}</h3>
					${(this._store.purchases||[]).length ? html`<button class="btn-danger" @click=${this._clearShopHistory}>${this._t('shop.clear_history')}</button>`:''}
				</div>
								<div class="table-wrap desktop-only"><table class="table-center">
					<thead><tr><th>${this._t('shop.date')}</th><th>${this._t('shop.time')}</th><th>${this._t('shop.child')}</th><th>${this._t('shop.item')}</th><th>${this._t('shop.price')}</th></tr></thead>
					<tbody>
						${[...(this._store.purchases||[])].slice().reverse().map(p=> { const dt=this._fmtDateTime(p.ts); return html`<tr>
							<td data-label="${this._t('shop.date')}">${dt.date}</td>
							<td data-label="${this._t('shop.time')}">${dt.time}</td>
							<td data-label="${this._t('shop.child')}">${p.child_name||p.child_id}</td>
							<td data-label="${this._t('shop.item')}">${p.title}</td>
							<td data-label="${this._t('shop.price')}"><b>${p.price}</b></td>
						</tr>`; })}
					</tbody>
				</table></div>
								<!-- Mobile cards for purchases -->
								<div class="mobile-only mobile-only-grid">
									${[...(this._store.purchases||[])].slice().reverse().map(p=> { const dt=this._fmtDateTime(p.ts); return html`
										<div class="purchase-card">
											<div class="kv"><b>${this._t('shop.date')}</b><span>${dt.date}</span></div>
											<div class="kv"><b>${this._t('shop.time')}</b><span>${dt.time}</span></div>
											<div class="kv"><b>${this._t('shop.child')}</b><span>${p.child_name||p.child_id}</span></div>
											<div class="kv"><b>${this._t('shop.item')}</b><span>${p.title}</span></div>
											<div class="kv"><b>${this._t('shop.price')}</b><b>${p.price}</b></div>
										</div>`; })}
								</div>
				<div class="row" style="justify-content:flex-end; margin-top:8px;"><button class="btn-ghost" @click=${()=>this._shopModalOpen=false}>${this._t('form.close')}</button></div>
			</div>
		</div>`;
	}
	_renderAdvancedModal(){
		return html`<div class="overlay ${this._advItem?'open':''}" @click=${e=>{ if (e.target.classList.contains('overlay')) this._advItem=null; }}>
			${this._advItem ? html`<div class="modal" style="max-width: 900px; width: min(95vw, 900px);" @click=${e=>e.stopPropagation()}>
				<h3>${this._t('shop.advanced')} — ${this._advItem.title}</h3>
				<div style="font-size:.9rem; color: var(--secondary-text-color); margin-bottom:6px;">${this._t('shop.steps')}</div>
				<div style="display:grid; gap:8px;">${(this._advSteps||[]).map((st,idx)=> html`
					<div style="display:grid; grid-template-columns: 1fr auto; gap:8px; align-items:center; border:1px solid var(--divider-color); padding:8px; border-radius:8px;">
						${st.type==='delay' ? html`<div style="display:flex; gap:8px; align-items:center;"><b>${this._t('shop.delay')}</b><input type="number" style="width:110px;" .value=${st.seconds||0} @input=${e=>{ st.seconds=Number(e.target.value||0); this.requestUpdate(); }} /><span>${this._t('shop.seconds')}</span></div>` : html`
							<div style="display:flex; gap:8px; align-items:center; flex-wrap:wrap;">
								<b>${this._t('shop.entity')}</b>
								<select style="min-width:260px;" .value=${st.entity_id||''} @change=${e=>{ st.entity_id=e.target.value; if(!st.op) st.op = this._defaultOpFor(st.entity_id); this.requestUpdate(); }}>
									<option value="">—</option>
									${(()=>{ const ents=Object.values(this.hass.states); const cur=st.entity_id||''; const exists=cur && ents.some(x=>x.entity_id===cur); return html`${!exists&&cur? html`<option value=${cur} selected>${cur}</option>`:''}${ents.map(s=> html`<option value=${s.entity_id} ?selected=${s.entity_id===cur}>${s.attributes.friendly_name||s.entity_id}</option>`)}`; })()}
								</select>
								<b>${this._t('shop.operation')}</b>
								<select .value=${st.op||(st.entity_id?this._defaultOpFor(st.entity_id):'')} @change=${e=>{ st.op=e.target.value; this.requestUpdate(); }}>
									${this._opsForDomain((st.entity_id||'').split('.')[0]).map(op=> html`<option value=${op} ?selected=${op===st.op}>${op}</option>`)}</select>
							</div>`}
						<button class="btn-danger" @click=${()=>{ this._advSteps.splice(idx,1); this.requestUpdate(); }}>${this._t('btn.delete')}</button>
					</div>`)}
				</div>
				<div class="row" style="gap:8px; margin-top:10px;">
					<button class="btn-ghost" @click=${()=>{ this._advSteps.push({ type:'entity_service', entity_id:'', op:'turn_on' }); this.requestUpdate(); }}>${this._t('shop.add_action')}</button>
					<button class="btn-ghost" @click=${()=>{ this._advSteps.push({ type:'delay', seconds:60 }); this.requestUpdate(); }}>${this._t('shop.add_delay')}</button>
				</div>
				<div class="row" style="justify-content:flex-end; gap:8px; margin-top:10px;">
					<button class="btn-ghost" @click=${()=>{ this._advItem=null; }}>${this._t('form.cancel')}</button>
					<button class="btn-primary" @click=${this._saveAdvanced}>${this._t('form.save')}</button>
				</div>
			</div>`: ''}
		</div>`;
	}
	_renderIconModal(){
		return html`<div class="overlay ${this._iconModalOpen?'open':''}" @click=${e=>{ if (e.target.classList.contains('overlay')) this._iconModalOpen=false; }}>
			<div class="modal" style="max-width: 560px; width: min(95vw, 560px);" @click=${e=>e.stopPropagation()}>
				<h3>${this._t('icon.choose')}</h3>
				<div class="row" style="gap:8px; align-items:center;">
					<input style="flex:1" placeholder="${this._t('icon.search')}" .value=${this._iconSearch||''} @input=${e=>{ this._iconSearch=e.target.value; this.requestUpdate(); }} />
					${this._taskIcon ? html`<button class="btn-ghost" @click=${()=>{ this._taskIcon=''; this.requestUpdate(); }}>${this._t('icon.clear')}</button>`: ''}
				</div>
				${(()=>{ 
					const q=String(this._iconSearch||'').toLowerCase(); 
					const filter=(arr)=> arr.filter(i=> i.id.toLowerCase().includes(q) || (i.label||'').toLowerCase().includes(q)); 
					const customIcons = (this._customIcons||[]).map(c=> ({id:c.id, label:c.label}));
					const allIcons = [...customIcons, ...C4K_ICON_SET];
					const recent=filter((this._iconRecents||[]).map(id=> {const found = allIcons.find(x=>x.id===id); return {id, label: found?.label || id};})).slice(0,12); 
					const base=filter(C4K_ICON_SET);
					const custom=filter(customIcons);
					const tile=(i)=> html`<button class="btn-ghost" style="display:flex;align-items:center;gap:8px;border:1px solid var(--divider-color);border-radius:8px;padding:8px;" @click=${()=> this._pickIcon(i.id)}><ha-icon icon="${i.id}"></ha-icon><small>${i.label||i.id}</small></button>`; 
					const customTile = html`<button class="btn-primary" style="display:flex;align-items:center;gap:8px;border:1px solid var(--divider-color);border-radius:8px;padding:8px;" @click=${()=> this._openCustomIconModal()}><ha-icon icon="mdi:plus-circle"></ha-icon><small>Custom</small></button>`;
					return html`
						${recent.length? html`<div style="font-size:.9rem;color:var(--secondary-text-color);margin:6px 0;">Recent</div>`:''}${recent.length? html`<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(120px,1fr));gap:8px;">${recent.map(tile)}</div>`:''}
						${custom.length? html`<div style="font-size:.9rem;color:var(--secondary-text-color);margin:6px 0;">Custom</div>`:''}
						${custom.length? html`<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(120px,1fr));gap:8px;">${custom.map(tile)}</div>`:''}
						<div style="font-size:.9rem;color:var(--secondary-text-color);margin:6px 0;">All</div>
						<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(120px,1fr));gap:8px;">${customTile}${base.map(tile)}</div>
					`; 
				})()}
				<div class="row" style="justify-content:flex-end; margin-top:10px;"><button class="btn-ghost" @click=${()=> this._iconModalOpen=false}>${this._t('form.cancel')}</button></div>
			</div>
		</div>`;
	}

	_renderCustomIconModal(){
		return html`<div class="overlay ${this._customIconModalOpen?'open':''}" @click=${e=>{ if (e.target.classList.contains('overlay')) this._closeCustomIconModal(); }}>
			<div class="modal" style="max-width: 800px; width: min(95vw, 800px); max-height: 85vh; display:flex; flex-direction:column;" @click=${e=>e.stopPropagation()}>
				<h3>Vælg Custom Icon</h3>
				<div class="row" style="gap:8px; align-items:center; margin-bottom:8px;">
					<input style="flex:1" placeholder="Søg efter ikon (f.eks. home, car, star, heart...)" .value=${this._customIconSearch||''} @input=${e=>{ this._customIconSearch=e.target.value; this._iconDisplayLimit = 200; this.requestUpdate(); }} />
					${this._customIconSearch ? html`<button class="btn-ghost" @click=${()=>{ this._customIconSearch=''; this._iconDisplayLimit = 200; this.requestUpdate(); }}>Ryd</button>` : ''}
				</div>
				<div 
					style="flex:1; overflow-y:auto; border:1px solid var(--divider-color); border-radius:8px; padding:12px; margin:8px 0; background:var(--card-background-color);"
					@scroll=${(e) => {
						const el = e.target;
						const scrolledToBottom = el.scrollHeight - el.scrollTop <= el.clientHeight + 100;
						if (scrolledToBottom && this._iconDisplayLimit < (this._availableIcons?.length || 0)) {
							this._iconDisplayLimit += 200;
							this.requestUpdate();
						}
					}}
				>
					${(()=>{
						const q = String(this._customIconSearch||'').toLowerCase().trim();
						// Hvis der ikke er ikoner endnu, vis loading
						if(!this._availableIcons || !this._availableIcons.length) {
							return html`<div style="text-align:center; padding:40px; color:var(--secondary-text-color);">
								<ha-icon icon="mdi:loading" style="--mdc-icon-size:48px; animation: spin 1s linear infinite;"></ha-icon>
								<div style="margin-top:12px;">Henter ikoner...</div>
							</div>`;
						}
						// Filter baseret på søgning - både med og uden "mdi:" prefix
						const filtered = q 
							? this._availableIcons.filter(i=> {
								const iconName = i.toLowerCase();
								const searchTerm = q.startsWith('mdi:') ? q : q;
								return iconName.includes(searchTerm) || iconName.replace('mdi:','').includes(searchTerm);
							  })
							: this._availableIcons;
						
						if(!filtered.length) {
							return html`<div style="text-align:center; padding:40px; color:var(--secondary-text-color);">
								<ha-icon icon="mdi:magnify-close" style="--mdc-icon-size:48px;"></ha-icon>
								<div style="margin-top:12px;">Ingen ikoner fundet for "${this._customIconSearch}"</div>
								<div style="margin-top:8px; font-size:0.85rem;">Prøv f.eks: home, car, star, heart, light, door</div>
							</div>`;
						}
						
						// Begræns til displayLimit for performance
						const displayLimit = this._iconDisplayLimit || 200;
						const toShow = filtered.slice(0, displayLimit);
						const hasMore = filtered.length > displayLimit;
						
						return html`
							<div style="display:grid; grid-template-columns:repeat(auto-fill,minmax(85px,1fr)); gap:8px;">
								${toShow.map(icon=> html`
									<button 
										class="btn-ghost ${this._customIconPreview===icon?'btn-primary':''}" 
										style="display:flex;flex-direction:column;align-items:center;justify-content:center;gap:6px;border:1px solid var(--divider-color);border-radius:10px;padding:12px 6px;min-height:90px;transition:all 0.2s ease;${this._customIconPreview===icon?'transform:scale(1.05);box-shadow:0 4px 12px rgba(var(--rgb-primary-color),0.3);border-color:var(--primary-color);':''}" 
										@click=${()=>{ this._customIconPreview=icon; this._customIconLabel = icon.replace('mdi:','').split('-').map(w=> w.charAt(0).toUpperCase()+w.slice(1)).join(' '); this.requestUpdate(); }}
										title="${icon}"
									>
										<ha-icon icon="${icon}" style="--mdc-icon-size:36px;"></ha-icon>
										<small style="font-size:9px;text-align:center;word-break:break-word;line-height:1.3;max-width:100%;opacity:0.8;">${icon.replace('mdi:','').replace(/-/g,' ')}</small>
									</button>
								`)}
							</div>
							${hasMore ? html`
								<div style="text-align:center; margin-top:16px; padding:12px; color:var(--secondary-text-color); font-size:0.9rem; background:color-mix(in srgb, var(--primary-color) 6%, transparent); border-radius:8px;">
									<ha-icon icon="mdi:arrow-down" style="--mdc-icon-size:24px;"></ha-icon>
									<div style="margin-top:6px;">Scroll ned for at se flere...</div>
								</div>
							` : ''}
							<div style="text-align:center; margin-top:12px; padding:8px; color:var(--secondary-text-color); font-size:0.85rem;">
								${q ? html`Viser <b>${toShow.length}</b> af <b>${filtered.length}</b> matchende ikoner` : html`Viser <b>${toShow.length}</b> af <b>${filtered.length}</b> ikoner`}
							</div>
						`;
					})()}
				</div>
				${this._customIconPreview ? html`
					<div style="border:1px solid var(--primary-color); border-radius:12px; padding:16px; margin-bottom:8px; background:color-mix(in srgb, var(--primary-color) 4%, transparent);">
						<div style="font-size:.9rem; font-weight:600; color:var(--primary-text-color); margin-bottom:10px;">Valgt ikon:</div>
						<div style="display:flex; align-items:center; gap:16px;">
							<div style="width:80px; height:80px; display:grid; place-items:center; border:2px solid var(--primary-color); border-radius:12px; background:var(--card-background-color); box-shadow:0 2px 8px rgba(0,0,0,0.1);">
								<ha-icon icon="${this._customIconPreview}" style="--mdc-icon-size:56px; color:var(--primary-color);"></ha-icon>
							</div>
							<div style="flex:1;">
								<div style="font-size:.85rem; color:var(--secondary-text-color); margin-bottom:8px;">
									<b>Ikon ID:</b> ${this._customIconPreview}
								</div>
								<div style="font-size:.85rem; color:var(--secondary-text-color); margin-bottom:6px;">Navngiv dit custom ikon:</div>
								<input 
									placeholder="F.eks. Mit Hjem, Min Favorit Stjerne, etc." 
									.value=${this._customIconLabel||''} 
									@input=${e=>{ this._customIconLabel=e.target.value; this.requestUpdate(); }}
									style="width:100%; padding:10px; border-radius:8px; border:1px solid var(--divider-color);" 
								/>
							</div>
						</div>
					</div>
				` : ''}
				${(this._customIcons||[]).length ? html`
					<div style="border:1px solid var(--divider-color); border-radius:12px; padding:12px; margin-bottom:8px; background:color-mix(in srgb, var(--success-color,#43a047) 4%, transparent);">
						<div style="font-size:.9rem; font-weight:600; color:var(--primary-text-color); margin-bottom:8px; display:flex; align-items:center; gap:6px;">
							<ha-icon icon="mdi:star-circle" style="--mdc-icon-size:20px; color:var(--success-color,#43a047);"></ha-icon>
							Gemte Custom Ikoner (${(this._customIcons||[]).length})
						</div>
						<div style="display:grid; gap:6px;">
							${(this._customIcons||[]).map(c=> html`
								<div style="display:flex; align-items:center; gap:10px; padding:8px 10px; border-radius:8px; background:var(--card-background-color); border:1px solid var(--divider-color);">
									<ha-icon icon="${c.id}" style="--mdc-icon-size:28px;"></ha-icon>
									<span style="flex:1; font-weight:500;">${c.label}</span>
									<small style="color:var(--secondary-text-color); font-size:10px;">${c.id}</small>
									<button class="btn-danger icon-btn" @click=${()=> this._deleteCustomIcon(c.id)} title="Slet">
										<ha-icon icon="mdi:delete"></ha-icon>
									</button>
								</div>
							`)}
						</div>
					</div>
				` : ''}
				<div class="row" style="justify-content:flex-end; gap:8px; margin-top:8px;">
					<button class="btn-ghost" @click=${()=> this._closeCustomIconModal()}>${this._t('form.cancel')}</button>
					<button class="btn-primary" ?disabled=${!this._customIconPreview || !this._customIconLabel} @click=${()=> this._saveCustomIcon()}>${this._t('form.save')}</button>
				</div>
			</div>
		</div>`;
	}
	_renderSortModal(){
		const cats = (this._store.categories||[]);
		// Working order = saved order filtered to existing + new appended; include optional NONE marker at end if present in saved
		const NONE = '__none__';
		let order = Array.isArray(this._catOrder)? [...this._catOrder]:[];
		// ensure only existing ids + NONE
		order = order.filter(id => id===NONE || cats.some(c=> c.id===id));
		// append any missing categories
		for (const c of cats){ if (!order.includes(c.id)) order.push(c.id); }
		// also ensure NONE is present at end if previously chosen
		if (!order.includes(NONE)) order.push(NONE);
		const labelFor = (id)=> id===NONE ? this._t('sort.none') : (cats.find(c=>c.id===id)?.name || id);
		const onDragStart = (e, idx)=>{ e.dataTransfer.effectAllowed='move'; e.dataTransfer.setData('text/plain', String(idx)); };
		const onDragOver = (e)=>{ e.preventDefault(); e.currentTarget.classList.add('dragover'); };
		const onDragLeave = (e)=>{ e.currentTarget.classList.remove('dragover'); };
		const onDrop = (e, toIdx)=>{
			e.preventDefault(); e.currentTarget.classList.remove('dragover');
			const fromIdx = Number(e.dataTransfer.getData('text/plain'));
			if (!Number.isFinite(fromIdx)) return;
			const arr = [...order];
			const [it] = arr.splice(fromIdx,1);
			arr.splice(toIdx,0,it);
			this._catOrder = arr; this.requestUpdate();
		};
		const save = ()=>{ try{ localStorage.setItem('c4k_cat_order', JSON.stringify(order)); }catch{} this._catOrder = order; this._sortModalOpen=false; this.requestUpdate(); };
		const reset = ()=>{ order = cats.map(c=> c.id); order.push(NONE); this._catOrder = order; this.requestUpdate(); };
		return html`<div class="overlay ${this._sortModalOpen?'open':''}" @click=${e=>{ if (e.target.classList.contains('overlay')) this._sortModalOpen=false; }}>
			${this._sortModalOpen ? html`<div class="modal" style="max-width: 560px; width: min(95vw, 560px);" @click=${e=>e.stopPropagation()}>
				<h3>${this._t('sort.title')}</h3>
				<div style="font-size:.9rem; color: var(--secondary-text-color);">${this._t('sort.categories_order')}</div>
				<ul class="sort-list">
					${order.map((id, idx)=> html`
						<li class="sort-item" draggable="true" @dragstart=${e=> onDragStart(e, idx)} @dragover=${onDragOver} @dragleave=${onDragLeave} @drop=${e=> onDrop(e, idx)}>
							<span class="sort-handle">⋮⋮</span>
							<span style="flex:1;">${labelFor(id)}</span>
						</li>
					`)}
				</ul>
				<div class="row" style="justify-content:flex-end; gap:8px;">
					<button class="btn-ghost" @click=${reset}>${this._t('sort.reset')}</button>
					<button class="btn-primary" @click=${save}>${this._t('sort.save')}</button>
				</div>
			</div>`: ''}
		</div>`;
	}
	
	_renderReassignModal(){
		const task = this._reassignTask;
		if (!task) return '';
		
		const approveOnly = async () => {
			await this.hass.callService('chores4kids','approve_task',{ task_id: task.id });
			this._reassignTask = null;
			this.requestUpdate();
		};
		
		const approveAndReassign = async () => {
			// First approve
			await this.hass.callService('chores4kids','approve_task',{ task_id: task.id });
			
			// Then assign today's version to same child(ren)
			const targetIds = Array.isArray(task.repeat_child_ids) && task.repeat_child_ids.length 
				? task.repeat_child_ids 
				: (task.repeat_child_id ? [task.repeat_child_id] : [task.assigned_to]);
			
			for (const childId of targetIds) {
				try {
					// Find the unassigned template task
					const templates = this._store.allTasks.filter(t => 
						!t.assigned_to && 
						t.title === task.title && 
						Number(t.points) === Number(task.points)
					);
					
					if (templates.length > 0) {
						await this.hass.callService('chores4kids','assign_task',{ 
							task_id: templates[0].id, 
							child_id: childId 
						});
					}
				} catch(e) {
					console.error('Failed to reassign task:', e);
				}
			}
			
			this._reassignTask = null;
			this.requestUpdate();
		};
		
		return html`<div class="overlay ${task?'open':''}" @click=${e=>{ if (e.target.classList.contains('overlay')) { this._reassignTask=null; this.requestUpdate(); } }}>
			<div class="modal" style="max-width: 560px; width: min(95vw, 560px);" @click=${e=>e.stopPropagation()}>
				<h3>${this._t('overdue.reassign_prompt')}</h3>
				<div style="padding: 16px 0; color: var(--secondary-text-color);">
					<div><strong>${task.title}</strong></div>
					<div style="margin-top:8px; font-size:0.9rem;">${task.assigned_to_name || task.assigned_to}</div>
				</div>
				<div class="row" style="justify-content:flex-end; gap:8px;">
					<button class="btn-ghost" @click=${approveOnly}>${this._t('overdue.no')}</button>
					<button class="btn-primary" @click=${approveAndReassign}>${this._t('overdue.yes')}</button>
				</div>
			</div>
		</div>`;
	}

	_openTaskDescription(task, e) {
		try{
			const path = e.composedPath();
			if (path.some(el => {
				if (!el || !el.tagName) return false;
				const tag = el.tagName;
				return tag === 'BUTTON' || tag === 'HA-ICON-BUTTON' || el.classList?.contains?.('btn') || el.classList?.contains?.('btn-primary') || el.classList?.contains?.('btn-ghost') || el.classList?.contains?.('btn-danger');
			})) {
				return;
			}
		}catch(err){}

		// Ensure we have description (rendered tasks should be enriched, but fallback just in case)
		let desc = task.description;
		if (!desc && task.id && this._store?.allTasks) {
			const full = this._store.allTasks.find(t=> t.id===task.id);
			if (full) desc = full.description;
		}

		if (desc) {
			this._viewingTaskDesc = desc === task.description ? task : { ...task, description: desc };
			this.requestUpdate();
		}
	}
	_closeTaskDescription() {
		this._viewingTaskDesc = null;
		this.requestUpdate();
	}
	_renderDescriptionModal() {
		if (!this._viewingTaskDesc) return '';
		return html`
			<div class="overlay open" @click=${()=>this._closeTaskDescription()}>
				<div class="modal" style="max-width: 500px;" @click=${e=>e.stopPropagation()}>
					<div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom: 12px;">
						<h3 style="margin:0; padding-right: 16px;">${this._viewingTaskDesc.title}</h3>
						<ha-icon icon="mdi:close" style="cursor:pointer;" @click=${()=>this._closeTaskDescription()}></ha-icon>
					</div>
					<div style="white-space: pre-wrap;">${this._viewingTaskDesc.description}</div>
				</div>
			</div>
		`;
	}

	// ------- CHILD VIEW -------
	_findChildSensor(){
		const childName = this._childName || this.config.child;
		if (!childName) return null;
		const slug = (v)=> (v||"")
			.normalize('NFKD')
			.replace(/[̀-ͯ]/g, '')
			.replace(/[^a-zA-Z0-9]+/g, '_')
			.replace(/^_+|_+$/g, '')
			.toLowerCase() || 'child';
		const targetSlug = slug(childName);
		if (this._idChild && this.hass.states[this._idChild]){
			const s = this.hass.states[this._idChild];
			if (s?.attributes?.child_id) return s;
		}
		const sensors = Object.values(this.hass.states).filter(s=> s.entity_id?.startsWith("sensor.") && s.attributes?.child_id);
		const found = sensors.find(s=> (s.attributes?.name||"").toLowerCase() === String(childName).toLowerCase() || (s.attributes?.slug||"") === targetSlug);
		if (found?.entity_id) this._idChild = found.entity_id; return found;
	}
	_renderChild(){
		const pointsEnabled = this._pointsEnabled();
		const s = this._findChildSensor();
		if (!s){ return html`<ha-card header="${this._t('card.child_title_fallback',{name: this._childName||this.config.child||''})}"><div class="card-content">${this._t('msg.child_not_found')}</div></ha-card>`; }

		// Fetch store once
		const store = this._store;
		const allTasksMap = new Map((store.allTasks||[]).map(t=>[t.id, t]));

		const myChildId = s?.attributes?.child_id;

		// Enrich tasks with description from master list if missing
		const rawTasks = (s.attributes.tasks||[]).filter(t=> ['assigned','in_progress','awaiting_approval','approved'].includes(t.status));
		const tasks = rawTasks.map(t => {
			if (t.description) return t;
			const full = allTasksMap.get(t.id);
			if (full && full.description) return { ...t, description: full.description };
			return t;
		});

		const dailyTasks = tasks.filter(t=> !t?.due);
		const weeklyTasks = tasks.filter(t=> !!t?.due);

		// shop items
		let shopSensor = this._idShop && this.hass.states[this._idShop];
		if (!shopSensor){ shopSensor = Object.values(this.hass.states).find(st=> st?.entity_id?.includes('chores4kids_shop')); if (shopSensor?.entity_id) this._idShop = shopSensor.entity_id; }
		const items = (pointsEnabled && this._shopOpen) ? (shopSensor?.attributes?.items||[]).filter(i=> i.active!==false) : [];

		const renderTaskGroups = (taskList)=>{
			if (taskList.length===0) return html`<i>${this._t('msg.no_tasks')}</i>`;
			const NONE='__none__';
			const order = this._catOrderResolved();
			const cats = store.categories||[]; // Use captured store
			const catFor=(id)=> (id && id!==NONE) ? (cats.find(c=> c.id===id) || null) : null;
			const nameFor=(id)=> id===NONE? this._t('sort.none') : (catFor(id)?.name || id);
			const colorFor=(id)=>{ try{ return id===NONE? '' : this._normalizeHexColor(catFor(id)?.color); }catch{ return ''; } };
			// group tasks by primary category (based on order)
			const groups = new Map();
			for (const t of taskList){
				const ids = Array.isArray(t.categories)? t.categories:[];
				let pid = NONE;
				for (const cid of order){ if (cid!==NONE && ids.includes(cid)){ pid=cid; break; } }
				if (!groups.has(pid)) groups.set(pid, []);
				groups.get(pid).push(t);
			}
			const catIdsToShow = order.filter(id=> groups.has(id));
			return catIdsToShow.map(cid=> html`
				<div class="cat-section">
					<div class="cat-title">${nameFor(cid)}</div>
					${groups.get(cid).map(t=>{
						const groupColor = colorFor(cid);
						const bonusInfo = this._bonusByDateInfo(t);
						const bonusBy = bonusInfo?.dateStr;
						const bonusClass = bonusInfo?.expired ? 'chip chip-bonus chip-bonus-expired' : 'chip chip-bonus';
						const claimedById = t?.fastest_wins_claimed_by_child_id;
						const claimedByName = t?.fastest_wins_claimed_by_child_name || claimedById;
						const isTakenByOther = !!t?.fastest_wins && !!claimedById && !!myChildId && claimedById !== myChildId;
						const isOverdue = this._isTaskOverdue(t);
						const rowStyle = (!isOverdue && groupColor)
							? `background: color-mix(in srgb, ${groupColor} 10%, var(--card-background-color)); box-shadow: inset 6px 0 0 ${groupColor};`
							: '';
						return html`
							<div class="task ${isOverdue?'task-overdue':''}" style="${rowStyle} cursor:${t.description?'pointer':'default'};" @click=${(e)=>this._openTaskDescription(t,e)}>
								<div class="task-icon">${t.icon? html`<ha-icon icon="${t.icon}"></ha-icon>`:''}</div>
								<div>
									<div class="title ${t.status==='approved' ? 'completed' : ''}">${t.title}</div>
									<div class="meta">
										${pointsEnabled ? html`<span class="chip chip-points">${t.points} ${this._t('lbl.points')}</span>`:''}
										${t?.due ? html`<span class="chip chip-deadline">${this._t('lbl.deadline',{date: this._formatDueDate(t.due)})}</span>` : ''}
										${(pointsEnabled && bonusBy) ? html`<span class="${bonusClass}">${this._t('lbl.early_bonus_by',{ points: Number(t.early_bonus_points||0), date: bonusBy })}</span>` : ''}
										${isTakenByOther ? html`<span class="chip chip-deadline">${this._t('lbl.taken_by',{name: claimedByName||'—'})}</span>` : ''}
										${this._isTaskOverdue(t)? html` <span class="chip status-overdue">${this._t('status.overdue')}</span>`:''}
									</div>
								</div>
								<div class="actions" style="display:flex; flex-direction:column; gap:6px;">
									${isTakenByOther ? html`<button class="btn" disabled>${this._t('lbl.taken_by',{name: claimedByName||'—'})}</button>`
										: t.status==="assigned" ? (t.quick_complete ? html`<button class="btn-primary task-done" ?disabled=${this._isTaskBusy(t.id)} @click=${()=>this._completeNow(t)}>${this._t('btn.task_done')}</button>` : html`<button class="btn-primary start-task" ?disabled=${this._isTaskBusy(t.id)} @click=${()=>this._advance(t)}>${this._t('btn.start_task')}</button>`)
										: t.status==="in_progress" ? html`<button class="btn-primary complete-task" ?disabled=${this._isTaskBusy(t.id)} @click=${()=>this._advance(t)}>${this._t('btn.complete_task')}</button>`
										: t.status==="awaiting_approval" ? html`<span class="chip status-awaiting_approval">${this._t('lbl.awaiting')}</span>`
										: html`<button class="btn" disabled>✓ ${this._t('btn.done')}</button>`}
									${this.config?.debug_mode && !this._isTaskOverdue(t) && t.status!=="approved" ? html`
										<button class="btn-ghost" style="font-size:0.75rem; padding:4px 8px;" @click=${()=>this._debugMarkOverdue(t)}>${this._t('debug.mark_overdue')}</button>
									` : ''}
								</div>
							</div>
						`;
					})}
				</div>
			`);
		};
		return html`
			<ha-card header="${s.attributes.name}">
				<div class="card-content">
					<div class="header-row">
						${pointsEnabled ? html`<span class="header-points">${s.state} ${this._t('lbl.points')}</span>`:''}
						${pointsEnabled ? html`<button class="btn-primary" @click=${()=>{ this._shopOpen = true; this.requestUpdate(); }}>${this._t('shop.title')}</button>`:''}
					</div>
					<div class="tasks">
						${dailyTasks.length ? html`<div class="section"><h3 style="margin:0 0 8px;">${this._t('section.daily_tasks')}</h3>${renderTaskGroups(dailyTasks)}</div>` : ''}
						${weeklyTasks.length ? html`<div class="section"><h3 style="margin:0 0 8px;">${this._t('section.weekly_tasks')}</h3>${renderTaskGroups(weeklyTasks)}</div>` : (dailyTasks.length? '' : html`<i>${this._t('msg.no_tasks')}</i>`)}
					</div>
					${pointsEnabled ? html`<div class="overlay shop-child-overlay ${this._shopOpen?'open':''}" @click=${e=>{ if(e.target.classList.contains('overlay')) this._shopOpen=false; }}>
						<div class="modal shop-child-modal" @click=${e=>e.stopPropagation()}>
							<h3 style="margin:0 0 8px;">${this._t('shop.title')}</h3>
							<div class="shop-grid">
								${items.map(i=> html`
									<div class="shop-item ${this._buyingItemId===i.id ? 'is-buying' : ''} ${this._buySuccessItemId===i.id ? 'is-bought' : ''}">
										${i.image ? html`<div class="img-wrap"><img src="${this._resolveUrl(i.image)}" alt="${i.title}" loading="lazy" decoding="async"></div>` : html`<div class="img-wrap" style="display:grid;place-items:center;opacity:.7;">${i.icon? html`<ha-icon icon="${i.icon}" style="--mdc-icon-size:48px"></ha-icon>`:'?'}</div>`}
										<div class="body">
											<div class="title">${i.title}</div>
											<div class="meta"><span class="chip chip-points">${i.price} ${this._t('lbl.points')}</span></div>
											<button class="btn-primary" ?disabled=${Number(s.state)<Number(i.price) || this._buyingItemId===i.id} @click=${()=>this._buy(i, s.attributes.child_id)}>${this._t('shop.buy')}</button>
										</div>
									</div>
								`)}
							</div>
							<div style="display:flex;justify-content:flex-end;gap:8px;margin-top:8px;">
								<button class="btn-ghost" @click=${()=>this._shopOpen=false}>${this._t('form.cancel')}</button>
							</div>
						</div>
					</div>` : ''}
				</div>
			</ha-card>
			${this._renderDescriptionModal()}
		`;
	}

	// ===== Actions (admin + child) =====
	async _addChild(){ if(!this._name) return; await this.hass.callService('chores4kids','add_child',{ name: this._name }); this._name=''; }
	async _removeChild(c){ if(!confirm(this._t('confirm.delete_child',{name:c.name}))) return; await this.hass.callService('chores4kids','remove_child',{ child_id: c.id }); }
	_openPoints(c){ if(!this._pointsEnabled()) return; this._pointsChild=c; this._pointsValue=5; this.requestUpdate(); }
	_closePoints=()=>{ this._pointsChild=null; this.requestUpdate(); }
	async _addPointsQuick(n){ if(!this._pointsEnabled()) return; if(!this._pointsChild) return; const pts=Number(n||0); if(!Number.isFinite(pts)||pts===0) return; await this.hass.callService('chores4kids','add_points',{ child_id: this._pointsChild.id, points: pts }); this._closePoints(); }
	async _resetPoints(c){ if(!this._pointsEnabled()) return; if(!confirm(this._t('btn.reset_points')+'?')) return; await this.hass.callService('chores4kids','reset_points',{ child_id: c.id }); }
	async _promptRename(c){ const nn=prompt(this._t('btn.rename'), c.name); if(!nn || nn===c.name) return; await this.hass.callService('chores4kids','rename_child',{ child_id:c.id, new_name: nn }); }
	get _showTitleError(){ return (this._touchedTitle && !(String(this._taskTitle||'').trim().length>0)); }
	get _pointsErrorKey(){ if(!this._pointsEnabled()) return null; if(!this._touchedPoints) return null; const raw=String(this._taskPoints??'').trim(); if(raw==='') return 'err.points_required'; const n=Number(raw); if(!Number.isFinite(n)) return 'err.points_number'; if(n<0) return 'err.points_positive'; return null; }
	get _showPointsError(){ return !!this._pointsErrorKey; }
	get _hasFormErrors(){ return this._showTitleError || (this._pointsEnabled() && this._showPointsError); }
	_pickIcon(id){ this._taskIcon=id; try{ const arr=Array.isArray(this._iconRecents)? [...this._iconRecents]:[]; const next=[id,...arr.filter(x=>x!==id)].slice(0,12); this._iconRecents=next; localStorage.setItem('c4k_icn_recent', JSON.stringify(next)); }catch{} this._iconModalOpen=false; this.requestUpdate(); }
	_openCustomIconModal(){ this._customIconModalOpen = true; this._customIconSearch = ''; this._customIconPreview = ''; this._customIconLabel = ''; this._iconDisplayLimit = 200; this._iconModalOpen = false; if(!this._availableIcons || !this._availableIcons.length) this._fetchAvailableIcons(); this.requestUpdate(); }
	_closeCustomIconModal(){ this._customIconModalOpen = false; this._customIconSearch = ''; this._customIconPreview = ''; this._customIconLabel = ''; this._iconDisplayLimit = 200; this.requestUpdate(); }
	async _fetchAvailableIcons(){ 
		try{ 
			// Hent ALLE MDI ikoner direkte fra CDN metadata
			console.log('Fetching all MDI icons from CDN...');
			const response = await fetch('https://cdn.jsdelivr.net/npm/@mdi/svg@latest/meta.json');
			const data = await response.json();
			
			if (data && Array.isArray(data)) {
				this._availableIcons = data.map(icon => `mdi:${icon.name}`).sort();
				console.log('Successfully loaded ALL MDI icons:', this._availableIcons.length);
				this.requestUpdate();
				return;
			}
		} catch(e) {
			console.warn('Could not fetch from MDI CDN:', e);
		}
		
		// Fallback: Prøv Home Assistant's API
		try{ 
			const result = await this.hass.callWS({ type: 'frontend/get_icons', category: 'mdi' }); 
			const icons = result?.resources?.mdi || {}; 
			this._availableIcons = Object.keys(icons).map(k=> `mdi:${k}`).sort(); 
			console.log('Loaded icons via HA WebSocket:', this._availableIcons.length);
			this.requestUpdate(); 
		}catch(e){ 
			console.error('Could not fetch icons, using fallback list:', e); 
			// Sidste fallback: Generate common icons
			this._availableIcons = this._generateFallbackIcons();
			console.log('Using fallback icons:', this._availableIcons.length);
			this.requestUpdate();
		} 
	}
	_generateFallbackIcons(){
		// Fallback list med de mest almindelige ikoner
		const common = ['home','car','star','heart','phone','email','calendar','clock','bell','light','fan','door','window','lock','key','trash','recycle','book','pen','pencil','brush','palette','music','headphones','speaker','microphone','camera','video','television','monitor','laptop','keyboard','mouse','gamepad','gift','shopping','cart','bag','wallet','credit-card','money','piggy-bank','food','pizza','coffee','beer','wine','leaf','flower','tree','sun','moon','cloud','umbrella','snowflake','fire','water','lightning','weather','thermometer','gauge','speedometer','wrench','hammer','screwdriver','tools','cog','settings','account','face','people','run','walk','bike','bus','train','airplane','rocket','boat','castle','office','store','hospital','school','bank','factory','warehouse','package','truck','van','ambulance','police','shield','alert','information','help','check','close','plus','minus','arrow','chevron','menu','dots','grid','list','chart','graph','table','download','upload','share','link','tag','label','bookmark','flag','pin','map','navigation','compass','target','crosshairs','eye','hide','lock-open','volume','brightness','wifi','bluetooth','battery','power','plug','usb','sd-card','memory','cpu','chip','server','cloud-outline','cloud-download','cloud-upload','folder','file','document','image','picture','note','text','format','undo','redo','save','print','scan','fax','timer','stopwatch','alarm','weather-cloudy','weather-rainy','weather-snowy','weather-windy','dog','cat','paw','fish','bug','bee','butterfly','baseball','basketball','football','soccer','tennis','golf','cards','dice','puzzle','robot','alien','ghost','skull','pizza-outline','hamburger','ice-cream','cake','cupcake','candy','apple','orange','banana','grapes','carrot','corn','bread','cheese','egg','cookie','donut','hot-dog','popcorn','soda','cup','glass','bottle','plate','silverware','pot','kettle','microwave','oven','fridge','dishwasher','washing-machine','tumble-dryer','iron','vacuum','broom','bucket','spray-bottle','mop','brush-variant','sponge','soap','towel','toilet','shower','bathtub','sink','mirror','toothbrush','razor','hair-dryer','perfume','ring','diamond','crown','medal','trophy','ticket','balloon','confetti','firework','party-popper','candle','lamp','lightbulb','desk-lamp','ceiling-light','chandelier','spotlight','led-strip','necklace','bracelet','watch','glasses','sunglasses','hat','shirt','tie','shoe','boot','sock','glove','jacket','umbrella-outline','backpack','briefcase','purse','luggage'];
		return common.map(name=> `mdi:${name}`).sort();
	}
	_saveCustomIcon(){ const icon = String(this._customIconPreview||'').trim(); const label = String(this._customIconLabel||'').trim(); if(!icon || !label) return; const customs = Array.isArray(this._customIcons)? [...this._customIcons]:[]; const exists = customs.find(c=> c.id === icon); if(!exists){ customs.push({ id: icon, label }); try{ localStorage.setItem('c4k_custom_icons', JSON.stringify(customs)); }catch{} this._customIcons = customs; } this._pickIcon(icon); this._closeCustomIconModal(); }
	_deleteCustomIcon(iconId){ const customs = Array.isArray(this._customIcons)? [...this._customIcons]:[]; const filtered = customs.filter(c=> c.id !== iconId); try{ localStorage.setItem('c4k_custom_icons', JSON.stringify(filtered)); }catch{} this._customIcons = filtered; this.requestUpdate(); }
	async _waitForNewTemplateTask(beforeUnassignedIds, sig, timeoutMs=6000){
		const start = Date.now();
		const sleep = (ms)=> new Promise(r=> setTimeout(r, ms));
		const wantTitle = String(sig?.title||'').trim();
		const wantPoints = Number(sig?.points||0);
		while ((Date.now() - start) < (Number(timeoutMs)||6000)){
			try{
				const candidates = (this._store.allTasks||[])
					.filter(t=> !t.assigned_to && !(beforeUnassignedIds?.has?.(t.id)))
					.filter(t=> String(t.title||'').trim()===wantTitle && Number(t.points||0)===wantPoints);
				if (candidates.length){
					// Prefer the most recently created
					candidates.sort((a,b)=>{ try{ return new Date(b.created).getTime() - new Date(a.created).getTime(); }catch{ return 0; } });
					return candidates[0];
				}
			}catch{ /* ignore */ }
			await sleep(150);
		}
		return null;
	}
	async _createTask(){
		const pointsEnabled = this._pointsEnabled();
		this._touchedTitle=true;
		this._touchedPoints = pointsEnabled;
		if(this._hasFormErrors) return;
		const beforeUnassignedIds = new Set((this._store.allTasks||[]).filter(t=>!t.assigned_to).map(t=>t.id));
		const scheduleMode = this._weeklyEnabled ? 'weekly' : (this._monthlyEnabled ? 'monthly' : (this._repeatEnabled ? 'repeat' : ''));
		const repeatOn = (scheduleMode === 'repeat');
		const bonusOn = pointsEnabled ? !!this._taskEarlyBonusEnabled : false;
		const dueVal = (bonusOn && (scheduleMode==='repeat' || scheduleMode==='weekly' || scheduleMode==='monthly')) ? undefined : (String(this._taskDue||'').trim() || undefined);
		const _days = repeatOn ? Array.from(this._repeatDays||[]) : [];
		const _ids = repeatOn ? Array.from(this._repeatAssign||[]) : [];
		const _cats = Array.from(this._taskCategories||[]);
		const _persist = (scheduleMode==='weekly' || scheduleMode==='monthly') ? false : !!this._persistUntilDone;
		const _quick = !!this._quickComplete;
		const _skip = !!this._skipApproval;
		const _fastest = !!this._fastestWins;
		const _autoAssignIds = (scheduleMode ? Array.from(this._repeatAssign||[]) : []);
		
		// Check if today matches schedule - if so, auto-assign immediately
		const now = new Date();
		const jsDay = now.getDay(); // 0=Sun
		const weekdayMap = [6, 0, 1, 2, 3, 4, 5]; // Convert JS day (0=Sun) to backend format (0=Mon)
		const todayBackend = weekdayMap[jsDay];
		const assignToday = (
			scheduleMode==='weekly' ? (todayBackend===0) :
			scheduleMode==='monthly' ? (now.getDate()===1) :
			repeatOn ? (_days.includes(todayBackend) || _days.includes(['mon','tue','wed','thu','fri','sat','sun'][todayBackend])) :
			false
		);
		
		// Always create a reusable unassigned template task.
		// If today is included in repeat_days, we then assign today's copies from the template
		// so the task stays editable under "Tasks" and assigned tasks remain linked.
		const taskData = {
			title:this._taskTitle,
			points: pointsEnabled ? Number(this._taskPoints) : 0,
			description:this._taskDesc||'',
			due: dueVal,
			schedule_mode: scheduleMode || undefined,
			early_bonus_enabled: bonusOn,
			early_bonus_days: (bonusOn && this._taskEarlyBonusDays!=='' && this._taskEarlyBonusDays!=null) ? Number(this._taskEarlyBonusDays) : undefined,
			early_bonus_points: (bonusOn && this._taskEarlyBonusPoints!=='' && this._taskEarlyBonusPoints!=null) ? Number(this._taskEarlyBonusPoints) : undefined,
			icon:this._taskIcon||undefined,
			quick_complete: _quick,
			skip_approval: _skip,
			fastest_wins: _fastest,
			repeat_days:_days,
			repeat_child_id: scheduleMode ? (((_autoAssignIds[0]||'') || undefined)) : undefined,
			repeat_child_ids: scheduleMode ? (_autoAssignIds.length ? _autoAssignIds : undefined) : undefined,
			persist_until_completed: _persist,
			mark_overdue: _persist ? !!this._markOverdue : true,
			categories: _cats
		};
		await this.hass.callService('chores4kids','add_task', taskData);

		if (assignToday && _autoAssignIds.length){
			const tpl = await this._waitForNewTemplateTask(beforeUnassignedIds, { title: this._taskTitle, points: pointsEnabled ? Number(this._taskPoints) : 0 });
			if (tpl?.id){
				for (const cid of _autoAssignIds){
					if(!cid) continue;
					await this.hass.callService('chores4kids','assign_task', { task_id: tpl.id, child_id: cid });
				}
			}
		}

		// Ensure Tasks section is visible after creating a task
		try{
			if (this._collapsed?.tasks){
				const next = { ...(this._collapsed||{}) };
				next.tasks = false;
				this._collapsed = next;
				localStorage.setItem('c4k_admin_collapsed', JSON.stringify(next));
			}
		}catch{}
		// Clear form and reset validation state so inputs don't show errors
		this._taskTitle=this._taskPoints=this._taskDesc=this._taskIcon='';
		this._taskDue='';
		this._taskEarlyBonusDays='';
		this._taskEarlyBonusPoints='';
		this._taskEarlyBonusEnabled=false;
		this._repeatDays=new Set();
		this._repeatAssign=new Set();
		this._repeatEnabled=false;
		this._weeklyEnabled=false;
		this._monthlyEnabled=false;
		this._taskCategories=new Set();
		this._markOverdue=true;
		this._persistUntilDone=false;
		this._quickComplete=false;
		this._skipApproval=false;
		this._fastestWins=false;
		this._touchedTitle=false; this._touchedPoints=false;
	}
	async _setStatus(taskId,status){ try{ await this.hass.callService('chores4kids','set_task_status',{ task_id: taskId, status }); } finally { if (status!=='awaiting_approval'){ this._clearCompleted(taskId); } } }
	_canManualReassign(task){
		try{
			// Only show when it matches the same scenario as the approval popup:
			// the (carry-over) task repeats today, but today's copy is missing.
			if(!(!!task?.skip_approval && !!task?.persist_until_completed && task?.status === 'approved')) return false;
			const isCarry = this._isTaskOverdue(task) || this._isFromBeforeToday(task);
			if(!isCarry) return false;
			if(!this._autoAssignActive(task)) return false;
			if(!this._isScheduledToday(task)) return false;
			const targetIds = Array.isArray(task.repeat_child_ids) && task.repeat_child_ids.length
				? task.repeat_child_ids
				: (task.repeat_child_id ? [task.repeat_child_id] : [task.assigned_to]);
			// Show button if at least one target child is missing today's copy
			for (const childId of targetIds) {
				if(!childId) continue;
				const alreadyHasTodays = (this._store.allTasks||[]).some(t =>
					!!t.assigned_to &&
					t.assigned_to === childId &&
					t.title === task.title &&
					Number(t.points) === Number(task.points) &&
					!t.carried_over &&
					['assigned','in_progress','awaiting_approval'].includes(t.status)
				);
				if(!alreadyHasTodays) return true;
			}
			return false;
		}catch{ return false; }
	}
	async _manualReassign(task){
		try{
			if(!task) return;
			// Only applicable when the task is a carry-over situation AND repeats today.
			// Note: backend clears carried_over when approving, so also infer carry-over by created < today.
			const isCarry = this._isTaskOverdue(task) || this._isFromBeforeToday(task);
			if(!isCarry || !this._autoAssignActive(task)) return;
			if(!this._isScheduledToday(task)) return;

			// Assign today's version to same child(ren)
			const targetIds = Array.isArray(task.repeat_child_ids) && task.repeat_child_ids.length
				? task.repeat_child_ids
				: (task.repeat_child_id ? [task.repeat_child_id] : [task.assigned_to]);

			// Find the unassigned template task once (preferred)
			const template = (this._store.allTasks||[]).find(t =>
				!t.assigned_to &&
				t.title === task.title &&
				Number(t.points) === Number(task.points)
			);

			for (const childId of targetIds) {
				try{
					if(!childId) continue;
					// Avoid creating duplicates if today's copy already exists
					const alreadyHasTodays = (this._store.allTasks||[]).some(t =>
						!!t.assigned_to &&
						t.assigned_to === childId &&
						t.title === task.title &&
						Number(t.points) === Number(task.points) &&
						!t.carried_over &&
						['assigned','in_progress','awaiting_approval'].includes(t.status)
					);
					if(alreadyHasTodays) continue;

					if(template?.id){
						await this.hass.callService('chores4kids','assign_task',{
							task_id: template.id,
							child_id: childId
						});
					}else{
						// Fallback: if there's no template (e.g. task was created as assigned), create an assigned copy.
						const mode = String(task?.schedule_mode||'').toLowerCase();
						await this.hass.callService('chores4kids','add_task',{
							title: task.title,
							points: Number(task.points),
							description: task.description || '',
							icon: task.icon || undefined,
							quick_complete: !!task.quick_complete,
							skip_approval: !!task.skip_approval,
							persist_until_completed: !!task.persist_until_completed,
							categories: Array.isArray(task.categories) ? task.categories : [],
							schedule_mode: (mode==='weekly' || mode==='monthly' || mode==='repeat') ? mode : undefined,
							repeat_days: (mode==='repeat' || !mode) ? (Array.isArray(task.repeat_days) ? task.repeat_days : []) : [],
							repeat_child_id: task.repeat_child_id || undefined,
							child_id: childId,
						});
					}
				}catch(e){
					console.error('Failed to manually reassign task:', e);
				}
			}
			// Best-effort: ensure assigned copies inherit categories
			try{ if(template?.id) this._ensureAssignedHasCategories(template, targetIds); }catch{}
			this.requestUpdate();
		}catch(e){
			console.error('Failed to manually reassign task:', e);
		}
	}
	async _approve(task){ 
		// Check if task is overdue and has auto-assign for today
		if (this._isTaskOverdue(task) && this._autoAssignActive(task)) {
			if (this._isScheduledToday(task)) {
				// Show re-assign prompt
				this._reassignTask = task;
				this.requestUpdate();
				return;
			}
		}
		
		// Normal approve (timestamp remains in backend for historical view)
		await this.hass.callService('chores4kids','approve_task',{ task_id: task.id });
	}
	async _assignTask(task, childId){ if(!childId){ alert(this._t('alert.choose_child_first')); return; } await this.hass.callService('chores4kids','assign_task',{ task_id: task.id, child_id: childId }); task._assignTo=''; this.requestUpdate(); }
	async _assignTaskMulti(task, childIds){
		const ids = Array.isArray(childIds) ? childIds.filter(Boolean) : [];
		if (!ids.length){ alert(this._t('alert.choose_child_first')); return; }
		for (const id of ids){
			try{ await this.hass.callService('chores4kids','assign_task',{ task_id: task.id, child_id: id }); }
			catch(e){ /* continue to next */ }
		}
		// Best-effort: ensure new assigned copies inherit categories from template
		try{ this._ensureAssignedHasCategories(task, ids); }catch{}
		// clear selections
		try{
			const row = this.shadowRoot.querySelector(`tr[data-task="${task.id}"]`);
			row?.querySelectorAll('.c4k-assign')?.forEach(i=> i.checked = false);
			const val = row?.querySelector('.multi-dd-value'); if (val) val.textContent = this._t('select.assign_child'); val?.classList.add('placeholder');
		}catch{}
		this._openAssignMenuFor = null;
		this.requestUpdate();
	}

	_ensureAssignedHasCategories(templateTask, childIds){
		const cats = Array.isArray(templateTask?.categories)? templateTask.categories : [];
		if (!cats.length) return;
		// defer to allow state to update
		setTimeout(()=>{
			try{
				const all = (this._store.allTasks||[]).filter(t=> !!t.assigned_to && t.title===templateTask.title && Number(t.points)===Number(templateTask.points));
				const now = Date.now();
				for (const cid of childIds){
					const candidates = all.filter(t=> t.assigned_to===cid);
					// pick latest created
					let chosen = null; let best = -Infinity;
					for (const t of candidates){
						let ts = 0; try{ ts = new Date(t.created).getTime(); }catch{}
						if (ts>best) { best=ts; chosen=t; }
					}
					if (chosen && (!Array.isArray(chosen.categories) || chosen.categories.length===0)){
						this.hass.callService('chores4kids','update_task',{ task_id: chosen.id, categories: cats });
					}
				}
			}catch{}
		}, 500);
	}

	// Category management
	async _addCategory(){
		const n=String(this._newCategoryName||'').trim();
		if(!n) return;
		const color=this._normalizeHexColor(this._newCategoryColor);
		const payload = color ? { name:n, color } : { name:n };
		await this.hass.callService('chores4kids','add_category', payload);
		this._newCategoryName='';
		this._newCategoryColor='';
	}
	async _setCategoryColor(cat, e){
		try{
			if (!cat?.id) return;
			const color = String(e?.target?.value || '').trim();
			await this.hass.callService('chores4kids','set_category_color',{ category_id: cat.id, color });
		}catch(err){
			console.error('Failed to set category color:', err);
		}
	}
	async _promptRenameCategory(cat){ const nn=prompt(this._t('btn.rename'), cat.name); if(!nn || nn===cat.name) return; await this.hass.callService('chores4kids','rename_category',{ category_id: cat.id, new_name: nn }); }
	async _deleteCategory(cat){ if(!confirm(this._t('btn.delete')+'?')) return; await this.hass.callService('chores4kids','delete_category',{ category_id: cat.id }); }

	_updateAssignSummary(taskId, taskRef){
		try{
			const row = this.shadowRoot.querySelector(`tr[data-task="${taskId}"]`);
			const boxes = Array.from(row?.querySelectorAll('.c4k-assign:checked')||[]);
			const ids = boxes.map(i=> i.value);
			const names = boxes.map(i=> i.parentElement?.querySelector('span')?.textContent?.trim()).filter(Boolean);
			if (taskRef) taskRef._assignToMulti = ids;
			const val = row?.querySelector('.multi-dd-value');
			if (val){
				if (names.length===0){ val.textContent = this._t('select.assign_child'); val.classList.add('placeholder'); }
				else {
					val.textContent = names.slice(0,2).join(', ') + (names.length>2? ` +${names.length-2}` : '');
					val.classList.remove('placeholder');
				}
			}
		}catch{}
	}
	_editTask(t){ this._editingTask=t; this._taskTitle=t.title; this._taskPoints=t.points; this._taskDesc=t.description||''; this._taskIcon=t.icon||''; this._taskDue = (()=>{ const d=this._parseDueToDate(t?.due); return d? this._formatDateISO(d) : ''; })(); this._taskEarlyBonusDays = (t?.early_bonus_days!=null && Number(t.early_bonus_days)>0)? String(t.early_bonus_days) : ''; this._taskEarlyBonusPoints = (t?.early_bonus_points!=null && Number(t.early_bonus_points)>0)? String(t.early_bonus_points) : ''; this._taskEarlyBonusEnabled = (()=>{ const v=t?.early_bonus_enabled; if (v===true) return true; if (v===false) return false; return (Number(t?.early_bonus_days||0)>0 && Number(t?.early_bonus_points||0)>0); })(); const mode = String(t?.schedule_mode||'').toLowerCase(); this._weeklyEnabled = (mode==='weekly'); this._monthlyEnabled = (mode==='monthly'); const map=["mon","tue","wed","thu","fri","sat","sun"]; const fromAttr=Array.isArray(t.repeat_days)? t.repeat_days.map(d=> typeof d==='number'? map[d] : String(d).slice(0,3)) : []; this._repeatDays=new Set(fromAttr); const kids = Array.isArray(t.repeat_child_ids)? t.repeat_child_ids : (t.repeat_child_id? [t.repeat_child_id]:[]); this._repeatAssign=new Set(kids); this._repeatEnabled = (!this._weeklyEnabled && !this._monthlyEnabled) && !!(fromAttr.length || kids.length || mode==='repeat'); this._persistUntilDone = !!t.persist_until_completed; this._markOverdue = t.mark_overdue !== false; this._quickComplete = !!t.quick_complete; this._skipApproval = !!t.skip_approval; this._fastestWins = !!t.fastest_wins; const cats = Array.isArray(t.categories)? t.categories : []; this._taskCategories = new Set(cats); if (this._weeklyEnabled || this._monthlyEnabled){ this._persistUntilDone = false; this._markOverdue = true; } }
	async _saveEditedTask(){
		if(!this._editingTask) return;
		// validate like create
		const pointsEnabled = this._pointsEnabled();
		this._touchedTitle = true; this._touchedPoints = pointsEnabled; this.requestUpdate();
		if (this._hasFormErrors) return;
		try{
			const bonusOn = pointsEnabled ? !!this._taskEarlyBonusEnabled : false;
			const scheduleMode = this._weeklyEnabled ? 'weekly' : (this._monthlyEnabled ? 'monthly' : (this._repeatEnabled ? 'repeat' : ''));
			const repeatOn = (scheduleMode === 'repeat');
			const dueVal = (bonusOn && (scheduleMode==='repeat' || scheduleMode==='weekly' || scheduleMode==='monthly')) ? undefined : (String(this._taskDue||'').trim() || undefined);
			await this.hass.callService('chores4kids','update_task',{
				task_id: this._editingTask.id,
				title: this._taskTitle,
				points: pointsEnabled ? Number(this._taskPoints) : 0,
				description: this._taskDesc||'',
				due: dueVal,
				early_bonus_enabled: bonusOn,
				early_bonus_days: (bonusOn && this._taskEarlyBonusDays!=='' && this._taskEarlyBonusDays!=null) ? Number(this._taskEarlyBonusDays) : undefined,
				early_bonus_points: (bonusOn && this._taskEarlyBonusPoints!=='' && this._taskEarlyBonusPoints!=null) ? Number(this._taskEarlyBonusPoints) : undefined,
				icon: this._taskIcon||'',
				persist_until_completed: (scheduleMode==='weekly' || scheduleMode==='monthly') ? false : !!this._persistUntilDone,
				mark_overdue: ((scheduleMode==='weekly' || scheduleMode==='monthly') ? false : !!this._persistUntilDone) ? !!this._markOverdue : true,
				quick_complete: !!this._quickComplete,
				skip_approval: !!this._skipApproval,
				fastest_wins: !!this._fastestWins,
				categories: Array.from(this._taskCategories||[])
			});
			// Try to set multi-children (backend may ignore list if unsupported). Fallback: set first only.
			const _ids = scheduleMode ? Array.from(this._repeatAssign||[]) : [];
			const _days = repeatOn ? Array.from(this._repeatDays||[]) : [];
			await this.hass.callService('chores4kids','set_task_repeat',{
				task_id: this._editingTask.id,
				repeat_days: _days,
				repeat_child_id: _ids[0]||undefined,
				repeat_child_ids: _ids,
				schedule_mode: scheduleMode || undefined,
			});
			
			// Check if today is in repeat days and task is unassigned template - if so, auto-assign now
			if (!this._editingTask.assigned_to && scheduleMode && _ids.length > 0) {
				const now = new Date();
				const jsDay = now.getDay();
				const weekdayMap = [6, 0, 1, 2, 3, 4, 5];
				const todayBackend = weekdayMap[jsDay];
				const assignToday = (
					scheduleMode==='weekly' ? (todayBackend===0) :
					scheduleMode==='monthly' ? (now.getDate()===1) :
					repeatOn ? (_days.includes(todayBackend) || _days.includes(['mon','tue','wed','thu','fri','sat','sun'][todayBackend])) :
					false
				);
				
				if (assignToday) {
					// Assign only for children missing a today's active instance (avoid duplicates)
					for (const cid of _ids) {
						try {
							if(!cid) continue;
							const alreadyHasTodays = (this._store.allTasks||[]).some(t =>
								!!t.assigned_to &&
								t.assigned_to === cid &&
								String(t.repeat_template_id||'') === String(this._editingTask.id||'') &&
								['assigned','in_progress','awaiting_approval'].includes(String(t.status||'')) &&
								!this._isFromBeforeToday(t)
							);
							if (alreadyHasTodays) continue;
							await this.hass.callService('chores4kids','assign_task',{ 
								task_id: this._editingTask.id, 
								child_id: cid 
							});
						} catch(e) {
							// Best-effort: ignore assign errors (e.g. backend rejects invalid child)
						}
					}
				}
			}
		} finally {
			this._editingTask=null;
			this._taskTitle=this._taskPoints=this._taskDesc=this._taskIcon='';
			this._taskDue='';
			this._taskEarlyBonusDays='';
			this._taskEarlyBonusPoints='';
			this._taskEarlyBonusEnabled=false;
			this._repeatDays=new Set(); this._repeatAssign=new Set();
			this._repeatEnabled=false;
			this._weeklyEnabled=false;
			this._monthlyEnabled=false;
			this._taskCategories=new Set();
			this._markOverdue=true;
			this._quickComplete=false;
			this._skipApproval=false;
			this._touchedTitle=false; this._touchedPoints=false;
		}
	}
	async _deleteTask(taskId){ if(!confirm(this._t('confirm.delete_task'))) return; await this.hass.callService('chores4kids','delete_task',{ task_id: taskId }); this._clearCompleted(taskId); }
	async _addShopItem(){ if(!this._pointsEnabled()) return; const title=String(this._shopTitle||'').trim(); const price=Number(this._shopPrice||0); if(!title || !Number.isFinite(price)) return; await this.hass.callService('chores4kids','add_shop_item',{ title, price, image: this._shopImage||undefined }); this._shopTitle=this._shopPrice=this._shopImage=''; try{ const el=this.shadowRoot.getElementById('c4k-shop-file'); if(el) el.value=''; }catch{} }
	async _deleteShopItem(id){ if(!this._pointsEnabled()) return; if(!id) return; await this.hass.callService('chores4kids','delete_shop_item',{ item_id: id }); }
	async _clearShopHistory(){
		if(!this._pointsEnabled()) return;
		if(!confirm(this._t('confirm.clear_history'))) return;
		try{
			await this.hass.callService('chores4kids','clear_shop_history',{});
		}catch(err){
			try{
				await this.hass.callService('chores4kids','reset_shop_history',{});
			}catch(err2){
				alert('Service chores4kids.clear_shop_history not available');
			}
		}
	}
	async _onPickImage(e){ if(!this._pointsEnabled()) return; const f=e.target?.files?.[0]; if(!f) return; const reader=new FileReader(); reader.onload= async ()=>{ try{ const dataUrl=reader.result; const ext=(f.name.split('.').pop()||'jpg').toLowerCase(); const name=`c4k_${Date.now()}_${Math.random().toString(36).slice(2)}.${ext}`; await this.hass.callService('chores4kids','upload_shop_image',{ filename:name, data:String(dataUrl) }); this._shopImage=`/local/chores4kids/${name}`; } finally { this.requestUpdate(); } }; reader.readAsDataURL(f); }
	_startEditItem(i){ this._editItem={ id:i.id, title:i.title, price:i.price, image:i.image||'', active:i.active!==false }; this.requestUpdate(); }
	async _onPickEditImage(e){ if(!this._pointsEnabled()) return; const f=e.target?.files?.[0]; if(!f) return; const reader=new FileReader(); reader.onload= async ()=>{ const dataUrl=reader.result; const ext=(f.name.split('.').pop()||'jpg').toLowerCase(); const name=`c4k_${Date.now()}_${Math.random().toString(36).slice(2)}.${ext}`; await this.hass.callService('chores4kids','upload_shop_image',{ filename:name, data:String(dataUrl) }); this._editItem={ ...this._editItem, image:`/local/chores4kids/${name}` }; this.requestUpdate(); }; reader.readAsDataURL(f); }
	async _saveEditItem(){ if(!this._pointsEnabled()) return; const it=this._editItem; if(!it) return; await this.hass.callService('chores4kids','update_shop_item',{ item_id: it.id, title:String(it.title||'').trim(), price:Number(it.price||0), image: it.image||'', active: !!it.active }); this._editItem=null; this.requestUpdate(); }
	async _toggleItemActive(i,e){ if(!this._pointsEnabled()) return; const active=!!e.target.checked; await this.hass.callService('chores4kids','update_shop_item',{ item_id: i.id, active }); }
	_openAdvanced(i){ if(!this._pointsEnabled()) return; try{ const shop=Object.values(this.hass.states).find(s=> s?.entity_id?.includes('chores4kids_shop')); const latest=shop?.attributes?.items?.find?.((x)=> x.id===i.id); this._advItem=latest||i; }catch{ this._advItem=i; } const steps=Array.isArray(this._advItem.actions)? JSON.parse(JSON.stringify(this._advItem.actions)) : []; this._advSteps=steps.map(st=>{ const t=String(st?.type||'').toLowerCase(); if(t==='service'){ const ent=st.entity_id || st.data?.entity_id || ''; const op=st.service || st.op; return { type:'entity_service', entity_id: ent, op }; } if(t==='entity_service'){ return { type:'entity_service', entity_id: st.entity_id||'', op: st.op||st.service }; } if(t==='delay'){ return { type:'delay', seconds: Number(st.seconds||st.secs||0) }; } return st; }); this.requestUpdate(); }
	_defaultOpFor(entity_id){ const dom=(entity_id||'').split('.')[0]; const ops=this._opsForDomain(dom); return ops[0]||'turn_on'; }
	_opsForDomain(dom){ switch(dom){ case 'switch': case 'light': case 'fan': case 'input_boolean': return ['turn_on','turn_off','toggle']; case 'media_player': return ['turn_on','turn_off','media_play','media_pause','toggle']; case 'lock': return ['lock','unlock']; default: return ['turn_on','turn_off']; } }
	async _saveAdvanced(){ if(!this._pointsEnabled()) return; if(!this._advItem) return; const actions=(this._advSteps||[]).map(st=> st.type==='delay'? { type:'delay', seconds: Number(st.seconds||0) } : { type:'entity_service', entity_id: st.entity_id, op: st.op||'turn_on' }); await this.hass.callService('chores4kids','update_shop_item',{ item_id: this._advItem.id, actions }); this._advItem=null; this._advSteps=[]; this.requestUpdate(); }
	async _completeNow(task){
		if(!task||!task.id) return;
		if (this._isTaskBusy(task.id)) return;
		this._setTaskBusy(task.id, true);
		try{
			const next = 'awaiting_approval';
			// Trigger konfetti + record completion timestamp (same behavior as completing via in_progress)
			console.log('Triggering confetti!');
			this._playCompletionSound();
			if (this._confettiEnabled()) this._triggerConfetti();
			const ts = Date.now();
			console.log('Recording completion timestamp:', task.id, ts);
			this._recordCompleted(task.id, ts);
			this.requestUpdate();
			await this.hass.callService('chores4kids','set_task_status',{ task_id: task.id, status: next, completed_ts: ts });
		} finally {
			this._setTaskBusy(task.id, false);
		}
	}
	async _advance(task){ 
		if(!task||!task.id) return; 
		if (this._isTaskBusy(task.id)) return;
		this._setTaskBusy(task.id, true);
		try{
			const next=task.status==='assigned'? 'in_progress' : 'awaiting_approval'; 
			// Trigger konfetti hvis opgaven bliver completed
			if(next === 'awaiting_approval') {
				console.log('Triggering confetti!');
				this._playCompletionSound();
				if (this._confettiEnabled()) this._triggerConfetti();
				// Record completion timestamp for parent view
				const ts = Date.now();
				console.log('Recording completion timestamp:', task.id, ts);
				this._recordCompleted(task.id, ts);
				this.requestUpdate();
				// Send timestamp to backend
				await this.hass.callService('chores4kids','set_task_status',{ task_id: task.id, status: next, completed_ts: ts }); 
			} else {
				await this.hass.callService('chores4kids','set_task_status',{ task_id: task.id, status: next }); 
			}
		} finally {
			this._setTaskBusy(task.id, false);
		}
	}
	_triggerConfetti() {
		if (!this._confettiEnabled()) return;
		console.log('_triggerConfetti called!');
		const container = document.createElement('div');
		container.style.cssText = 'position: fixed; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none; z-index: 99999; overflow: hidden;';
		
		// Inject keyframes directly
		const style = document.createElement('style');
		style.textContent = `
			@keyframes confetti-fall {
				0% { transform: translateY(-10vh) rotate(0deg); opacity: 1; }
				100% { transform: translateY(110vh) rotate(720deg); opacity: 0; }
			}
		`;
		document.head.appendChild(style);
		
		for(let i = 0; i < 1000; i++) {
			const confetti = document.createElement('div');
			const colors = ['#ff6b6b', '#4ecdc4', '#ffe66d', '#a8e6cf', '#ff8b94', '#ffd3b6', '#dcedc1', '#a8dadc', '#f1c0e8', '#cfbaf0'];
			const color = colors[Math.floor(Math.random() * colors.length)];
			const left = Math.random() * 100;
			const delay = Math.random() * 3;
			const duration = 2.5 + Math.random() * 1;
			
			confetti.style.cssText = `
				position: absolute;
				width: 10px;
				height: 10px;
				background: ${color};
				left: ${left}%;
				top: -10px;
				opacity: 1;
				animation: confetti-fall ${duration}s linear ${delay}s forwards;
			`;
			container.appendChild(confetti);
		}
		document.body.appendChild(container);
		console.log('Confetti container appended with', container.children.length, 'pieces');
		setTimeout(() => {
			container.remove();
			style.remove();
		}, 6000);
	}

	async _playCompletionSound(){
		try{
			const candidates = [];
			if (this.config?.completion_sound) candidates.push(this.config.completion_sound);
			candidates.push('/local/chores4kids/completion.mp3','/local/chores4kids/completion.wav','/local/chores4kids/completion.ogg');
			for (const url of candidates){
				try{
					// Cache-bust so deletions take effect immediately
					const sep = url.includes('?') ? '&' : '?';
					const resolvedUrl = this._resolveUrl(url);
					const audio = new Audio(`${resolvedUrl}${sep}_=${Date.now()}`);
					audio.volume = 0.7;
					await audio.play();
					return; // success
				}catch(err){ /* try next */ }
			}
			console.log('No playable completion sound found');
		}catch(e){ console.log('Sound playback error:', e); }
	}
	async _buy(item, childId){
		if(!this._pointsEnabled()) return;
		if(!item?.id || !childId) return;
		if(this._buyingItemId===item.id) return;
		this._buyingItemId = item.id;
		this._buySuccessItemId = null;
		this.requestUpdate();
		try{
			await this.hass.callService('chores4kids','buy_shop_item',{ child_id: childId, item_id: item.id });
			this._buySuccessItemId = item.id;
			this.requestUpdate();
			setTimeout(()=>{
				if(this._buySuccessItemId===item.id){
					this._buySuccessItemId = null;
					this.requestUpdate();
				}
			}, 900);
		}finally{
			this._buyingItemId = null;
			this.requestUpdate();
		}
	}
	
	// DEBUG: Mark task as overdue for testing
	async _debugMarkOverdue(task) {
		if(!task?.id) return;
		try {
			// Call backend service to mark as carried over
			await this.hass.callService('chores4kids','debug_mark_overdue',{ task_id: task.id });
		} catch(e) {
			console.error('Debug mark overdue failed:', e);
		}
	}
}

try{ customElements.define('chores4kids-card', Chores4KidsDevCard); }catch(e){ /* ignore */ }
// Simple GUI editor
class Chores4KidsDevCardEditor extends LitElement{
	static get properties(){ return { hass: {}, _config: {} }; }
	setConfig(config){
		this._config = { mode:'admin', ...config };
		this.requestUpdate();
	}
	updated(changedProps){
		try{
			if (changedProps.has('hass') || changedProps.has('_config')){
				this._ensureDetectedCompletionSound();
			}
		}catch{ /* ignore */ }
	}
	_getGlobalConfettiEnabled(){
		try{
			const a = this._getUiSensorAttrs?.() || {};
			if (typeof a.confetti_enabled === 'boolean') return a.confetti_enabled;
		}catch{ /* ignore */ }
		// Default ON
		return true;
	}
	async _saveGlobalConfettiEnabled(enabled){
		try{
			await this._saveGlobalUiSettings({ confetti_enabled: !!enabled });
		}catch(e){
			console.warn('Failed to save confetti_enabled', e);
		}
	}
	_getGlobalEnablePoints(){
		try{
			const states = this.hass?.states || {};
			let s = states['sensor.chores4kids_ui'];
			if (!s){
				s = Object.values(states).find(st=>{
					try{
						if (!st?.entity_id?.startsWith('sensor.')) return false;
						const a = st.attributes || {};
						return ('enable_points' in a) || ('start_task_bg' in a) || ('complete_task_bg' in a) || ('kid_points_bg' in a)
							|| ('task_done_bg' in a) || ('task_done_text' in a)
							|| ('start_task_text' in a) || ('complete_task_text' in a) || ('kid_points_text' in a)
							|| ('task_points_bg' in a) || ('task_points_text' in a);
					}catch{ return false; }
				});
			}
			const a = s?.attributes || {};
			if (typeof a.enable_points === 'boolean') return a.enable_points;
		}catch{ /* ignore */ }
		return true;
	}
	async _saveGlobalEnablePoints(enabled){
		try{
			if (!this.hass) return;
			await this.hass.callService('chores4kids','set_ui_colors',{ enable_points: !!enabled });
		}catch(e){
			console.warn('Failed to save enable_points', e);
		}
	}
	_saveGlobalColors(cfg){
		// Persist globally in HA backend so it syncs across users/devices.
		try{
			if (!this.hass) return;
			const payload = {
				start_task_bg: cfg?.start_task_bg || '',
				complete_task_bg: cfg?.complete_task_bg || '',
				kid_points_bg: cfg?.kid_points_bg || '',
				task_done_bg: cfg?.task_done_bg || '',
				start_task_text: cfg?.start_task_text || '',
				complete_task_text: cfg?.complete_task_text || '',
				kid_points_text: cfg?.kid_points_text || '',
				task_done_text: cfg?.task_done_text || '',
				task_points_bg: cfg?.task_points_bg || '',
				task_points_text: cfg?.task_points_text || '',
			};
			// debounce service calls while typing
			this._pendingUiColors = payload;
			if (this._uiColorSaveTimer) clearTimeout(this._uiColorSaveTimer);
			this._uiColorSaveTimer = setTimeout(async ()=>{
				try{
					await this.hass.callService('chores4kids','set_ui_colors', this._pendingUiColors || payload);
				}catch(e){
					console.warn('Failed to save UI colors', e);
				}
			}, 250);
		}catch{ /* ignore */ }
	}
	_t(key, vars){ return c4kLocalize(key, this.hass || navigator.language || 'en', vars); }
	_emit(){ this.dispatchEvent(new CustomEvent('config-changed',{ detail:{ config: this._config }, bubbles:true, composed:true })); }
	async _onSoundUpload(e) {
		const file = e.target?.files?.[0];
		if(!file) return;
		const reader = new FileReader();
		reader.onload = async () => {
			try {
				const dataUrl = reader.result;
				const ext = (file.name.split('.').pop() || 'mp3').toLowerCase();
				// Use a stable filename so all dashboards share the same sound
				const name = `completion.${ext}`;
				// Upload to Home Assistant using existing shop image service
				await this.hass.callService('chores4kids','upload_shop_image',{ filename: name, data: String(dataUrl) });
				// Update config with the path
				this._config = {...this._config, completion_sound: `/local/chores4kids/${name}`};
				// allow selecting the same file again later
				try{ if (e?.target) e.target.value = ''; }catch{}
				this._emit();
			} catch(err) {
				console.error('Sound upload failed:', err);
				alert('Failed to upload sound file');
			}
		};
		reader.readAsDataURL(file);
	}
	_getCompletionSoundFilename(){
		try{
			const raw = String(this._config?.completion_sound || '').trim();
			if (!raw) return '';
			const m = raw.match(/\/local\/chores4kids\/([^/?#]+)$/);
			if (m && m[1]) return m[1];
			const last = raw.split('/').pop();
			return String(last || '').trim();
		}catch{ return ''; }
	}
	async _urlExists(url){
		try{
			const bust = (url.includes('?') ? '&' : '?') + `_=${Date.now()}`;
			let r = await fetch(url + bust, { method:'HEAD', cache:'no-store' });
			if (r.ok) return true;
			// Some servers block HEAD; try a tiny GET.
			if (r.status === 405 || r.status === 403){
				r = await fetch(url + bust, { method:'GET', cache:'no-store', headers: { 'Range': 'bytes=0-0' } });
				if (r.ok) return true;
			}
		}catch{ /* ignore */ }
		return false;
	}
	async _ensureDetectedCompletionSound(force=false){
		try{
			const cfg = this._config || {};
			if (cfg.mode === 'kid') return;
			// If explicitly configured, no need to detect.
			if (cfg.completion_sound){
				this._detectedCompletionSound = null;
				return;
			}
			if (!force && this._detectedCompletionSound) return;
			if (this._soundDetectInFlight) return;
			this._soundDetectInFlight = true;
			const exts = ['mp3','wav','ogg','m4a','aac'];
			let found = null;
			for (const ext of exts){
				const url = `/local/chores4kids/completion.${ext}`;
				// eslint-disable-next-line no-await-in-loop
				if (await this._urlExists(url)) { found = { url, filename: `completion.${ext}` }; break; }
			}
			this._detectedCompletionSound = found;
			this.requestUpdate();
		}catch{ /* ignore */ }
		finally{ this._soundDetectInFlight = false; }
	}
	async _deleteCompletionSound(){
		try{
			if (!this.hass) return;
			const fromCfg = this._getCompletionSoundFilename();
			const filename = fromCfg || this._detectedCompletionSound?.filename || '';
			if (!confirm(this._t('editor.delete_sound_confirm'))) return;
			// Try deleting the explicitly referenced filename (if any)
			if (filename){
				try{ await this.hass.callService('chores4kids','delete_uploaded_file',{ filename }); }catch(e){ /* fall through */ }
			}
			// Always also delete legacy completion files
			await this.hass.callService('chores4kids','delete_completion_sound',{});
			this._config = {...(this._config||{}), completion_sound: ''};
			this._detectedCompletionSound = null;
			this._emit();
			this._ensureDetectedCompletionSound(true);
		}catch(e){
			console.error('Sound delete failed:', e);
			alert(this._t('editor.delete_sound_failed'));
		}
	}
	_getChildren(){
		try{
			const states = this.hass?.states || {};
			const names = Object.values(states)
				.filter((s)=> s && s.entity_id?.startsWith('sensor.') && s.attributes?.child_id && s.attributes?.name)
				.map((s)=> s.attributes.name)
				.filter(Boolean);
			return Array.from(new Set(names)).sort((a,b)=> String(a).localeCompare(String(b)));
		}catch{ return []; }
	}
	_getNotifyServiceOptions(){
		try{
			const services = this.hass?.services?.notify || {};
			return Object.keys(services).sort((a,b)=> String(a).localeCompare(String(b)));
		}catch{ return []; }
	}
	_getGlobalNotifyServices(){
		try{
			const a = this._getUiSensorAttrs?.() || {};
			const fromCfg = Array.isArray(this._config?.notify_services) ? this._config.notify_services : [];
			const list = Array.isArray(a.notify_services) ? a.notify_services : [];
			const cleaned = [...list, ...fromCfg].map(s=> String(s||'').trim()).filter(Boolean)
				.filter((v,i,a)=> a.indexOf(v)===i);
			const single = String(a.notify_service || '').trim();
			if (single && !cleaned.includes(single)) cleaned.push(single);
			return cleaned;
		}catch{ return []; }
	}
	_getNotifyServiceSettings(){
		try{
			const a = this._getUiSensorAttrs?.() || {};
			const fromCfg = (this._config?.notify_service_settings && typeof this._config.notify_service_settings === 'object') ? this._config.notify_service_settings : {};
			const fromStore = (a.notify_service_settings && typeof a.notify_service_settings === 'object') ? a.notify_service_settings : {};
			const merged = { ...fromStore };
			for (const [svc, opts] of Object.entries(fromCfg || {})){
				if (!opts || typeof opts !== 'object') continue;
				merged[svc] = { ...(merged[svc] || {}), ...opts };
			}
			return merged;
		}catch{ return {}; }
	}
	_setNotifyServiceSetting(service, key, value){
		try{
			const map = this._getNotifyServiceSettings();
			const next = { ...map, [service]: { ...(map?.[service] || {}), [key]: !!value } };
			this._config = { ...(this._config||{}), notify_service_settings: next };
			this._saveGlobalUiSettings({ notify_service_settings: next });
			this._emit();
		}catch{ /* ignore */ }
	}
	_getUiSensorAttrs(){
		try{
			const states = this.hass?.states;
			if (!states) return {};
			let s = states['sensor.chores4kids_ui'];
			if (!s){
				s = Object.values(states).find(st=>{
					try{
						if (!st?.entity_id?.startsWith('sensor.')) return false;
						const a = st.attributes || {};
						return (
							('enable_points' in a) || ('start_task_bg' in a) || ('complete_task_bg' in a) || ('kid_points_bg' in a)
							|| ('task_done_bg' in a) || ('task_done_text' in a)
							|| ('start_task_text' in a) || ('complete_task_text' in a) || ('kid_points_text' in a)
							|| ('task_points_bg' in a) || ('task_points_text' in a)
							|| ('kid_task_title_size' in a) || ('kid_task_points_size' in a) || ('kid_task_button_size' in a)
							|| ('confetti_enabled' in a)
							|| ('notify_service' in a) || ('notify_services' in a) || ('notify_service_settings' in a)
						);
					}catch{ return false; }
				});
			}
			return (s?.attributes && typeof s.attributes === 'object') ? s.attributes : {};
		}catch{ return {}; }
	}
	_getGlobalKidFontSizes(){
		const a = this._getUiSensorAttrs();
		return {
			title: a?.kid_task_title_size || '',
			points: a?.kid_task_points_size || '',
			button: a?.kid_task_button_size || '',
		};
	}
	_saveGlobalUiSettings(payload){
		// Persist globally in HA backend so it syncs across users/devices.
		try{
			if (!this.hass) return;
			const next = { ...(this._pendingUiColors || {}), ...(payload || {}) };
			this._pendingUiColors = next;
			const hasNotifySettings = payload && Object.prototype.hasOwnProperty.call(payload, 'notify_service_settings');
			if (hasNotifySettings){
				try{ this.hass.callService('chores4kids','set_ui_colors', this._pendingUiColors || next); }catch(e){
					console.warn('Failed to save UI settings (notify)', e);
				}
				return;
			}
			if (this._uiColorSaveTimer) clearTimeout(this._uiColorSaveTimer);
			this._uiColorSaveTimer = setTimeout(async ()=>{
				try{
					await this.hass.callService('chores4kids','set_ui_colors', this._pendingUiColors || next);
				}catch(e){
					console.warn('Failed to save UI settings', e);
				}
			}, 250);
		}catch{ /* ignore */ }
	}
		render(){
		const cfg=this._config||{};
		const kids=this._getChildren();
		const notifyOptions = this._getNotifyServiceOptions();
		const globalNotify = this._getGlobalNotifyServices();
		const notifyAvailable = (notifyOptions||[]).filter(s=> !globalNotify.includes(s));
		const notifySettings = this._getNotifyServiceSettings();
		const globalFs = this._getGlobalKidFontSizes();
		const fsTitle = (this._fsTaskTitle != null) ? this._fsTaskTitle : globalFs.title;
		const fsPoints = (this._fsTaskPoints != null) ? this._fsTaskPoints : globalFs.points;
		const fsButton = (this._fsTaskButton != null) ? this._fsTaskButton : globalFs.button;
		return html`
		<div class="card-config">
			<div class="section-box">
				<div class="form-field">
					<label>${this._t('editor.developer_mode')}</label>
					<label style="display:flex;align-items:center;gap:8px;">
						<span>${this._t('ui.toggle_off_on')}</span>
						<ha-switch .checked=${cfg.debug_mode === true} @change=${e=>{ this._config={...cfg, debug_mode: !!e.target.checked}; this._emit(); }}></ha-switch>
					</label>
					<small style="opacity:.8; margin-top:4px; display:block;">${this._t('editor.developer_mode_help')}</small>
				</div>
				<div class="form-field"><label>${this._t('editor.mode')}</label>
					<select .value=${cfg.mode||'admin'} @change=${e=>{ this._config={...cfg, mode:e.target.value}; this._emit(); }}>
						<option value="admin">${this._t('editor.mode_admin')}</option>
						<option value="kid">${this._t('editor.mode_kid')}</option>
						<option value="overview">${this._t('editor.mode_overview')}</option>
					</select>
				</div>
				${(cfg.mode||'admin')==='admin' ? html`
					<div class="form-field">
						<label>${this._t('editor.confetti')}</label>
						<label style="display:flex;align-items:center;gap:8px;">
							<span>${this._t('ui.toggle_off_on')}</span>
							<ha-switch .checked=${this._getGlobalConfettiEnabled()} @change=${async e=>{ const enabled=!!e.target.checked; await this._saveGlobalConfettiEnabled(enabled); this._config={...cfg, confetti: enabled}; this._emit(); }}></ha-switch>
						</label>
						<small style="opacity:.8; margin-top:4px; display:block;">${this._t('editor.confetti_help')}</small>
					</div>
				` : ''}
				${cfg.mode !== 'kid' ? html`
					<div class="form-field">
						<label>${this._t('editor.completion_sound')}</label>
						<input type="file" accept="audio/*" @change=${e=> this._onSoundUpload(e)} style="width:100%; max-width:100%; box-sizing:border-box; margin-bottom:4px;" />
						${(cfg.completion_sound || this._detectedCompletionSound) ? html`
							<div style="display:flex;align-items:center;gap:8px;margin-top:4px; flex-wrap:wrap;">
								<small style="opacity:.8;flex:1;word-break:break-all;">${cfg.completion_sound || this._detectedCompletionSound?.url}</small>
								${cfg.completion_sound ? html`
									<button @click=${()=>{ this._config={...cfg, completion_sound: ''}; this._emit(); }} style="padding:4px 8px;font-size:0.8rem;">${this._t('form.clear')}</button>
								` : ''}
								<button @click=${()=> this._deleteCompletionSound()} ?disabled=${!(cfg.completion_sound || this._detectedCompletionSound?.filename)} style="padding:4px 8px;font-size:0.8rem;">${this._t('editor.delete_sound')}</button>
							</div>
						` : ''}
						${(!(cfg.completion_sound || this._detectedCompletionSound)) ? html`
							<div style="display:flex;align-items:center;gap:8px;margin-top:4px;">
								<button @click=${()=> this._deleteCompletionSound()} style="padding:4px 8px;font-size:0.8rem;">${this._t('editor.delete_sound')}</button>
							</div>
						` : ''}
						<small style="opacity:.8; margin-top:4px; display:block;">${this._t('editor.completion_sound_help')}</small>
					</div>
				` : ''}
			</div>

			${(cfg.mode||'admin')==='admin' ? html`
				<div class="section-box">
					<div class="form-field">
						<label>${this._t('section.notifications')}</label>
						<small style="opacity:.8; margin-top:4px; display:block;">${this._t('editor.notify_target_help')}</small>
						<div class="notify-chips">
							${(globalNotify||[]).length ? (globalNotify||[]).map(s=> html`
								<span class="notify-chip">
									${s}
									<button class="chip-x" title="${this._t('form.clear')}" @click=${()=>{
										const next = (globalNotify||[]).filter(x=> x!==s);
										this._saveGlobalUiSettings({ notify_services: next, notify_service: next[0] || '' });
										this._config={...cfg, notify_service: next[0] || '', notify_services: next};
										this._emit();
									}}>&times;</button>
								</span>
							`) : html`<span class="notify-empty">${this._t('editor.notify_target_none')}</span>`}
						</div>
						<select .value=${''} @change=${e=>{ const v=String(e.target.value||''); if(!v){ this._saveGlobalUiSettings({ notify_services: [], notify_service: '' }); this._config={...cfg, notify_service: '', notify_services: []}; this._emit(); return; } const next=[...(globalNotify||[]), v].filter((x,i,a)=>a.indexOf(x)===i); this._saveGlobalUiSettings({ notify_services: next, notify_service: next[0] || '' }); this._config={...cfg, notify_service: next[0] || '', notify_services: next}; this._emit(); try{ e.target.value=''; }catch{} }}>
							<option value="">${this._t('editor.notify_target_none')}</option>
							${(notifyAvailable||[]).map(s=> html`<option value="${s}">${s}</option>`)}
						</select>
						${(globalNotify||[]).length ? html`
							<div style="margin-top:10px; display:grid; gap:10px;">
								${(globalNotify||[]).map(service=>{
									const s = notifySettings?.[service] || {};
									const taskCompleteEnabled = (s.task_complete !== undefined) ? !!s.task_complete : true;
									const shopPurchaseEnabled = (s.shop_purchase !== undefined) ? !!s.shop_purchase : true;
									const shopImageEnabled = (s.shop_image !== undefined) ? !!s.shop_image : true;
									return html`
										<ha-expansion-panel .header=${service} style="border:1px solid var(--divider-color); border-radius:8px; overflow:hidden;">
											<div style="padding:10px; display:grid; gap:10px;">
												<label style="display:flex;align-items:center;gap:8px;">
													<ha-switch .checked=${taskCompleteEnabled} @change=${e=> this._setNotifyServiceSetting(service, 'task_complete', e.target.checked)}></ha-switch>
													<span>${this._t('editor.notify_toggle_complete')}</span>
												</label>
												<label style="display:flex;align-items:center;gap:8px;">
													<ha-switch .checked=${shopPurchaseEnabled} @change=${e=> this._setNotifyServiceSetting(service, 'shop_purchase', e.target.checked)}></ha-switch>
													<span>${this._t('editor.notify_toggle_shop')}</span>
												</label>
												<label style="display:flex;align-items:center;gap:8px; margin-left:26px; opacity:${shopPurchaseEnabled ? '1' : '.5'};">
													<ha-switch .checked=${shopImageEnabled} ?disabled=${!shopPurchaseEnabled} @change=${e=> this._setNotifyServiceSetting(service, 'shop_image', e.target.checked)}></ha-switch>
													<span>${this._t('editor.notify_toggle_shop_image')}</span>
												</label>
											</div>
										</ha-expansion-panel>
									`;
								})}
							</div>
						` : ''}
					</div>
				</div>
			` : ''}

			${cfg.mode==='admin' ? html`
				<div class="section-box">
					<div class="form-field">
						<label>${this._t('editor.enable_points')}</label>
						<label style="display:flex;align-items:center;gap:8px;">
							<span>${this._t('ui.toggle_off_on')}</span>
							<ha-switch .checked=${this._getGlobalEnablePoints()} @change=${async e=>{ const enabled=!!e.target.checked; await this._saveGlobalEnablePoints(enabled); this._config={...cfg, enable_points: enabled}; this._emit(); }}></ha-switch>
						</label>
						<small style="opacity:.8; margin-top:4px; display:block;">${this._t('editor.enable_points_help')}</small>
					</div>
					<div class="form-field">
						<label>${this._t('section.scoreboard')}</label>
						<label style="display:flex;align-items:center;gap:8px;">
							<span>${this._t('ui.toggle_off_on')}</span>
							<ha-switch .checked=${(cfg.enable_points !== false) && (cfg.show_scoreboard !== false)} ?disabled=${cfg.enable_points === false} @change=${e=>{ this._config={...cfg, show_scoreboard: !!e.target.checked}; this._emit(); }}></ha-switch>
						</label>
					</div>
				</div>

				<div class="section-box">
					<div class="form-field">
						<label>${this._t('editor.colors')}</label>
						<div style="display:grid; gap:12px; margin-top:8px;">
						<ha-expansion-panel .header=${this._t('editor.color_group_start')} style="border:1px solid var(--divider-color); border-radius:8px; overflow:hidden;">
							<div style="padding:10px;">
								<div class="form-field" style="margin-top:6px;">
									<label style="font-weight:600;">${this._t('editor.color_field_bg')}</label>
									<div style="display:flex; gap:8px; align-items:center;">
										<input .value=${cfg.start_task_bg||''} @input=${e=>{ this._config={...cfg, start_task_bg: e.target.value}; this._saveGlobalColors(this._config); this._emit(); }} placeholder="#RRGGBB" style="flex:1;" />
										<input type="color" .value=${(/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/.test(cfg.start_task_bg||'') ? cfg.start_task_bg : '#000000')} @change=${e=>{ this._config={...cfg, start_task_bg: e.target.value}; this._saveGlobalColors(this._config); this._emit(); }} style="width:44px; height:36px; padding:0; border:0; background:transparent;" />
											<button @click=${()=>{ this._config={...cfg, start_task_bg: ''}; this._saveGlobalColors(this._config); this._emit(); }} style="padding:6px 10px;">${this._t('form.clear')}</button>
									</div>
								</div>
								<div class="form-field" style="margin-top:6px;">
									<label style="font-weight:600;">${this._t('editor.color_field_text')}</label>
									<div style="display:flex; gap:8px; align-items:center;">
										<input .value=${cfg.start_task_text||''} @input=${e=>{ this._config={...cfg, start_task_text: e.target.value}; this._saveGlobalColors(this._config); this._emit(); }} placeholder="#RRGGBB" style="flex:1;" />
										<input type="color" .value=${(/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/.test(cfg.start_task_text||'') ? cfg.start_task_text : '#000000')} @change=${e=>{ this._config={...cfg, start_task_text: e.target.value}; this._saveGlobalColors(this._config); this._emit(); }} style="width:44px; height:36px; padding:0; border:0; background:transparent;" />
											<button @click=${()=>{ this._config={...cfg, start_task_text: ''}; this._saveGlobalColors(this._config); this._emit(); }} style="padding:6px 10px;">${this._t('form.clear')}</button>
									</div>
								</div>
								<small style="opacity:.8; margin-top:4px; display:block;">${this._t('editor.color_empty_default')}</small>
							</div>
						</ha-expansion-panel>

						<ha-expansion-panel .header=${this._t('editor.color_group_complete')} style="border:1px solid var(--divider-color); border-radius:8px; overflow:hidden;">
							<div style="padding:10px;">
								<div class="form-field" style="margin-top:6px;">
									<label style="font-weight:600;">${this._t('editor.color_field_bg')}</label>
									<div style="display:flex; gap:8px; align-items:center;">
										<input .value=${cfg.complete_task_bg||''} @input=${e=>{ this._config={...cfg, complete_task_bg: e.target.value}; this._saveGlobalColors(this._config); this._emit(); }} placeholder="#RRGGBB" style="flex:1;" />
										<input type="color" .value=${(/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/.test(cfg.complete_task_bg||'') ? cfg.complete_task_bg : '#000000')} @change=${e=>{ this._config={...cfg, complete_task_bg: e.target.value}; this._saveGlobalColors(this._config); this._emit(); }} style="width:44px; height:36px; padding:0; border:0; background:transparent;" />
											<button @click=${()=>{ this._config={...cfg, complete_task_bg: ''}; this._saveGlobalColors(this._config); this._emit(); }} style="padding:6px 10px;">${this._t('form.clear')}</button>
									</div>
								</div>
								<div class="form-field" style="margin-top:6px;">
									<label style="font-weight:600;">${this._t('editor.color_field_text')}</label>
									<div style="display:flex; gap:8px; align-items:center;">
										<input .value=${cfg.complete_task_text||''} @input=${e=>{ this._config={...cfg, complete_task_text: e.target.value}; this._saveGlobalColors(this._config); this._emit(); }} placeholder="#RRGGBB" style="flex:1;" />
										<input type="color" .value=${(/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/.test(cfg.complete_task_text||'') ? cfg.complete_task_text : '#000000')} @change=${e=>{ this._config={...cfg, complete_task_text: e.target.value}; this._saveGlobalColors(this._config); this._emit(); }} style="width:44px; height:36px; padding:0; border:0; background:transparent;" />
											<button @click=${()=>{ this._config={...cfg, complete_task_text: ''}; this._saveGlobalColors(this._config); this._emit(); }} style="padding:6px 10px;">${this._t('form.clear')}</button>
									</div>
								</div>
								<small style="opacity:.8; margin-top:4px; display:block;">${this._t('editor.color_empty_default')}</small>
							</div>
						</ha-expansion-panel>

						<ha-expansion-panel .header=${this._t('btn.task_done')} style="border:1px solid var(--divider-color); border-radius:8px; overflow:hidden;">
							<div style="padding:10px;">
								<div class="form-field" style="margin-top:6px;">
									<label style="font-weight:600;">${this._t('editor.color_field_bg')}</label>
									<div style="display:flex; gap:8px; align-items:center;">
										<input .value=${cfg.task_done_bg||''} @input=${e=>{ this._config={...cfg, task_done_bg: e.target.value}; this._saveGlobalColors(this._config); this._emit(); }} placeholder="#RRGGBB" style="flex:1;" />
										<input type="color" .value=${(/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/.test(cfg.task_done_bg||'') ? cfg.task_done_bg : '#000000')} @change=${e=>{ this._config={...cfg, task_done_bg: e.target.value}; this._saveGlobalColors(this._config); this._emit(); }} style="width:44px; height:36px; padding:0; border:0; background:transparent;" />
											<button @click=${()=>{ this._config={...cfg, task_done_bg: ''}; this._saveGlobalColors(this._config); this._emit(); }} style="padding:6px 10px;">${this._t('form.clear')}</button>
									</div>
								</div>
								<div class="form-field" style="margin-top:6px;">
									<label style="font-weight:600;">${this._t('editor.color_field_text')}</label>
									<div style="display:flex; gap:8px; align-items:center;">
										<input .value=${cfg.task_done_text||''} @input=${e=>{ this._config={...cfg, task_done_text: e.target.value}; this._saveGlobalColors(this._config); this._emit(); }} placeholder="#RRGGBB" style="flex:1;" />
										<input type="color" .value=${(/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/.test(cfg.task_done_text||'') ? cfg.task_done_text : '#000000')} @change=${e=>{ this._config={...cfg, task_done_text: e.target.value}; this._saveGlobalColors(this._config); this._emit(); }} style="width:44px; height:36px; padding:0; border:0; background:transparent;" />
											<button @click=${()=>{ this._config={...cfg, task_done_text: ''}; this._saveGlobalColors(this._config); this._emit(); }} style="padding:6px 10px;">${this._t('form.clear')}</button>
									</div>
								</div>
								<small style="opacity:.8; margin-top:4px; display:block;">${this._t('editor.color_empty_default')}</small>
							</div>
						</ha-expansion-panel>

						${cfg.enable_points === false ? '' : html`<ha-expansion-panel .header=${this._t('editor.color_group_kid_points')} style="border:1px solid var(--divider-color); border-radius:8px; overflow:hidden;">
							<div style="padding:10px;">
								<div class="form-field" style="margin-top:6px;">
									<label style="font-weight:600;">${this._t('editor.color_field_bg')}</label>
									<div style="display:flex; gap:8px; align-items:center;">
										<input .value=${cfg.kid_points_bg||''} @input=${e=>{ this._config={...cfg, kid_points_bg: e.target.value}; this._saveGlobalColors(this._config); this._emit(); }} placeholder="#RRGGBB" style="flex:1;" />
										<input type="color" .value=${(/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/.test(cfg.kid_points_bg||'') ? cfg.kid_points_bg : '#000000')} @change=${e=>{ this._config={...cfg, kid_points_bg: e.target.value}; this._saveGlobalColors(this._config); this._emit(); }} style="width:44px; height:36px; padding:0; border:0; background:transparent;" />
											<button @click=${()=>{ this._config={...cfg, kid_points_bg: ''}; this._saveGlobalColors(this._config); this._emit(); }} style="padding:6px 10px;">${this._t('form.clear')}</button>
									</div>
								</div>
								<div class="form-field" style="margin-top:6px;">
									<label style="font-weight:600;">${this._t('editor.color_field_text')}</label>
									<div style="display:flex; gap:8px; align-items:center;">
										<input .value=${cfg.kid_points_text||''} @input=${e=>{ this._config={...cfg, kid_points_text: e.target.value}; this._saveGlobalColors(this._config); this._emit(); }} placeholder="#RRGGBB" style="flex:1;" />
										<input type="color" .value=${(/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/.test(cfg.kid_points_text||'') ? cfg.kid_points_text : '#000000')} @change=${e=>{ this._config={...cfg, kid_points_text: e.target.value}; this._saveGlobalColors(this._config); this._emit(); }} style="width:44px; height:36px; padding:0; border:0; background:transparent;" />
											<button @click=${()=>{ this._config={...cfg, kid_points_text: ''}; this._saveGlobalColors(this._config); this._emit(); }} style="padding:6px 10px;">${this._t('form.clear')}</button>
									</div>
								</div>
								<small style="opacity:.8; margin-top:4px; display:block;">${this._t('editor.color_empty_default')}</small>
							</div>
						</ha-expansion-panel>`}

						${cfg.enable_points === false ? '' : html`<ha-expansion-panel .header=${this._t('editor.color_group_task_points')} style="border:1px solid var(--divider-color); border-radius:8px; overflow:hidden;">
							<div style="padding:10px;">
								<div class="form-field" style="margin-top:6px;">
									<label style="font-weight:600;">${this._t('editor.color_field_bg')}</label>
									<div style="display:flex; gap:8px; align-items:center;">
										<input .value=${cfg.task_points_bg||''} @input=${e=>{ this._config={...cfg, task_points_bg: e.target.value}; this._saveGlobalColors(this._config); this._emit(); }} placeholder="#RRGGBB" style="flex:1;" />
										<input type="color" .value=${(/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/.test(cfg.task_points_bg||'') ? cfg.task_points_bg : '#000000')} @change=${e=>{ this._config={...cfg, task_points_bg: e.target.value}; this._saveGlobalColors(this._config); this._emit(); }} style="width:44px; height:36px; padding:0; border:0; background:transparent;" />
											<button @click=${()=>{ this._config={...cfg, task_points_bg: ''}; this._saveGlobalColors(this._config); this._emit(); }} style="padding:6px 10px;">${this._t('form.clear')}</button>
									</div>
								</div>
								<div class="form-field" style="margin-top:6px;">
									<label style="font-weight:600;">${this._t('editor.color_field_text')}</label>
									<div style="display:flex; gap:8px; align-items:center;">
										<input .value=${cfg.task_points_text||''} @input=${e=>{ this._config={...cfg, task_points_text: e.target.value}; this._saveGlobalColors(this._config); this._emit(); }} placeholder="#RRGGBB" style="flex:1;" />
										<input type="color" .value=${(/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/.test(cfg.task_points_text||'') ? cfg.task_points_text : '#000000')} @change=${e=>{ this._config={...cfg, task_points_text: e.target.value}; this._saveGlobalColors(this._config); this._emit(); }} style="width:44px; height:36px; padding:0; border:0; background:transparent;" />
											<button @click=${()=>{ this._config={...cfg, task_points_text: ''}; this._saveGlobalColors(this._config); this._emit(); }} style="padding:6px 10px;">${this._t('form.clear')}</button>
									</div>
								</div>
								<small style="opacity:.8; margin-top:4px; display:block;">${this._t('editor.color_empty_default')}</small>
							</div>
						</ha-expansion-panel>`}
					</div>
					</div>
				</div>

				<div class="section-box">
					<div class="form-field">
						<label>Font Sizes</label>
						<div style="display:grid; gap:12px; margin-top:8px;">
							<div class="form-field">
								<label style="font-weight:600;">Task title</label>
								<div style="display:flex; gap:8px; align-items:center;">
									<input type="number" min="10" max="40" step="1" .value=${(fsTitle||'').replace('px','')} @input=${e=>{ const raw=String(e.target.value||'').trim(); this._fsTaskTitle = raw; const v = raw==='' ? '' : `${Number(raw)}px`; this._saveGlobalUiSettings({ kid_task_title_size: v }); }} placeholder="16" style="flex:1;" />
									<span style="opacity:.8; white-space:nowrap;">px</span>
									<button @click=${()=>{ this._fsTaskTitle=''; this._saveGlobalUiSettings({ kid_task_title_size: '' }); }} style="padding:6px 10px;">${this._t('form.clear')}</button>
								</div>
							</div>
							<div class="form-field">
								<label style="font-weight:600;">Task points</label>
								<div style="display:flex; gap:8px; align-items:center;">
									<input type="number" min="10" max="30" step="1" .value=${(fsPoints||'').replace('px','')} @input=${e=>{ const raw=String(e.target.value||'').trim(); this._fsTaskPoints = raw; const v = raw==='' ? '' : `${Number(raw)}px`; this._saveGlobalUiSettings({ kid_task_points_size: v }); }} placeholder="12" style="flex:1;" />
									<span style="opacity:.8; white-space:nowrap;">px</span>
									<button @click=${()=>{ this._fsTaskPoints=''; this._saveGlobalUiSettings({ kid_task_points_size: '' }); }} style="padding:6px 10px;">${this._t('form.clear')}</button>
								</div>
							</div>
							<div class="form-field">
								<label style="font-weight:600;">Task button text</label>
								<div style="display:flex; gap:8px; align-items:center;">
									<input type="number" min="10" max="30" step="1" .value=${(fsButton||'').replace('px','')} @input=${e=>{ const raw=String(e.target.value||'').trim(); this._fsTaskButton = raw; const v = raw==='' ? '' : `${Number(raw)}px`; this._saveGlobalUiSettings({ kid_task_button_size: v }); }} placeholder="14" style="flex:1;" />
									<span style="opacity:.8; white-space:nowrap;">px</span>
									<button @click=${()=>{ this._fsTaskButton=''; this._saveGlobalUiSettings({ kid_task_button_size: '' }); }} style="padding:6px 10px;">${this._t('form.clear')}</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			` : ''}

			${cfg.mode==='kid' ? html`
				<div class="section-box">
					<div class="form-field">
						<label>${this._t('editor.child_label')}</label>
						${kids.length ? html`
							<select @change=${e=>{ this._config={...cfg, child: e.target.value}; this._emit(); }}>
								<option value="" ?selected=${!cfg.child}>${this._t('editor.child_select_prompt')}</option>
								${cfg.child && !kids.includes(cfg.child) ? html`<option value=${cfg.child} ?selected=${true}>(custom) ${cfg.child}</option>`: ''}
								${kids.map(n=> html`<option value=${n} ?selected=${n===cfg.child}>${n}</option>`) }
							</select>
						`: html`
							<input .value=${cfg.child||''} @input=${e=>{ this._config={...cfg, child: e.target.value}; this._emit(); }} placeholder="${this._t('editor.child_placeholder')}" />
							<small style="opacity:.8;">${this._t('editor.child_hint')}</small>
						`}
					</div>
				</div>
			`:''}
		</div>`;
	}
	static get styles(){
		return css`
			.card-config{ display:grid; gap:12px; }
			.section-box{ border:1px solid var(--divider-color); border-radius: var(--ha-card-border-radius, 12px); padding: 12px; display:grid; gap:10px; }
			label{ display:block; font-weight:600; margin-bottom:4px; }
			input,select{ width:100%; padding:8px 10px; border-radius:8px; border:1px solid var(--divider-color); background: var(--card-background-color); color: var(--primary-text-color); }
			ha-expansion-panel{ background: var(--ha-card-background, var(--card-background-color)); }
		`;
	}
}
try{ customElements.define('chores4kids-card-editor', Chores4KidsDevCardEditor); }catch(e){ /* ignore */ }

// Lovelace card registry
window.customCards = window.customCards || [];
window.customCards.push({ type: 'chores4kids-card', name: 'Chores4Kids (Parent/Child/Latest)', preview: true, description: 'Combined card – choose Parent, Child, or Latest tasks in the editor' });


