import HeroSection from '@/components/home/HeroSection'
import SystemBackground from '@/components/home/SystemBackground'

export default function Home() {
  return (
    <div className="relative h-screen overflow-hidden">
      <SystemBackground density="high" />
      <div className="relative z-10 h-full flex items-center justify-center">
        <HeroSection />
      </div>
    </div>
  )
}
