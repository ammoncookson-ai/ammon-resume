import { ReactNode } from 'react'

export default function Section({
  id,
  title,
  subtitle,
  children,
}: {
  id: string
  title: string
  subtitle?: string
  children: ReactNode
}) {
  return (
    <section id={id} className="mx-auto max-w-5xl px-6 py-16">
      <h2 className="font-display text-3xl">{title}</h2>
      {subtitle && <p className="mt-3 max-w-2xl text-muted">{subtitle}</p>}
      <div className="mt-10">{children}</div>
    </section>
  )
}
