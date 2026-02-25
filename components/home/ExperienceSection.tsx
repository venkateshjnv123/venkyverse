'use client'

import { useState } from 'react'

const experiences = [
  {
    company: 'CARS24',
    role: 'SDE-1',
    period: 'Apr 2025 - Present',
    description: [
      'Designed and scaled payment orchestration microservices enabling seamless routing across Razorpay, Juspay and Paytm, handling 1000+ transactions/day with 98% reliability',
      'Built and optimized C2C workflows including seller/buyer monetization, chat payments, lead generation using Spring Boot, Redis, RabbitMQ. Supported 100+ users/min and 50+ daily payments',
      'Enabled bulk upload/download and analytics dashboards by extending backend APIs, improving sales conversion by 50%',
      'Developed Verify-360, a secure Spring Boot + PostgreSQL platform for end-to-end vehicle document verification workflow'
    ],
    tech: ['Java', 'Spring Boot', 'PostgreSQL', 'Redis', 'RabbitMQ']
  },
  {
    company: 'Sprinklr',
    role: 'Software Engineer',
    period: 'Feb 2024 - Mar 2025',
    description: [
      'Streamlined automation for WFM module tests utilizing Java and Selenium alongside GraphQL and REST API coverage, resulting in a 4-hour decrease in overall sanity testing duration',
      'Co-developed a modern API automation framework eliminating DTO boilerplate and reducing test-case creation time by 70% through dynamic JSON parsing'
    ],
    tech: ['Java', 'Selenium', 'GraphQL', 'REST', 'Jenkins']
  },
  {
    company: 'Cogoport',
    role: 'Software Development Engineer',
    period: 'Aug 2023 - Dec 2023',
    description: [
      'Led development of 5 HRMS modules (Payroll, Onboarding etc.) with a team of 2, delivering cost-cutting of $50k/year',
      'Implemented Expense and Access management (automating tool access), used by 900+ employees',
      'Improved analytics modules integrating data from 4 databases, reducing report generation time by 50%'
    ],
    tech: ['Node.js', 'PostgreSQL', 'MongoDB', 'REST APIs']
  },
  {
    company: 'Aspiro',
    role: 'SDE Intern',
    period: 'Feb 2022 - July 2022',
    description: [
      'Integrated Microsoft Clarity, Google Analytics, Redux, Firebase to collect user data, achieving 3x more user interactivity',
      'Automated the deployment process using GitLab-AWS, reducing deployment time by 70%'
    ],
    tech: ['AWS', 'Firebase', 'Redux', 'GitLab CI/CD']
  }
]

export default function ExperienceSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeExperience = experiences[activeIndex]

  return (
    <section style={{ backgroundColor: 'transparent' }}>
      <div className="section-container">
        <h2 className="text-3xl font-bold mb-12">Experience</h2>
        
        <div className="grid md:grid-cols-[280px_1fr] gap-8">
          {/* Left column - Company list */}
          <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-x-visible">
            {experiences.map((exp, index) => (
              <button
                key={exp.company}
                onClick={() => setActiveIndex(index)}
                className="text-left px-4 py-3 border-l-2 transition-all duration-200 whitespace-nowrap md:whitespace-normal font-mono text-sm"
                style={{
                  borderColor: activeIndex === index ? '#00ff41' : 'rgba(0, 255, 65, 0.1)',
                  backgroundColor: activeIndex === index ? 'rgba(0, 255, 65, 0.1)' : 'transparent',
                  color: activeIndex === index ? '#00ff41' : '#666',
                }}
                onMouseEnter={(e) => {
                  if (activeIndex !== index) {
                    e.currentTarget.style.borderColor = 'rgba(0, 255, 65, 0.5)';
                    e.currentTarget.style.backgroundColor = 'rgba(0, 255, 65, 0.05)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeIndex !== index) {
                    e.currentTarget.style.borderColor = 'rgba(0, 255, 65, 0.1)';
                    e.currentTarget.style.backgroundColor = 'transparent';
                  }
                }}
              >
                <div>{exp.company}</div>
              </button>
            ))}
          </div>

          {/* Right column - Experience details */}
          <div className="min-h-[400px]">
            <div className="space-y-4 animate-fadeIn">
              <div>
                <h3 className="text-2xl font-semibold text-text-primary">
                  {activeExperience.role}
                </h3>
                <div className="text-accent-green font-mono text-sm mt-1">
                  {activeExperience.period}
                </div>
              </div>

              <ul className="space-y-3">
                {activeExperience.description.map((item, idx) => (
                  <li key={idx} className="flex items-start text-base" style={{ color: '#c9d1d9' }}>
                    <span className="text-accent-green mr-3 mt-1">▹</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-4">
                <div className="flex flex-wrap gap-2">
                  {activeExperience.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs rounded font-mono"
                      style={{
                        backgroundColor: 'rgba(0, 255, 65, 0.08)',
                        border: '1px solid rgba(0, 255, 65, 0.25)',
                        color: '#00ff41',
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
