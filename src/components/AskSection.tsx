import { useState } from 'react'
import Section from './Section'
import { fitAssessmentIntro } from '../data/content'

const API_BASE = import.meta.env.VITE_API_BASE || 'http://127.0.0.1:8787'

export default function FitAssessment() {
  const [input, setInput] = useState('')
  const [reply, setReply] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function submit() {
    if (!input.trim() || loading) return
    setLoading(true)
    setError(null)
    setReply(null)
    try {
      const res = await fetch(`${API_BASE}/api/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input }),
      })
      if (!res.ok) {
        const body = await res.text().catch(() => '')
        throw new Error(`Request failed (${res.status}). ${body}`.trim())
      }
      const data = (await res.json()) as { reply?: string }
      setReply(data.reply ?? 'No response received.')
    } catch (e) {
      setError(
        e instanceof Error
          ? `${e.message} — is the Worker deployed and VITE_API_BASE set correctly?`
          : 'Something went wrong.',
      )
    } finally {
      setLoading(false)
    }
  }

  return (
    <Section id="fit" title="The fit assessment" subtitle={fitAssessmentIntro}>
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Paste a job description…"
        rows={8}
        className="w-full rounded-2xl border border-white/10 bg-panel p-4 text-sm text-gray-100 placeholder:text-muted focus:border-accent focus:outline-none"
      />

      <div className="mt-3 flex items-center justify-between">
        <span className="font-mono text-xs text-muted">{input.length} chars</span>
        <button
          onClick={submit}
          disabled={loading || !input.trim()}
          className="rounded-full bg-accent px-5 py-2 text-sm font-medium text-ink transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-40"
        >
          {loading ? 'Analyzing…' : 'Analyze fit'}
        </button>
      </div>

      {error && (
        <p className="mt-4 rounded-xl border border-rose-500/30 bg-rose-500/10 p-4 text-sm text-rose-300">
          {error}
        </p>
      )}
      {reply && (
        <div className="mt-4 whitespace-pre-wrap rounded-xl border border-white/10 bg-panel2 p-5 text-sm leading-relaxed text-gray-100">
          {reply}
        </div>
      )}
    </Section>
  )
}
