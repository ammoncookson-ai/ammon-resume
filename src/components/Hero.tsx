import { motion } from 'framer-motion'
import { profile, stats } from '../data/content'

export default function Hero() {
  return (
    <section id="top" className="mx-auto max-w-5xl px-6 pb-16 pt-16 text-center">
      <motion.img
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        src={profile.photo}
        alt={profile.name}
        className="mx-auto mb-6 h-20 w-20 rounded-full border border-white/10 object-cover"
        onError={(e) => ((e.target as HTMLImageElement).style.display = 'none')}
      />
      <p className="mb-3 text-sm uppercase tracking-widest text-muted">{profile.eyebrow}</p>
      <h1 className="font-display text-5xl sm:text-6xl">
        {profile.name}
        <span className="text-accent2">.</span>
      </h1>
      <p className="mx-auto mt-3 max-w-xl text-lg text-accent">{profile.title}</p>
      <p className="mx-auto mt-6 max-w-2xl text-xl leading-relaxed text-gray-200">{profile.tagline}</p>

      <div className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-3">
        {stats.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="rounded-2xl border border-white/5 bg-panel p-6 text-left"
          >
            <div className="font-display text-3xl text-accent2">{s.value}</div>
            <div className="mt-2 text-sm font-medium text-gray-200">{s.label}</div>
            <div className="mt-1 text-sm text-muted">{s.detail}</div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
