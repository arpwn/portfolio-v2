# Portfolio V2

Personal portfolio built to present my work as a Front-End Developer with a stronger focus on product thinking, interaction design, and modern frontend architecture.

Live site:
[https://portfolio-v2-rho-amber.vercel.app](https://portfolio-v2-rho-amber.vercel.app)

## Overview

This version of my portfolio was designed to move away from a generic personal site and feel more like a polished product experience.

The project highlights:

- A cleaner personal brand
- Bilingual content support
- Theme switching
- A command palette inspired interaction model
- A modular content structure using Astro and TypeScript
- A more intentional visual system than my previous portfolio version

## Goals

I built this portfolio to improve how I present myself as a frontend engineer.

Instead of only listing technologies, the site aims to communicate:

- who I am
- how I work
- what kind of frontend problems I enjoy solving
- how users or recruiters can contact me quickly

## Features

- Responsive layout for desktop and mobile
- Light and dark mode
- Language toggle
- Command menu interaction
- Hero section with a featured project preview
- Selected projects, case studies, professional experience, and a technology toolbox
- Contact section with direct actions

## Tech Stack

- Astro
- React
- TypeScript
- Tailwind CSS
- Vercel

## Project Structure

Astro renders the homepage as static HTML. TypeScript handles language switching, theme preferences, the command menu, and email copying.

Portfolio content lives in `src/data/portfolio.ts`; the main page and its styles are in `src/pages/index.astro` and `src/styles/portfolio.css`. Existing React components remain in the repository.

Personal CVs are excluded from public assets and production builds. Contact is available through email and LinkedIn.

## Why This Project Matters

This is not just a portfolio shell. It is also a frontend exercise in:

- component composition
- interaction design
- content hierarchy
- multilingual UX
- balancing static performance with client-side interactivity

## Running Locally

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

## Future Improvements

- Improve recruiter-focused copy
- Expand the contact flow
- Refine the command palette actions

## Author

Jesus Armando Gutierrez Nery

- GitHub: [https://github.com/arpwn](https://github.com/arpwn)
- LinkedIn: [https://www.linkedin.com/in/armandonery34/](https://www.linkedin.com/in/armandonery34/)
- Portfolio: [https://portfolio-v2-rho-amber.vercel.app](https://portfolio-v2-rho-amber.vercel.app)
