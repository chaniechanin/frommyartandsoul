/* Rendering + interactions — reads from js/data.js. You should not need to edit this. */

function initHeader(){
  const hdr=document.querySelector('.hdr');
  if(hdr && !hdr.classList.contains('solid')){
    addEventListener('scroll',()=>hdr.classList.toggle('scrolled',scrollY>60));
  }
  const toggle=document.querySelector('.nav-toggle');
  const nav=document.querySelector('.hdr nav');
  if(toggle && nav){
    toggle.addEventListener('click',()=>{toggle.classList.toggle('on');nav.classList.toggle('open');});
    nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{toggle.classList.remove('on');nav.classList.remove('open');}));
  }
}

function initReveal(){
  const els=document.querySelectorAll('.reveal:not(.in)');
  if(!('IntersectionObserver' in window)){els.forEach(e=>e.classList.add('in'));return;}
  const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}}),{threshold:.1});
  els.forEach(e=>io.observe(e));
}

function featuredList(){ const f=PAINTINGS.filter(p=>p.featured); return f.length?f:PAINTINGS; }

/* one masonry card → links to its story page */
function cardHTML(p){
  const meta=p.year?`${p.theme} · ${p.year}`:p.theme;
  const tag=p.sold?'<span class="art-tag">Original Not Available</span>':'';
  return `<a class="card reveal" href="painting.html?id=${encodeURIComponent(p.id)}">
    <div class="pic">${tag}<span class="fr"><img src="${p.image}" alt="${p.title}" loading="lazy"></span></div>
    <h3>${p.title}</h3><div class="meta">${meta}</div></a>`;
}

/* home: framed hero painting — the first thing seen on the site */
const HERO_ID='torah-is-life';
function renderHeroArt(){
  const el=document.getElementById('hero-art'); if(!el)return;
  const p=PAINTINGS.find(x=>x.id===HERO_ID)||featuredList()[0];
  el.innerHTML=`<div class="artframe"><div class="mat"><img src="${p.image}" alt="${p.title}"></div></div>`;
}

/* home: selected works preview — curated order chosen for the front page */
/* avraham + torah-is-life are intentionally omitted here — they appear in the bottom spotlights */
const HOME_ORDER=['agam','sound-of-the-shofar','the-leaf','water-and-tree','mizmor-ledovid','enough-tears','the-little-bird','simcha'];
function homeList(){
  const picks=HOME_ORDER.map(id=>PAINTINGS.find(p=>p.id===id)).filter(Boolean);
  return picks.length?picks:featuredList().slice(0,12);
}
function renderHomeGrid(){
  const el=document.getElementById('home-grid'); if(!el)return;
  el.innerHTML=homeList().map(cardHTML).join('');
}

/* home: featured-work spotlights */
function spotlightHTML(p,reverse){
  const copy=`<div class="copy reveal">
      <span class="eyebrow">Featured Work</span>
      <h2>${p.title}</h2>
      <p>${p.subtitle||''}</p>
      ${(p.story&&p.story[0])?`<p style="color:#9c968b">${p.story[0]}</p>`:''}
      <div class="meta">${p.medium}${(p.size&&p.size!=='Dimensions on request')?' · '+p.size:''}</div>
      <a class="btn light" href="painting.html?id=${encodeURIComponent(p.id)}">Read the Story</a>
    </div>`;
  const art=`<div class="art-glow reveal"><div class="artframe"><div class="mat"><img src="${p.image}" alt="${p.title}"></div></div></div>`;
  return `<section class="sec sec-dark spot${reverse?' reverse':''}"><div class="wrap inner">${reverse?copy+art:art+copy}</div></section>`;
}
function renderSpotlights(){
  const el=document.getElementById('spotlights'); if(!el)return;
  const prefer=['avraham','kotel-in-color'];
  let picks=prefer.map(id=>PAINTINGS.find(p=>p.id===id)).filter(Boolean);
  if(picks.length<2){ featuredList().forEach(p=>{ if(picks.length<2 && !picks.includes(p)) picks.push(p); }); }
  el.innerHTML=picks.map((p,i)=>spotlightHTML(p,i%2===1)).join('');
}

