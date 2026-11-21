# RAAS Music Academy Website Security Review

**Review date:** 2026-11-21  
**Scope:** Static React/Vite website source, dependencies, assets, external links, and available hosting configuration. This is a source review, not a live penetration test.

## Initial findings (since remediated)

| # | Severity | File | Lines | Vulnerability | Confidence |
|---|----------|------|-------|---------------|------------|
| 1 | 🟡 MEDIUM | `.gitignore` | 1-3 | Environment files such as `.env` are not excluded, which increases the chance of accidentally committing secrets. No `.env` files or exposed secrets were found in this checkout. | 9/10 |
| 2 | 🟡 MEDIUM | `vercel.json` | — (missing) | No Vercel configuration sets security headers. HTTPS behavior and headers must be verified on the live deployment. | 9/10 |

No confirmed exploitable vulnerability was identified in the reviewed source.

## Remediation status

| # | Finding | Status |
|---|---------|--------|
| 1 | Environment files were not excluded by `.gitignore`. | **Fixed:** `.env*` is ignored, with `.env.example` explicitly allowed. |
| 2 | No Vercel security-header configuration was present. | **Fixed in source:** `vercel.json` now applies CSP and security headers to all routes. Live response headers still require verification after deployment. |

## Checks performed

- **Secrets and environment files:** No obvious API keys, credentials, or tracked/current `.env` files were found. `.gitignore` excludes environment files except `.env.example`. Any `VITE_*` value included in a client build must be treated as public.
- **Dependencies:** `npm audit` and `npm audit --omit=dev` reported zero known vulnerabilities at review time. The declared React, Vite, Tailwind, PostCSS, Autoprefixer, and Lucide dependencies appear to be used.
- **XSS:** No raw HTML injection sink or user-controlled URL construction was found in the reviewed source.
- **External links:** External social and WhatsApp links use `rel="noreferrer"` with a new browsing context.
- **Assets and personal information:** Images are local bundled assets. The WhatsApp contact number is intentionally present in public site code; verify the academy is authorized to publish it. Image rights, consent for depicted people, and EXIF metadata were not independently verified.
- **Hosting:** Vercel headers are configured in `vercel.json`; the former Netlify config was removed. Vercel's live TLS certificate, HTTP-to-HTTPS behavior, and response headers could not be checked locally.

## Changes implemented

The follow-up added `.env*` ignore rules while allowing `.env.example`, added Vercel security headers and a CSP scoped to the app's self-hosted assets plus Google Fonts, removed the Netlify-only configuration, and updated the deployment documentation. No visual or application behavior changes were made.

## Remaining risks and recommended predeployment work

1. Verify the configured headers and HTTPS redirect on the actual Vercel deployment. HSTS is configured for one year; confirm the production domain is consistently served over HTTPS.
2. Confirm the public contact number and supplied media are approved for publication. Image rights, consent for depicted people, and EXIF metadata were not independently verified.

## Production readiness

The requested source-level hardening is in place and the production build and dependency audits pass. Live deployment behavior, contact-number authorization, and media permissions remain unverified. This review does not guarantee security.
