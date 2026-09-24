import { Link } from 'react-router-dom'
import { projects } from '../data/projects'
import { owner } from '../data/site'
import ProjectRow from '../components/project/ProjectRow'

export default function Home() {
  return (
    <>
      <section className="section-pad">
        <div className="container-folio grid items-center gap-12 lg:grid-cols-[1fr_0.78fr] lg:gap-16">
          <div>
            <p className="eyebrow">{owner.title} — {owner.location}</p>
            <h1 className="mt-5 max-w-[18ch] text-mega font-semibold">
              Design and code, handled by the same person.
            </h1>
            <p className="mt-7 max-w-[56ch] text-lg leading-relaxed text-ink-soft sm:text-xl">
              I build websites and web applications end to end — from the
              interface down to the code that runs it. Four projects below
              cover hospitality, e-commerce, branding, and product design.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link to="/work" className="btn-primary">
                View my work
              </Link>
              <Link to="/contact" className="btn-secondary">
                Start a project
              </Link>
            </div>
          </div>
          <img
            src="/images/oluwole-olusi.jpg"
            alt="Oluwole Olusi"
            className="aspect-square w-full object-cover object-center md:max-w-[28rem] md:justify-self-start lg:max-w-none"
          />
        </div>
      </section>

      <section className="border-t border-line">
        <div className="container-folio pt-4">
          <p className="eyebrow pt-10">Selected work</p>
          {projects.map((project, index) => (
            <ProjectRow key={project.slug} project={project} index={index} />
          ))}
        </div>
      </section>

      <section className="section-pad border-t border-line">
        <div className="container-folio grid gap-10 lg:grid-cols-2 lg:gap-16">
          <h2 className="text-3xl leading-[1.15] tracking-tightish sm:text-4xl">
            Comfortable on both sides of the interface.
          </h2>
          <p className="max-w-[52ch] text-[1.05rem] leading-relaxed text-ink-soft">
            I got into this through curiosity rather than a career plan, and
            picked up graphic design along the way as a practical skill. The
            two ended up feeding each other — understanding composition and
            typography changed how I approach building things, and building
            things changed how I think about design.
          </p>
        </div>
        <div className="container-folio mt-8">
          <Link to="/about" className="link-arrow">
            More about how I work
            <span className="arrow" aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </>
  )
}
