# RAAS Music Academy Website Security Review

**Review date:** 2026-11-21  
**Scope:** Static React/Vite website source, dependencies, assets, external links, and available hosting configuration. This is a source review, not a live penetration test.

## Findings

| # | Severity | File | Lines | Vulnerability | Confidence |
|---|----------|------|-------|---------------|------------|
| 1 | 🟡 MEDIUM | `.gitignore` | 1-3 | Environment files such as `.env` are not excluded, which increases the chance of accidentally committing secrets. No `.env` files or exposed secrets were found in this checkout. | 9/10 |
| 2 | 🟡 MEDIUM | `vercel.json` | — (missing) | No Vercel configuration sets security headers. HTTPS behavior and headers must be verified on the live deployment. | 9/10 |

No confirmed exploitable vulnerability was identified in the reviewed source.

## Checks performed

- **Secrets and environment files:** No obvious API keys, credentials, or tracked `.env` files were found. `.gitignore` currently excludes `node_modules/`, `dist/`, and `.DS_Store`, but not environment files. Any `VITE_*` value included in a client build must be treated as public.
- **Dependencies:** `npm audit` and `npm audit --omit=dev` reported zero known vulnerabilities at review time. The declared React, Vite, Tailwind, PostCSS, Autoprefixer, and Lucide dependencies appear to be used.
- **XSS:** No raw HTML injection sink or user-controlled URL construction was found in the reviewed source.
- **External links:** External social and WhatsApp links use `rel="noreferrer"` with a new browsing context.
- **Assets and personal information:** Images are local bundled assets. The WhatsApp contact number is intentionally present in public site code; verify the academy is authorized to publish it. Image rights, consent for depicted people, and EXIF metadata were not independently verified.
- **Hosting:** The repository contains Netlify configuration, not Vercel configuration. Vercel's live TLS certificate, HTTP-to-HTTPS behavior, and response headers could not be checked locally.

## Changes implemented

No application hardening changes were made as part of this report-only action. This file records the review findings.

## Remaining risks and recommended predeployment work

1. Add `.env*` to `.gitignore` while allowing a sanitized `.env.example`; inspect Git history if secrets may previously have been committed.
2. Add Vercel response headers appropriate for the app, including a Content Security Policy that permits the Google Fonts origins currently used, `X-Content-Type-Options`, a frame policy, a referrer policy, and a restrictive Permissions Policy.
3. Confirm Vercel HTTPS and HTTP-to-HTTPS behavior on the production domain. Enable HSTS only after confirming the domain is served over HTTPS; consider subdomain scope carefully.
4. Confirm the public contact number and supplied media are approved for publication.

## Production readiness

No exploitable issue was confirmed, but production security is **not fully verified**. Address the environment-file and Vercel-header gaps and verify TLS, contact-number authorization, and media permissions before deployment. This review does not guarantee security.
