'use client'

import { useState } from 'react'
import Link from 'next/link'

interface Entry {
  slug: string
  readTime: string
  id: string
  year: number
  month: number
  monthLabel: string
  date: string
  category: string
  title: string
  hook: string
  coverImage: string | null
  coverEmoji: string
}

interface MonthGroup {
  month: number
  monthLabel: string
  entries: Entry[]
}

interface LifePageClientProps {
  allEntries: Entry[]
  years: number[]
  groupedByYear: Record<number, MonthGroup[]>
}

export default function LifePageClient({ allEntries, years, groupedByYear }: LifePageClientProps) {
  const [selectedYear, setSelectedYear] = useState(years[0])

  const monthGroups = groupedByYear[selectedYear] || []
  const flatEntries = monthGroups.flatMap(g => g.entries)

  return (
    <div className="relative">
      <div className="max-w-5xl mx-auto px-6 py-20">
        {/* Heading — matches writing page */}
        <div className="flex items-baseline gap-6 mb-16">
          <span className="text-emerald-400/60 text-sm font-mono tracking-widest uppercase">05</span>
          <h1 className="text-4xl font-bold text-slate-100">Life</h1>
        </div>

        <div className="flex gap-16">
          {/* Year timeline — left sidebar */}
          <div className="hidden md:flex flex-col items-center gap-0 pt-1 shrink-0">
            {years.map((year, i) => (
              <div key={year} className="flex flex-col items-center">
                <button
                  onClick={() => setSelectedYear(year)}
                  className={`text-sm font-mono transition-colors duration-200 px-3 py-1.5 rounded ${
                    selectedYear === year
                      ? 'text-[#1D9E75] font-semibold'
                      : 'text-slate-600 hover:text-slate-400'
                  }`}
                >
                  {year}
                </button>
                {i < years.length - 1 && (
                  <div className="w-px h-8 bg-slate-800" />
                )}
              </div>
            ))}
          </div>

          {/* Mobile year pills */}
          <div className="flex md:hidden flex-wrap gap-3 mb-10 w-full">
            {years.map(year => (
              <button
                key={year}
                onClick={() => setSelectedYear(year)}
                className={`px-4 py-1.5 rounded-full text-sm font-mono transition-colors duration-200 border ${
                  selectedYear === year
                    ? 'text-[#1D9E75] border-[#1D9E75]/40 bg-[#1D9E75]/10'
                    : 'text-slate-600 border-slate-800'
                }`}
              >
                {year}
              </button>
            ))}
          </div>

          {/* Entries list — matches writing page style */}
          <div className="flex-1 min-w-0">
            {flatEntries.length === 0 ? (
              <p className="text-slate-500 py-16 font-mono text-sm">
                Nothing logged for {selectedYear} yet.
              </p>
            ) : (
              <div className="space-y-12">
                {flatEntries.map((entry, index) => (
                  <article key={entry.slug}>
                    <Link href={`/life/${entry.slug}`} className="group block">
                      <div className="mb-2 flex items-center gap-3">
                        <time className="text-xs text-emerald-400/70 font-mono">
                          {entry.date}
                        </time>
                        <span className="text-xs text-slate-500 px-2 py-0.5 border border-slate-800 rounded">
                          {entry.category}
                        </span>
                      </div>

                      <h2 className="text-2xl font-semibold text-slate-100 mb-3 group-hover:text-emerald-400/90 transition-colors duration-300">
                        {entry.title}
                      </h2>

                      <p className="text-slate-400 mb-4 leading-relaxed">
                        {entry.hook}
                      </p>

                      <div className="flex items-center gap-4">
                        <span className="text-xs text-slate-500 font-mono">{entry.readTime}</span>
                        <span className="text-sm text-emerald-400/70 group-hover:text-emerald-400 transition-colors">
                          Read →
                        </span>
                      </div>
                    </Link>

                    {index < flatEntries.length - 1 && (
                      <div className="mt-12 h-px bg-slate-800" />
                    )}
                  </article>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
