import { profile } from '../data/content'

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-10">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 px-6 text-sm text-muted sm:flex-row sm:justify-between">
        <span>
          © {new Date().getFullYear()} {profile.name}
        </span>
        <div className="flex gap-5">
          <a href={profile.resumePdf} download className="hover:text-white">
            Résumé (PDF)
          </a>
          <a href={profile.linkedin} className="hover:text-white">
            LinkedIn
          </a>
          {profile.github && (
            <a href={profile.github} className="hover:text-white">
              GitHub
            </a>
          )}
        </div>
      </div>
    </footer>
  )
}
