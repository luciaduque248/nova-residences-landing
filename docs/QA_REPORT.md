# NOVA Residences — Final QA Report

Date: 2026-09-11  
Scope: portfolio-ready production review

## Result

**PASS with fixes applied.** The production landing is structurally ready for portfolio use. Final QA identified and corrected a form-validation issue, narrow-mobile hero sizing risk, mobile footer overlap risk and missing production metadata assets.

## Production checks

| Check | Result |
| --- | --- |
| Production root `/` | `200 OK` |
| Canonical URL | `https://nova-residences-landing.vercel.app` |
| Brochure `/nova-brochure.html` | `200 OK` |
| Concept floor plan `/floorplans/n02.svg` | `200 OK` |
| HTML language | `es` |
| Canonical metadata | Present |
| Open Graph metadata | Present |
| Vercel production target | Connected to GitHub `main` |

## UX & conversion review

- Primary CTA remains **Agendar visita** across the funnel.
- Secondary CTA supports consideration through the concept brochure.
- Product hierarchy is clear: proposition → typologies → amenities → location → financial scenario → lead intent.
- The mobile sticky CTA preserves the primary conversion action.
- Fictional pricing, availability, dates, location and financing are explicitly disclosed.
- No fake testimonials, customer logos, urgency or performance claims are used.

## Accessibility review

- Semantic landmarks and headings are present.
- Native buttons, anchors, form controls and `details/summary` are used.
- Keyboard-visible focus is defined globally.
- Controls use labels or accessible names.
- Floor-plan SVGs include accessible title/description content.
- `prefers-reduced-motion` disables non-essential animation and transitions.
- Touch interactions avoid tap-highlight noise and use sufficiently large primary actions.

### Fix applied: lead form validation

The demo form previously used `noValidate` while immediately switching to the success state in the submit handler. That allowed an empty or invalid form to appear successfully submitted.

Final QA now:

1. checks native form validity before completing the demo;
2. invokes the browser validation UI for invalid fields;
3. gives the consent checkbox a name;
4. moves keyboard focus to the success confirmation after valid submission;
5. exposes the confirmation as a live status region.

## Responsive review

The implementation uses content-driven breakpoints and mobile-first stacking. Final QA added two defensive fixes:

- a narrow-screen override below `380px` for the oversized hero heading;
- extra mobile footer space so the fixed conversion CTA does not obscure footer content.

Primary responsive targets reviewed from implementation rules: 320–390px mobile, 768px tablet, 1024px desktop transition and 1280px+ wide layouts.

## SEO & sharing review

Existing production metadata already includes title, description, canonical URL, keywords, Open Graph base metadata and index/follow directives.

Final QA adds:

- application icon;
- `robots.txt` metadata route;
- `sitemap.xml` metadata route;
- generated 1200×630 Open Graph image;
- Twitter large-image card metadata;
- author/creator metadata.

## Performance observations

The main experience is statically rendered and interactive code is isolated to the typology explorer, financing estimator and lead-form modules. Hero/floor-plan assets are local.

The gallery and amenities sections intentionally use external Unsplash references. These are suitable for a portfolio concept, but a client production handoff should self-host or optimize final licensed imagery to remove third-party image dependency and gain tighter loading control.

No fabricated Lighthouse or Core Web Vitals scores are reported in this case study.

## Repository quality gates

The repository CI is configured to run:

```bash
npm install
npm run lint
npm run typecheck
npm run build
```

The QA branch must pass these checks before integration into `main`.

## Portfolio integrity

NOVA Residences is a fictional portfolio case study. All apartment configurations, prices, delivery dates, location context, financing scenarios and commercial interactions are demonstrative only.
