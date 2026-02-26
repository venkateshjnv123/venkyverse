import SystemBackground from '@/components/home/SystemBackground'
import Footer from '@/components/Footer'

const experiences = [
  {
    company: 'CARS24',
    role: 'SDE-1',
    period: 'Apr 2025 - Present',
    description: [
      'Designed payment orchestration microservices routing across Razorpay, Juspay and Paytm, handling <span class="font-semibold text-white">1000+</span> transactions/day with <span class="font-semibold text-white">98%</span> reliability',
      'Built C2C workflows including seller/buyer monetization and chat payments using Spring Boot, Redis, RabbitMQ. Supported <span class="font-semibold text-white">100+</span> users/min and <span class="font-semibold text-white">50+</span> daily payments',
      'Enabled bulk upload/download and analytics dashboards, improving sales conversion by <span class="font-semibold text-white">50%</span>',
      'Developed Verify-360 platform for end-to-end vehicle document verification'
    ],
    tech: ['Java', 'Spring Boot', 'PostgreSQL', 'Redis', 'RabbitMQ']
  },
  {
    company: 'Sprinklr',
    role: 'Software Engineer',
    period: 'Feb 2024 - Mar 2025',
    description: [
      'Streamlined automation for WFM module tests using Java and Selenium with GraphQL and REST coverage, reducing sanity testing duration by <span class="font-semibold text-white">4 hours</span>',
      'Co-developed modern API automation framework eliminating DTO boilerplate, reducing test-case creation time by <span class="font-semibold text-white">70%</span>'
    ],
    tech: ['Java', 'Selenium', 'GraphQL', 'REST', 'Jenkins']
  },
  {
    company: 'Cogoport',
    role: 'Software Development Engineer',
    period: 'Aug 2023 - Dec 2023',
    description: [
      'Led development of <span class="font-semibold text-white">5</span> HRMS modules with a team of <span class="font-semibold text-white">2</span>, delivering cost-cutting of <span class="font-semibold text-white">$50k/year</span>',
      'Implemented Expense and Access management, used by <span class="font-semibold text-white">900+</span> employees',
      'Improved analytics modules integrating data from <span class="font-semibold text-white">4</span> databases, reducing report generation time by <span class="font-semibold text-white">50%</span>'
    ],
    tech: ['Node.js', 'PostgreSQL', 'MongoDB', 'REST APIs']
  },
  {
    company: 'Aspiro',
    role: 'SDE Intern',
    period: 'Feb 2022 - July 2022',
    description: [
      'Integrated Microsoft Clarity, Google Analytics, Redux, Firebase to collect user data, achieving <span class="font-semibold text-white">3x</span> more user interactivity',
      'Automated deployment process using GitLab-AWS, reducing deployment time by <span class="font-semibold text-white">70%</span>'
    ],
    tech: ['AWS', 'Firebase', 'Redux', 'GitLab CI/CD']
  }
]

const projects = [
  {
    title: 'Stylin - Salon Management App',
    summary: 'Backend architecture for salon management platform with booking and sales insights.',
    problem: 'Streamlined 5 core functionalities — Authentication, Management protocols, booking processes, Sales insights, and ideation modules.',
    impact: 'Enabled efficient salon operations with real-time booking management.',
    tech: ['Node.js', 'GraphQL', 'Express.js', 'PostgreSQL']
  },
  {
    title: 'Gadset - Device Repairing Marketplace',
    summary: 'Full-stack marketplace connecting users with repair agents through bidding system.',
    problem: 'Built 5-step bidding system and partner app for quoting on bids with 6-stage order tracking.',
    impact: 'Real-time bidding platform enabling competitive pricing for device repairs.',
    tech: ['React.js', 'Node.js', 'MongoDB']
  },
  {
    title: 'Pladex - Book Management Platform',
    summary: 'Full-stack book management with dynamic content and database operations.',
    problem: 'Node.js backend handling User and Books database with sort, filter, and upload operations.',
    impact: 'Efficient book catalog management with responsive UI and seamless transitions.',
    tech: ['React.js', 'Node.js', 'Bootstrap']
  },
  {
    title: 'Charkhi-Dadri Info - Android App',
    summary: 'City-wide telephone directory with Firebase integration.',
    problem: 'Created comprehensive directory for markets, hospitals, schools with Firebase auth and bookmarks.',
    impact: 'Centralized information access for entire city with data synced from Google Sheets.',
    tech: ['Android', 'Firebase', 'Google Sheets']
  }
]

const timeline = [
  { year: '2017', event: 'Completed 10th' },
  { year: '2019', event: 'Completed 12th' },
  { year: '2020', event: 'IIT Jodhpur' },
  { year: '2022', event: 'Frontend Engineer Intern' },
  { year: '2023', event: 'Backend Engineer' },
  { year: '2024', event: 'Software Engineer' },
  { year: '2025', event: 'SDE-1' },
  { year: '2026', event: 'Exploring AI Systems' }
]

