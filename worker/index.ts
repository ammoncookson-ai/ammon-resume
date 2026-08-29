// Cloudflare Worker — the only piece of this project that touches your Anthropic
// API key. The key is never sent to the browser; it lives only as a Cloudflare
// secret (set with `wrangler secret put ANTHROPIC_API_KEY`) and is read here
// via `env.ANTHROPIC_API_KEY`.
//
// Endpoint:
//   POST /api/chat   { message: string }  ->  { reply: string }
//
// Scope, deliberately: this does ONE thing — assess a pasted job description
// against your real background. No open-ended chat. That keeps the surface
// area small (nothing for a visitor to steer off-topic) and keeps the feature
// tightly matched to what it's actually for: a fit assessment, not a chatbot.
//
// Guardrails in place:
//   - CORS locked to ALLOWED_ORIGIN (set in wrangler.toml / dashboard vars)
//   - Fixed model — the client can never choose (or pay for) a different one
//   - Per-IP rate limiting (in-memory per isolate; see README for the KV upgrade)
//   - Message length cap, so nobody can send a 500KB prompt on your dollar

export interface Env {
  ANTHROPIC_API_KEY: string
  ALLOWED_ORIGIN: string // e.g. "https://yourdomain.com"
}

const MODEL = 'claude-haiku-4-5-20251001' // cheap + fast; change deliberately, not per-request
const MAX_MESSAGE_CHARS = 4000
const RATE_LIMIT = 20 // requests
const RATE_WINDOW_MS = 60_000 // per 60s, per IP

// Resets whenever the Worker's isolate recycles. Good enough for a portfolio
// site's traffic; if you outgrow it, swap this Map for Cloudflare KV or a
// Durable Object (README has notes).
const hits = new Map<string, number[]>()

function rateLimited(ip: string): boolean {
  const now = Date.now()
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < RATE_WINDOW_MS)
  recent.push(now)
  hits.set(ip, recent)
  return recent.length > RATE_LIMIT
}

const SYSTEM_FIT = `You assess how well a job description matches a specific person's real
background, given below. Be honest, including about gaps — a fit assessment
that never finds a gap isn't credible. Structure your answer as: (1) a one-line
verdict, (2) 2-4 genuine strengths, (3) 1-3 honest gaps or open questions,
(4) one closing sentence.

--- BACKGROUND ---
Ammon Cookson — Program Management Leader & AI Transformation Leader.
Based in Salt Lake City. 25+ years of experience.

CURRENT ROLE
PMO Leader, Cisco (2019–Present). Strategic direction for a 500+ person
product development organization across a 12-product portfolio in Cisco's
contact center business. Coaches project leads on delivery best practices;
drove the on-prem-to-cloud transformation using LEAN Agile principles.
Enterprise AI adoption and change work reaches a 4,000+ person org.

CONCURRENT / RECENT
- Technology Program & Execution Management, Pul Alliance for Digital Health
  and Equity (2025–Present): directs nonprofit operations in hospital IT,
  digital infrastructure, and child nutrition for underserved communities.
- Strategic Advisor, Global Child Nutrition Effort (2024–Present).

CAREER HISTORY
- Founder, VenturoWest Inc. (2018–2019): built operating infrastructure for a
  mortgage/real-estate business, integrating custom software with Domo,
  CINC, and Zillow.
- Program Manager → Consulting Manager → Principal Consultant, Domo, Inc.
  (2013–2018): ran Domo University; led a 100-person consulting org across
  500+ concurrent projects; architected a user-profiling analytics platform
  spanning 20M+ rows across 20 data sources (Domo, Adobe Analytics, Google
  Analytics, LMS) used as an early-warning system for account health; built
  simulation-based onboarding that cut new-hire ramp time from 90 days to 30;
  delivered SaaS analytics engagements for clients including GE and NBC.
- VP, Healthcare Quality Catalyst, LLC (2012–2013): applied LEAN methodologies
  to hospital quality outcomes, resource utilization, and patient safety.
- GM Product/Engineering/Operations & Lead Program Integrator, GE Healthcare
  (2005–2013): led engineering and operations for a cloud-based big data
  healthcare analytics platform; built a safety/surveillance system that
  processed billions of data points and delivered reports to the CDC every
  24 hours during the H1N1 outbreak; served as global Lean Champion training
  engineering teams on lean software development.
- Program Manager, Timberline Software (1997–2003): program and product
  management for the Platform Services Group — later documented in the
  published case study "Lean Software Management: Timberline Inc."

EDUCATION
- MBA, Entrepreneurship — F.W. Olin Graduate School of Business (2007–2009)
- Executive Course, Strategic Innovation — MIT Sloan School of Management (2007)
- BS, Computer Information Systems — Western Governors University (2002–2004)

CERTIFICATIONS (recent, AI-focused)
Generative AI Collaboration White Belt (2025), AI Strategy Certificate,
Data Science Green Belt (incl. Generative AI Green Belt), ICAgile Certified
Professional - Leading with Agility.

PATENTS: Generalized configurator software system; Systems and methods for
patient re-identification.

SKILLS
Superpowers: large-scale program management (500+ person orgs, 500+
concurrent projects); LEAN/Agile transformation (on-prem to cloud, global
Lean Champion training); data platform architecture for business insight
(20M-row, 20-source builds); onboarding & L&D systems design.
Competent: hands-on technical fluency (BS in Computer Information Systems;
built/integrated systems directly at VenturoWest); regulated/healthcare
industry delivery.
Honest gap: hands-on IC software engineering — recent roles have focused on
program management and driving organizational transformation, not day-to-day
coding.
--- END BACKGROUND ---`

