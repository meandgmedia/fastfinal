# Fast Final Expense Insurance

Marketing and lead-generation website for **Fast Final Expense Insurance** — get a quote, compare options, apply online. Built with [Astro](https://astro.build), deployed to Cloudflare Pages.

Production: **https://fastfinalexpenseinsurance.com**

## Tech stack

- [Astro](https://astro.build) (static output) + TypeScript
- Plain CSS with a token-based design system (`src/styles/tokens.css`) — no CSS framework
- Astro [content collections](https://docs.astro.build/en/guides/content-collections/) for the blog
- Zero client-side JS framework — a handful of small inline scripts only (mobile nav, FAQ accordion is native `<details>`, conversion tracking)
- [`@astrojs/sitemap`](https://docs.astro.build/en/guides/integrations-guide/sitemap/) for sitemap generation

## Local development

Requires Node 22.12+ (see `.nvmrc`).

```sh
npm install
npm run dev       # http://localhost:4321
```

| Command                   | Action                                                |
| :------------------------ | :----------------------------------------------------|
| `npm install`              | Install dependencies                                  |
| `npm run dev`               | Start the local dev server                             |
| `npm run build`             | Build the production site to `./dist/`                 |
| `npm run preview`           | Preview the production build locally                    |
| `npm run astro check`       | Type-check the project (`.astro` files + TypeScript)     |

## Project structure

```text
src/
  components/
    analytics/    Conversion tracking (GA4 / Google Ads / Meta Pixel) — see src/lib/analytics.ts
    faq/           FAQ accordion (native <details>, no JS)
    forms/         Reusable form fields + the contact form
    home/          Homepage-only sections
    layout/        Header, Footer, sticky mobile CTA
    marketing/     Shared building blocks for commercial pages (PageHero, FeatureGrid, LegalPlaceholder)
    quote/         QuoteRater.astro — the Back Nine integration point, see below
    seo/           SEO.astro (meta tags, canonical, Open Graph, JSON-LD)
    ui/            Design-system primitives (Button, Card, Section, Container, CTA, RouteLine, Breadcrumbs)
  content/
    blog/          Blog posts (Markdown), schema defined in src/content.config.ts
  data/            Site-wide config: nav, CTA copy, FAQ content (single source of truth)
  layouts/         BaseLayout.astro (document shell), BlogPostLayout.astro
  lib/             schema.ts (JSON-LD builders), analytics.ts (tracking config)
  pages/           File-based routes
  styles/          tokens.css (design tokens) + global.css (base styles)
public/            Static assets: favicons, OG image, robots.txt, llms.txt
```

## The Back Nine Insurance quote rater

The real quote rater/application widget isn't integrated yet. `src/components/quote/QuoteRater.astro` is a polished, static preview of that experience with an extensively commented integration point — read the comment block at the top of that file before wiring up the real widget. It's used on both `/get-a-quote/` and the homepage hero.

## Analytics & conversion tracking

No tracking IDs are hard-coded anywhere in this repo. Google Analytics 4, Google Ads conversion tracking, Meta Pixel, and Google Search Console verification are all wired up but dormant until you set the relevant environment variable — see `.env.example` and `src/lib/analytics.ts` for the full list and instructions. With nothing configured, no third-party analytics script loads at all.

Conversion events fired site-wide (see `src/components/analytics/TrackingScript.astro`): `quote_cta_click`, `quote_started`, `phone_click`, plus `quote_completed` / `application_started` / `application_completed` as documented hooks for the future Back Nine integration.

## Adding a blog post

Drop a new Markdown file in `src/content/blog/` with frontmatter matching the schema in `src/content.config.ts` (`title`, `description`, `publishDate`, optional `updatedDate`/`tags`, `draft`). No routing code needed — `/blog/` and `/blog/[slug]/` pick it up automatically.

## Deploying to Cloudflare Pages

- **Build command:** `npm run build`
- **Build output directory:** `dist`
- **Root directory:** `/` (repo root)
- Set the `NODE_VERSION` environment variable in the Cloudflare Pages project settings (see `.nvmrc` for the version this project was built against) — Cloudflare's default build image may otherwise use an older Node version than this project requires.
- No Astro adapter is needed — this is a fully static site (`output: "static"` in `astro.config.mjs`), so Cloudflare Pages serves `dist/` directly with no server-side runtime.
- Optional environment variables for analytics (see `.env.example`): `PUBLIC_GA4_MEASUREMENT_ID`, `PUBLIC_GOOGLE_ADS_ID`, `PUBLIC_META_PIXEL_ID`, `PUBLIC_GSC_VERIFICATION`.
