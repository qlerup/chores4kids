"""Browser regression. Install playwright + Chromium, then run this script.
Uses the real distributed card with synthetic HA states.
"""
import json
import threading
from functools import partial
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from playwright.sync_api import sync_playwright

ROOT = Path(__file__).resolve().parents[1]
class Quiet(SimpleHTTPRequestHandler):
    def log_message(self, *args): pass
server=ThreadingHTTPServer(('127.0.0.1',0),partial(Quiet,directory=str(ROOT)))
threading.Thread(target=server.serve_forever,daemon=True).start()
base=f'http://127.0.0.1:{server.server_port}'
with sync_playwright() as p:
    browser=p.chromium.launch()
    page=browser.new_page(viewport={'width':375,'height':812},has_touch=True,is_mobile=True,ignore_https_errors=True)
    page.on('pageerror',lambda e:print('PAGE ERROR:',e))
    page.goto(base)
    page.evaluate("document.head.insertAdjacentHTML('beforeend','<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">')")
    page.add_script_tag(url=base+'/chores4kids-card.js',type='module')
    page.wait_for_function("customElements.get('chores4kids-card') !== undefined",timeout=60000)
    page.evaluate('''() => {
      const c=document.createElement('chores4kids-card'); c.setConfig({mode:'kid',child:'Test'});
      const tasks=[{id:'task',icon:'mdi:broom',title:'A very long task title that must wrap safely on a small phone',points:5,status:'awaiting_approval',
        bonus_enabled:true,bonus_title:'A follow-up task with a very long description on mobile',bonus_points:2}];
      c.hass={states:{'sensor.child':{entity_id:'sensor.child',state:'5',attributes:{child_id:'child',slug:'test',name:'Test',tasks}}},language:'en',callService:async()=>{}};
      document.body.replaceChildren(c);
    }''')
    bonus=page.locator('chores4kids-card .bonus-subtask');bonus.wait_for()
    for width in (320,375,700,1024):
        page.set_viewport_size({'width':width,'height':812})
        page.wait_for_timeout(50)
        result=page.evaluate('''() => {
          const root=document.querySelector('chores4kids-card').shadowRoot;
          return ['.task','.bonus-subtask','.bonus-subtask-actions button'].map(sel=>{
            const el=root.querySelector(sel),r=el.getBoundingClientRect();
            return {sel,left:r.left,right:r.right,overflow:el.scrollWidth-el.clientWidth};
          });
        }''')
        for r in result:
            assert r['left']>=0 and r['right']<=width and r['overflow']<=1,(width,result)
        print('PASS: child task/bonus/actions fit viewport',width)
        if width==375: page.screenshot(path=str(ROOT/'tests/chores-mobile-fixed.png'))
    page.evaluate("""() => { const c=document.querySelector('chores4kids-card'); c.setConfig({mode:'admin'}); c.requestUpdate(); }""")
    toggle=page.locator('chores4kids-card label').filter(has_text='Enable bonus task').first
    toggle.wait_for()
    toggle.locator('input').check()
    assert page.locator('chores4kids-card input[placeholder="Bonus task title"]').first.is_visible()
    print('PASS: bundled card exposes working bonus controls in parent form')
    browser.close()
server.shutdown()
