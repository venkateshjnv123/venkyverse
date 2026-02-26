export default function Footer() {
  return (
    <footer className="bg-slate-950/95 border-t border-slate-800">
      <div className="max-w-5xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-slate-500 text-sm">
            © 2025 Venkatesh Patnala. Building scalable systems.
          </div>
          
          <div className="flex items-center gap-6">
            <a 
              href="https://github.com/venkateshjnv123" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-emerald-400 hover:underline transition-colors duration-200"
            >
              GitHub
            </a>
            <a 
              href="https://linkedin.com/in/venkatesh-patnala-927a521b0" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-emerald-400 hover:underline transition-colors duration-200"
            >
              LinkedIn
            </a>
            <a 
              href="mailto:venkateshjnv123@gmail.com"
              className="text-slate-400 hover:text-emerald-400 hover:underline transition-colors duration-200"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
