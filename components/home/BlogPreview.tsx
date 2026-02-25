import Link from 'next/link'
import allPosts from '@/data/posts'

const posts = allPosts.slice(0, 3)

export default function BlogPreview() {
  return (
    <section style={{ backgroundColor: 'transparent' }}>
      <div className="section-container">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold">Recent Writing</h2>
          <Link 
            href="/blog"
            className="text-accent-green hover:underline text-sm"
          >
            View all posts →
          </Link>
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
              </div>
              <h3 className="text-xl font-semibold mb-3 text-text-primary group-hover:text-accent-green transition-colors">
                {post.title}
              </h3>
              <p className="text-text-secondary text-sm mb-4 leading-relaxed">
                {post.summary}
              </p>
              <div className="text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all" style={{ color: '#00ff41' }}>
                Read more →
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
