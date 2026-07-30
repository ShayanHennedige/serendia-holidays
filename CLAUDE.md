# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

```bash
npm run dev      # start dev server (http://localhost:3000)
npm run build    # production build
npm run start    # run production build
npm run lint     # eslint (flat config, eslint-config-next/core-web-vitals)
```

There is no test script in `package.json`. The only automated check is `scripts/verify-cinematic.mjs`, a Playwright smoke script (not part of the Playwright test runner/`npx playwright test`) that boots against an already-running dev server and inspects the homepage's WebGL hero canvas:

```bash
npm run dev &                       # server must already be running on :3000
node scripts/verify-cinematic.mjs   # screenshots written to /tmp/serendia-cinematic-*.png
```

There is no TypeScript typecheck script; run `npx tsc --noEmit` directly if needed (`tsconfig.json` has `strict: false`).

## Architecture

This is a Next.js App Router marketing site for a Sri Lanka/Maldives travel agency (Serendia Holidays by Venom). There is no database, CMS, or backend API of substance — content is hardcoded in JSX/TS data literals directly inside page files.

**Reusable detail-page templates.** Rather than a CMS, individual tour/hotel pages are thin wrappers that pass a large content object into a shared template component:
- `app/components/TripDetailPage.tsx` renders any tour/excursion page — takes `title`, `facts[]`, `sections[]` (day-by-day itinerary blocks with image + paragraphs), and `bookingLines[]`. Used by everything under `app/tours/*` and `app/excursions/*`.
- `app/components/HotelDetailPage.tsx` is the equivalent template for `app/sri-lankan-hotels/*` pages.

  To add a new tour/excursion/hotel page, create `app/<section>/<slug>/page.tsx` that imports the matching template and supplies its content object plus a Next.js `metadata` export — do not build a new page layout from scratch.

- Index pages (`app/tours/page.tsx`, `app/excursions/page.tsx`, `app/sri-lankan-hotels/page.tsx`) list/link to these detail pages; there's no shared data source, so titles/paths are duplicated between the index and the detail page and must be kept in sync by hand.

**Cinematic scroll hero.** The homepage hero (`app/components/CinematicHero.tsx` + `CinematicScrollScene.tsx`) is a GSAP `ScrollTrigger`-driven, WebGL-canvas scene defined as an array of `Scene` objects (kicker/title/caption/image/ctas). `SmoothScrolling.tsx` wraps the page with Lenis for inertial scroll, which the GSAP timeline is synced against. Styling for this feature lives in the co-located `app/components/cinematic.css` rather than `globals.css`. `scripts/verify-cinematic.mjs` exists specifically to catch regressions in this scene (canvas not rendering, copy not visible).

**Styling.** Plain CSS, no Tailwind/CSS-in-JS — nearly all global styles live in one large `app/globals.css` (3500+ lines); component-scoped styles are the exception (`cinematic.css`). Most images are rendered via plain `<img>`, not `next/image` (one exception: `app/transportation/page.tsx`).

**Trip customizer** (`app/customize/`): `CustomTripForm.tsx` is a large multi-step client wizard (traveler kind → group size → destinations → etc.) built from local `useState`, not a form library. `MapboxTripPicker.tsx` loads Mapbox GL JS from `window.mapboxgl` (expects the script/CSS to be injected elsewhere) using a hardcoded public access token. The wizard's `onSubmit` currently only calls `preventDefault()` — there is no real submission endpoint wired up yet.

**Sri Lanka images API route** (`app/api/sri-lanka-images/route.ts`): fetches images from the Wikimedia Commons API per a fixed list of search terms, revalidating every 12 hours (`revalidate = 43200`), falling back to static `/public/images/*.png` files if the request fails or returns nothing.

**Routing structure**: standard App Router — one `page.tsx` per route directory, shared chrome (`Header`, `Footer`, `ScrollToTop`) mounted once in `app/layout.tsx`. Route groups of note: `tours/`, `excursions/`, `sri-lankan-hotels/`, `customize/`, `about/`, `contact/`, `gallery/`, `transportation/`.

## Working in this repo

Per `AGENTS.md`, the `next` dependency in this repo is pinned to a version with breaking changes/conventions that may diverge from general Next.js knowledge — check `node_modules/next/dist/docs/` for the installed version's own docs before relying on prior Next.js training knowledge, especially for anything App Router/config related. (`node_modules` is not installed in a fresh checkout — run `npm install` first.)
