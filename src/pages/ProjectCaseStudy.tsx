import { Navigate, useParams, Link } from 'react-router-dom'
import { getProjectBySlug, projects } from '../data/projects'
import ScreenshotFrame from '../components/ui/ScreenshotFrame'
import ProjectNav from '../components/project/ProjectNav'

export default function ProjectCaseStudy() {
  const { slug } = useParams<{ slug: string }>()
  const project = getProjectBySlug(slug)

  if (!project) {
    return <Navigate to="/work" replace />
  }

  const currentIndex = projects.findIndex((p) => p.slug === project.slug)
  const previous = projects[(currentIndex - 1 + projects.length) % projects.length]
  const next = projects[(currentIndex + 1) % projects.length]

  return (
    <article>
      <section className="pb-10 pt-16 sm:pt-20">
        <div className="container-folio">
          <Link to="/work" className="link-arrow">
            <span className="arrow rotate-180" aria-hidden="true">→</span>
            All work
          </Link>

          <p className="eyebrow mt-8">{project.category}</p>
          <h1 className="mt-4 text-huge font-semibold">{project.title}</h1>
          <p className="mt-5 max-w-[60ch] text-[1.1rem] leading-relaxed text-ink-soft">
            {project.description}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href={project.demoPath}
              className="btn-primary"
            >
              View live project
            </a>
            <p className="text-xs text-ink-faint">{project.technologies.join(' · ')}</p>
          </div>
        </div>
      </section>

      <section className="container-folio">
        <div className="border border-line">
          <ScreenshotFrame src={project.screenshots.primary} alt={`${project.title} — primary screen`} priority />
        </div>
      </section>

      <section className="section-pad">
        <div className="container-folio grid gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="eyebrow">Objective</p>
            <p className="mt-5 text-[1.05rem] leading-relaxed text-ink-soft">{project.objective}</p>
          </div>
          <div>
            <p className="eyebrow">What was built</p>
            <p className="mt-5 text-[1.05rem] leading-relaxed text-ink-soft">{project.whatWasBuilt}</p>
          </div>
        </div>
      </section>

      <section className="border-t border-line">
        <div className="container-folio grid gap-1 py-1 sm:grid-cols-2">
          <div className="border border-line">
            <ScreenshotFrame src={project.screenshots.secondary} alt={`${project.title} — secondary screen`} />
          </div>
          <div className="border border-line">
            <ScreenshotFrame src={project.screenshots.interaction} alt={`${project.title} — interaction detail`} />
          </div>
        </div>
      </section>

      <section className="section-pad border-t border-line">
        <div className="container-folio grid gap-14 lg:grid-cols-[1fr_1fr_0.7fr] lg:gap-12">
          <div>
            <p className="eyebrow">Capabilities demonstrated</p>
            <ul className="mt-5 space-y-2">
              {project.capabilities.map((capability) => (
                <li key={capability} className="text-[0.98rem] text-ink-soft">
                  — {capability}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow">Technology</p>
            <ul className="mt-5 space-y-2">
              {project.technologies.map((tech) => (
                <li key={tech} className="text-[0.98rem] text-ink-soft">
                  — {tech}
                </li>
              ))}
            </ul>
          </div>

          <div className="mx-auto w-full max-w-[220px] border border-line lg:mx-0">
            <ScreenshotFrame src={project.screenshots.mobile} alt={`${project.title} — mobile view`} ratio="mobile" />
          </div>
        </div>
      </section>

      <ProjectNav previous={previous} next={next} />
    </article>
  )
}
