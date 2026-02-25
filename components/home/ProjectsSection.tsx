'use client'

import Link from 'next/link'
import Image from 'next/image'

const projects = [
  {
    title: 'Stylin - Salon Management App',
    problem: 'Initiated and implemented backend architecture with Node.js, GraphQL, Express.js and PostgreSQL. Streamlined 5 core functionalities — Authentication, Management protocols, booking processes, Sales insights, and ideation modules.',
    tech: ['Node.js', 'GraphQL', 'Express.js', 'PostgreSQL'],
    period: 'Dec 2023 - Feb 2024',
    image: '/stylin.png',
    isPhone: false,
  },
  {
    title: 'Gadset - Device Repairing Marketplace',
    problem: 'Built a React.js frontend with a 5-step bidding system for users to book repair agents. Created a partner app for quoting on bids and tracking orders in 6 stages. Node.js backend with MongoDB for real-time bidding.',
    tech: ['React.js', 'Node.js', 'MongoDB'],
    period: 'May 2023 - Aug 2023',
    image: '/gadset.jpeg',
    isPhone: true,
  },
  // {
  //   title: 'Verify-360 - Document Verification',
  //   problem: 'A secure Spring Boot + PostgreSQL platform enabling users and officials to upload, review, approve, and reject vehicle documents with end-to-end verification workflow.',
  //   tech: 'Java, Spring Boot, PostgreSQL',
  //   period: '2025',
  //   image: '',
  //   isPhone: false,
  // },
  {
    title: 'Pladex - Book Management Platform',
    problem: 'Full-stack app with React.js frontend using Bootstrap with dynamic content and transitions. Node.js backend handling User and Books database with sort, filter, and upload operations.',
    tech: ['React.js', 'Node.js', 'Bootstrap'],
    period: '2022',
    image: '/pladex.png',
    isPhone: false,
  },
  {
    title: 'Charkhi-Dadri Info - Android App',
    problem: 'Telephone Directory app with city-wide info (markets, hospitals, schools). Features include Firebase auth, bookmarks, and advertising. Data synced from Google Sheets to Firebase.',
    tech: ['Android', 'Firebase', 'Google Sheets'],
    period: '2021',
    image: '/dadriapp.jpg',
    isPhone: true,
  },
  {
    title: 'Advanced Agenda Setter',
    problem: 'Todo app with advanced features — prioritizing, sorting, editing, completing and removing. Login/Logout for individual user experiences, connected to SQLite database.',
    tech: ['SQLite', 'JavaScript'],
    period: '2021',
    image: '/todoapp.png',
    isPhone: false,
  },
]

export default function ProjectsSection() {
  return (
    <section style={{ backgroundColor: 'transparent' }}>
      <div className="section-container">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold">Selected Projects</h2>
          <Link 
            href="/projects"
            className="text-accent-green hover:underline text-sm"
          >
            View all →
          </Link>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div 
              key={project.title}
              className="group overflow-hidden rounded-lg transition-all duration-300 hover:translate-y-[-4px]"
              style={{
                backgroundColor: 'rgba(13, 17, 23, 0.6)',
                border: '1px solid rgba(0, 255, 65, 0.08)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(0, 255, 65, 0.3)';
                e.currentTarget.style.boxShadow = '0 8px 30px rgba(0, 255, 65, 0.08)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(0, 255, 65, 0.08)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {/* Image section with hacker overlay */}
              <div className="relative h-48 overflow-hidden" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className={`transition-transform duration-500 group-hover:scale-110 ${
                    project.isPhone ? 'object-contain p-2' : 'object-cover'
                  }`}
                />
                {/* Green scanline overlay */}
                <div 
                  className="absolute inset-0 opacity-40 group-hover:opacity-20 transition-opacity duration-300"
                  style={{
                    background: 'linear-gradient(180deg, rgba(0,0,0,0.7) 0%, rgba(0,255,65,0.08) 50%, rgba(0,0,0,0.8) 100%)',
                  }}
                />
                {/* Bottom angled cut */}
                <div 
                  className="absolute bottom-0 left-0 right-0 h-6"
                  style={{
                    background: 'rgba(13, 17, 23, 0.95)',
                    clipPath: 'polygon(0 60%, 100% 0%, 100% 100%, 0% 100%)',
                  }}
                />
                {/* Period badge */}
                <div 
                  className="absolute top-3 right-3 px-2 py-1 rounded text-xs font-mono"
                  style={{
                    backgroundColor: 'rgba(0, 0, 0, 0.7)',
                    border: '1px solid rgba(0, 255, 65, 0.3)',
                    color: '#00ff41',
                  }}
                >
                  {project.period}
                </div>
              </div>

              {/* Text content */}
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-3 text-text-primary">
                  {project.title}
                </h3>
                <p className="text-base mb-4 leading-relaxed" style={{ color: '#c9d1d9' }}>
                  {project.problem}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 text-xs rounded font-mono"
                      style={{
                        backgroundColor: 'rgba(0, 255, 65, 0.08)',
                        border: '1px solid rgba(0, 255, 65, 0.25)',
                        color: '#00ff41',
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
