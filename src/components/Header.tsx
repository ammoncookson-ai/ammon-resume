import { profile } from '../data/content'

const links = [
  { href: '#work', label: 'Work' },
  { href: '#resume', label: 'Resume' },
  { href: '#skills', label: 'Skills' },
  { href: '#fit', label: 'Fit check' },
]

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-ink/80 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-2 font-display text-lg">
          <span className="h-2 w-2 rounded-full bg-accent2" />
          {profile.name}
        </a>
        <nav className="hidden gap-6 text-sm text-muted sm:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="transition hover:text-white">
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a
            href={profile.resumePdf}
            download
            className="hidden rounded-full border border-white/10 px-4 py-2 text-sm transition hover:border-white/30 sm:block"
          >
            Résumé
          </a>
          <a
            href={`mailto:${profile.contactEmail}`}
            className="rounded-full bg-accent px-4 py-2 text-sm font-medium text-ink transition hover:brightness-110"
          >
            Contact
          </a>
        </div>
      </div>
    </header>
  )
}
