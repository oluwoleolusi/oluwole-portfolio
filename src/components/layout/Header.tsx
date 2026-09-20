import { useEffect, useState } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { navLinks, owner } from '../../data/site'

export default function Header() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    if (!open) return

    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        setOpen(false)
      }
    }

    window.addEventListener('keydown', onKey)

    return () => {
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `text-[0.8rem] uppercase tracking-wideish transition-colors duration-200 hover:text-ink ${
      isActive ? 'text-ink' : 'text-ink-soft'
    }`

  return (
    <>
      <header
        className={`sticky top-0 ${
          open ? 'z-[70]' : 'z-50'
        } border-b border-line bg-paper/95 backdrop-blur`}
      >
        <a
          href="#main"
          className="absolute left-4 top-2 -translate-y-16 bg-ink px-4 py-2 text-paper transition-transform focus:translate-y-0"
        >
          Skip to content
        </a>

        <nav className="container-folio flex h-20 items-center justify-between">
          <Link
            to="/"
            className="text-[0.95rem] font-semibold tracking-tightish text-ink"
          >
            Oluwole Olusi
          </Link>

          <div className="hidden items-center gap-9 md:flex">
            {navLinks.map((link) => (
              <NavLink key={link.to} to={link.to} className={linkClass}>
                {link.label}
              </NavLink>
            ))}
          </div>

          <button
            type="button"
            className="relative z-[80] flex flex-col gap-1.5 p-2 md:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            <span
              className={`block h-px w-6 bg-ink transition-transform duration-300 ${
                open ? 'translate-y-[3.5px] rotate-45' : ''
              }`}
            />
            <span
              className={`block h-px w-6 bg-ink transition-transform duration-300 ${
                open ? '-translate-y-[3.5px] -rotate-45' : ''
              }`}
            />
          </button>
        </nav>
      </header>

      <div
        id="mobile-nav"
        className={`fixed inset-0 z-[60] bg-paper transition-opacity duration-300 ease-folio md:hidden ${
          open
            ? 'pointer-events-auto opacity-100'
            : 'pointer-events-none opacity-0'
        }`}
      >
        <div className="container-folio flex h-full flex-col justify-center gap-7 pb-20">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className="text-4xl font-semibold tracking-tightish text-ink"
            >
              {link.label}
            </NavLink>
          ))}

          <a
            href={`mailto:${owner.email}`}
            className="mt-4 text-sm text-ink-soft"
          >
            {owner.email}
          </a>
        </div>
      </div>
    </>
  )
}