/* gallery: masonry + theme filters */
function renderGallery(){
  const grid=document.getElementById('gallery-grid'); if(!grid)return;
  const TAB_ORDER=['Judaic','Holidays','Nature','Portraits','Rebbe & Rebbetzin','Beyond the Canvas','Paint Parties'];
  const present=new Set(PAINTINGS.map(p=>p.theme));
  const filters=document.getElementById('gallery-filters');
  const nextWrap=document.getElementById('gallery-next');
  /* "best first" ordering — these lead the All Works tab; the rest follow in their existing order */
  const FEATURED_ORDER=['the-leaf','avraham','the-kotel','torah-is-life','mount-sinai','miriam-at-the-sea','kotel-in-color','mother-rochel','the-test-of-avraham','neshama','a-soldiers-prayer','leah','sound-of-the-shofar','menorah-temple','kineret','spring-tulips','under-the-sea','the-beach'];
  /* these two live in the top nav instead of the gallery tab bar (reachable via ?view= and the "Next" button) */
  const NAV_ONLY=['Beyond the Canvas','Paint Parties'];
  const TAB_LABELS={'Rebbe & Rebbetzin':'Chabad','Beyond the Canvas':'Beyond','Paint Parties':'Events'};
  /* "All Works" gathers every Judaic / Holidays / Nature painting (best first); Portraits & Chabad keep their own tabs */
  const HIDE_FROM_ALL=['Portraits','Rebbe & Rebbetzin','Beyond the Canvas','Paint Parties'];
  /* the tab bar: the themes that aren't nav-only, then "All Works" at the end */
  const tabThemes=[...TAB_ORDER.filter(t=>present.has(t)&&!NAV_ONLY.includes(t)),...Array.from(present).filter(t=>!TAB_ORDER.includes(t)),'All Works'];
  /* the "Next" journey flows through every section, ends on "All Works", then loops back */
  const NEXT_MAP={'Judaic':'Holidays','Holidays':'Nature','Nature':'Portraits','Portraits':'Rebbe & Rebbetzin','Rebbe & Rebbetzin':'Beyond the Canvas','Beyond the Canvas':'Paint Parties','Paint Parties':'All Works','All Works':'Judaic'};
  const nextTheme=(cur)=>{ let t=NEXT_MAP[cur]||'All Works',g=0; while(t!=='All Works'&&!present.has(t)&&g++<12){ t=NEXT_MAP[t]||'All Works'; } return t; };
  /* Rebbe & Rebbetzin: fixed order, shown right→left (chronological by the Rebbeim, then the Rebbetzins) */
  const REBBE_ORDER=['alter-rebbe','tzemach-tzedek','rebbe-rashab','rebbe-rayatz','rebbe-rayatz-snow','rebbe-rayatz-gani','rebbe-blue-eyes','rebbe-i-miss-you','rebbe-picture-wall','royal-tea','reb-levik','rebbetzin-channah','rebbetzin-chana-2023','rebbetzin-chana-dinner','rebbetzin-chaya-mushka'];
  /* Holidays follow the Jewish calendar cycle (Tishrei → Iyar) */
  const HOLIDAY_ORDER=['shofar','sound-of-the-shofar','lulav','choosing-the-esrog','torah-is-life','menorah-public','menorah-temple','the-dreidel','seven-species','happy-purim','four-cups','lag-baomer','mount-sinai'];
  /* Judaic: lead with her strongest / signature pieces; the rest follow in their existing order */
  const JUDAIC_ORDER=['avraham','the-kotel','kotel-in-color','miriam-at-the-sea','the-test-of-avraham','mother-rochel','the-holy-temple','neshama','the-sun-did-not-set','shema','mizmor-ledovid','yerushalayim','rus-the-moabite','a-soldiers-prayer','leah'];
  const draw=(theme)=>{
    let list=theme==='All Works'?PAINTINGS.filter(p=>!HIDE_FROM_ALL.includes(p.theme)).slice().sort((a,b)=>{const ia=FEATURED_ORDER.indexOf(a.id),ib=FEATURED_ORDER.indexOf(b.id);return (ia<0?999:ia)-(ib<0?999:ib);}):PAINTINGS.filter(p=>p.theme===theme);
    /* Portraits are shown newest → oldest by year, in row order (left→right, then down) */
    if(theme==='Portraits') list=list.slice().sort((a,b)=>(parseInt(b.year||'0',10)-parseInt(a.year||'0',10)));
    /* Rebbe & Rebbetzin follows the fixed REBBE_ORDER */
    if(theme==='Rebbe & Rebbetzin') list=list.slice().sort((a,b)=>{const ia=REBBE_ORDER.indexOf(a.id),ib=REBBE_ORDER.indexOf(b.id);return (ia<0?99:ia)-(ib<0?99:ib);});
    /* Holidays follow the Jewish calendar cycle */
    if(theme==='Holidays') list=list.slice().sort((a,b)=>{const ia=HOLIDAY_ORDER.indexOf(a.id),ib=HOLIDAY_ORDER.indexOf(b.id);return (ia<0?99:ia)-(ib<0?99:ib);});
    /* Judaic: best pieces first, then the rest in their original order (stable sort) */
    if(theme==='Judaic') list=list.slice().sort((a,b)=>{const ia=JUDAIC_ORDER.indexOf(a.id),ib=JUDAIC_ORDER.indexOf(b.id);return (ia<0?999:ia)-(ib<0?999:ib);});
    grid.classList.toggle('rows',theme==='Portraits'||theme==='Rebbe & Rebbetzin'||theme==='Holidays');
    grid.classList.toggle('rtl',theme==='Rebbe & Rebbetzin');
    grid.innerHTML=list.map(cardHTML).join('');
    initReveal();
  };
  const activate=(theme,scroll)=>{
    if(!present.has(theme)&&theme!=='All Works') theme='All Works';
    draw(theme);
    if(filters) filters.querySelectorAll('button').forEach(x=>x.classList.toggle('active',x.dataset.theme===theme));
    if(nextWrap){
      const nt=nextTheme(theme);
      nextWrap.innerHTML=`<button class="btn dark next-sec" data-theme="${nt}">Next — ${TAB_LABELS[nt]||nt} &rarr;</button>`;
    }
    if(scroll){ const y=(filters||grid).getBoundingClientRect().top+scrollY-90; scrollTo({top:y,behavior:'smooth'}); }
  };
  if(filters){
    filters.innerHTML=tabThemes.map(t=>`<button data-theme="${t}">${TAB_LABELS[t]||t}</button>`).join('');
    filters.addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;activate(b.dataset.theme,false);});
  }
  if(nextWrap){
    nextWrap.addEventListener('click',e=>{const b=e.target.closest('.next-sec');if(!b)return;activate(b.dataset.theme,true);});
  }
  /* open a section directly from the top-nav links (?view=beyond / ?view=events) */
  const VIEW_MAP={beyond:'Beyond the Canvas',events:'Paint Parties'};
  const view=new URLSearchParams(location.search).get('view');
  activate((view&&VIEW_MAP[view])||tabThemes[0],false);
}

