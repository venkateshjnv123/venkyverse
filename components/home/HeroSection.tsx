export default function HeroSection() {
  return (
    <section className="w-full">
      <div className="max-w-4xl mx-auto text-center flex flex-col gap-4 sm:gap-6 md:gap-8">
        <p className="text-slate-400 text-base sm:text-lg md:text-xl font-light tracking-wide">
          AI writes code. so let&apos;s talk systems.
        </p>

        <h1 className="text-[clamp(2rem,8vw,5.5rem)] font-extrabold leading-[1.05] tracking-tight bg-gradient-to-r from-white via-slate-200 to-emerald-300 bg-clip-text text-transparent">
          Beyond features.
Designing systems that scale.
        </h1>

        <p className="text-slate-400 text-xs sm:text-sm md:text-base font-light leading-relaxed tracking-wide transition-colors duration-300 hover:text-slate-300">
          Backend Engineer • IIT Jodhpur • Focused on scale, architecture, and long-term thinking.
        </p>

        <p className="text-emerald-400/80 text-sm sm:text-base font-medium tracking-wide">
          Currently building scalable backend systems and exploring AI infrastructure.
        </p>
      </div>
    </section>
  )
}
