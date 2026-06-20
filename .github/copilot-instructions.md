# Copilot instructions for this repository

## Project overview

This repository is a small static website for Tullio AI. The site is built with plain HTML, CSS, and a tiny bit of JavaScript. It has no framework or bundler; npm scripts only prepare and deploy static assets with Wrangler.

## Working locally

For manual verification, serve the site from the repository root:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000/` or `http://127.0.0.1:8000/`.

There are no formal test or lint scripts. `npm run build` copies the deployable static assets into `dist/`.

## Contribution workflow

Never push directly to `main`. For any change, create a short-lived feature branch, make the update there, and open a pull request to merge it into `main` once the work is ready.

## Architecture

The repository is intentionally simple:

- `index.html` contains the page structure and content for the landing page.
- `styles.css` holds the visual design, layout, and responsive behavior.
- `script.js` contains the lightweight front-end interaction for the contact form status message.
- `assets/mark.svg` is the current site mark.
- `robots.txt` is a root-level SEO file and should stay at the repository root.
- `package.json` defines the static asset build and Cloudflare Pages deployment scripts.
- `wrangler.jsonc` points Wrangler at the Pages build output directory, `dist`.

When changing the site, think in terms of the single-page experience rather than introducing app-level state or tooling.

## Conventions

- Keep changes aligned with the existing static-site approach: prefer small, direct HTML/CSS/JS edits over introducing frameworks or build steps.
- Preserve the current single-page structure and section-based layout in `index.html` unless there is a clear reason to reorganize it.
- Keep styling in `styles.css` and avoid inline styles or script-generated markup unless the change clearly requires it.
- The contact form behavior is intentionally simple; if you change it, keep the interaction lightweight and user-friendly.
- SEO-related files such as `robots.txt` and canonical metadata belong at the repository root and should be kept consistent with the public site URL.

## Deployment

The Cloudflare Pages project is `tullio-ai`. Production is served from both `https://tullio.ai/` and `https://tullio-ai.pages.dev/`.

Use `npm run build` to create `dist/`. Use `npm run deploy:pages` only when an explicit local Wrangler deployment is requested; normal deployment should happen through `.github/workflows/deploy-cloudflare-pages.yml`.

The deployment workflow runs on pushes and pull requests to `main`. Pushes to `main` deploy production, while pull requests deploy preview branches. It requires the GitHub Actions secrets `CLOUDFLARE_API_TOKEN`, `CLOUDFLARE_ACCOUNT_ID`, and `CLOUDFLARE_PAGES_PROJECT_NAME`; Cloudflare Git integration settings do not provide these secrets. The Cloudflare token must be valid from GitHub-hosted runner IPs.

The `tullio.ai` custom domain is attached in Cloudflare Pages. It is not managed by files in this repository, but after a successful `main` deployment it should serve the same content as `tullio-ai.pages.dev`.
