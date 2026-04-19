'use client'

import Link from 'next/link'
import ReactMarkdown from 'react-markdown'

const categoryColors: Record<string, string> = {
  Trip:     'bg-blue-500/15 text-blue-400 border-blue-500/30',
  Book:     'bg-amber-500/15 text-amber-400 border-amber-500/30',
  Cricket:  'bg-emerald-500/15 text-emerald-400 border-emerald-500/30',
  Fitness:  'bg-red-400/15 text-red-400 border-red-400/30',
  Building: 'bg-purple-500/15 text-purple-400 border-purple-500/30',
}

interface LifeEntry {
  id: string
  title: string
  date: string
  category: string
  coverEmoji: string
  coverImage: string | null
  content: string
}

export default function LifeEntryContent({ entry }: { entry: LifeEntry }) {
  return (
    <div className="relative">
      <div className="max-w-3xl mx-auto px-6 py-20">
        {/* Back link */}
        <Link
          href="/life"
          className="inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-[#1D9E75] font-mono transition-colors duration-200 mb-10"
        >
          ← Back to ~/life
        </Link>

        {/* Cover */}
        {entry.coverImage ? (
          <div className="rounded-lg overflow-hidden mb-10">
            <img
              src={entry.coverImage}
              alt={entry.title}
              className="w-full max-h-[400px] object-cover"
            />
          </div>
        ) : (
          <div className="flex items-center justify-center h-48 rounded-lg bg-slate-900/40 mb-10 text-7xl">
            {entry.coverEmoji}
          </div>
        )}

        {/* Meta */}
        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs text-slate-500 font-mono">{entry.date}</span>
          <span className={`px-2 py-0.5 text-xs rounded border font-mono ${categoryColors[entry.category] || 'bg-slate-800 text-slate-400 border-slate-700'}`}>
            {entry.category}
          </span>
        </div>

        <h1 className="text-3xl font-bold text-slate-100 mb-10 leading-tight">
          {entry.title}
        </h1>

        {/* Markdown content */}
        <article className="prose prose-invert prose-slate max-w-none
          prose-headings:text-slate-200 prose-headings:font-semibold
          prose-h2:text-xl prose-h2:mt-10 prose-h2:mb-4
          prose-p:text-slate-400 prose-p:leading-relaxed
          prose-li:text-slate-400
          prose-strong:text-slate-200
          prose-a:text-[#1D9E75] prose-a:no-underline hover:prose-a:underline
          prose-ul:my-4 prose-li:my-1
        ">
          <ReactMarkdown>{entry.content}</ReactMarkdown>
        </article>
      </div>
    </div>
  )
}