/* story (detail) page */
function renderDetail(){
  const wrap=document.getElementById('detail'); if(!wrap)return;
  const id=new URLSearchParams(location.search).get('id');
  const p=PAINTINGS.find(x=>x.id===id)||PAINTINGS[0];
  document.title=`${p.title} — From My Art & Soul`;
  const extraArr=p.extra?(Array.isArray(p.extra)?p.extra:[p.extra]):[];
  const extraHTML=extraArr.map(src=>`<figure class="bts"><img class="btc-media" src="${src}" alt="${p.title}">${(!Array.isArray(p.extra)&&p.extraCaption)?`<figcaption>${p.extraCaption}</figcaption>`:''}</figure>`).join('');
  const photoTheme=p.theme==='Beyond the Canvas'||p.theme==='Paint Parties';
  const mainMedia=photoTheme?`<img class="btc-media" src="${p.image}" alt="${p.title}">`:`<div class="artframe"><div class="mat"><img src="${p.image}" alt="${p.title}"></div></div>`;
  const grp=PAINTINGS.filter(x=>x.theme===p.theme);
  const gi=grp.findIndex(x=>x.id===p.id);
  const prev=grp.length>1?grp[(gi-1+grp.length)%grp.length]:null;
  const next=grp.length>1?grp[(gi+1)%grp.length]:null;
  const navHTML=(prev||next)?`<div class="detail-nav">${prev?`<a href="painting.html?id=${encodeURIComponent(prev.id)}">← Previous</a>`:'<span></span>'}${next?`<a href="painting.html?id=${encodeURIComponent(next.id)}">Next →</a>`:'<span></span>'}</div>`:'';
  wrap.innerHTML=`
    <div class="detail-media">${mainMedia}${extraHTML}</div>
    <div class="detail-info">
      <a class="back" href="gallery.html">← Back to the collection</a>
      <span class="eyebrow">${p.theme}</span>
      <h1>${p.title}</h1>
      <div class="sub">${p.subtitle||''}</div>
      <div class="detail-specs">
        <div><span>Medium</span><b>${p.medium}</b></div>
        <div><span>Size</span><b>${p.size}</b></div>
        ${p.year?`<div><span>Year</span><b>${p.year}</b></div>`:''}
        ${p.sold?`<div><span>Availability</span><b>Original not available · prints on request</b></div>`:''}
      </div>
      <div class="detail-story"><h4>The Story Behind It</h4>
        ${p.story.map(s=>`<p>${s}</p>`).join('')}
        ${p.theme==='Paint Parties'?`<a class="btn gold" href="contact.html?piece=${encodeURIComponent('Paint party — booking inquiry')}">Book a Paint Party</a>`:(p.theme==='Beyond the Canvas'&&!p.forSale)?`<a class="btn gold" href="gallery.html">Explore the Collection</a>`:`<a class="btn gold" href="contact.html?piece=${encodeURIComponent(p.title)}">${p.sold?'Inquire About a Print':'Inquire About This Piece'}</a>`}
      </div>
      ${navHTML}
    </div>`;
}

