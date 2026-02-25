export default function Footer() {
  return (
    <footer style={{ backgroundColor: 'rgba(11, 14, 20, 0.95)', borderTop: '1px solid rgba(0, 255, 65, 0.1)' }}>
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-text-secondary text-sm">
            © 2025 Venkatesh Patnala. Building scalable systems.
          </div>
          
          <div className="flex items-center gap-6">
            <a 
              href="https://github.com/venkateshjnv123" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-accent-green transition-colors"
            >
              GitHub
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-accent-green transition-colors"
            >
              LinkedIn
            </a>
            <a 
              href="mailto:venkateshjnv123@gmail.com"
              className="text-text-secondary hover:text-accent-green transition-colors"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
