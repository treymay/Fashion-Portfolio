
# Trey May — Fashion Portfolio

A chic, editorial fashion portfolio for **Trey May** (fashion design & fashion photography). Built to feel **light, fun, colorful, emotionally direct, soft, vulnerable, free, & naive** while staying **high fashion, mature, and Vogue-editorial**.

## Stack

- **Next.js 14** (App Router) — SSR, image optimization, fast navigation
- **Tailwind CSS** — Soft Serenity / Nordic Minimal / Clay & Cloud palette, editorial typography
- **Framer Motion** — Scroll reveals, custom cursor, hover micro-interactions

## Sections

- **Home** — Hero, asymmetric intro (portrait + philosophy), coming-soon strip
- **Projects** — Monochrome grid teaser for collections
- **CLO3D** — Digital tailoring teaser + process pillars
- **Photography** — Blurred editorial reveal grid
- **Gallery** — Minimal asymmetric grid
- **Contact** — Refined form with glassmorphism

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Customize

1. **Hero** — Replace the hero placeholder in `src/app/page.tsx` with your video or image (e.g. Next.js `Image` or `<video>`).
2. **Portrait** — Add your portrait image in the asymmetric intro section on the home page.
3. **Projects / Photography / Gallery** — Swap placeholder blocks for real project images and links.
4. **Contact** — The form sends to **treymayofficial@gmail.com** via Formspree. Create a form at [formspree.io](https://formspree.io), verify that email, then add to `.env.local`: `NEXT_PUBLIC_FORMSPREE_FORM_ID=your_form_id` (the ID is in the form URL, e.g. `https://formspree.io/f/abc123` → use `abc123`).

## Design notes

- **Fonts**: Cormorant Garamond (editorial serif) + DM Sans (clean sans).
- **Palette**: Soft Serenity, Clay & Cloud, Moonlit Mauve, Sage — see `tailwind.config.ts` and `globals.css`.
- **Motion**: Subtle scroll-triggered fades, soft custom cursor (desktop only), hover scale on cards.
- **Nav**: Minimal top bar with mix-blend-difference; mobile flyout with dark overlay.

Make it yours. Keep it light. Keep it free.
