import Link from 'next/link'
import Image from 'next/image'
import posts from '@/data/posts'
import type { ContentBlock } from '@/data/posts'
import { notFound } from 'next/navigation'

export function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

function RenderBlock({ block, skipFirstImage, isFirstImage }: { block: ContentBlock; skipFirstImage?: boolean; isFirstImage?: boolean }) {
  if (skipFirstImage && isFirstImage && block.type === 'image') {
    return null
  }

  switch (block.type) {
    case 'text':
      return <p className="text-slate-400">{block.content}</p>
    case 'heading':
      return <h2 className="text-3xl font-bold text-slate-100 mt-12 mb-6">{block.content}</h2>
    case 'image':
      return (
        <figure className="my-8">
          <div className="rounded-md overflow-hidden border border-slate-800">
            <Image
              src={block.src}
              alt={block.alt}
              width={800}
              height={450}
              className="w-full h-auto object-cover"
            />
          </div>
          {block.caption && (
            <figcaption className="text-xs text-slate-500 mt-3 text-center">
              {block.caption}
            </figcaption>
          )}
        </figure>
      )
    case 'code':
      return (
        <div className="p-5 rounded-md font-mono text-sm my-6 overflow-x-auto bg-slate-900 border border-slate-800">
          {block.language && (
            <div className="text-xs mb-3 text-emerald-400/60">
              {block.language}
            </div>
          )}
          <pre className="text-slate-300">
            <code>{block.content}</code>
          </pre>
        </div>
      )
    case 'list':
      return (
        <ul className="space-y-3 my-6">
          {block.items.map((item, i) => (
            <li key={i} className="flex items-start text-slate-400">
              <span className="text-emerald-400/70 mr-3 mt-1">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )
    default:
      return null
  }
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = posts.find(p => p.slug === params.slug)

  if (!post) {
    notFound()
  }

  const firstContentImage = post.content.find(block => block.type === 'image' && 'src' in block)?.src
  const skipFirstImage = !!(post.coverImage && firstContentImage === post.coverImage)

  return (
    <div className="min-h-screen bg-transparent">
      <div className="max-w-5xl mx-auto px-6 py-16 relative z-10">
        <Link
          href="/writing"
          className="inline-flex items-center gap-1 text-sm text-emerald-400/70 hover:text-emerald-400 mb-10 transition-colors"
        >
          ← Back to Writing
        </Link>

        <article>
          <h1 className="text-4xl font-bold text-slate-100 mb-4">
            {post.title}
          </h1>

          <div className="flex items-center gap-4 text-xs font-mono text-emerald-400/60 mb-6">
            <time>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
            <span>·</span>
            <span>{post.readTime}</span>
          </div>

          <div className="flex flex-wrap gap-2 mb-10">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs rounded border border-slate-800 text-slate-500"
              >
                {tag}
              </span>
            ))}
          </div>

          {post.coverImage && (
            <div className="rounded-md overflow-hidden mb-12 border border-slate-800">
              <Image
                src={post.coverImage}
                alt={post.title}
                width={800}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
          )}

          <div className="space-y-6 leading-relaxed">
            {post.content.map((block, i) => {
              const isFirstImage = block.type === 'image' && post.content.findIndex(b => b.type === 'image') === i
              return (
                <RenderBlock 
                  key={i} 
                  block={block} 
                  skipFirstImage={skipFirstImage}
                  isFirstImage={isFirstImage}
                />
              )
            })}
          </div>
        </article>
      </div>
    </div>
  )
}
