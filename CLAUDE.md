# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

```bash
npm run dev      # start development server
npm run build    # production build
npm run start    # run production server
npm run lint     # ESLint check
```

No test suite is configured.

## Architecture

**Stack:** Next.js App Router, React 19, TypeScript (strict), Tailwind CSS v4, PostCSS.

**Routing:** All pages live under `src/app/`. The only dynamic route is `src/app/projects/[slug]/page.tsx`, which awaits `params` as a Promise (Next.js 15 async params) and uses `generateStaticParams()` to pre-render each project page at build time.

**Data layer:** All project data lives in `src/data/projects.ts` as a typed `ProjectItem[]` array — no API calls or database. Adding/editing projects means editing that file. Each item has an optional `upcoming?: boolean` flag that signals work-in-progress entries.

**Components:** UI logic lives in `src/components/`. Most components that use scroll listeners, `useEffect`, or browser APIs are marked `"use client"` — including `SpineHost`, `Navbar`, `SkillTree`, `ProjectsSection`, `StatsBanner`, `Footer`, `SmoothScroll`, `MouseSpotlight`, `BlurReveal`, `AutoScroll`, and `ScrollArrow`. Server components (`HeroSection`, `AboutSection`, `ContactSection`, `Marquee`) render no hooks.

**Layout pattern:** `SpineHost` (`"use client"`) wraps the page in `src/app/page.tsx`. It renders the animated left-rail spine (scroll-linked orb + glowing fill) and sets the `--container-left` CSS custom property from the `.container` element's bounding rect so that `.node-marker` and `.hero-meta` can position themselves relative to the spine at any viewport width.

**Styling:** Tailwind v4 (imported via `@tailwindcss/postcss`). All significant design tokens and component styles are in `src/app/globals.css`. Key CSS variables:
- `--accent` / `--accent-bright` / `--accent-deep` / `--accent-glow` / `--accent-soft` / `--accent-line` — the blue (`#5BA8FF`) accent family used pervasively
- `--bg`, `--bg-1`, `--bg-2` — pure-black background variants
- `--ink`, `--ink-2`, `--ink-3`, `--ink-4` — foreground/text scale
- `--rule`, `--rule-2` — subtle white-alpha dividers
- `.theme-green`, `.theme-violet`, `.theme-amber` — swap the entire accent family by adding one of these classes

Fluid sizing uses CSS `clamp()`. Fonts are loaded via `next/font/google` in the root layout:
- `Space Grotesk` → `--font-display` (headings, numbers)
- `Inter` → `--font-body` (body text)
- `JetBrains Mono` → `--font-mono` (labels, nav, code-style UI)

**Path alias:** `@/*` resolves to `src/*`.
