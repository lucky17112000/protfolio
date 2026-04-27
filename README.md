# Alamin Mustafa Rahim Portfolio

A modern, minimal, high-contrast developer portfolio built with Next.js App Router, React, TypeScript, and Tailwind CSS v4.

This portfolio highlights:

- Backend/software engineering profile
- Competitive programming profile
- Featured projects with live links, GitHub links, and screenshots
- Responsive, animated, premium black-and-white UI

## Tech Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS v4
- next/font (Google fonts)

## Features

- Hero section with animated typography and profile image
- Glassmorphism cards and smooth reveal animations
- Premium CTA buttons with custom hover effects
- Infinite horizontal project slider
- Project screenshots from `public` folder
- About, Skills, Academic Qualification, CP, Contact, and Footer sections
- Fully responsive across mobile and desktop

## Project Structure

```text
src/
  app/
    globals.css
    layout.tsx
    page.tsx
public/
  ecospark.jpg
  tutor.jpg
  doctor.jpg
  pexels-gabriel-passos-71368745-14737807.jpg
```

## Getting Started

1. Install dependencies

```bash
npm install
```

2. Run development server

```bash
npm run dev
```

3. Open in browser

`http://localhost:3000`

## Available Scripts

- `npm run dev` - start development server
- `npm run build` - create production build
- `npm run start` - run production server
- `npm run lint` - run ESLint

## How To Customize Content

Edit the project data in `src/app/page.tsx`.

### Update Personal Info

- Name in navbar and hero
- About section text
- Contact links
- Footer text

### Update Projects

Inside the `projects` array, each project supports:

- `name`
- `description`
- `stack`
- `github`
- `live`
- `imageLabel`
- `imageSrc` (example: `/ecospark.jpg`)
- `upcoming` (optional boolean)

### Update Images

Place images in `public/` and set `imageSrc` in the related project.

Examples:

- `/ecospark.jpg`
- `/tutor.jpg`
- `/doctor.jpg`

## Deployment

You can deploy this app on Vercel.

1. Push code to GitHub
2. Import repository in Vercel
3. Deploy

## License

This project is for personal portfolio use.
