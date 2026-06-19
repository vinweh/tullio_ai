# Copilot instructions for this repository

## Project overview

This repository is a small static website for Tullio AI. The site is built with plain HTML, CSS, and a tiny bit of JavaScript, with no build tooling, bundler, or framework.

## Working locally

There are no formal build, test, or lint scripts in this repository.

For manual verification, serve the site from the repository root:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000/` or `http://127.0.0.1:8000/`.

## Contribution workflow

Never push directly to `main`. For any change, create a short-lived feature branch, make the update there, and open a pull request to merge it into `main` once the work is ready.

## Architecture

The repository is intentionally simple:

- `index.html` contains the page structure and content for the landing page.
- `styles.css` holds the visual design, layout, and responsive behavior.
- `script.js` contains the lightweight front-end interaction for the contact form status message.
- `assets/mark.svg` is the current site mark.
- `robots.txt` is a root-level SEO file and should stay at the repository root.

When changing the site, think in terms of the single-page experience rather than introducing app-level state or tooling.

## Conventions

- Keep changes aligned with the existing static-site approach: prefer small, direct HTML/CSS/JS edits over introducing frameworks or build steps.
- Preserve the current single-page structure and section-based layout in `index.html` unless there is a clear reason to reorganize it.
- Keep styling in `styles.css` and avoid inline styles or script-generated markup unless the change clearly requires it.
- The contact form behavior is intentionally simple; if you change it, keep the interaction lightweight and user-friendly.
- SEO-related files such as `robots.txt` and canonical metadata belong at the repository root and should be kept consistent with the public site URL.
