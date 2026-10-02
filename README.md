# Conejo Valley Family Counseling

A single-page React and TypeScript website. The page is assembled in `src/routes/index.tsx` from small, named sections in `src/components/conejo/`. All page styling and responsive rules are in `src/styles.css`; the original photographs are in `src/assets/`.

## Run locally

```sh
npm install
npm run dev
```

This Lovable project uses TanStack Start for its minimal page route and server entry. No additional routes or backend are needed for this website. `npm run build` creates the production build.

## What was simplified

The uploaded site's one large page was split into the existing visual sections. Its shared header/footer file became `Header.tsx` and `Footer.tsx`; unused generated UI controls, styles for absent team/FAQ sections, unused asset pointer files, and unused packages were removed. The layout, copy, image crops, colors, type, and navigation remain as in the uploaded page.
