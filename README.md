# DevTools Hub

Fully autonomous, zero-cost developer tools directory that generates revenue via programmatic SEO.

## Architecture

```
GitHub Actions (cron: daily 6AM UTC)
  │
  ├── scripts/collect.ts
  │   ├── GitHub API (trending repos)     ── Rate-limited with retry
  │   ├── Dev.to API (curated articles)   ── Rate-limited with retry
  │   └── Seed data (35+ curated tools)   ── Always available fallback
  │
  ├── scripts/generate-pages.ts
  │   ├── 12 category pages               ── Auto-generated from DB
  │   ├── 200+ tool detail pages           ── One per tool
  │   ├── Dynamic sitemap.xml              ── Auto-updated
  │   └── robots.txt                       ── Auto-generated
  │
  ├── scripts/optimize.ts
  │   ├── Keyword rotation                 ── Based on page metrics
  │   ├── Meta description refresh         ── For low-performers
  │   ├── Category description cycling     ── Day-of-month rotation
  │   └── Low-performer cleanup            ── Remove stale tools
  │
  └── npm run build → Cloudflare Pages     ── Static export
```

## Monetization Mechanisms

1. **Affiliate Links**: Every tool page has a primary CTA linking to the tool's website. Add affiliate parameters for SaaS tools with partner programs.
2. **Google AdSense**: Insert ad units into layout.tsx (requires AdSense approval after traffic ramp).
3. **Sponsored Listings**: Flag tools as `featured=1` in the database; rotate sponsored slots in category pages.
4. **Freemium API**: Expose the `/api/tools` endpoint with rate limits; offer premium access via Stripe webhook.

## Revenue Projections

- **Month 1-3**: 0-500 pages indexed → $0-5/mo (AdSense)
- **Month 3-6**: 1000+ pages, growing backlinks → $10-50/mo
- **Month 6-12**: 2000+ pages, organic traffic → $50-200/mo
- **Year 2+**: Programmatic SEO flywheel → $200-1000/mo

## Self-Optimization Loop

The system automatically:
1. **Rotates keywords** in meta titles for top-performing pages
2. **Refreshes meta descriptions** for tools with <10 views
3. **Cycles category descriptions** daily (A/B testing across 3 variants)
4. **Regenerates sitemap** after every optimization pass
5. **Cleans up** tools with <5 stars updated >90 days ago
6. **Logs optimization results** to `optimization_config` table

## Deployment (Zero Cost)

### Prerequisites
- GitHub account
- Cloudflare account (free)
- Node.js 20+

### Step 1: Create Repository
```bash
git init devtools-hub
cd devtools-hub
# Copy all files from this project
git add -A && git commit -m "initial: devtools hub"
git remote add origin https://github.com/YOUR_USER/devtools-hub.git
git push -u origin main
```

### Step 2: Set Up Cloudflare Pages
```bash
# Install Wrangler CLI
npm install -g wrangler

# Login to Cloudflare
wrangler login

# Create a Pages project
wrangler pages project create devtools-hub

# Note your account ID and project name
```

### Step 3: Configure GitHub Secrets
Go to your repo → Settings → Secrets → Actions, add:
- `CLOUDFLARE_API_TOKEN` (create at dash.cloudflare.com → API Tokens → Create Token → Cloudflare Pages: Edit)
- `CLOUDFLARE_ACCOUNT_ID` (from your Cloudflare dashboard)

### Step 4: Trigger First Pipeline
```bash
# Go to Actions tab → "Daily Pipeline" → "Run workflow"
# Or run locally:
npm install
npx tsx scripts/collect.ts
npx tsx scripts/generate-pages.ts
npx tsx scripts/optimize.ts
npm run build
```

### Step 5: Verify Deployment
```bash
# Check your site
curl -s https://devtools-hub.pages.dev/ | head -20

# Check sitemap
curl -s https://devtools-hub.pages.dev/sitemap.xml | head -20
```

## Project Structure

```
devtools-hub/
├── .github/workflows/
│   ├── daily-pipeline.yml          # Main automation (daily)
│   ├── weekly-optimize.yml         # Deep optimization (weekly)
│   ├── validate.yml                # Build validation (on push)
│   └── health-check.yml            # Site monitoring (every 6h)
├── scripts/
│   ├── collect.ts                  # Data ingestion pipeline
│   ├── generate-pages.ts           # Static page generation
│   ├── optimize.ts                 # Self-optimization loop
│   └── export-to-d1.ts            # Cloudflare D1 export
├── src/
│   ├── app/
│   │   ├── layout.tsx              # Root layout with analytics
│   │   ├── page.tsx                # Homepage (generated)
│   │   ├── not-found.tsx           # 404 page
│   │   ├── loading.tsx             # Loading state
│   │   ├── globals.css             # Global styles
│   │   ├── tools/[slug]/           # Tool detail pages (generated)
│   │   ├── categories/[category]/  # Category pages (generated)
│   │   ├── categories/             # Categories index (generated)
│   │   └── api/
│   │       ├── analytics/          # Event tracking API
│   │       ├── tools/              # Tool search API
│   │       └── sitemap/            # Dynamic sitemap
│   ├── components/
│   │   ├── tools/ToolCard.tsx      # Reusable tool card
│   │   └── analytics/              # Client-side tracking
│   ├── lib/db.ts                   # Database layer (SQLite)
│   └── types/index.ts              # TypeScript definitions
├── data/                           # SQLite database (gitignored)
├── public/                         # Static assets
├── package.json
├── next.config.js
├── tailwind.config.js
├── wrangler.toml                   # Cloudflare Pages config
└── .env.example
```

## Data Sources

| Source | Method | Rate Limit | Daily Capacity |
|--------|--------|------------|----------------|
| GitHub API | Search repos | 10 req/min (unauth) | ~200 repos |
| Dev.to | Article search | 30 req/30s | ~100 articles |
| Seed Data | Curated list | None | 35+ tools |
| Product Hunt | GraphQL | OAuth required | 50 posts |

All sources have retry logic with exponential backoff and circuit breakers.

## Error Handling

- **API rate limits**: Automatic retry with `Retry-After` header respect
- **HTTP failures**: 3 retries with exponential backoff
- **Database errors**: WAL mode + transaction rollback
- **Build failures**: Automatic GitHub issue creation
- **Site downtime**: Health checks every 6 hours

## License

MIT
