# CRAM frontend refinement — handoff

Last updated: 2026-10-04. Scope: visual / interaction polish only. No backend, auth, payment or business claims added. Quotation-first flow, routes, `generateStaticParams`, metadata and `?piece=` / `?collection=` prefill are unchanged. `data/products.ts` is still the single data source.

## Verification status (READ THIS FIRST)

| Check | Status |
|---|---|
| `npm run lint` | **NOT RUN** — see below |
| `npx tsc --noEmit` | **NOT RUN** against the real toolchain |
| `npm run build` | **NOT RUN** |

The refinement sandbox had no `node_modules` and no registry access (`npm ci` -> 403), so `next`, `eslint`, `lucide-react`, `@types/react` and Tailwind v4 were unavailable.

What *was* done instead (weaker than the real checks):
- Strict `tsc` (strict + `noUnusedLocals`) over every `app/`, `components/`, `data/` file against hand-written stubs for react / next / lucide-react: **0 errors**. A negative control confirmed the checker catches real errors. This does not validate real React/Next/lucide types.
- Scripted CSS audit: every custom class used in TSX is defined in `globals.css`; no `@apply` of custom classes (the cause of the earlier `unknown utility class btn` build failure); braces balanced.
- Static route review (Header, Footer, `#main`, no banned CTAs/claims).

**First action in the next session, on the machine with `node_modules`:**
`npm run lint && npx tsc --noEmit && npm run build`, and fix whatever appears. Things most likely to need attention:
1. Tailwind v4 arbitrary-value classes I used: `[@media(hover:none)]:opacity-100`, `has-[:focus-visible]:ring-2`, `[&:not(:last-child)]:flex-1`, `lg:auto-rows-[clamp(180px,17vw,260px)]`, `[clip-path:inset(0_0_0_0)]`, `[transition-timing-function:var(--ease-soft)]`.
2. `:user-invalid` selector on `.field` (needs a current browser; harmless if unsupported).
3. `react-hooks` lint rules from eslint-config-next 16 on `Header.tsx` and `CustomStudio.tsx` effects.
4. `inert={...}` prop typing (needs @types/react 19).

## Completed work

**Foundation (`app/globals.css`)** — rewritten, all original classes kept. Added tokens `--ease-soft`, `--ease-inout`, `--header-h` (112px, 64px when `html[data-header="compact"]`). Defined the previously **missing** classes that shared components referenced: `title-page`, `title-card`, `lede`, `steps`/`step`/`step__marker`/`step__line`, `value-card`/`value-num`, `draw-circle`/`draw-check`, `on-dark`, `ring-drift(-slow)`. New: `rise` (page-load stagger via `--i`), `pop-in`, `ambient-a/b/c`, `art-media`/`art-sheen`, `foot-link`, `btn-ghost-light`, `skip-link`, `sticky-under-header`, `studio-sticky`, `disclosure` (FAQ height animation; not `collapse`, which Tailwind owns), `no-scrollbar`, `scroll-fade-x`. Button hover = 1px lift + soft shadow; `:user-invalid` field state; styled select chevron. Reduced-motion block disables reveal, rise, drift, ambient and button lift.

**Header** — compact on scroll with hysteresis (on >56px, off <16px), promo bar collapses, tagline hides, writes `data-header` on `<html>`; skip link; full-screen menu with clip-path reveal, focus moves in/out, Tab trap, `inert` when closed, `aria-current`, `aria-controls`.

**Footer** — two-column link groups on mobile, sliding-underline links, removed the word "client" from public copy.

**Homepage** — Hero uses the single orchestrated `rise` sequence + slow ambient drift in placeholder art (`ArtworkImage ambient`). Collections: softer overlay, arrow micro-motion, teal tile with drifting rings. HowItWorks now uses shared `ProcessSteps` (gold connector draws in; vertical rail on mobile). BrandValues uses shared `ValueList`. CustomCTA gets glow + drifting rings. StudioGallery is a fixed-row-unit editorial wall (tiles share edges), captions always visible on touch. FeaturedProducts: arrow link.

**Shop** — shared `PageHeader`; sticky filter bar follows `--header-h`; horizontally scrolling chips with edge fade and scroll-into-view; sort + count in a rule-separated row; empty state; shared `CtaPanel`.

