# Raas Music Academy & Entertainment

Responsive React + Vite marketing homepage for Raas in Varanasi, styled with Tailwind CSS and custom brand styles.

## Run locally

```sh
npm install
npm run dev
```

Build the static site:

```sh
npm run build
npm run preview
```

The production output is generated in `dist/`. Vercel automatically detects the Vite app and uses this output directory. `vercel.json` configures HTTP security headers, including a CSP that permits the Google Fonts stylesheet and font files used by the page. Vercel provides HTTPS for deployed domains; confirm HTTPS and the headers on the production domain after deployment.

## Brand images

The supplied Raas logo, banner, academy interior, guitar poster and Hindi quote poster are used directly from `src/assets/`. See [src/assets/README.md](./src/assets/README.md) for the image-to-section mapping.

## Enquiries and contact details

WhatsApp enquiry links open the academy chat with a pre-filled message. The location card opens the Google Maps coordinates provided for the academy; no street address is published.
