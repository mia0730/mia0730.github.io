# CONM 1200 — Exam 1 Study Site

A study site for Building Construction (CONM 1200) Exam 1, covering Weeks 1–3 lecture
material and Labs 1 & 2.

## Putting it on GitHub Pages

1. Create a new repository on GitHub (public).
2. On the repo's main page click **Add file → Upload files**.
3. Drag in **all** of these files, keeping them at the top level — no folder:
   - `index.html`
   - `topics.html`
   - `calc.html`
   - `glossary.html`
   - `quiz.html`
   - `style.css`
   - `app.js`
   - `README.md` (optional)
4. Commit the upload.
5. Go to **Settings → Pages**. Under *Build and deployment*, set **Source** to
   *Deploy from a branch*, branch **main**, folder **/ (root)**. Save.
6. Wait a minute or two, then the site is live at
   `https://<your-username>.github.io/<repo-name>/`

All seven files must sit next to each other at the root — the pages link to
`style.css` and `app.js` by relative path.

## What's in it

| File | What it is |
|---|---|
| `index.html` | Home — exam format, numbers to memorize, the three formulas, study plan |
| `topics.html` | All nine study-guide topics answered in full |
| `calc.html` | FAR / OSR / lot coverage — formulas, the worked class example, live calculator, random practice problems |
| `glossary.html` | All 52 vocabulary terms, searchable, plus a flashcard mode |
| `quiz.html` | 104-question practice test: multiple choice, true/false, fill-ins, matching, calculations |
| `style.css` | Shared styles (light + dark mode) |
| `app.js` | Shared behavior — theme toggle, nav, checklist memory |

Everything runs client-side. No build step, no dependencies, nothing is sent anywhere.

## Sources

Built from the CONM 1200 Fall 2026 study guide and syllabus, the Week 1–3 lecture
PowerPoints, the Field Exploration & Soil Sampling handout, the Soil Exploration
test pit & boring procedures handout, and the Week 1 Slide 28 class example and its
revised solution.
