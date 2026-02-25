import HeroSection from '@/components/home/HeroSection'
import SystemBackground from '@/components/home/SystemBackground'

export default function Home() {
  return (
    <div className="relative">
      <SystemBackground density="high" />
      <div className="relative z-10">
        <HeroSection />
        <div className="max-w-4xl mx-auto px-6 pb-32 text-center">
          <p className="text-slate-400 text-sm tracking-wide">
            Currently building scalable backend systems and exploring AI infrastructure.
          </p>
        </div>
      </div>
    </div>
  )
}
