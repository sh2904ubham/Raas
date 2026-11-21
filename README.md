# RAAS Music Academy & Entertainment

Responsive React + Vite marketing homepage for RAAS in Varanasi, styled with Tailwind CSS and custom brand styles.

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

Place the original, unmodified RAAS files in `src/assets/` with the names documented in [src/assets/README.md](./src/assets/README.md). Missing images are represented by branded placeholders rather than unrelated stock imagery.

## Enquiries and contact details

WhatsApp enquiry links open WhatsApp with a pre-filled message and let the visitor choose a contact. No phone number, exact location, map pin, or social media profiles are assumed. Add verified academy details when available.
