import { Link } from 'react-router-dom'
import { technicalSkills, designSkills } from '../data/skills'
import { services } from '../data/services'
import { owner } from '../data/site'

export default function About() {
  return (
    <>
      <section className="section-pad border-b border-line">
        <div className="container-folio grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:gap-16">
          <div>
            <p className="eyebrow">About</p>
            <h1 className="mt-4 max-w-[16ch] text-huge font-semibold">
              Curiosity first. Everything else followed.
            </h1>
          </div>
          <div className="flex flex-col gap-8">
            <p className="max-w-[52ch] text-[1.05rem] leading-relaxed text-ink-soft lg:mt-auto">
              I’m a full-stack developer based in {owner.location}, working
              across frontend, backend, and UI/graphic design. I got into
              development as a kid, out of curiosity rather than a plan —
              and that’s still mostly how I approach it.
            </p>
            <img
              src="/images/oluwole-olusi.jpg"
              alt="Oluwole Olusi"
              className="aspect-square w-full max-w-[28rem] object-cover object-center"
            />
          </div>
        </div>
      </section>

      <section className="section-pad border-b border-line">
        <div className="container-folio grid gap-10 lg:grid-cols-2 lg:gap-16">
          <p className="eyebrow">The story</p>
          <div className="max-w-[58ch] space-y-5">
            <p className="text-[1.05rem] leading-relaxed text-ink-soft">
              There wasn’t a career plan behind any of this. I started
              experimenting with computers young, mostly because I liked
              taking things apart to see how they worked, and web
              development turned out to be the thing that stuck. Most of
              what I know came from building things independently — trying
              something, breaking it, and figuring out why.
            </p>
            <p className="text-[1.05rem] leading-relaxed text-ink-soft">
              Graphic design came in alongside that, initially as a practical
              skill rather than an artistic pursuit. Over time it became
              clear the two weren’t really separate — understanding
              composition, hierarchy, and typography made my development
              work better, and building real interfaces made my design
              instincts sharper. I’ve worked on both sides ever since,
              usually on the same project at the same time.
            </p>
          </div>
        </div>
      </section>

      <section className="section-pad border-b border-line">
        <div className="container-folio grid gap-14 lg:grid-cols-2 lg:gap-20">
          {services.map((group) => (
            <div key={group.group}>
              <p className="eyebrow">{group.group}</p>
              <p className="mt-6 text-[1.05rem] leading-relaxed text-ink-soft">
                {group.items.join(' · ')}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-pad border-b border-line">
        <div className="container-folio grid gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="eyebrow">Technical skills</p>
            <div className="mt-6 space-y-6">
              {technicalSkills.map((group) => (
                <div key={group.tier}>
                  <p className="text-sm font-medium text-ink">{group.tier}</p>
                  <p className="mt-2 text-[0.98rem] leading-relaxed text-ink-soft">
                    {group.items.join(' · ')}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="eyebrow">Design skills</p>
            <p className="mt-6 text-[0.98rem] leading-relaxed text-ink-soft">
              {designSkills.join(' · ')}
            </p>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-folio max-w-2xl">
          <p className="eyebrow">Based in {owner.location}</p>
          <p className="mt-4 text-2xl leading-[1.5] tracking-tightish sm:text-3xl">
            Have something worth building?
          </p>
          <Link to="/contact" className="btn-primary mt-7">
            Start a project
          </Link>
          <div className="mt-10">
            <p className="text-sm text-ink-soft">
              More of my work lives on GitHub.
            </p>
            <a
              href="https://github.com/oluwoleolusi"
              target="_blank"
              rel="noopener noreferrer"
              className="link-arrow mt-3"
            >
              Browse my repositories ↗
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
