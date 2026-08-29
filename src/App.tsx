import Header from './components/Header'
import Hero from './components/Hero'
import WorkSection from './components/WorkSection'
import ResumeSection from './components/ResumeSection'
import SkillsSection from './components/SkillsSection'
import FitAssessment from './components/AskSection'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-ink">
      <Header />
      <main>
        <Hero />
        <WorkSection />
        <ResumeSection />
        <SkillsSection />
        {/* Fit-assessment only — see worker/index.ts for why the open-ended chat was cut. */}
        <FitAssessment />
      </main>
      <Footer />
    </div>
  )
}
