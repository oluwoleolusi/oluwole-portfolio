import { projects } from '../data/projects'
import ProjectRow from '../components/project/ProjectRow'

export default function Work() {
  return (
    <section className="section-pad">
      <div className="container-folio">
        <div className="max-w-2xl border-b border-line pb-12">
          <p className="eyebrow">Work</p>
          <h1 className="mt-4 text-huge font-semibold">Four projects, four categories.</h1>
          <p className="mt-5 text-[1.05rem] leading-relaxed text-ink-soft">
            Hospitality, e-commerce, creative branding, and SaaS product
            design — each built as a complete, working frontend rather than
            a static mockup.
          </p>
        </div>

        {projects.map((project, index) => (
          <ProjectRow key={project.slug} project={project} index={index} detailed />
        ))}
      </div>
    </section>
  )
}
