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

**Routing:** All pages live under `src/app/`. The only dynamic route is `src/app/projects/[slug]/page.tsx`, which uses `generateStaticParams()` to statically pre-render each project page at build time.

**Data layer:** All project data is defined in `src/data/projects.ts` as a typed `ProjectItem[]` array — no API calls or database. Adding/editing projects means editing that file.

**Styling:** Tailwind v4 (imported via `@tailwindcss/postcss`). Custom CSS variables are declared in `src/app/globals.css` — `--accent` (yellow), `--accent-2` (cyan), and `glass` utility class for glassmorphism surfaces. Fluid sizing uses CSS `clamp()`. Fonts are Plus Jakarta Sans (body) and Syne (headers), loaded via `next/font/google` in the root layout.

**Components:** No component directory — UI is colocated inline within page files. All components are React Server Components by default; none currently use `"use client"`.

**Path alias:** `@/*` resolves to `src/*`.
