# Gabriel Fernandes da Silva — Portfolio

**Live:** [gabrielfn.vercel.app](https://gabrielfn.vercel.app) · [English version](https://gabrielfn.vercel.app/en/)

Personal portfolio built with Next.js (App Router) as a static export, deployed on Vercel. It covers my experience, projects, stack and a live showcase of [Ocean DS](https://ocean-ds.github.io/ocean-web/), Blu's open source design system I contributed to.

## Tech stack

- **Next.js 16** with `output: "export"` (fully static HTML)
- **React 19** and **TypeScript**
- Plain CSS with custom properties, no UI framework
- **Archivo** variable font, self-hosted via `@fontsource-variable/archivo`
- **Ocean DS** (`@useblu/ocean-react`), loaded on demand
- **Vercel** hosting with Speed Insights for real-user Web Vitals

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # static output in out/
```

## Project structure

| What | Where |
| --- | --- |
| Portuguese copy | `content/pt.ts` |
| English copy | `content/en.ts` |
| Site URL, email and social links | `content/site.ts` |
| Colors, typography and layout | `app/globals.css` (tokens in `:root`) |
| SEO (title, description, Open Graph, hreflang) | `lib/meta.ts` |
| Page sections and JSON-LD | `components/HomePage.tsx` |
| Projects accordion | `components/Projects.tsx` |
| Ocean DS showcase | `components/OceanDemo.tsx` |
| Project screenshots | `public/projetos/` |
| Downloadable CV | `public/gabriel-fernandes-cv.pdf` |

## Internationalization

- Portuguese at `/` and English at `/en/`, each with its own `<html lang>`, canonical URL and `hreflang` links pointing to the other.
- Each language is a route group with its own root layout: `app/(pt)` and `app/(en)/en`.

## SEO

- Per-language metadata, Open Graph and Twitter cards
- JSON-LD: `Person` plus one `SoftwareApplication` per project (OS, category and Google Play rating where available)
- Static `sitemap.xml` and `robots.txt`
- Share images (`public/og-pt.png`, `public/og-en.png`, 1200×630) generated from `scripts/og-template.html`: open it at 1200×630 with `?status=...&role=...&url=...` and take a screenshot

## Performance

- Static HTML served from Vercel's CDN
- Self-hosted variable font, no request to Google Fonts
- No animation library: transitions are plain CSS
- Ocean DS (~160 KB of CSS/JS) only loads when its section gets close to the viewport
- Screenshots are lazy loaded with fixed dimensions (no layout shift)
- Respects `prefers-reduced-motion`

## Deployment

Every push to `main` deploys to production on Vercel, and every branch or pull request gets a preview URL. When changing the domain, update `site.url` in `content/site.ts` (used by canonical, sitemap and Open Graph) and regenerate the share images.

## Commit convention

Commits follow [Conventional Commits](https://www.conventionalcommits.org/) (`feat:`, `fix:`, `perf:`, `style:`, `docs:`, `build:`, `chore:`…). A Husky `commit-msg` hook runs commitlint and rejects messages that don't follow the convention.

## Roadmap

- [ ] Custom domain
- [ ] Individual project pages
