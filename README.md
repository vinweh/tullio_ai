# Tullio AI

Static website scaffold for [tullio.ai](https://tullio.ai/).

## Preview

Open `index.html` in a browser, or run a simple local server from the repository root:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000/` or `http://127.0.0.1:8000/`.

## Structure

- `index.html` - page content and structure
- `styles.css` - responsive visual styling
- `script.js` - lightweight form interaction
- `assets/mark.svg` - temporary Tullio AI mark

## Deployment

This site deploys to the Cloudflare Pages project `tullio-ai`. The production deployment is served at:

- `https://tullio.ai/`
- `https://tullio-ai.pages.dev/`

Run `npm run build` to copy deployable static assets into `dist/`. Run `npm run deploy:pages` to deploy the current checkout with Wrangler to the default `tullio-ai` Pages project.

The GitHub Actions workflow in `.github/workflows/deploy-cloudflare-pages.yml` runs `npm ci`, builds the static site, and deploys `dist/` with Wrangler. It deploys pushes to `main` as production and pull requests as preview deployments, using the PR branch name for the Pages branch.

The workflow requires `CLOUDFLARE_API_TOKEN`, `CLOUDFLARE_ACCOUNT_ID`, and `CLOUDFLARE_PAGES_PROJECT_NAME` to be configured as GitHub Actions secrets. Cloudflare Git integration settings do not populate these GitHub secrets. The Cloudflare API token must be usable from GitHub-hosted runners; IP/location restrictions on the token can block deployment.

The custom domain `tullio.ai` is attached in Cloudflare Pages, not configured in this repository. After a successful `main` deployment, `tullio.ai` and `tullio-ai.pages.dev` should serve the same content.
