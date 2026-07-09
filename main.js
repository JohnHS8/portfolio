/* ============================================================
   Giovanni Magaglio — main.js condiviso
   Lingua IT/EN, tema chiaro/scuro (persistenti), citazioni hero,
   fisarmonica. Ogni blocco si attiva solo se l'elemento esiste.
   Va incluso DOPO progetti.js nella home.
   ============================================================ */
(function(){
  'use strict';

  /* ---- Anno nel footer ---- */
  var yearEl = document.getElementById('year');
  if(yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---- Lingua IT/EN (persistente) ---- */
  var langBtns = document.querySelectorAll('.lang button');
  function applyLang(lang){
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-it]').forEach(function(el){
      var val = el.getAttribute('data-'+lang);
      if(val===null) return;
      if(el.classList.contains('html')) el.innerHTML = val; else el.textContent = val;
    });
    langBtns.forEach(function(b){ b.setAttribute('aria-pressed', b.dataset.lang===lang ? 'true':'false'); });
    try{ localStorage.setItem('gm-lang', lang); }catch(e){}
  }
  langBtns.forEach(function(b){ b.addEventListener('click', function(){ applyLang(b.dataset.lang); }); });
  var savedLang = null;
  try{ savedLang = localStorage.getItem('gm-lang'); }catch(e){}
  if(savedLang==='en') applyLang('en');

  /* ---- Tema chiaro/scuro (persistente) ---- */
  var themeBtn = document.getElementById('themeBtn');
  function applyTheme(theme){
    document.documentElement.setAttribute('data-theme', theme);
    if(themeBtn) themeBtn.textContent = theme==='dark' ? '☀' : '☾';
    try{ localStorage.setItem('gm-theme', theme); }catch(e){}
  }
  var savedTheme = null;
  try{ savedTheme = localStorage.getItem('gm-theme'); }catch(e){}
  if(!savedTheme && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) savedTheme = 'dark';
  if(savedTheme) applyTheme(savedTheme);
  if(themeBtn){
    themeBtn.addEventListener('click', function(){
      var dark = document.documentElement.getAttribute('data-theme')==='dark';
      applyTheme(dark ? 'light' : 'dark');
    });
  }

  /* ---- Citazioni rotanti nell'hero (solo home) ---- */
  var quoteEl = document.getElementById('heroQuote');
  if(quoteEl){
    var qt = quoteEl.querySelector('.q-text'), qb = quoteEl.querySelector('.q-by');
    var QUOTES = [
      {it:'La vita antica fu tutta silenzio.', en:'Ancient life was all silence.', by:'Luigi Russolo'},
      {it:'La musica è suono organizzato.', en:'Music is organized sound.', by:'Edgard Varèse'},
      {it:'Non esiste il silenzio.', en:'There is no such thing as silence.', by:'John Cage'},
      {it:'La musica è architettura in movimento.', en:'Music is architecture in movement.', by:'Iannis Xenakis'},
      {it:'Cammina così in silenzio che le piante dei piedi diventino orecchie.', en:'Walk so silently that the bottoms of your feet become ears.', by:'Pauline Oliveros'},
      {it:'Il tubo catodico sostituirà la tela.', en:'The cathode ray tube will replace the canvas.', by:'Nam June Paik'},
      {it:'La ripetizione è una forma di cambiamento.', en:'Repetition is a form of change.', by:'Brian Eno'},
      {it:'Il medium è il messaggio.', en:'The medium is the message.', by:'Marshall McLuhan'},
      {it:'Mi interessano i processi percepibili.', en:'I am interested in perceptible processes.', by:'Steve Reich'},
      {it:'La tecnologia è il falò attorno a cui raccontiamo le nostre storie.', en:'Technology is the campfire around which we tell our stories.', by:'Laurie Anderson'},
      {it:'È molto difficile ascoltare, nel silenzio, gli altri.', en:'It is very difficult to listen, in silence, to others.', by:'Luigi Nono'},
      {it:'Il suono è il vocabolario della natura.', en:'Sound is the vocabulary of nature.', by:'Pierre Schaeffer'}
    ];
    var qi = 0;
    var curLang = function(){ return document.documentElement.lang==='en' ? 'en' : 'it'; };
    var paint = function(){ var q = QUOTES[qi]; qt.textContent = '« '+q[curLang()]+' »'; qb.textContent = q.by; };
    paint();
    var reduce = window.matchMedia ? window.matchMedia('(prefers-reduced-motion:reduce)').matches : false;
    if(!reduce){
      setInterval(function(){
        quoteEl.classList.add('fade');
        setTimeout(function(){ qi = (qi+1)%QUOTES.length; paint(); quoteEl.classList.remove('fade'); }, 500);
      }, 9000);
    }
    langBtns.forEach(function(b){ b.addEventListener('click', function(){ setTimeout(paint,0); }); });
  }

  /* ---- Tab categorie (solo home) ---- */
  var tabsBox = document.getElementById('worksTabs');
  if(tabsBox){
    var tabs = tabsBox.querySelectorAll('.tab');
    var panels = { works: document.getElementById('panel-works'), teaching: document.getElementById('panel-teaching'), bio: document.getElementById('panel-bio') };
    tabs.forEach(function(tab){
      tab.addEventListener('click', function(){
        tabs.forEach(function(t){ t.classList.remove('active'); });
        tab.classList.add('active');
        var cat = tab.getAttribute('data-cat');
        var panel = tab.getAttribute('data-panel');
        panels.works.hidden = !cat;
        panels.teaching.hidden = panel !== 'teaching';
        panels.bio.hidden = panel !== 'bio';
        if(cat){
          document.querySelectorAll('#worksGrid .wk').forEach(function(wk){
            wk.hidden = (cat !== 'all' && wk.getAttribute('data-cat') !== cat);
          });
        }
      });
    });
  }

  /* ---- Fisarmonica: una voce aperta alla volta (solo home) ---- */
  var cats = document.querySelectorAll('#cats .cat');
  cats.forEach(function(cat){
    var head = cat.querySelector('.cat-head');
    head.addEventListener('click', function(){
      var isOpen = cat.classList.contains('open');
      cats.forEach(function(c){ c.classList.remove('open'); c.querySelector('.cat-head').setAttribute('aria-expanded','false'); });
      if(!isOpen){ cat.classList.add('open'); head.setAttribute('aria-expanded','true'); }
    });
  });

})();
