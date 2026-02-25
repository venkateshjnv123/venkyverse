'use client'

import { useState } from 'react'
import Link from 'next/link'

const navLinks = [
  { href: '/about', label: 'About' },
  { href: '/journey', label: 'Journey' },
  { href: '/writing', label: 'Writing' },
  { href: '/connect', label: 'Connect' },
]

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false)

  return (
    <>
      <nav className="sticky top-0 z-50 backdrop-blur-md font-mono bg-[#0b0e14]/90 border-b border-emerald-400/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link 
            href="/" 
            className="text-lg font-bold transition-colors tracking-wide text-emerald-400 hover:text-emerald-300"
          >
            <span className="text-slate-600">&gt; </span>Venkatesh Patnala
          </Link>
          
          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6 text-sm">
            {navLinks.map((link) => (
              <Link 
                key={link.href} 
                href={link.href} 
                className="relative text-emerald-400/80 hover:text-emerald-300 transition-colors duration-300 pb-1 group"
              >
                <span className="text-emerald-400/50">~/</span>{link.label.toLowerCase()}
                <span className="absolute left-0 bottom-0 w-0 h-px bg-emerald-400 transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded transition-colors text-emerald-400 hover:text-emerald-300"
            onClick={() => setDrawerOpen(true)}
            aria-label="Open menu"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="7" height="7" rx="1" />
              <rect x="14" y="3" width="7" height="7" rx="1" />
              <rect x="3" y="14" width="7" height="7" rx="1" />
              <rect x="14" y="14" width="7" height="7" rx="1" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      {drawerOpen && (
        <div 
          className="fixed inset-0 z-[100] md:hidden"
          onClick={() => setDrawerOpen(false)}
        >
          <div className="absolute inset-0 bg-black/70" />

          <div
            className="absolute top-0 right-0 h-full w-72 p-6 flex flex-col font-mono bg-[#0b0e14]/98 border-l border-emerald-400/15"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="self-end p-2 mb-8 rounded transition-colors text-emerald-400 hover:text-emerald-300"
              onClick={() => setDrawerOpen(false)}
              aria-label="Close menu"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link 
                  key={link.href} 
                  href={link.href}
                  onClick={() => setDrawerOpen(false)}
                  className="px-4 py-3 rounded text-base text-slate-300 hover:text-emerald-400 hover:bg-emerald-400/8 transition-all duration-300"
                >
                  <span className="text-emerald-400/50">~/</span>{link.label.toLowerCase()}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
