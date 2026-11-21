# Raas Music Academy & Entertainment

Responsive React + Vite marketing homepage for Raas in Varanasi, styled with Tailwind CSS and custom brand styles.

## Run locally

```sh
npm install
npm run dev
```

Build the static site for deployment:

```sh
npm run build
npm run preview
```

The production output is generated in `dist/` and can be deployed to Netlify. `netlify.toml` provides the SPA fallback so direct routes and refreshes serve the homepage.

## Brand images

The supplied Raas logo, banner, academy interior, guitar poster and Hindi quote poster are used directly from `src/assets/`. See [src/assets/README.md](./src/assets/README.md) for the image-to-section mapping.

## Enquiries and contact details

WhatsApp enquiry links open WhatsApp with a pre-filled message and let the visitor choose a contact. No phone number, exact location, map pin, or social media profiles are assumed. Add verified academy details when available.
