import Link from 'next/link'
import posts from '@/data/posts'

export default function BlogPage() {
  return (
    <div style={{ backgroundColor: 'transparent' }} className="min-h-screen">
      <div className="section-container">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4 font-mono" style={{ color: '#00ff41' }}>Blog</h1>
          <p className="text-text-secondary text-lg max-w-3xl">
            Writing about backend engineering, system design, and lessons learned building scalable systems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Link 
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group card-dark block"
            >
              <div className="text-xs font-mono mb-3" style={{ color: '#00ff41', opacity: 0.6 }}>
                {new Date(post.date).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
                <span className="mx-2">·</span>
                {post.readTime}
              </div>

              <h2 className="text-xl font-semibold mb-3 text-text-primary group-hover:text-accent-green transition-colors">
                {post.title}
              </h2>
              
              <p className="text-text-secondary text-sm mb-4 leading-relaxed">
                {post.summary}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map((tag) => (
                  <span 
                    key={tag}
                    className="px-2 py-1 text-xs rounded font-mono"
                    style={{ 
                      backgroundColor: 'rgba(0, 255, 65, 0.05)',
                      border: '1px solid rgba(0, 255, 65, 0.15)',
                      color: '#8b949e',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all" style={{ color: '#00ff41' }}>
                Read more →
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
