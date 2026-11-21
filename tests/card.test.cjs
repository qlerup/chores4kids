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
