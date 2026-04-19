'use client'

import Link from 'next/link'
import Image from 'next/image'
import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import { useEffect, useState } from 'react'

interface Frontmatter {
  id: string
  title: string
  date: string
  category: string
  coverEmoji: string
  coverImage: string | null
  readTime: string
}

interface Props {
  frontmatter: Frontmatter
  content: string
}

export default function LifeEntryMDX({ frontmatter, content }: Props) {
  const [mdxSource, setMdxSource] = useState<any>(null)

  useEffect(() => {
    serialize(content).then(setMdxSource)
  }, [content])

  return (
    <div className="min-h-screen bg-transparent">
      <div className="max-w-5xl mx-auto px-6 py-16 relative z-10">
        {/* Back link — matches blog page */}
        <Link
          href="/life"
          className="inline-flex items-center gap-1 text-sm text-emerald-400/70 hover:text-emerald-400 mb-10 transition-colors"
        >
          ← Back to Life
        </Link>

        <article>
          {/* Title */}
          <h1 className="text-4xl font-bold text-slate-100 mb-4">
            {frontmatter.title}
          </h1>

          {/* Date · readTime — matches blog page */}
          <div className="flex items-center gap-4 text-xs font-mono text-emerald-400/60 mb-6">
            <time>{frontmatter.date}</time>
            <span>·</span>
            <span>{frontmatter.readTime}</span>
          </div>

          {/* Category tag — matches blog page tag style */}
          <div className="flex flex-wrap gap-2 mb-10">
            <span className="px-3 py-1 text-xs rounded border border-slate-800 text-slate-500">
              {frontmatter.category}
            </span>
          </div>

          {/* Cover image or emoji */}
          {frontmatter.coverImage ? (
            <div className="rounded-md overflow-hidden mb-12 border border-slate-800">
              <Image
                src={frontmatter.coverImage}
                alt={frontmatter.title}
                width={800}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
          ) : null}

          {/* MDX content */}
          {mdxSource ? (
            <div className="space-y-6 leading-relaxed life-prose">
              <MDXRemote {...mdxSource} />
            </div>
          ) : (
            <div className="text-slate-500 text-sm">Loading...</div>
          )}
        </article>
      </div>
    </div>
  )
}
