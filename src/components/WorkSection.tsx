import Section from './Section'
import { work } from '../data/content'

export default function WorkSection() {
  return (
    <Section
      id="work"
      title="Selected work"
      subtitle="Proof, not adjectives — outcomes you can check and the thinking behind them."
    >
      <div className="grid gap-4 sm:grid-cols-2">
        {work.map((item, i) => (
          <div key={i} className="flex flex-col rounded-2xl border border-white/5 bg-panel p-6">
            <span className="text-xs font-medium uppercase tracking-wide text-accent">{item.kind}</span>
            <h3 className="mt-2 text-lg font-semibold text-gray-100">{item.title}</h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{item.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {item.tags.map((t) => (
                <span key={t} className="rounded-full bg-panel2 px-3 py-1 text-xs text-muted">
                  {t}
                </span>
              ))}
            </div>
            {item.linkHref ? (
              <a href={item.linkHref} className="mt-4 text-sm font-medium text-accent hover:underline">
                {item.linkLabel} →
              </a>
            ) : (
              <span className="mt-4 text-sm text-muted">{item.linkLabel}</span>
            )}
          </div>
        ))}
      </div>
    </Section>
  )
}
