import { Link } from 'react-router-dom'
import type { Project } from '../../types'

interface Props {
  previous: Project
  next: Project
}

export default function ProjectNav({ previous, next }: Props) {
  return (
    <div className="grid border-t border-line sm:grid-cols-2">
      <Link
        to={`/work/${previous.slug}`}
        className="group border-b border-line px-6 py-10 transition-colors hover:bg-paper sm:border-b-0 sm:border-r sm:px-10"
      >
        <p className="eyebrow">Previous</p>
        <p className="mt-3 text-2xl tracking-tightish transition-colors group-hover:text-ink-soft sm:text-3xl">
          {previous.title}
        </p>
      </Link>
      <Link
        to={`/work/${next.slug}`}
        className="group px-6 py-10 text-right transition-colors hover:bg-paper sm:px-10"
      >
        <p className="eyebrow">Next</p>
        <p className="mt-3 text-2xl tracking-tightish transition-colors group-hover:text-ink-soft sm:text-3xl">
          {next.title}
        </p>
      </Link>
    </div>
  )
}
