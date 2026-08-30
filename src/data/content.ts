// ---------------------------------------------------------------------------
// Built from Ammon Cookson's LinkedIn export (Aug 2026) and updated Aug 30
// 2026 from his current Word résumé. Numbers and role details are pulled
// straight from those documents. Review before publishing — especially
// `skillsMatrix.gaps`, which is a starting guess, not something I should be
// inventing on your behalf.
//
// Note: the Word résumé this was refreshed from doesn't mention the Pul
// Alliance / Global Child Nutrition work or the Generative AI-specific
// certifications — I kept both since you'd confirmed them separately and
// nothing here contradicts them, but worth double-checking they're still
// current and worded the way you want.
// ---------------------------------------------------------------------------

export const profile = {
  name: 'Ammon Cookson',
  title: 'Program Management Leader & AI Transformation Leader',
  tagline:
    'I take large, fragmented product organizations and turn them into disciplined, AI-fluent delivery engines.',
  eyebrow: 'Program & AI Transformation Leader · Salt Lake City',
  photo: `${import.meta.env.BASE_URL}headshot.jpg`,
  linkedin: 'https://www.linkedin.com/in/ammonc/',
  github: '', // no GitHub on file — Footer hides this link automatically when empty
  resumePdf: `${import.meta.env.BASE_URL}resume.pdf`, // TODO: add a PDF export at public/resume.pdf
  contactEmail: 'ammoncookson.ai@gmail.com',
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
    value: '20M rows → 11%',
    label: 'retention lift from a data platform built at Domo',
    detail: 'Architected a user-profiling system spanning 20M+ rows across 20 data sources; improved retention 11% and grew Education revenue.',
  },
  {
    value: '90 → 30 days',
    label: 'new-hire ramp time cut, at Domo',
    detail: 'Built a dedicated onboarding program covering BI, consulting, and project-management skills for 100+ consultants — cut ramp from 90 days to 30.',
  },
  {
    value: '$10M',
    label: 'revenue growth driven at GE Healthcare',
    detail: 'Co-authored patents and led development of cloud-based analytics products, driving $10M in revenue growth over three years.',
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
      'PMO Leader at Cisco since 2019. Set strategic direction for cross-functional product development across the contact center business, coached project leads on delivery, and drove the shift from on-prem to cloud discovery and delivery using SAFe 5.0 Agile principles. Built a Mixpanel-based usage telemetry system used by Product and CSM teams to inform feature investment and maximize retention.',
    tags: ['Program Management', 'Cloud Migration', 'SAFe 5.0'],
    linkLabel: 'Details on request',
  },
  {
    kind: 'Outcome',
    title: 'Built a 20-source customer analytics platform at Domo',
    description:
      'Designed the architecture to capture user events and profile ideal customers across 20M+ rows and 20 data sources. Became an early-warning system for account health, improving retention by 11% and growing Education revenue.',
    tags: ['SaaS Analytics', 'Retention', 'Data Platform'],
    linkLabel: 'Details on request',
  },
  {
    kind: 'Outcome',
    title: 'Cut program cycle times 25% with a self-designed "Project Hub," at Domo',
    description:
      'As Operations Program Manager, designed and built the Project Hub — a centralized system giving 100+ consultants time tracking, milestone planning, and scope management across 500+ concurrent projects for a $10M consulting organization. Cut implementation cycle times by 25%.',
    tags: ['Process Design', 'Systems Design', 'Consulting Ops'],
    linkLabel: 'Details on request',
  },
  {
    kind: 'Outcome',
    title: 'Delivered a 90% client retention rate against a 50% company average, at Domo',
    description:
      'As Principal Consultant, led end-to-end delivery of large-scale analytics engagements in social media, sales/marketing automation, financial planning, and operations for Fortune 500 clients including GE, NBC Universal, Warner Bros., and Apria Healthcare.',
    tags: ['Consulting', 'Client Delivery', 'Fortune 500'],
    linkLabel: 'Details on request',
  },
  {
    kind: 'Outcome',
    title: 'Delivered a real-time surveillance system to the CDC during H1N1',
    description:
      'At GE Healthcare, led engineering and operations for a cloud-based big data healthcare analytics platform. Built a safety and surveillance system that processed billions of data points and delivered reports to the CDC every 24 hours during the H1N1 outbreak — part of a broader run that drove $10M in revenue growth over three years through co-authored patents and new analytics products.',
    tags: ['Healthcare Analytics', 'Big Data', 'Public Health'],
    linkLabel: 'Details on request',
  },
  {
    kind: 'Outcome',
    title: 'Drove 3x growth for a real-estate client as Acting COO',
    description:
      'Alongside founding VenturoWest, served as Acting COO for Houser, Inc., executing a targeted product strategy using real-time data analytics to promote and drive sales of a custom software solution for the real estate industry.',
    tags: ['Acting COO', 'PropTech', 'Growth'],
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
    title: 'Program Management Leader',
    company: 'Cisco Systems',
    period: 'Aug 2019–Present',
    description:
      'Strategic direction for a 500+ person product development organization across a 12-product portfolio in Cisco’s contact center business. Coaches project leads on delivery best practices; drove the on-prem-to-cloud transformation using SAFe 5.0 Agile principles. Built a Mixpanel-based telemetry system used by Product and CSM teams to inform feature investment and maximize retention.',
    tags: ['Program Management', 'Cloud Migration', 'SAFe 5.0'],
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
    title: 'Founder (and Acting COO, client engagement)',
    company: 'VenturoWest, Inc.',
    period: 'Nov 2018–Aug 2019',
    description:
      'Built and deployed a software solution and consulting services in business strategy, operations, and information systems for the real estate industry, integrating an enhanced property-search feature based on lifestyle attributes for buyers and financial performance metrics for investors. As Acting COO for client Houser, Inc., executed a data-driven product strategy that achieved 3x growth.',
    tags: ['Founder', 'PropTech', 'Acting COO'],
  },
  {
    title: 'Program Manager, Domo University',
    company: 'Domo, Inc.',
    period: 'Mar 2016–Nov 2018',
    description:
      'Built a platform capturing key user events from 20 data sources to profile ideal users and flag declining usage trends, enabling proactive roadmaps and driving an 11% retention improvement. Developed and delivered training on project management, requirements solicitation, dashboard design, and data visualization, including internal education and onboarding programs that cut new-hire ramp from 90 to 30 days.',
    tags: ['SaaS', 'Data Platform', 'L&D'],
  },
  {
    title: 'Operations Program Manager',
    company: 'Domo, Inc.',
    period: 'Sep 2014–Mar 2016',
    description:
      'Drove product innovation in big data analytics and operational excellence for a 100-person, $10M consulting organization managing 500+ concurrent customer projects. Designed the "Project Hub" — a centralized system giving consultants time tracking, milestone planning, and scope management — cutting implementation cycle times by 25%.',
    tags: ['Consulting Ops', 'Process Design', 'Data Platform'],
  },
  {
    title: 'Principal Consultant',
    company: 'Domo, Inc.',
    period: 'Apr 2013–Aug 2014',
    description:
      'Led end-to-end execution of large-scale analytics projects in social media, sales/marketing automation, financial planning, and operations for Fortune 500 clients across media/advertising, transportation, and manufacturing, achieving a 90% retention rate against a 50% company average. Authored a patent supporting a healthcare client’s adoption of Domo.',
    tags: ['Consulting', 'Analytics', 'Fortune 500'],
  },
  {
    title: 'Vice President',
    company: 'Healthcare Quality Catalyst, LLC',
    period: 'May 2012–Jan 2013',
    description:
      'Delivered strategic and operational leadership to cross-functional teams in customer engagements, building processes for streamlined program portfolio management and service delivery.',
    tags: ['Healthcare', 'Portfolio Management'],
  },
  {
    title: 'GM, Engineering & Operations',
    company: 'GE Healthcare',
    period: 'Feb 2005–Feb 2012',
    description:
      'Directed product development, engineering, and operations for a portfolio of cloud-based big-data healthcare analytics products. Built a safety and surveillance system processing billions of data points, delivering a daily H1N1 report to the CDC. Piloted Lean methodologies across the global engineering organization. Co-authored patents and led development of new analytics products, driving $10M in revenue growth over three years.',
    tags: ['Healthcare Analytics', 'Big Data', 'Lean'],
  },
  {
    title: 'VP Product Development · Program/Product/R&D Manager',
    company: 'ProWorks & Sage Software',
    period: 'Prior to 2005',
    description:
      'VP of Product Development at ProWorks (Corvallis, OR); Program Manager, Product Manager, and R&D Manager roles at Sage Software (Beaverton, OR).',
    tags: ['Product Management', 'R&D'],
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

export const aiTransformation = {
  heading: 'AI & Digital Transformation',
  summary:
    'Five years of leading technology-driven organizational change at scale — most recently AI adoption — built on a track record of doing the same with cloud migration and data platforms before "AI transformation" was the industry\'s term for it.',
  points: [
    'Own Cisco\'s AI adoption and process-transformation mandate across a 4,000+ person contact center organization — current, active scope, not aspirational.',
    'Drove the prior large-scale change effort this depends on: the on-prem-to-cloud transformation of a 500+ engineer, 12-product portfolio, using SAFe 5.0 Agile principles.',
    'Architected a 20M-row, 20-source data platform at Domo — genuine data-pipeline fluency underneath the process leadership, not just familiarity with dashboards.',
    'Designed the onboarding system that cut new-hire ramp from 90 to 30 days — the same capability-building discipline that determines whether an AI rollout actually sticks.',
    'Formal AI credentialing in progress: AI Strategy Certificate, Generative AI Collaboration (2025), Data Science Green Belt.',
  ],
}

export const skillsMatrix = {
  superpowers: [
    'Large-scale program management (500+ person orgs, 500+ concurrent projects)',
    'Agile/Lean transformation (on-prem to cloud, SAFe 5.0, global Lean Champion training)',
    'Data platform architecture for business insight (20M-row, 20-source builds)',
    'Onboarding & L&D systems design (90 → 30 day ramp, capstone simulations)',
  ],
  competent: [
    'Hands-on technical fluency (BS Computer Information Systems; built and integrated systems directly at VenturoWest)',
    'Regulated / healthcare-industry delivery',
    'P&L and vendor management (Acting COO, Houser Inc.; GM, Engineering & Operations, GE Healthcare)',
  ],
  gaps: [
    'Hands-on IC software engineering — recent roles have focused on program management and driving organizational transformation, not day-to-day coding',
  ],
}

export const fitAssessmentIntro =
  'Paste a job description and Claude will assess it against my actual background — honestly, gaps included.'