function corsHeaders(origin: string) {
  return {
    'Access-Control-Allow-Origin': origin,
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    Vary: 'Origin',
  }
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const origin = env.ALLOWED_ORIGIN || ''
    const headers = corsHeaders(origin)

    if (request.method === 'OPTIONS') {
      return new Response(null, { headers })
    }

    const url = new URL(request.url)
    if (url.pathname !== '/api/chat' || request.method !== 'POST') {
      return new Response('Not found', { status: 404, headers })
    }

    const requestOrigin = request.headers.get('Origin')
    if (origin && requestOrigin !== origin) {
      return new Response('Forbidden origin', { status: 403, headers })
    }

    const ip = request.headers.get('CF-Connecting-IP') ?? 'unknown'
    if (rateLimited(ip)) {
      return new Response(JSON.stringify({ error: 'Too many requests. Try again in a minute.' }), {
        status: 429,
        headers: { ...headers, 'Content-Type': 'application/json' },
      })
    }

    let body: { message?: string }
    try {
      body = await request.json()
    } catch {
      return new Response(JSON.stringify({ error: 'Invalid JSON body.' }), {
        status: 400,
        headers: { ...headers, 'Content-Type': 'application/json' },
      })
    }

    const message = (body.message ?? '').toString().slice(0, MAX_MESSAGE_CHARS)
    if (!message.trim()) {
      return new Response(JSON.stringify({ error: 'Message is empty.' }), {
        status: 400,
        headers: { ...headers, 'Content-Type': 'application/json' },
      })
    }

    try {
      const anthropicRes = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': env.ANTHROPIC_API_KEY,
          'anthropic-version': '2023-06-01',
        },
        body: JSON.stringify({
          model: MODEL,
          max_tokens: 600,
          system: SYSTEM_FIT,
          messages: [{ role: 'user', content: message }],
        }),
      })

      if (!anthropicRes.ok) {
        const detail = await anthropicRes.text().catch(() => '')
        return new Response(
          JSON.stringify({ error: `Upstream error (${anthropicRes.status}).`, detail: detail.slice(0, 300) }),
          { status: 502, headers: { ...headers, 'Content-Type': 'application/json' } },
        )
      }

      const data = (await anthropicRes.json()) as {
        content?: { type: string; text?: string }[]
      }
      const reply = data.content?.find((b) => b.type === 'text')?.text ?? 'No response.'

      return new Response(JSON.stringify({ reply }), {
        headers: { ...headers, 'Content-Type': 'application/json' },
      })
    } catch (err) {
      return new Response(JSON.stringify({ error: 'Failed to reach Claude.' }), {
        status: 502,
        headers: { ...headers, 'Content-Type': 'application/json' },
      })
    }
  },
}
