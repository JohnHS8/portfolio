# Giovanni Magaglio — sito portfolio

Sito statico (HTML + CSS + JS, nessun build step). Tema chiaro/scuro e lingua IT/EN persistenti.

## Struttura

```
index.html              home: hero, fisarmonica categorie, didattica, bio, contatti
style.css               CSS condiviso da tutte le pagine
main.js                 JS condiviso: lingua, tema, citazioni, fisarmonica
progetti.js             ★ elenco dei lavori — l'unico file da toccare per aggiungerne
progetti/
  _template.html        template da copiare per ogni nuova pagina progetto
  <slug>.html           una pagina per progetto
media/
  hero.jpg              foto hero della home (da aggiungere)
  ritratto.jpg          ritratto per la bio (da aggiungere)
  cv-giovanni-magaglio.pdf
  <slug>/               una cartella per progetto: thumb.jpg, hero.jpg, 01.jpg…
```

## Aggiungere un progetto

1. Aggiungi un blocco in `progetti.js` (le istruzioni sono nel file). La card appare subito in home.
2. Copia `progetti/_template.html` → `progetti/<slug>.html` e compila testi e crediti.
3. Metti le immagini in `media/<slug>/` (`thumb.jpg` = copertina della card).
4. In `progetti.js` imposta `thumb` e `page: true`.

Consiglio immagini: JPG, lato lungo ≤ 2000 px, thumb ≤ 800 px.

## Contenuti ancora segnaposto

- Foto hero (`media/hero.jpg` + `style="background-image:..."` sull'`<header class="hero">`)
- Ritratto bio (`media/ritratto.jpg` + `<img>` dentro `.portrait`)
- CV PDF (`media/cv-giovanni-magaglio.pdf`)
- Email e link social nel footer di `index.html` e `progetti/_template.html`
- I progetti in `progetti.js` sono segnaposto da sostituire

## Deploy su GitHub Pages

Il repo Git è già inizializzato con un primo commit. Passi:

1. Crea un repository su github.com (es. `portfolio`), vuoto, senza README.
2. Nel terminale, dentro questa cartella:
   ```
   git remote add origin https://github.com/TUO-USERNAME/portfolio.git
   git branch -M main
   git push -u origin main
   ```
3. Su GitHub: **Settings → Pages → Source: Deploy from a branch → main / (root) → Save**.
4. Dopo ~1 minuto il sito è su `https://TUO-USERNAME.github.io/portfolio/`.

Aggiornamenti successivi:
```
git add -A && git commit -m "descrizione modifica" && git push
```

Dominio personalizzato (opzionale): Settings → Pages → Custom domain, poi un record CNAME dal tuo provider DNS.
