export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-slate-400 text-lg md:text-xl mb-10 font-light tracking-wide">
          AI can write code.
        </p>

        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold leading-tight tracking-tight mb-10 bg-gradient-to-r from-white via-slate-200 to-emerald-300 bg-clip-text text-transparent">
          So I think systems.
        </h1>

        <p className="text-slate-400 text-sm md:text-base font-light leading-relaxed tracking-wide transition-colors duration-300 hover:text-slate-300 mt-6">
          Backend Engineer • IIT Jodhpur • Focused on scale, architecture, and long-term thinking.
        </p>
      </div>
    </section>
  )
}
