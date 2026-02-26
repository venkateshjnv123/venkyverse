import Image from 'next/image'
import SystemBackground from '@/components/home/SystemBackground'
import Footer from '@/components/Footer'

export default function AboutPage() {
  const techSystems = [
    {
      category: 'Languages & Runtime',
      items: 'Java (Spring Boot), Node.js'
    },
    {
      category: 'Data & Messaging',
      items: 'PostgreSQL, Redis, MongoDB, RabbitMQ'
    },
    {
      category: 'Architecture & Design',
      items: 'REST, GraphQL, Microservices, System Design'
    },
    {
      category: 'Automation & DevOps',
      items: 'Selenium, Jenkins, API Automation'
    }
  ]

  return (
    <>
    <div className="relative">
      <SystemBackground density="medium" />
      
      <div className="relative z-10 max-w-5xl mx-auto px-6">
        
        {/* Section 01 - Who I Am */}
        <section className="py-20">
          <div className="flex items-baseline gap-6 mb-12">
            <span className="text-emerald-400/60 text-sm font-mono tracking-widest uppercase">01</span>
            <h1 className="text-4xl font-bold text-slate-100">Who Am I</h1>
          </div>
          
          <div className="grid md:grid-cols-[1fr_auto] gap-12 items-center">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-emerald-400 mt-2 shrink-0" />
                <p className="text-slate-400 leading-relaxed">
                  I design and scale backend systems. From API architecture to distributed services, I focus on reliability, performance, and long-term maintainability.
                </p>
              </div>
              
              <div className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-emerald-400 mt-2 shrink-0" />
                <p className="text-slate-400 leading-relaxed">
                  I graduated from Indian Institute of Technology, Jodhpur (Mechanical Engineering). My engineering foundation shaped how I think about systems — structured, efficient, and built to last.
                </p>
              </div>
              
              <div className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-emerald-400 mt-2 shrink-0" />
                <p className="text-slate-400 leading-relaxed">
                  I&apos;ve worked on payment systems, automation frameworks, and enterprise backend architectures.
                </p>
              </div>
            </div>

            <div className="flex justify-center md:justify-end">
              <div className="relative group">
                <Image
                  src="/venkyimg.png"
                  alt="Venkatesh Patnala"
                  width={280}
                  height={340}
                  className="max-w-sm rounded-lg border border-emerald-400/20 shadow-lg shadow-black/30 transition-transform duration-300 ease-in-out group-hover:scale-105"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Section 02 - Systems I Work With */}
        <section className="py-20">
          <div className="flex items-baseline gap-6 mb-12">
            <span className="text-emerald-400/60 text-sm font-mono tracking-widest uppercase">02</span>
            <h2 className="text-4xl font-bold text-slate-100">Systems I Work With</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {techSystems.map((system, index) => (
              <div key={index} className="border border-slate-800 rounded-lg p-6 bg-slate-900/20">
                <h3 className="text-sm font-medium text-slate-300 mb-3 tracking-wide">{system.category}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{system.items}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 03 - Toward AI Systems */}
        <section className="py-20">
          <div className="flex items-baseline gap-6 mb-12">
            <span className="text-emerald-400/60 text-sm font-mono tracking-widest uppercase">03</span>
            <h2 className="text-4xl font-bold text-slate-100">Toward AI Systems</h2>
          </div>

          <div className="space-y-4 max-w-3xl mx-auto">
            <div className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-emerald-400 mt-2 shrink-0" />
              <p className="text-slate-400 leading-relaxed">
                I&apos;m exploring how backend systems intersect with AI infrastructure — model serving, orchestration layers, and the infrastructure that makes AI products reliable at scale.
              </p>
            </div>
            
            <div className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-emerald-400 mt-2 shrink-0" />
              <p className="text-slate-400 leading-relaxed">
                The shift from traditional backend to AI-forward systems requires rethinking latency constraints, cost optimization, and service boundaries. I&apos;m building toward that intersection.
              </p>
            </div>
          </div>
        </section>

      </div>
    </div>
    <Footer />
    </>
  )
}
