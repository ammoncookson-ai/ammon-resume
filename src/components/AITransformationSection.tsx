import Section from './Section'
import { aiTransformation } from '../data/content'

export default function AITransformationSection() {
  return (
    <Section id="ai-transformation" title={aiTransformation.heading} subtitle={aiTransformation.summary}>
      <div className="rounded-2xl border border-white/5 bg-panel p-6">
        <ul className="space-y-3 text-sm leading-relaxed text-muted">
          {aiTransformation.points.map((point, i) => (
            <li key={i} className="flex gap-3">
              <span className="mt-1 text-accent">&#8594;</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}