/* inquire: prefill + Netlify submit */
function prefillContact(){
  const piece=new URLSearchParams(location.search).get('piece'); if(!piece)return;
  const msg=document.getElementById('message'); if(msg)msg.value=`I'm interested in "${piece}". `;
  const interest=document.getElementById('interest'); if(interest)interest.value='Buying a painting';
}
function submitInquiry(e){
  e.preventDefault();
  const form=e.target, note=document.getElementById('form-note');
  const data=new FormData(form);
  const to=['channahchanin','@','gmail.com'].join('');   /* assembled here, not in the page */
  if(note){note.style.color='var(--gold)';note.textContent='Sending…';}
  fetch('https://formsubmit.co/ajax/'+to,{method:'POST',headers:{'Accept':'application/json'},body:data})
    .then(r=>r.json()).then(d=>{
      const ok = d && (d.success===true || d.success==='true');
      if(note){note.style.color=ok?'var(--gold)':'#c76b6b';note.textContent=ok
        ? 'Thank you — your inquiry has been sent. Chanie will get back to you personally.'
        : 'Thank you — your message was received.';}
      if(ok)form.reset();
    })
    .catch(()=>{ if(note){note.style.color='#c76b6b';note.textContent='Sorry, something went wrong. Please try again, or reach out on Instagram @frommyartandsoul.';} });
}

document.addEventListener('DOMContentLoaded',()=>{
  initHeader();
  renderHeroArt();
  renderHomeGrid();
  renderSpotlights();
  renderGallery();
  renderDetail();
  prefillContact();
  initReveal();
  const form=document.getElementById('contact-form');
  if(form)form.addEventListener('submit',submitInquiry);
});
