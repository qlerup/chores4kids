const {test}=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const workflow=fs.readFileSync(path.join(__dirname,'../.github/workflows/version-latest-check.yml'),'utf8');
const script=workflow.split(/script: \|\r?\n/)[1].split(/\r?\n/).map(line=>line.slice(12)).join('\n');
const AsyncFunction=Object.getPrototypeOf(async function(){}).constructor;
const run=new AsyncFunction('github','context','core','fetch',script);
function fixture(labels=[{name:'bug'}],body='I am using version 3.2.2'){
  const comments=[],warnings=[];
  const github={rest:{issues:{get:async()=>({data:{number:45,labels,body,user:{login:'reporter'},state:'open'}}),
    listComments:()=>{},createComment:async args=>comments.push(args)},
    repos:{getLatestRelease:async()=>({data:{tag_name:'v3.2.3',html_url:'https://example.test/release'}})}},paginate:async()=>[]};
  const context={repo:{owner:'qlerup',repo:'chores4kids'},eventName:'issues',payload:{action:'edited',issue:{number:45}}};
  return {github,context,core:{warning:x=>warnings.push(x)},comments,warnings};
}
for(const mode of ['invalid JSON','network failure','HTTP error']){
  test(`version workflow falls back when Models returns ${mode}`,async()=>{
    const f=fixture();
    const fetch=async()=>{
      if(mode==='network failure')throw Error('network unavailable');
      return {ok:mode!=='HTTP error',status:503,statusText:'Unavailable',json:async()=>{throw SyntaxError('OK is not JSON')}};
    };
    await run(f.github,f.context,f.core,fetch);
    assert.equal(f.comments.length,1);assert.match(f.comments[0].body,/reported=3.2.2/);
    assert.equal(f.warnings.length,1);
  });
}
test('waiting-for-release issues skip Models and version comments',async()=>{
  const f=fixture([{name:'bug'},{name:'Bug fixed - created - waiting for release'}]);
  await run(f.github,f.context,f.core,async()=>{throw Error('must not be called')});
  assert.equal(f.comments.length,0);assert.equal(f.warnings.length,0);
});
