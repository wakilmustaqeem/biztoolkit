# BizToolkit AI Work Notebook

## Purpose
Central ledger for AI ownership, hand-offs, verification, and evidence. No AI should duplicate another AI's work without recording the hand-off. Completed, evidenced work is archived in `docs/RESOLVED-BOOK.md`.

## Governance
1. Each workstream has one primary owner.
2. A completed AI task requires evidence (commit, PR, test result, runtime check, or documented finding).
3. ChatGPT is the final independent auditor for cross-workstream approval.
4. GitHub Actions is the CI gate: no merge/production release without required checks passing.
5. Vercel runtime verification and Google Search Console verification are separate gates.
6. Never record an AI as having executed work unless execution evidence exists.
7. Completed work moves to `docs/RESOLVED-BOOK.md`; this notebook stays focused on open/active work.

## Current Work Allocation
| AI / System | Role | Current Work | Status |
|---|---|---|---|
| DeepSeek | Implementation specialist | Review remaining runtime-safe AI integration work and any new runtime findings | Assigned |
| Gemini | SEO specialist | Canonical, metadata, OpenGraph, JSON-LD, sitemap and indexing-readiness audit | Assigned |
| Qwen | QA specialist | Calculator formulas, edge cases, `/calculators` hub, regression and mobile QA | Assigned |
| ChatGPT | Lead auditor | Independent cross-check, security/architecture review, final approval | Active |
| GitHub Actions | CI gate | Build, lint, tests and monitoring workflows | Active |
| Vercel | Runtime/deployment gate | Production/preview deployment and route/runtime verification | Blocked by connector visibility |
| Google Search Console | SEO final gate | Sitemap, indexing, canonical and discovered/not-indexed verification | Not connected |

## BizToolkit Open Queue
### P0
- [ ] Establish the authoritative production domain and align canonical/OG/JSON-LD URLs.
- [ ] Verify `/calculators` hub runtime and complete calculator route coverage beyond the seven monitored routes if required.

### P1
- [ ] Audit Percentage Calculator PR #17 before merge.
- [ ] Complete remaining robots/runtime implementation review.
- [ ] Verify PR #20 auto-merge result after required checks; PR #20 is still open in the current evidence set.

### P2
- [ ] Vercel production runtime verification.
- [ ] Google Search Console sitemap/indexing verification.
- [ ] Final SEO and release audit.

## Ongoing Health
- GitHub Actions monitoring is currently green; keep monitoring green as an operational gate rather than treating it as a one-time completed task.
- Resolved historical work and evidence are kept in `docs/RESOLVED-BOOK.md` inside this BizToolkit repository.

## Evidence Log
| Date (UTC) | Workstream | Evidence / Result |
|---|---|---|
| 2026-09-02 | PR #20 | CI #98 success; Root Files #53 success; PR head `8c058bc5d3d1a4b1564bfb30ff290ff09112d924`; auto-merge enabled by user. |
| 2026-09-03 | AI coordination | DeepSeek/Gemini/Qwen are assigned workstreams; no claim of direct execution without a connector. |
| 2026-09-08 | Monitoring | Monitor #147 succeeded at commit `6a500f86a5a785647d6bdbba4ad8edfd81654103`; robots.txt, sitemap.xml and seven monitored calculator routes passed. Details archived in `docs/RESOLVED-BOOK.md`. |

## Handoff Rule
When one AI finishes a task, record: **owner → task → evidence → findings → next owner → status**. The next AI must start from that evidence rather than repeating the same investigation.
