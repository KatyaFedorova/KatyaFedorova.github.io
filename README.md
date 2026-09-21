# katyafedorova.github.io

Personal site for **Kat Fedorova** — LLM engineer, AI evaluation and quality.
Plain HTML, CSS and a little vanilla JS. No build step, no dependencies.

| File | What it is |
| --- | --- |
| `index.html` | All the content. This is the file you edit. |
| `styles.css` | Design tokens at the top (`:root`) — colours, fonts, column width. |
| `main.js` | Fade-in on scroll and the footer year. That's it. |
| `assets/Kat_Fedorova_LLM_Engineer.pdf` | The downloadable résumé. |
| `.nojekyll` | Tells GitHub Pages to serve the files as-is. |

## Publishing to GitHub Pages

1. Create a **public** repo named exactly `KatyaFedorova.github.io`.
2. From this folder:

   ```sh
   git init
   git add .
   git commit -m "Personal site"
   git branch -M main
   git remote add origin https://github.com/KatyaFedorova/KatyaFedorova.github.io.git
   git push -u origin main
   ```

3. Repo → **Settings → Pages** → Source: *Deploy from a branch*, Branch: `main`, folder: `/ (root)`.
4. Live at **https://katyafedorova.github.io/** within a couple of minutes.

Preview locally with `python3 -m http.server 8000` and open http://localhost:8000.

## What to fill in

Search `index.html` for `TODO`:

- **Right now** — the short dated line near the top. Update it every few weeks;
  it is the cheapest way to show the page is a living thing.
- **Things I've built** — three projects, each two narrative paragraphs plus a
  *What I'd do differently* line. Write them the way you'd explain them out loud.
- **Asides** — the `<aside class="aside">` blocks sit in the right margin on wide
  screens and fold into the text on narrow ones. One line each, informal. Add or
  delete them freely.
- **Away from the keyboard** — two paragraphs in your own voice, four hobbies,
  and the side-ventures list.

## Photos and video

Five photo slots, each a dashed box with the exact `<img>` tag commented above it:

- `assets/kat.jpg` — portrait, 4:5, sits in the right margin of the intro
- `assets/about.jpg` — wide, 2:1
- `assets/life-1.jpg`, `life-2.jpg`, `life-3.jpg` — squares

Replace the `<div>` with the `<img>`, or delete the slot if you don't want it.
Keep each image under ~500 KB and save it at roughly twice its displayed size.

Each project has a `.project__media` block with a commented-out snippet for a local
`<video>` or a YouTube `<iframe>`. Keep local video files small — GitHub rejects
anything over 100 MB, so host longer demos on YouTube and embed them.

## Custom domain (optional)

Add a file named `CNAME` containing just your domain, then point a `CNAME` DNS
record at `katyafedorova.github.io`.
