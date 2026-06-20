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

This site can be deployed to Cloudflare Pages with Wrangler. The GitHub Actions workflow in `.github/workflows/deploy-cloudflare-pages.yml` deploys pushes to `main` and PRs when the repository has `CLOUDFLARE_API_TOKEN`, `CLOUDFLARE_ACCOUNT_ID`, and `CLOUDFLARE_PAGES_PROJECT_NAME` configured as secrets.
