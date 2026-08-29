import Section from './Section'
import { skillsMatrix } from '../data/content'

function Column({ title, items, tone }: { title: string; items: string[]; tone: string }) {
  return (
    <div className="rounded-2xl border border-white/5 bg-panel p-6">
      <h3 className={`text-sm font-semibold uppercase tracking-wide ${tone}`}>{title}</h3>
      <ul className="mt-4 space-y-2 text-sm text-muted">
        {items.map((it) => (
          <li key={it}>{it}</li>
        ))}
      </ul>
    </div>
  )
}

export default function SkillsSection() {
  return (
    <Section
      id="skills"
      title="The honest skills matrix"
      subtitle="Including the gaps — that's what makes the rest of it credible."
    >
      <div className="grid gap-4 sm:grid-cols-3">
        <Column title="Superpowers" items={skillsMatrix.superpowers} tone="text-accent2" />
        <Column title="Competent" items={skillsMatrix.competent} tone="text-gray-300" />
        <Column title="Strategic gaps" items={skillsMatrix.gaps} tone="text-rose-400" />
      </div>
    </Section>
  )
}
