import type { Project } from '../types'

export const projects: Project[] = [
  {
    slug: 'kora',
    title: 'Kora',
    category: 'Fashion / E-commerce',
    description:
      'A contemporary fashion e-commerce site with real product filtering, a working cart, and an editorial art direction distinct from typical storefront templates.',
    objective:
      'Build a fashion e-commerce experience that reads as a genuine independent label — considered typography, restrained imagery, and shopping mechanics that actually work end to end on the frontend.',
    whatWasBuilt:
      'A full storefront: category and price filtering, product detail pages with size selection, a persistent cart with quantity and totals logic, and a lookbook section for editorial storytelling. Cart state persists across sessions using localStorage.',
    capabilities: [
      'E-commerce UX',
      'Product filtering & sorting',
      'Cart & checkout flow',
      'Editorial art direction',
      'Responsive commerce design',
    ],
    technologies: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'React Router'],
    preview: '/images/projects/kora/primary.jpg',
    screenshots: {
      primary: '/images/projects/kora/primary.jpg',
      secondary: '/images/projects/kora/secondary.jpg',
      interaction: '/images/projects/kora/interaction.jpg',
      mobile: '/images/projects/kora/mobile.jpg',
    },
    demoPath: '/demos/kora/',
    githubUrl: 'https://github.com/oluwoleolusi/kora',
  },
  {
    slug: 'northstar',
    title: 'Northstar Creative',
    category: 'Creative Studio / Branding',
    description:
      'A creative-agency site built around case-study storytelling and editorial layout, designed to feel art-directed rather than templated.',
    objective:
      'Demonstrate a different register of design work: a studio site that presents case studies, services, and process with the same discipline a real creative agency would apply to a client.',
    whatWasBuilt:
      'A full studio site — home, work index, individual case studies, services, and studio pages — with a bold black-and-white system offset by a single accent colour, and layouts that vary deliberately across sections instead of repeating one card pattern.',
    capabilities: [
      'Creative-agency presentation',
      'Case-study storytelling',
      'Editorial layout systems',
      'Art direction',
      'Services presentation',
    ],
    technologies: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'React Router'],
    preview: '/images/projects/northstar/primary.jpg',
    screenshots: {
      primary: '/images/projects/northstar/primary.jpg',
      secondary: '/images/projects/northstar/secondary.jpg',
      interaction: '/images/projects/northstar/interaction.jpg',
      mobile: '/images/projects/northstar/mobile.jpg',
    },
    demoPath: '/demos/northstar/',
    githubUrl: 'https://github.com/oluwoleolusi/northstar',
  },
  {
    slug: 'taskflow',
    title: 'TaskFlow',
    category: 'SaaS / Productivity',
    description:
      'A task and project management application with real shared state — boards, calendars, filters, and a task workspace that behave like an actual product.',
    objective:
      'Move beyond marketing sites and into application design: build a SaaS product interface with the information density, interaction states, and state management that a real productivity tool needs.',
    whatWasBuilt:
      'A full application shell with Today, My Tasks, Upcoming, Projects, a Kanban board, and a calendar view, all reading from one shared task data model. Filtering, sorting, drag-free status changes, and task editing all update state consistently across every view, persisted to localStorage.',
    capabilities: [
      'SaaS product UX',
      'Application state management',
      'Filtering, sorting & Kanban',
      'Calendar & scheduling UI',
      'Form design & validation',
      'Responsive application design',
    ],
    technologies: [
      'React',
      'TypeScript',
      'Vite',
      'Tailwind CSS',
      'React Router',
      'Context API',
    ],
    preview: '/images/projects/taskflow/primary.jpg',
    screenshots: {
      primary: '/images/projects/taskflow/primary.jpg',
      secondary: '/images/projects/taskflow/secondary.jpg',
      interaction: '/images/projects/taskflow/interaction.jpg',
      mobile: '/images/projects/taskflow/mobile.jpg',
    },
    demoPath: '/demos/taskflow/',
    githubUrl: 'https://github.com/oluwoleolusi/taskflow',
  },
  {
    slug: 'lagos-bistro',
    title: 'Lagos Bistro',
    category: 'Hospitality / Restaurant',
    description:
      'A premium contemporary Nigerian restaurant website built around menu discovery, reservations, and a calm, editorial sense of place.',
    objective:
      'Design and build a restaurant website that could plausibly belong to a genuine premium dining room — one where the food and the room do the talking, rather than a template with a menu bolted on.',
    whatWasBuilt:
      'A full site covering home, menu, about, reservations, and contact, with a working reservation flow and a menu that behaves like a real one — categorised, filterable, and legible at a glance. The visual system leans on warm neutrals, an editorial serif, and restrained photography treatment rather than the usual restaurant-site clichés.',
    capabilities: [
      'Hospitality UX',
      'Menu design & filtering',
      'Reservation flow',
      'Local business presentation',
      'Editorial visual design',
      'Responsive design',
    ],
    technologies: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'React Router'],
    preview: '/images/projects/lagos-bistro/primary.jpg',
    screenshots: {
      primary: '/images/projects/lagos-bistro/primary.jpg',
      secondary: '/images/projects/lagos-bistro/secondary.jpg',
      interaction: '/images/projects/lagos-bistro/interaction.jpg',
      mobile: '/images/projects/lagos-bistro/mobile.jpg',
    },
    demoPath: '/demos/lagos-bistro/',
    githubUrl: 'https://github.com/oluwoleolusi/lagos-bistro',
  },
]

export function getProjectBySlug(slug?: string): Project | undefined {
  if (!slug) return undefined
  return projects.find((p) => p.slug === slug)
}
