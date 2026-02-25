import ExperienceSection from '@/components/home/ExperienceSection'
import ProjectsSection from '@/components/home/ProjectsSection'

export default function ProjectsPage() {
  return (
    <div style={{ backgroundColor: 'transparent' }} className="min-h-screen">
      <div className="section-container">
        <div className="mb-4">
          <h1 className="text-4xl font-bold mb-4 font-mono" style={{ color: '#00ff41' }}>Experience & Projects</h1>
          <p className="text-text-secondary text-lg max-w-3xl">
            My professional journey building scalable backend systems and the side projects I&apos;ve shipped.
          </p>
        </div>
      </div>
      <ExperienceSection />
      <ProjectsSection />
    </div>
  )
}
