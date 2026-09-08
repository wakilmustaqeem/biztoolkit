# BizToolkit AI Team

The AI team is organized into six roles. Human approval remains required before production changes are merged.

## Roles

1. Planner AI — reads `calculator-manifest.json` and maintains the calculator backlog.
2. Builder AI — implements missing calculator routes using the shared calculator component.
3. SEO AI — maintains metadata, canonical URLs, sitemap/internal links, and page discoverability.
4. Monetization AI — keeps AdSense-ready placements/configuration isolated from calculator logic.
5. QA AI — validates lint, build, routes, formulas, and browser rendering.
6. Deploy & Monitor AI — checks GitHub/Vercel deployment status and reports failures; it must not bypass release gates.

## Operating rules

- Work only in `wakilmustaqeem/biztoolkit`.
- Never mix GitHub identities or repositories.
- Never commit secrets, API keys, or AdSense credentials.
- One calculator = one unique production route.
- Keep `calculator-manifest.json` as the source of truth for calculator coverage.
- Production merges require the repository's existing CI/release gates and human approval.
- AI automation must report failures instead of silently forcing a deployment.

## Current mission

Complete the 50 unique calculator routes, then verify SEO, AdSense readiness, internal navigation/back links, lint/build, and production deployment.
