# Oluwole Olusi — Portfolio

Personal portfolio site presenting four case-study projects: Lagos Bistro,
Kora, Northstar Creative, and TaskFlow. Frontend-only — static data, a
client-side contact form, no backend.

## Stack

- React 18 + TypeScript
- Vite
- Tailwind CSS
- React Router

## Getting started

```bash
npm install
npm run dev
```

Open the local URL Vite prints (typically `http://localhost:5173`).

## Building for production

```bash
npm run build
npm run preview   # preview the production build locally
```

## Deploying

Static site, pre-configured for **Netlify** (`netlify.toml` + `public/_redirects`
handle the SPA fallback that routes like `/work/kora` need so a direct link
or refresh doesn't 404). Push to a Git repo, import it in Netlify, and the
build command (`npm run build`) and publish directory (`dist`) are already
set. Replicate the same rewrite rule on any other static host.

## Project structure

```
src/
  components/
    layout/     Header, Footer, ScrollToTop
    project/    ProjectRow (the alternating-image layout used on Home and
                Work), ProjectNav (previous/next on case-study pages)
    ui/         SectionHeading, ScreenshotFrame, ContactForm
  data/
    projects.ts   The single source of truth for all four case studies —
                  edit here to change copy, tech stack, or screenshot paths
    skills.ts      Technical skill tiers + design skills (no percentages)
    services.ts    Build / Design capability groupings, shown on About
    site.ts         Name, location, email, phone, nav links, project-type
                    options for the contact form
  pages/        One file per route
  types/          Shared TypeScript types (Project, ContactFormData)
public/
  images/projects/<slug>/   Screenshot placeholders (see below)
  _redirects                Netlify SPA fallback
```

## Replacing the placeholder screenshots

Each project has four placeholder images generated in that project's own
real color palette (not a generic gray box), at the exact aspect ratios
specified for the final assets:

- `primary.jpg`, `secondary.jpg`, `interaction.jpg` — desktop shots, 8:5
  ratio (matching a 2400×1500 final asset)
- `mobile.jpg` — portrait, matching a 1170×2532 final asset

Drop real screenshots into `public/images/projects/<slug>/` using the
**same four filenames** and nothing else needs to change — the aspect
ratios are locked via CSS (`object-contain` inside a fixed-ratio container),
so swapping files causes no layout shift. If a real screenshot doesn't
exactly match the target ratio, `object-contain` will letterbox it rather
than crop it, per the brief's instruction not to crop primary screenshots
aggressively.

## Content that's easy to find and edit

- **Case-study copy, tech stack, capabilities** → `src/data/projects.ts`
- **Skills** → `src/data/skills.ts`
- **Services** → `src/data/services.ts`
- **Contact details, nav** → `src/data/site.ts`

## About the live demo links

Each project in `projects.ts` has a `demoPath` (e.g. `/demos/kora/`), per
the brief's instruction to reserve those paths centrally rather than
hardcoding them in components. Right now those paths don't resolve to
anything — the four sibling projects are separate applications and aren't
deployed under this domain yet. Once they are (e.g. as static builds
served at those paths on the same domain as this portfolio), the "View
live project" links on each case-study page will work with no further
changes needed here.

## Contact form

The form validates name, email format, and message (project type is
optional), shows a loading state, then a confirmation screen that's
explicit about not having a live backend yet — nothing is actually sent.
Wiring it to a real service (Formspree, a serverless function, etc.) only
requires replacing the `setTimeout` in `ContactForm.tsx` with a real
request; the surrounding validation and UI state already support that.
