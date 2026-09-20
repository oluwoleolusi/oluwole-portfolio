import { Link } from 'react-router-dom'
import type { Project } from '../../types'
import ScreenshotFrame from '../ui/ScreenshotFrame'

interface Props {
  project: Project
  index: number
  detailed?: boolean
}

export default function ProjectRow({ project, index, detailed = false }: Props) {
  const reversed = index % 2 === 1

  return (
    <div className="border-b border-line py-14 sm:py-16">
      <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
        <Link
          to={`/work/${project.slug}`}
          aria-label={`View the ${project.title} case study`}
          className={`group block lg:col-span-7 ${reversed ? 'lg:order-2' : ''}`}
        >
          <div className="overflow-hidden border border-line">
            <ScreenshotFrame
              src={project.preview}
              alt={`${project.title} preview`}
              className="transition-transform duration-500 ease-folio group-hover:scale-[1.015]"
            />
          </div>
        </Link>

        <div className={`flex flex-col justify-center lg:col-span-5 ${reversed ? 'lg:order-1' : ''}`}>
          <span className="font-mono text-xs text-ink-faint">{String(index + 1).padStart(2, '0')}</span>
          <p className="eyebrow mt-3">{project.category}</p>
          <h3 className="mt-3 text-3xl leading-[1.1] tracking-tightish sm:text-4xl">
            <Link to={`/work/${project.slug}`} className="hover:text-ink-soft">
              {project.title}
            </Link>
          </h3>
          <p className="mt-4 max-w-[46ch] text-[1.02rem] leading-relaxed text-ink-soft">
            {project.description}
          </p>
          <p className="mt-4 text-xs text-ink-faint">{project.technologies.join(' · ')}</p>

          {detailed && (
            <ul className="mt-5 space-y-1.5">
              {project.capabilities.slice(0, 4).map((capability) => (
                <li key={capability} className="text-sm text-ink-soft">
                  — {capability}
                </li>
              ))}
            </ul>
          )}

          <div className="mt-6 flex flex-wrap items-center gap-6">
            <Link to={`/work/${project.slug}`} className="link-arrow">
              View case study
              <span className="arrow" aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
