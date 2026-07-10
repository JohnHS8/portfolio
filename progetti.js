/* ============================================================
   Giovanni Magaglio — progetti.js
   UNICO posto dove si aggiungono i lavori.
   La home costruisce le griglie delle fisarmoniche da qui.

   Come si aggiunge un progetto:
   1. copia un blocco { ... } e compila i campi
   2. crea la pagina:  progetti/<id>.html  (copia da progetti/_template.html)
   3. metti i media in: media/<id>/  (thumb.jpg per la copertina)

   Campi:
   id     → slug: nome file della pagina e della cartella media
   anno   → numero, usato per ordinare (più recente prima)
   cat    → "teatro" (Teatro e performance) | "ost" | "install"
   title  → {it, en}
   meta   → {it, en}  es. "2025 · Teatro del Maggio"
   thumb  → percorso immagine copertina, oppure null (segnaposto)
   page   → true se esiste progetti/<id>.html, false = card non cliccabile
   ============================================================ */

window.PROGETTI = [

  /* ---------- TEATRO E PERFORMANCE ---------- */
  {
    id: "x6",
    anno: 2026,
    cat: "teatro",
    title: { it: "X6", en: "X6" },
    meta:  { it: "2026 · Live A/V, chitarra esafonica", en: "2026 · Live A/V, hexaphonic guitar" },
    thumb: "media/x6/thumb.jpg",
    page: true
  },
  {
    id: "rustle",
    anno: 2026,
    cat: "teatro",
    title: { it: "Rustle", en: "Rustle" },
    meta:  { it: "2026 · Minus Collettivo", en: "2026 · Minus Collettivo" },
    thumb: "media/rustle/thumb.jpg",
    page: true
  },
  {
    id: "caosmosi",
    anno: 2023,
    cat: "teatro",
    title: { it: "Caosmosi", en: "Caosmosi" },
    meta:  { it: "2023 · Frittelli, Firenze · MUTEK Montréal", en: "2023 · Frittelli, Florence · MUTEK Montréal" },
    thumb: "media/caosmosi/thumb.jpg",
    page: true
  },
  {
    id: "iperdark",
    anno: 2024,
    cat: "teatro",
    title: { it: "Iperdark", en: "Iperdark" },
    meta:  { it: "2024 · Spazio Franco, Palermo", en: "2024 · Spazio Franco, Palermo" },
    thumb: "media/iperdark/thumb.jpg",
    page: true
  },
  {
    id: "tripolis",
    anno: 2019,
    cat: "teatro",
    title: { it: "Tripolis", en: "Tripolis" },
    meta:  { it: "2019 · Frazioni Residue", en: "2019 · Frazioni Residue" },
    thumb: "media/tripolis/thumb.jpg",
    page: true
  },
  {
    id: "suoni-in-estinzione",
    anno: 2021,
    cat: "teatro",
    title: { it: "Suoni in estinzione", en: "Suoni in estinzione" },
    meta:  { it: "2021 · Teatro Massimo, Palermo", en: "2021 · Teatro Massimo, Palermo" },
    thumb: "media/suoni-in-estinzione/thumb.jpg",
    page: true
  },
  {
    id: "semana-humara",
    anno: 2021,
    cat: "teatro",
    title: { it: "Semana Humara", en: "Semana Humara" },
    meta:  { it: "2021 · StudioVox, Tempo Reale", en: "2021 · StudioVox, Tempo Reale" },
    thumb: "media/semana-humara/thumb.jpg",
    page: true
  },

  /* ---------- OST E SOUND DESIGN ---------- */
  {
    id: "en-route",
    anno: 2024,
    cat: "ost",
    title: { it: "En Route", en: "En Route" },
    meta:  { it: "2024 · Film documentario", en: "2024 · Documentary film" },
    thumb: "media/en-route/thumb.jpg",
    page: true
  },
  {
    id: "hung-land",
    anno: 2024,
    cat: "ost",
    title: { it: "Hung Land", en: "Hung Land" },
    meta:  { it: "2024 · Film documentario", en: "2024 · Documentary film" },
    thumb: "media/hung-land/thumb.jpg",
    page: true
  },
  {
    id: "anima-mundi",
    anno: 2021,
    cat: "ost",
    title: { it: "Anima Mundi", en: "Anima Mundi" },
    meta:  { it: "2021 · Percorso immersivo, Odd Agency", en: "2021 · Immersive trail, Odd Agency" },
    thumb: "media/anima-mundi/thumb.jpg",
    page: true
  },
  {
    id: "apnea",
    anno: 2023,
    cat: "ost",
    title: { it: "Apnea", en: "Apnea" },
    meta:  { it: "2023 · Film documentario d'animazione", en: "2023 · Animated documentary film" },
    thumb: "media/apnea/thumb.jpg",
    page: true
  },

  {
    id: "log-out",
    anno: 2018,
    cat: "teatro",
    title: { it: "Log Out", en: "Log Out" },
    meta:  { it: "2018 · Tempo Reale / The Factory prd", en: "2018 · Tempo Reale / The Factory prd" },
    thumb: "media/log-out/thumb.jpg",
    page: true
  },

  /* ---------- INSTALLAZIONI ---------- */
  {
    id: "frequenze-della-memoria",
    anno: 2022,
    cat: "install",
    title: { it: "Le Frequenze della memoria", en: "Le Frequenze della memoria" },
    meta:  { it: "2022 · Quartiere Brancaccio, Palermo", en: "2022 · Brancaccio district, Palermo" },
    thumb: "media/frequenze-della-memoria/thumb.jpg",
    page: true
  },
  {
    id: "four-seats",
    anno: 2021,
    cat: "install",
    title: { it: "Four Seats", en: "Four Seats" },
    meta:  { it: "2021 · ADI Design Museum, Milano", en: "2021 · ADI Design Museum, Milan" },
    thumb: "media/four-seats/thumb.jpg",
    page: true
  },
  {
    id: "mneme",
    anno: 2018,
    cat: "install",
    title: { it: "Mnème", en: "Mnème" },
    meta:  { it: "2018 · Martini Elettrico, Bologna", en: "2018 · Martini Elettrico, Bologna" },
    thumb: "media/mneme/thumb.jpg",
    page: true
  }

];

