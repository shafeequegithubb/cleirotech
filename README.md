# Cleiro Digital — Website

React + TypeScript + Vite · Lenis smooth scroll · Framer Motion

## Run

```bash
pnpm install
pnpm dev        # local dev server
pnpm build      # production build → dist/
pnpm preview    # preview the build
```

## Edit content

Almost everything (services, process, work, FAQ, contact details) lives in **`src/data/site.ts`**.

- Replace the placeholder `CONTACT` details (email, phone, WhatsApp number, social links) before going live.
- Images are in `src/assets/images/` (logo, dark-background logo, brand poster, founder photo).
- Brand colours are CSS variables at the top of `src/styles/global.css`.
- Smooth scroll settings: `src/hooks/useLenis.ts`.
