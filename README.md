# Your résumé site

A single-page résumé/portfolio: React 19 + Vite + Tailwind frontend, deployed
free on GitHub Pages, with an optional AI "ask about my background" / "check
role fit" feature powered by Claude through a Cloudflare Worker.

Everything here is a working scaffold with **placeholder content** — nothing
about you is invented. Look for `TODO` across `src/data/content.ts`,
`index.html`, and `worker/index.ts`, and replace it with the real thing.

## 1. Run it locally

```
npm install
npm run dev
```

Opens at http://localhost:5173. The site works fully without the Worker —
you'll just see an error if you try the Ask/Fit section, which is expected
until step 3.

## 2. Put in your real content

- `src/data/content.ts` — your name, stats, work history, skills. This is the
  only file most edits touch.
- `public/headshot.jpg` — your photo (referenced by `profile.photo`)
- `public/resume.pdf` — your downloadable PDF résumé
- `index.html` — the `<title>` and meta description tags

## 3. Set up the AI features (optional — skip if you don't want them)

You'll need an Anthropic API key from console.anthropic.com (with billing and
ideally a spend cap set — do this yourself, in your own browser).

```
npx wrangler login          # opens a browser tab, authorizes against your Cloudflare account
npx wrangler secret put ANTHROPIC_API_KEY    # paste your key when prompted
npm run worker:dev          # runs the Worker locally at http://127.0.0.1:8787
```

Also paste your real background into the two `TODO` blocks in
`worker/index.ts` (`SYSTEM_ASK` and `SYSTEM_FIT`) — otherwise the model has
nothing to answer from.

To deploy the Worker for real:

```
npm run worker:deploy
```

This prints a URL like `https://ammon-resume-api.<your-subdomain>.workers.dev`.
Put that in `.env.local` (copy `.env.example`) as `VITE_API_BASE`, and also as
a repo variable named `VITE_API_BASE` under GitHub → Settings → Secrets and
variables → Actions → Variables, so the deployed site knows where to send
requests.

Once you have a real domain, update `ALLOWED_ORIGIN` in `wrangler.toml` (and
redeploy the Worker) to lock it down to just your domain.

### Scaling past the free tier's rate limiter

`worker/index.ts` rate-limits per IP using an in-memory Map, which resets
whenever Cloudflare recycles the isolate — fine for portfolio traffic. If you
ever need it to hold state precisely across every edge location, swap the Map
for Cloudflare KV or a Durable Object. Not necessary to start.

## 4. Deploy the site to GitHub Pages

```
git init
git add .
git commit -m "Initial commit"
gh repo create ammon-resume --public --source=. --push
```

(No `gh` CLI? Create the repo on github.com instead, then
`git remote add origin <url> && git push -u origin main`.)

Then in the repo on GitHub: **Settings → Pages → Source → GitHub Actions**.
The included workflow (`.github/workflows/deploy.yml`) builds and deploys on
every push to `main`. First deploy takes a minute or two; after that your
site is live at `https://<your-username>.github.io/ammon-resume/`.

### Pointing your own domain at it

GitHub → repo → Settings → Pages → Custom domain. Then at your DNS provider
(could stay at Bluehost even if the site moves), add either an `A` record
pointing at GitHub's IPs (listed in GitHub's custom-domain docs) or a `CNAME`
if using a subdomain. GitHub issues free HTTPS automatically once the DNS
resolves.

## What's deliberately NOT included yet

- **Build-time prerendering** for SEO/ATS parsers. The inspiration for this
  project (hagestedt.com) does this so crawlers and applicant-tracking
  systems see full HTML before React even loads. Worth adding once the
  content is real and stable — ask and it can be added as a follow-up.
- **Analytics.** None included, on purpose.