/* ---- Rendering griglia home (non toccare) ---- */
(function(){
  'use strict';
  var grid = document.getElementById('worksGrid');
  if(!grid || !window.PROGETTI) return;

  var CAT_LABELS = {
    teatro:  { it:'Teatro e performance', en:'Theatre & performance' },
    install: { it:'Sound art e installazioni', en:'Sound art & installations' },
    ost:     { it:'OST e sound design', en:'OST & sound design' }
  };

  /* Ordine cronologico: il più recente prima */
  var lista = window.PROGETTI.slice().sort(function(a, b){
    return (b.anno || 0) - (a.anno || 0);
  });

  lista.forEach(function(p){
    var a = document.createElement('a');
    a.className = 'wk';
    a.setAttribute('data-cat', p.cat);
    if(p.page) a.href = 'progetti/' + p.id + '.html';

    var thumb = document.createElement('div');
    thumb.className = 'wk-thumb';
    if(p.thumb){
      var img = document.createElement('img');
      img.src = p.thumb;
      img.alt = p.title.it;
      img.loading = 'lazy';
      thumb.appendChild(img);
    } else {
      thumb.setAttribute('data-label','▫ immagine');
    }

    var cat = document.createElement('p');
    cat.className = 'wk-cat';
    var lbl = CAT_LABELS[p.cat] || { it:p.cat, en:p.cat };
    cat.setAttribute('data-it', lbl.it);
    cat.setAttribute('data-en', lbl.en);
    cat.textContent = lbl.it;

    var h3 = document.createElement('h3');
    h3.className = 'wk-title';
    h3.setAttribute('data-it', p.title.it);
    h3.setAttribute('data-en', p.title.en);
    h3.textContent = p.title.it;

    var meta = document.createElement('p');
    meta.className = 'wk-meta';
    meta.setAttribute('data-it', p.meta.it);
    meta.setAttribute('data-en', p.meta.en);
    meta.textContent = p.meta.it;

    a.appendChild(thumb); a.appendChild(cat); a.appendChild(h3); a.appendChild(meta);
    grid.appendChild(a);
  });
})();
