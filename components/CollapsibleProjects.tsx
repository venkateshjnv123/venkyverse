'use client'

import { useState } from 'react'

interface Project {
  title: string
  summary: string
  problem: string
  impact: string
  tech: string[]
}

export default function CollapsibleProjects({ projects }: { projects: Project[] }) {
  const [open, setOpen] = useState(false)

  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className="text-sm text-slate-400 hover:text-emerald-400 transition-colors duration-200 font-mono tracking-wide mb-6"
      >
        Earlier work (2022–23) {open ? '↑' : '↓'}
      </button>

      {open && (
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
      )}
    </div>
  )
}
