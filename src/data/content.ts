// ---------------------------------------------------------------------------
// Built from Ammon Cookson's LinkedIn export (Aug 2026). Numbers and role
// details are pulled straight from that document. Review before publishing —
// especially `skillsMatrix.gaps`, which is a starting guess, not something
// I should be inventing on your behalf.
// ---------------------------------------------------------------------------

export const profile = {
  name: 'Ammon Cookson',
  title: 'Program Management Leader & AI Transformation Leader',
  tagline:
    'I take large, fragmented product organizations and turn them into disciplined, AI-fluent delivery engines.',
  eyebrow: 'Program & AI Transformation Leader · Salt Lake City',
  photo: `${import.meta.env.BASE_URL}headshot.jpg`, // TODO: add your photo at public/headshot.jpg
  linkedin: 'https://www.linkedin.com/in/ammonc/',
  github: '', // no GitHub on file — Footer hides this link automatically when empty
  resumePdf: `${import.meta.env.BASE_URL}resume.pdf`, // TODO: add a PDF export at public/resume.pdf
  contactEmail: 'ammon.cookson@icloud.com',
}

export interface StatCard {
  value: string
  label: string
  detail: string
}

export const stats: StatCard[] = [
  {
    value: '4,000+',
    label: 'org reached by current AI adoption & change work',
    detail: 'PMO Leader at Cisco, driving enterprise AI adoption and process transformation across a 4,000+ person product organization.',
  },
  {
    value: '20M rows',
    label: 'data platform built from scratch, at Domo',
    detail: 'Architected a user-profiling system spanning 20 data sources (Domo, Adobe Analytics, GA, LMS) to flag at-risk accounts early and grow retention.',
  },
  {
    value: '90 → 30 days',
    label: 'new-hire ramp time cut, at Domo',
    detail: 'Built simulation-based onboarding; new consultants went from a 90-day ramp to billable work in 4 weeks.',
  },
  {
    value: '12 products',
    label: 'portfolio led inside Cisco contact center business',
    detail: 'Since 2019: strategic direction for a 500+ engineer org across 12 products, driving the on-prem-to-cloud transformation.',
  },
]

export interface WorkItem {
  kind: 'Outcome' | 'Writing'
  title: string
  description: string
  tags: string[]
  linkLabel: string
  linkHref?: string
}

export const work: WorkItem[] = [
  {
    kind: 'Outcome',
    title: 'Leading AI-driven transformation across a 500+ engineer, 12-product portfolio',
    description:
      'PMO Leader at Cisco since 2019. Set strategic direction for cross-functional product development across the contact center business, coached project leads on delivery, and drove the shift from on-prem to cloud discovery and delivery using LEAN Agile principles.',
    tags: ['Program Management', 'Cloud Migration', 'LEAN Agile'],
    linkLabel: 'Details on request',
  },
  {
    kind: 'Outcome',
    title: 'Built a 20-source customer analytics platform at Domo',
    description:
      'Designed the architecture to capture user events and profile ideal customers across 20M+ rows and 20 data sources. Became an early-warning system for account health, improving SaaS retention and expansion, and shaping the education product roadmap.',
    tags: ['SaaS Analytics', 'Retention', 'Data Platform'],
    linkLabel: 'Details on request',
  },
  {
    kind: 'Outcome',
    title: 'Cut new-hire onboarding from 90 days to 30, at Domo',
    description:
      'Built an immersive, simulation-based onboarding program for customer-facing CSMs and consultants. New hires were deployed on live customer projects within 4 weeks — a third of the previous timeline.',
    tags: ['L&D', 'Process Design', 'Scale'],
    linkLabel: 'Details on request',
  },
  {
    kind: 'Outcome',
    title: 'Delivered a real-time surveillance system to the CDC during H1N1',
    description:
      'At GE Healthcare, led engineering and operations for a cloud-based big data healthcare analytics platform. Built a safety and surveillance system that processed billions of data points and delivered reports to the CDC every 24 hours during the H1N1 outbreak.',
    tags: ['Healthcare Analytics', 'Big Data', 'Public Health'],
    linkLabel: 'Details on request',
  },
]

export interface ResumeRole {
  title: string
  company: string
  period: string
  description: string
  tags: string[]
}

export const resume: ResumeRole[] = [
  {
    title: 'PMO Leader',
    company: 'Cisco',
    period: '2019–Present',
    description:
      'Strategic direction for a 500+ person product development organization across a 12-product portfolio in Cisco’s contact center business. Coaches project leads on delivery best practices; drove the on-prem-to-cloud transformation using LEAN Agile principles.',
    tags: ['Program Management', 'Cloud Migration', 'LEAN Agile'],
  },
  {
    title: 'Technology Program & Execution Management',
    company: 'Pul Alliance for Digital Health and Equity',
    period: '2025–Present',
    description:
      'Directs operations for a nonprofit advancing digital health and equity — hospital IT, digital infrastructure, and child nutrition programs — building scalable systems for underserved communities.',
    tags: ['Nonprofit', 'Digital Health', 'Global'],
  },
  {
    title: 'Founder',
    company: 'VenturoWest Inc.',
    period: '2018–2019',
    description:
      'Built and deployed the operating infrastructure for a mortgage and real estate business, combining custom software with Domo, CINC, and Zillow to match buyers to homes on lifestyle fit and surface investor-grade financial metrics.',
    tags: ['Founder', 'PropTech', 'Program Management'],
  },
  {
    title: 'Program Manager → Consulting Manager → Principal Consultant',
    company: 'Domo, Inc.',
    period: '2013–2018',
    description:
      'Ran Domo University and led a 100-person consulting org across 500+ concurrent projects. Designed the internal Project Hub for time tracking and delivery metrics, and delivered SaaS analytics engagements for clients including GE and NBC.',
    tags: ['SaaS', 'Consulting', 'Data Platform'],
  },
  {
    title: 'VP → GM, Analytics & Quality',
    company: 'Healthcare Quality Catalyst / GE Healthcare',
    period: '2005–2013',
    description:
      'Led engineering and operations for a cloud-based big data healthcare analytics platform, and applied LEAN methodologies to hospital quality outcomes and patient safety. Global Lean Champion, training engineering teams on lean software development.',
    tags: ['Healthcare Analytics', 'Big Data', 'LEAN'],
  },
  {
    title: 'Program Manager',
    company: 'Timberline Software',
    period: '1997–2003',
    description:
      'Program and product management across Timberline’s Platform Services Group — the work later documented in the published case study "Lean Software Management: Timberline Inc."',
    tags: ['Program Management', 'Product Management'],
  },
]

export const skillsMatrix = {
  superpowers: [
    'Large-scale program management (500+ person orgs, 500+ concurrent projects)',
    'LEAN / Agile transformation (on-prem to cloud, global Lean Champion training)',
    'Data platform architecture for business insight (20M-row, 20-source builds)',
    'Onboarding & L&D systems design (90 → 30 day ramp, capstone simulations)',
  ],
  competent: [
    'Hands-on technical fluency (BS Computer Information Systems; built and integrated systems directly at VenturoWest)',
    'Regulated / healthcare-industry delivery',
  ],
  gaps: [
    'Hands-on IC software engineering — recent roles have focused on program management and driving organizational transformation, not day-to-day coding',
  ],
}

export const fitAssessmentIntro =
  'Paste a job description and Claude will assess it against my actual background — honestly, gaps included.'
