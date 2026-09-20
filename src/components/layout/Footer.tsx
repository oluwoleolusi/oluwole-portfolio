import { owner } from '../../data/site'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-line">
      <div className="container-folio flex flex-col gap-10 py-14 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-semibold text-ink">{owner.name}</p>
          <p className="mt-1 text-sm text-ink-soft">{owner.location}</p>
        </div>

        <div className="flex flex-col gap-1 sm:items-end">
          <a href={`mailto:${owner.email}`} className="text-sm text-ink hover:text-ink-soft">
            {owner.email}
          </a>
          <a href={owner.phoneHref} className="text-sm text-ink-soft hover:text-ink">
            {owner.phone}
          </a>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="container-folio py-5 text-xs text-ink-faint">
          &copy; {year} {owner.name}. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
