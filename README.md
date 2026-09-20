# Oluwole Olusi — Portfolio

Personal portfolio website for Oluwole Olusi, showcasing selected web development and design work through four project case studies:

- Lagos Bistro — Premium Nigerian restaurant website
- Kora — Contemporary African fashion/lifestyle e-commerce website
- Northstar Creative — Independent creative/design studio website
- TaskFlow — SaaS task-management dashboard

The portfolio is built as a React application and includes the four project demos as static builds served from `/demos/`.

## Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- React Router
- Netlify Forms

## Getting started

Clone the repository and install the dependencies:

```bash
npm install

Start the development server:

npm run dev

Vite will provide the local development URL in the terminal.

Production build

Build the portfolio for production:

npm run build

Preview the production build locally:

npm run preview
Deployment

The portfolio is deployed on Netlify and connected directly to this GitHub repository.

The production deployment follows this workflow:

GitHub (main)
     ↓
Netlify
     ↓
npm run build
     ↓
dist/
     ↓
Production site

Pushing a new commit to main automatically triggers a new Netlify deployment.

Build configuration is defined in netlify.toml:

Build command: npm run build
Publish directory: dist

The project also includes the necessary SPA redirect configuration for client-side React Router routes.

Project structure
src/
├── components/
│   ├── layout/
│   │   ├── Header
│   │   ├── Footer
│   │   └── ScrollToTop
│   ├── project/
│   │   ├── ProjectRow
│   │   └── ProjectNav
│   └── ui/
│       ├── ContactForm
│       └── ScreenshotFrame
├── data/
│   ├── projects.ts
│   ├── services.ts
│   ├── site.ts
│   └── skills.ts
├── pages/
├── types/
├── App.tsx
├── index.css
└── main.tsx

public/
├── demos/
│   ├── lagos-bistro/
│   ├── kora/
│   ├── northstar/
│   └── taskflow/
├── images/
│   └── projects/
│       ├── lagos-bistro/
│       ├── kora/
│       ├── northstar/
│       └── taskflow/
├── favicon.svg
└── _redirects
Project data

The case studies are defined centrally in:

src/data/projects.ts

This includes project titles, descriptions, capabilities, technologies, screenshots, and demo paths.

Other centralized content includes:

src/data/site.ts — site information, contact details, navigation, and contact form options
src/data/skills.ts — technical and design skills
src/data/services.ts — services and capabilities
Project demos

The four project demos are served from the portfolio under:

/demos/lagos-bistro/
/demos/kora/
/demos/northstar/
/demos/taskflow/

Each demo is a compiled static build of its respective React application.

The project applications use their own routing and Vite base paths so that they can operate correctly when served from these nested URLs.

Contact form

The contact form uses Netlify Forms for submission handling.

It includes:

Client-side validation
Name, email, and message fields
Optional project type
Submission/loading state
Success and error states
Netlify's honeypot spam protection

No custom backend is required for the contact form.

Updating the site

For normal portfolio changes:

git add .
git commit -m "Describe the change"
git push

Pushing to main triggers a new Netlify production deployment automatically.

For changes to case-study content, project information, skills, services, or contact details, update the relevant files in src/data/.

For changes to the portfolio UI or behavior, edit the appropriate components or pages under src/.


