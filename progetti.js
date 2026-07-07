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
   cat    → "live" | "ost" | "teatro" | "install" | "music"
   title  → {it, en}
   meta   → {it, en}  es. "2025 · Teatro del Maggio"
   thumb  → percorso immagine copertina, oppure null (segnaposto)
   page   → true se esiste progetti/<id>.html, false = card non cliccabile
   ============================================================ */

window.PROGETTI = [

  /* ---------- LIVE A/V ---------- */
  {
    id: "titolo-live-1",
    cat: "live",
    title: { it: "Titolo", en: "Title" },
    meta:  { it: "Anno · Luogo", en: "Year · Venue" },
    thumb: null,
    page: false
  },
  {
    id: "titolo-live-2",
    cat: "live",
    title: { it: "Titolo", en: "Title" },
    meta:  { it: "Anno · Luogo", en: "Year · Venue" },
    thumb: null,
    page: false
  },

  /* ---------- OST E SOUND DESIGN ---------- */
  {
    id: "titolo-ost-1",
    cat: "ost",
    title: { it: "Titolo", en: "Title" },
    meta:  { it: "Anno · Luogo", en: "Year · Venue" },
    thumb: null,
    page: false
  },

  /* ---------- TEATRO ---------- */
  {
    id: "titolo-teatro-1",
    cat: "teatro",
    title: { it: "Titolo", en: "Title" },
    meta:  { it: "Anno · Luogo", en: "Year · Venue" },
    thumb: null,
    page: false
  },

  /* ---------- INSTALLAZIONI ---------- */
  {
    id: "mneme",
    cat: "install",
    title: { it: "Mnème", en: "Mnème" },
    meta:  { it: "2018 · Martini Elettrico, Bologna", en: "2018 · Martini Elettrico, Bologna" },
    thumb: "media/mneme/thumb.jpg",
    page: true
  },

  /* ---------- MUSICA ---------- */
  {
    id: "titolo-music-1",
    cat: "music",
    title: { it: "Titolo", en: "Title" },
    meta:  { it: "Anno · Etichetta", en: "Year · Label" },
    thumb: null,
    page: false
  }

];

/* ---- Rendering griglie home (non toccare) ---- */
(function(){
  'use strict';
  var containers = document.querySelectorAll('[data-cat-grid]');
  if(!containers.length || !window.PROGETTI) return;

  containers.forEach(function(box){
    var cat = box.getAttribute('data-cat-grid');
    var works = window.PROGETTI.filter(function(p){ return p.cat === cat; });

    works.forEach(function(p){
      var a = document.createElement('a');
      a.className = 'wk';
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

      a.appendChild(thumb); a.appendChild(h3); a.appendChild(meta);
      box.appendChild(a);
    });
  });
})();
