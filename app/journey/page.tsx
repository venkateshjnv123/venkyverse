import SystemBackground from '@/components/home/SystemBackground'

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
    <div className="relative">
      <SystemBackground density="low" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        
        {/* Section 02 - Experience */}
        <section className="py-20">
          <div className="flex items-baseline gap-6 mb-12">
            <span className="text-emerald-400/60 text-sm font-mono tracking-widest uppercase">02</span>
            <h2 className="text-4xl font-bold text-slate-100">Experience</h2>
          </div>

          <div className="relative space-y-8">
            <div className="absolute left-0 top-8 bottom-8 w-px bg-emerald-400/40" />
            
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-12">
                <div className="absolute left-0 top-8 w-3 h-3 rounded-full bg-emerald-400/60" />
                
                <div className="bg-slate-900/40 border border-slate-800 rounded-lg p-8 transition-all duration-300 hover:border-slate-700 hover:-translate-y-1">
                  <div className="mb-6">
                    <div className="flex items-baseline gap-3 mb-2">
                      <h3 className="text-2xl font-semibold text-white">
                        {exp.company}
                      </h3>
                      <span className="text-slate-300 font-medium">— {exp.role}</span>
                    </div>
                    <p className="text-sm text-emerald-400/80 tracking-wide">{exp.period}</p>
                  </div>

                  <ul className="space-y-4 mb-6">
                    {exp.description.map((item, idx) => (
                      <li key={idx} className="flex items-start text-slate-400 leading-relaxed">
                        <span className="text-emerald-400/70 mr-3 mt-1.5">•</span>
                        <span dangerouslySetInnerHTML={{ __html: item }} />
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-mono bg-slate-900/60 border border-slate-700/50 text-slate-400 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="h-px bg-emerald-400/10" />

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
                      className="px-3 py-1 text-xs font-mono bg-slate-900/40 border border-slate-700/40 text-slate-400 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="h-px bg-emerald-400/10" />

        {/* Section 04 - Timeline */}
        {/* <section className="py-20">
          <div className="flex items-baseline gap-6 mb-12">
            <span className="text-emerald-400/60 text-sm font-mono tracking-widest uppercase">04</span>
            <h2 className="text-4xl font-bold text-slate-100">Timeline</h2>
          </div>

          <div className="max-w-2xl">
            {timeline.map((item, index) => (
              <div key={index} className="flex items-center gap-8 mb-6">
                <span className="text-emerald-400/70 text-sm font-mono w-16">{item.year}</span>
                <div className="flex items-center gap-4 flex-1">
                  <div className="w-2 h-2 rounded-full bg-emerald-400/40" />
                  {index < timeline.length - 1 && (
                    <div className="absolute left-[5.5rem] w-px h-6 bg-emerald-400/20 translate-y-6" />
                  )}
                  <span className="text-slate-400">{item.event}</span>
                </div>
              </div>
            ))}
          </div>
        </section> */}

      </div>
    </div>
  )
}
