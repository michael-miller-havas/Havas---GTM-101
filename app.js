
(function(){
  window.dataLayer = window.dataLayer || [];
  const cfg = window.GTM_TRAINING_CONFIG || {};
  const qs = new URLSearchParams(location.search);
  const gtmId = cfg.allowQueryStringGtmOverride && qs.get('gtm') ? qs.get('gtm') : cfg.containerId;
  const traineeId = qs.get('trainee_id') || sessionStorage.getItem('trainee_id') || undefined;
  if(qs.get('trainee_id')) sessionStorage.setItem('trainee_id', qs.get('trainee_id'));
  const pageName = document.body.dataset.page || document.title;
  function compact(o){Object.keys(o).forEach(k=>(o[k]===undefined||o[k]==='')&&delete o[k]);return o;}
  function push(payload){
    const data = compact(Object.assign({event_time:new Date().toISOString(),training_site:'acme_biologics',page_name:pageName,page_path:location.pathname,trainee_id:traineeId}, payload));
    window.dataLayer.push(data);
    window.dispatchEvent(new CustomEvent('training:dataLayerPush',{detail:data}));
  }
  window.trainingPush = push;
  push({event:'training_page_view',page_title:document.title});
  function loadGtm(id){ if(!id || id==='GTM-XXXXXXX') return; window.dataLayer.push({'gtm.start':Date.now(),event:'gtm.js'}); let f=document.getElementsByTagName('script')[0],j=document.createElement('script'); j.async=true; j.src='https://www.googletagmanager.com/gtm.js?id='+encodeURIComponent(id); f.parentNode.insertBefore(j,f); }
  loadGtm(gtmId);
  document.addEventListener('click', e=>{
    const el=e.target.closest('[data-track]'); if(!el) return;
    const details=compact({event:el.dataset.event||'cta_click',interaction_type:el.dataset.track,cta_text:(el.innerText||el.getAttribute('aria-label')||'').trim(),cta_id:el.id,page_section:el.dataset.section||el.closest('section')?.dataset.section,destination_url:el.getAttribute('href'),resource_name:el.dataset.resourceName,resource_type:el.dataset.resourceType,content_group:el.dataset.contentGroup,funnel_step:el.dataset.funnelStep});
    push(details);
    if(el.dataset.duplicatePush==='true') setTimeout(()=>push(Object.assign({},details,{duplicate_reason:'intentional_training_error'})),50);
  });
  document.querySelectorAll('form[data-form-name]').forEach(form=>{
    let started=false; form.addEventListener('input',()=>{if(!started){started=true;push({event:'form_start',form_name:form.dataset.formName,form_id:form.id});}});
    form.addEventListener('submit',e=>{e.preventDefault(); const missing=[...form.querySelectorAll('[required]')].some(i=>!i.value.trim()); if(missing){push({event:'form_error',form_name:form.dataset.formName,form_id:form.id,error_type:'required_field_missing'}); msg(form,'Please complete required fields.','err'); return;} const fd=new FormData(form); push(compact({event:form.dataset.successEvent||'generate_lead',form_name:form.dataset.formName,form_id:form.id,lead_type:form.dataset.leadType,reason:fd.get('reason')||fd.get('specialty')})); msg(form,'Success. Training dataLayer event pushed.','ok'); if(form.dataset.redirect==='thank-you'){sessionStorage.setItem('last_conversion_type',form.dataset.leadType||form.dataset.formName); setTimeout(()=>location.href='thank-you.html',350);}});
  });
  const loc=document.getElementById('provider-search-form'); if(loc) loc.addEventListener('submit',e=>{e.preventDefault(); const zip=document.getElementById('zip').value.trim(); if(!/^\d{5}$/.test(zip)){push({event:'search_error',search_type:'provider_locator',error_type:'invalid_zip'}); msg(loc,'Invalid training ZIP. Use five digits.','err'); return;} push({event:'search',search_type:'provider_locator',search_term:zip,results_count:3}); document.getElementById('provider-results').hidden=false; msg(loc,'Training search complete.','ok');});
  document.querySelectorAll('[data-video]').forEach(b=>b.addEventListener('click',()=>{push({event:'video_start',video_title:b.dataset.video,video_provider:'training_mock'}); let s=document.getElementById('video-status'); if(s)s.textContent='Mock video started. Check Preview for video_start.';}));
  function msg(form,text,cls){let box=form.querySelector('.form-message'); if(!box){box=document.createElement('div'); form.appendChild(box);} box.className='form-message notice '+cls; box.textContent=text;}
  if(cfg.debugPanel){const p=document.createElement('details'); p.className='qa-panel'; p.innerHTML='<summary>QA Data Layer Console</summary><pre id="qa-log">Recent dataLayer pushes print here. Use GTM Preview as final QA.\n</pre>'; document.body.appendChild(p); const log=p.querySelector('#qa-log'); window.addEventListener('training:dataLayerPush',e=>{log.textContent+='\n'+JSON.stringify(e.detail,null,2)+'\n'; log.scrollTop=log.scrollHeight;});}

  // ===== Add to Kit Button Feedback =====
const addToKitBtn = document.getElementById('add-to-kit-btn');
if (addToKitBtn) {
addToKitBtn.addEventListener('click', function () {
this.innerHTML = '✓ Added to Kit';
this.style.background = '#16a34a';
this.style.color = '#fff';
this.disabled = true;
});
}
// ===== Expand ISI Button Feedback =====
const isiBtn = document.getElementById('expand-isi-btn');
const isiContent = document.getElementById('isi-content');
if (isiBtn && isiContent) {
isiBtn.addEventListener('click', function () {
if (isiContent.style.display === 'none') {
isiContent.style.display = 'block';
this.innerHTML = 'Hide ISI';
} else {
isiContent.style.display = 'none';
this.innerHTML = 'Expand ISI';
}
});
}
// ===== Savings Page Button Feedback =====

const startBtn = document.getElementById('start-app-btn');
const eligibilityBtn = document.getElementById('eligibility-btn');
const downloadBtn = document.getElementById('download-card-btn');
const savingsStatus = document.getElementById('savings-status');

function setSavingsSuccess(btn, text) {

    if (!btn) return;

    btn.textContent = text;

    btn.classList.remove('primary');
    btn.classList.remove('ghost');
    btn.classList.remove('secondary');

    btn.classList.add('success-button');

    btn.disabled = true;
}

if (startBtn) {

    startBtn.addEventListener('click', function () {

        setSavingsSuccess(this,'✓ Step 1 Complete');

        if (savingsStatus) {
            savingsStatus.style.display = 'block';
            savingsStatus.innerHTML =
                '<strong>Success:</strong> Application started successfully.';
        }

    });

}

if (eligibilityBtn) {

    eligibilityBtn.addEventListener('click', function () {

        setSavingsSuccess(this,'✓ Eligible');

        if (savingsStatus) {
            savingsStatus.style.display = 'block';
            savingsStatus.innerHTML =
                '<strong>Success:</strong> Eligibility verification complete.';
        }

    });

}

if (downloadBtn) {

    downloadBtn.addEventListener('click', function () {

        setSavingsSuccess(this,'✓ Savings Card Downloaded');

        if (savingsStatus) {
            savingsStatus.style.display = 'block';
            savingsStatus.innerHTML =
                '<strong>Success:</strong> Savings card download registered.';
        }

    });

}

console.log('SAVINGS BUTTONS INITIALIZED');
})();