export default function JourneyPage() {
  return (
    <>
    <div className="relative">
      <SystemBackground density="low" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        
        {/* Section 02 - Experience */}
        <section className="py-20">
          <div className="flex items-baseline gap-6 mb-16">
            <span className="text-emerald-400/60 text-sm font-mono tracking-widest uppercase">02</span>
            <h2 className="text-4xl font-bold text-slate-100">Experience</h2>
          </div>

          {/* Centered alternating timeline */}
          <div className="relative">
            {/* Center vertical line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-emerald-400/40" />

            <div className="space-y-12 md:space-y-16">
              {experiences.map((exp, index) => {
                const isLeft = index % 2 === 0
                return (
                  <div key={index} className="relative md:grid md:grid-cols-[50%_0%_50%] md:items-start">
                    {/* Timeline node */}
                    <div className="hidden md:block absolute left-1/2 top-8 -translate-x-1/2 w-4 h-4 rounded-full bg-emerald-400/70 border-2 border-slate-900 z-10" />

                    {isLeft ? (
                      <>
                        {/* Left: Card */}
                        <div className="md:pr-8">
                          <div className="bg-slate-900/40 border border-slate-800 rounded-lg p-8 transition-all duration-300 hover:border-slate-700">
                            <div className="mb-6">
                              <h3 className="text-2xl font-semibold text-white mb-1">{exp.company}</h3>
                              <p className="text-slate-300 font-medium">{exp.role}</p>
                              <p className="text-sm text-emerald-400/80 tracking-wide mt-1">{exp.period}</p>
                            </div>
                            <ul className="space-y-3 mb-6">
                              {exp.description.map((item, idx) => (
                                <li key={idx} className="flex items-start text-slate-400 leading-relaxed">
                                  <span className="w-2 h-2 rounded-full bg-emerald-400 mt-2 mr-3 shrink-0" />
                                  <span dangerouslySetInnerHTML={{ __html: item }} />
                                </li>
                              ))}
                            </ul>
                            <div className="flex flex-wrap gap-2">
                              {exp.tech.map((tech) => (
                                <span key={tech} className="px-3 py-1 text-xs font-mono bg-slate-900/60 border border-slate-800 text-slate-400 rounded">{tech}</span>
                              ))}
                            </div>
                          </div>
                        </div>
                        
                        {/* Center: Empty spacer */}
                        <div />
                        
                        {/* Right: Date */}
                        <div className="hidden md:flex md:items-center md:pl-8">
                          <p className="text-sm text-emerald-400/80 font-mono tracking-wide">{exp.period}</p>
                        </div>
                      </>
                    ) : (
                      <>
                        {/* Left: Date */}
                        <div className="hidden md:flex md:items-center md:justify-end md:pr-8">
                          <p className="text-sm text-emerald-400/80 font-mono tracking-wide">{exp.period}</p>
                        </div>
                        
                        {/* Center: Empty spacer */}
                        <div />
                        
                        {/* Right: Card */}
                        <div className="md:pl-8">
                          <div className="bg-slate-900/40 border border-slate-800 rounded-lg p-8 transition-all duration-300 hover:border-slate-700">
                            <div className="mb-6">
                              <h3 className="text-2xl font-semibold text-white mb-1">{exp.company}</h3>
                              <p className="text-slate-300 font-medium">{exp.role}</p>
                              <p className="text-sm text-emerald-400/80 tracking-wide mt-1">{exp.period}</p>
                            </div>
                            <ul className="space-y-3 mb-6">
                              {exp.description.map((item, idx) => (
                                <li key={idx} className="flex items-start text-slate-400 leading-relaxed">
                                  <span className="w-2 h-2 rounded-full bg-emerald-400 mt-2 mr-3 shrink-0" />
                                  <span dangerouslySetInnerHTML={{ __html: item }} />
                                </li>
                              ))}
                            </ul>
                            <div className="flex flex-wrap gap-2">
                              {exp.tech.map((tech) => (
                                <span key={tech} className="px-3 py-1 text-xs font-mono bg-slate-900/60 border border-slate-800 text-slate-400 rounded">{tech}</span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Section 03 - Selected Projects */}
        <section className="py-20">
          <div className="flex items-baseline gap-6 mb-12">
            <span className="text-emerald-400/60 text-sm font-mono tracking-widest uppercase">03</span>
            <h2 className="text-4xl font-bold text-slate-100">My Work</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="border border-slate-800 rounded-lg p-6 bg-slate-900/10 hover:-translate-y-1 transition-transform duration-300"
              >
                <h3 className="text-xl font-semibold text-slate-100 mb-3">{project.title}</h3>
                <p className="text-slate-400 text-sm mb-4">{project.summary}</p>

                <div className="space-y-3 mb-4">
                  <div>
                    <p className="text-xs font-medium text-emerald-400/70 mb-1">Problem Solved:</p>
                    <p className="text-slate-400 text-sm">{project.problem}</p>
                  </div>

                  <div>
                    <p className="text-xs font-medium text-emerald-400/70 mb-1">Impact:</p>
                    <p className="text-slate-400 text-sm">{project.impact}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-mono bg-slate-900/40 border border-slate-800 text-slate-400 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
    <Footer />
    </>
  )
}
