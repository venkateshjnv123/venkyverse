import Link from 'next/link'
import SystemBackground from '@/components/home/SystemBackground'
import allPosts from '@/data/posts'
import Footer from '@/components/Footer'

export default function WritingPage() {
  return (
    <>
    <div className="relative">
      <SystemBackground density="low" />
      
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-20">
        <div className="flex items-baseline gap-6 mb-16">
          <span className="text-emerald-400/60 text-sm font-mono tracking-widest uppercase">04</span>
          <h1 className="text-4xl font-bold text-slate-100">Writing</h1>
        </div>

        <div className="space-y-12">
          {allPosts.map((post, index) => (
            <article key={post.slug}>
              <Link href={`/blog/${post.slug}`} className="group block">
                <div className="mb-2">
                  <time className="text-xs text-emerald-400/70 font-mono">
                    {new Date(post.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </time>
                </div>
                
                <h2 className="text-2xl font-semibold text-slate-100 mb-3 group-hover:text-emerald-400/90 transition-colors duration-300">
                  {post.title}
                </h2>
                
                <p className="text-slate-400 mb-4 leading-relaxed">
                  {post.summary}
                </p>
                
                <div className="flex items-center gap-4">
                  <div className="flex flex-wrap gap-2">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span 
                        key={tag}
                        className="text-xs text-slate-500 px-2 py-1 border border-slate-800 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className="text-sm text-emerald-400/70 group-hover:text-emerald-400 transition-colors">
                    Read →
                  </span>
                </div>
              </Link>
              
              {index < allPosts.length - 1 && (
                <div className="mt-12 h-px bg-slate-800" />
              )}
            </article>
          ))}
        </div>
      </div>
    </div>
    <Footer />
    </>
  )
}
