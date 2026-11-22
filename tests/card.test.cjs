const {test}=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const vm=require('node:vm');
const registry=new Map();
class Element {requestUpdate(){}}
const context=vm.createContext({LitElement:Element,html:(s,...v)=>({s,v}),css:(s,...v)=>({s,v}),
  window:{},customElements:{define:(n,c)=>registry.set(n,c)},console,alert(){},
  localStorage:{getItem:()=>null,setItem(){}},setTimeout,clearTimeout,Date});
vm.runInContext(fs.readFileSync(require('node:path').join(__dirname,'../chores4kids-card.js'),'utf8')
  .replace(/^import .*?;\s*/,''),context);
const Card=registry.get('chores4kids-card');
test('shared reward names apply to all card modes without translating child names or the unit', () => {
  const label = 'Stars {name}';
  const sensor = {entity_id: 'sensor.renamed_ui', attributes: {chore_columns: '2', points_label: label}};
  const hass = {language: 'da', states: {[sensor.entity_id]: sensor}};
  for (const mode of ['admin','kid','overview']) {
    const instance = Object.create(Card.prototype);
    instance.hass = hass;
    instance.setConfig({mode});
    assert.equal(instance._t('th.points'), label);
    assert.equal(instance._t('points.title', {name: 'Emma'}), 'Tilføj Stars {name} til Emma');
    assert.equal(instance._t('lbl.early_bonus_by', {points: 5, date: '24/12'}), '+5 Stars {name} ved udførelse senest 24/12');
    instance.hass = {...hass, states: {}};
    assert.equal(instance._t('lbl.points'), 'point');
  }
});
test('a typed icon ID can be previewed and selected from the task picker', () => {
  const instance = Object.create(Card.prototype);
  instance.hass = {language: 'en'};
  instance._iconSearch = 'custom:braces';
  function findTile(template) {
    if (!template?.v) return;
    if (template.v.includes('custom:braces') && template.s[0].includes('<button')) return template;
    return template.v.flat().map(findTile).find(Boolean);
  }
  const tile = findTile(instance._renderIconModal());
  assert.ok(tile);
  tile.v.find(value => typeof value === 'function')();
  assert.equal(instance._taskIcon, 'custom:braces');
});
test('cards and editors default to the profile language and support per-card overrides', () => {
  const editor = new (registry.get('chores4kids-card-editor'))();
  const instance = Object.create(Card.prototype);
  for (const language of ['nl-NL', 'nl-BE']) {
    instance.hass = editor.hass = {locale: {language}};
    for (const [config, expected] of [
      [{}, 'Toegewezen taken'],
      [{language: 'en'}, 'Assigned tasks'],
      [{language: 'auto'}, 'Toegewezen taken'],
    ]) {
      instance.setConfig(config);
      editor.setConfig(config);
      assert.equal(instance._t('overview.title'), expected);
      assert.equal(editor._t('overview.title'), expected);
    }
  }
});
test('the card uses Turkish for Turkish Home Assistant profiles', () => {
  const instance = Object.create(Card.prototype);
  for (const language of ['tr', 'tr-TR']) {
    instance.hass = {locale: {language}};
    assert.equal(instance._t('btn.create_task'), 'Görev oluştur');
    assert.equal(instance._t('overview.show_all', {pending: 3}), 'Tümünü göster (3 bekliyor)');
  }
});
function card(fail=false){
  const instance=Object.create(Card.prototype),calls=[];
  instance._taskBusy={};instance.requestUpdate=()=>{};instance._isTaskOverdue=()=>false;
  instance.hass={callService:async(domain,service,data)=>{calls.push(service);if(fail&&service==='approve_task')throw Error('offline');}};
  return {instance,calls};
}
test('approve all approves the main task before its bonus',async()=>{
  const {instance,calls}=card();
  await instance._approveMainAndBonus({id:'task',bonus_enabled:true});
  assert.deepEqual(calls,['approve_task','complete_bonus_task','approve_bonus_task']);
  assert.equal(instance._isTaskBusy('task'),false);
});
test('a failed main approval does not award bonus points',async()=>{
  const {instance,calls}=card(true);
  await instance._approveMainAndBonus({id:'task',bonus_enabled:true});
  assert.deepEqual(calls,['approve_task']);
  assert.equal(instance._isTaskBusy('task'),false);
});
test('overdue reassign prompt cancels approve all',async()=>{
  const {instance,calls}=card();instance._isTaskOverdue=()=>true;
  instance._autoAssignActive=()=>true;instance._isScheduledToday=()=>true;
  await instance._approveMainAndBonus({id:'task',bonus_enabled:true});
  assert.deepEqual(calls,[]);assert.equal(instance._reassignTask.id,'task');
});
for (const method of ['_completeNow', '_advance']) {
  test(method + ' only celebrates a confirmed completion', async () => {
    const {instance} = card();
    const events = [];
    instance._recordCompleted = () => events.push('timestamp');
    instance._playCompletionSound = () => events.push('sound');
    instance._confettiEnabled = () => true;
    instance._triggerConfetti = () => events.push('confetti');
    const task = {id: 'instance', status: 'in_progress'};
    instance.hass.callService = async () => { throw Error('task_not_found'); };
    await assert.rejects(instance[method](task), /task_not_found/);
    assert.deepEqual(events, []);
    assert.equal(instance._isTaskBusy(task.id), false);
    instance.hass.callService = async (domain, service, payload) => {
      assert.equal(payload.task_id, task.id);
      assert.equal(payload.status, 'awaiting_approval');
      assert.ok(payload.completed_ts);
      events.push('confirmed');
    };
    await instance[method](task);
    assert.deepEqual(events, ['confirmed','timestamp','sound','confetti']);
  });
}

test('parent section choices are local and selecting every section restores the full view', () => {
  const Editor = registry.get('chores4kids-card-editor');
  const review = new Editor();
  const shop = new Editor();
  review.setConfig({mode: 'admin', admin_sections: ['assigned'], language: 'da'});
  shop.setConfig({mode: 'admin', admin_sections: ['shop']});
  review._emit = () => {};
  review._setAdminSection('approvals', true);
  assert.deepEqual(Array.from(review._config.admin_sections), ['assigned', 'approvals']);
  assert.deepEqual(Array.from(shop._config.admin_sections), ['shop']);
  for (const key of ['children','categories','create','tasks','finished','history','scoreboard','shop','deliveries']) {
    review._setAdminSection(key, true);
  }
  assert.equal(Object.hasOwn(review._config, 'admin_sections'), false);
  assert.equal(review._config.language, 'da');
});
