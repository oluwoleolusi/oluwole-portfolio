import { owner } from '../data/site'
import ContactForm from '../components/ui/ContactForm'

export default function Contact() {
  return (
    <section className="section-pad">
      <div className="container-folio grid gap-16 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
        <div>
          <p className="eyebrow">Contact</p>
          <h1 className="mt-4 max-w-[14ch] text-huge font-semibold">
            Have something worth building?
          </h1>
          <p className="mt-6 max-w-[42ch] text-[1.05rem] leading-relaxed text-ink-soft">
            Send a note with a bit about the project and I’ll get back to
            you.
          </p>

          <div className="mt-12 space-y-6 border-t border-line pt-8">
            <div>
              <p className="field-label">Email</p>
              <a
                href={`mailto:${owner.email}`}
                className="mt-2 block text-lg text-ink hover:text-ink-soft"
              >
                {owner.email}
              </a>
            </div>
            <div>
              <p className="field-label">Phone</p>
              <a href={owner.phoneHref} className="mt-2 block text-lg text-ink hover:text-ink-soft">
                {owner.phone}
              </a>
            </div>
            <div>
              <p className="field-label">Location</p>
              <p className="mt-2 text-lg text-ink">{owner.location}</p>
            </div>
          </div>
        </div>

        <div>
          <ContactForm />
        </div>
      </div>
    </section>
  )
}
