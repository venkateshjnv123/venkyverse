import Image from 'next/image'

export default function AboutSection() {
  const whatIBuild = [
    {
      title: 'Scalable APIs',
      description: 'Designing REST & GraphQL services with clean boundaries and maintainable contracts.'
    },
    {
      title: 'Distributed Systems',
      description: 'Microservices, messaging queues, caching layers, and data consistency trade-offs.'
    },
    {
      title: 'Performance Engineering',
      description: 'Optimizing latency, database queries, and backend throughput.'
    },
    {
      title: 'Automation & Reliability',
      description: 'Testing systems, CI pipelines, and reducing operational friction.'
    }
  ]

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
    <section className="bg-transparent py-24">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Section 01 - Who I Am */}
        <div className="mb-32">
          <div className="flex items-baseline gap-6 mb-8">
            <span className="text-emerald-400/60 text-sm font-mono tracking-widest">01</span>
            <h2 className="text-4xl font-bold text-slate-100">Who I Am</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-6 text-slate-400 leading-relaxed">
              <p>
                I design and scale backend systems. From API architecture to distributed services, I focus on reliability, performance, and long-term maintainability.
              </p>
              
              <p>
                I graduated from Indian Institute of Technology, Jodhpur (Mechanical Engineering). My engineering foundation shaped how I think about systems — structured, efficient, and built to last.
              </p>
              
              <p>
                I&apos;ve worked on payment systems, automation frameworks, and enterprise backend architectures. I care less about features and more about system behavior under scale.
              </p>
            </div>

            <div className="flex justify-center md:justify-end">
              <div className="relative group">
                <Image
                  src="/venkyimg.png"
                  alt="Venkatesh Patnala"
                  width={320}
                  height={380}
                  className="rounded-lg border border-emerald-400/20 transition-transform duration-300 group-hover:scale-105"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        <div className="h-px bg-emerald-400/10 mb-32" />

        {/* Section 02 - What I Build */}
        <div className="mb-32">
          <div className="flex items-baseline gap-6 mb-12">
            <span className="text-emerald-400/60 text-sm font-mono tracking-widest">02</span>
            <h2 className="text-4xl font-bold text-slate-100">What I Build</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {whatIBuild.map((item, index) => (
              <div key={index} className="border-l border-emerald-400/20 pl-6">
                <h3 className="text-lg font-semibold text-slate-200 mb-2">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="h-px bg-emerald-400/10 mb-32" />

        {/* Section 03 - Systems I Work With */}
        <div className="mb-32">
          <div className="flex items-baseline gap-6 mb-12">
            <span className="text-emerald-400/60 text-sm font-mono tracking-widest">03</span>
            <h2 className="text-4xl font-bold text-slate-100">Systems I Work With</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {techSystems.map((system, index) => (
              <div key={index} className="border border-slate-700/30 rounded-lg p-6 bg-slate-900/20">
                <h3 className="text-sm font-medium text-slate-300 mb-3">{system.category}</h3>
                <p className="text-slate-400 text-sm">{system.items}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="h-px bg-emerald-400/10 mb-32" />

        {/* Section 04 - Toward AI Systems */}
        <div>
          <div className="flex items-baseline gap-6 mb-8">
            <span className="text-emerald-400/60 text-sm font-mono tracking-widest">04</span>
            <h2 className="text-4xl font-bold text-slate-100">Toward AI Systems</h2>
          </div>

          <div className="max-w-3xl">
            <p className="text-slate-400 leading-relaxed">
              Beyond traditional backend systems, I&apos;m exploring AI infrastructure — model serving, data pipelines, and scalable AI-backed applications. My goal is to combine strong backend architecture with intelligent systems.
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}