**Cards / art** — `ProductCard` flatter, arrow affordance, price hierarchy; `ArtworkImage` gets `art-media` (hover zoom now also works on placeholders), sheen layer, optional `ambient`. Real-image switching via `image` in `data/products.ts` unchanged.

**Product page** — wired in the previously **unused** `ProductGallery` (thumbnails, arrows, keyboard); shared `Breadcrumb`; price block; ruled personalisation list; shared `ProcessSteps`; related products. Added optional `images?: string[]` to `Product` (the gallery already read it, so the type was missing).

**Collections** — index: `PageHeader`, staggered two-column composition. Detail: `PageHeader` with artwork aside, starting price, `CtaPanel`.

**Custom landing** — `PageHeader`, `SectionHeader`, `ProcessSteps`.

**Custom Studio (`components/custom/CustomStudio.tsx`)** — NOT simplified: every field kept. Added: sticky step indicator that follows scroll (reflects position only, does not claim validation), icon-chip category cards with check badge, richer palette/occasion selected states, drag-and-drop inspiration zone, live summary (occasion, size, date, budget), success state with `SuccessMark` + request recap + focus move, animated FAQ, reduced-motion-aware scroll. Summary card sticky on desktop; supporting cards moved below the grid. Still preview-only; nothing is sent.

**Our Story** — `PageHeader`, offset gold frame on artwork, `figure`/`blockquote` quote, shared `ValueList`, `CtaPanel`. **Contact** — fluid title, `SuccessMark` + focus on success, full-width mobile button. **Login / Signup** — new `components/auth/AuthShell.tsx` (split layout, drifting rings, `rise` entrance); behaviour and test ids unchanged; still shows "not active in this preview".

## Design decisions
- One orchestrated load sequence (hero, auth). Elsewhere, reveal-on-scroll is small (16px) and fast (<=600ms). Ambient motion is limited to slow ring drift and hero placeholder layers.
- Palette untouched; gold stays on hairlines, markers and small details.
- Shared components are now actually used (`PageHeader`, `CtaPanel`, `ProcessSteps`, `ValueList`, `Breadcrumb`, `ProductGallery`, `SuccessMark`) instead of duplicated markup.
- No new dependencies.

## Files changed
Modified: `app/globals.css`, `app/page.tsx`, `app/shop/page.tsx`, `app/products/[slug]/page.tsx`, `app/collections/page.tsx`, `app/collections/[slug]/page.tsx`, `app/custom/page.tsx`, `app/our-story/page.tsx`, `app/contact/page.tsx`, `app/login/page.tsx`, `app/signup/page.tsx`, `components/Header.tsx`, `components/Footer.tsx`, `components/catalog/ProductCard.tsx`, `components/custom/CustomStudio.tsx`, `components/shop/ShopCatalogue.tsx`, `components/home/{Hero,Collections,HowItWorks,FeaturedProducts,CustomCTA,BrandValues,StudioGallery}.tsx`, `components/ui/{ArtworkImage,SectionHeader,PageHeader}.tsx`, `data/products.ts` (optional `images`, gallery grid classes only).
New: `components/auth/AuthShell.tsx`, `CLAUDE_HANDOFF.md`.
Unchanged but now used: `ProductGallery`, `ProcessSteps`, `ValueList`, `CtaPanel`, `SuccessMark`, `Breadcrumb`, `Reveal`.

## Remaining work
1. Run the three commands above and fix any failures (top priority).
2. Visual QA at 320 / 375 / 390 / 430 / 768 / 1024 / 1440 — none of this has been viewed in a browser. Specifically: studio-gallery row heights, process-step connector on md, mobile menu clip-path, compact header height jump, sticky filter bar + stepper offsets, product gallery thumbnails.
3. `/contact`, `/login`, `/signup` are client components and so have no page-level `metadata` (same as before). Optional: split the form into a client child to add titles.
4. Real photography: add `image` / `images` in `data/products.ts`; check crops at the 4:5 card ratio and the gallery tiles.

## Continue from
Step 1 of "Remaining work". All planned refinement areas have had a pass; nothing is half-edited.
