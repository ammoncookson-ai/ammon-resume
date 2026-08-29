import Section from './Section'
import { resume } from '../data/content'

export default function ResumeSection() {
  return (
    <Section id="resume" title="The deep résumé">
      <div className="space-y-6 border-l border-white/10 pl-6">
        {resume.map((r, i) => (
          <div key={i} className="relative">
            <span className="absolute -left-[29px] top-1.5 h-2.5 w-2.5 rounded-full bg-accent2" />
            <div className="flex flex-wrap items-baseline justify-between gap-x-4">
              <h3 className="text-lg font-semibold text-gray-100">
                {r.title} <span className="text-muted">@ {r.company}</span>
              </h3>
              <span className="font-mono text-xs text-muted">{r.period}</span>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-muted">{r.description}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {r.tags.map((t) => (
                <span key={t} className="rounded-full bg-panel2 px-3 py-1 text-xs text-muted">
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
