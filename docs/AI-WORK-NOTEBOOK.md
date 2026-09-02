# BizToolkit AI Work Notebook

## Purpose
Central ledger for AI ownership, hand-offs, verification, and evidence. No AI should duplicate another AI's work without recording the hand-off.

## Governance
1. Each workstream has one primary owner.
2. A completed AI task requires evidence (commit, PR, test result, runtime check, or documented finding).
3. ChatGPT is the final independent auditor for cross-workstream approval.
4. GitHub Actions is the CI gate: no merge/production release without required checks passing.
5. Vercel runtime verification and Google Search Console verification are separate gates.
6. Never record an AI as having executed work unless execution evidence exists.

## Current Work Allocation
| AI / System | Role | Current Work | Status |
|---|---|---|---|
| DeepSeek | Implementation specialist | Investigate/fix robots.txt runtime 404; review runtime-safe AI integration work | Assigned |
| Gemini | SEO specialist | Canonical, metadata, OpenGraph, JSON-LD, sitemap and indexing-readiness audit | Assigned |
| Qwen | QA specialist | Calculator formulas, edge cases, route coverage, regression and mobile QA | Assigned |
| ChatGPT | Lead auditor | Independent cross-check, security/architecture review, final approval | Active |
| GitHub Actions | CI gate | Build, lint, tests and monitoring workflows | Active |
| Vercel | Runtime/deployment gate | Production/preview deployment and route/runtime verification | Blocked by connector visibility |
| Google Search Console | SEO final gate | Sitemap, indexing, canonical and discovered/not-indexed verification | Not connected |

## BizToolkit P0/P1/P2 Queue
### P0
- [ ] Resolve/verify production `robots.txt` 404.
- [ ] Verify production `sitemap.xml`.
- [ ] Establish the authoritative production domain and align canonical/OG/JSON-LD URLs.
- [ ] Verify all calculator routes plus `/calculators` hub.

### P1
- [ ] Audit Percentage Calculator PR #17 before merge.
- [ ] Complete robots/runtime implementation review.
- [ ] Keep CI and monitoring green.
- [ ] Verify PR #20 auto-merge result after required checks.

### P2
- [ ] Vercel production runtime verification.
- [ ] Google Search Console sitemap/indexing verification.
- [ ] Final SEO and release audit.

## Evidence Log
| Date (UTC) | Workstream | Evidence / Result |
|---|---|---|
| 2026-09-02 | PR #20 | CI #98 success; Root Files #53 success; PR head `8c058bc5d3d1a4b1564bfb30ff290ff09112d924`; auto-merge enabled by user. |
| 2026-09-03 | AI coordination | DeepSeek/Gemini/Qwen are assigned workstreams; no claim of direct execution without a connector. |

## Handoff Rule
When one AI finishes a task, record: **owner → task → evidence → findings → next owner → status**. The next AI must start from that evidence rather than repeating the same investigation.
