'use client'

import { ReactNode } from 'react'
import { usePathname } from 'next/navigation'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import SpotlightCursor from '@/components/SpotlightCursor'
import SocialSidebar from '@/components/SocialSidebar'
import AnimatedLayout from '@/components/AnimatedLayout'

interface LayoutShellProps {
  children: ReactNode
}

export default function LayoutShell({ children }: LayoutShellProps) {
  const pathname = usePathname()
  const isHome = pathname === '/'

  return (
    <div className={isHome ? 'h-[100svh] overflow-hidden flex flex-col' : 'min-h-screen flex flex-col'}>
      <SpotlightCursor />
      <Navbar />
      <SocialSidebar />

      <main className={isHome ? 'flex-1 overflow-hidden' : 'flex-1'}>
        <AnimatedLayout className={isHome ? 'h-full' : undefined}>
          {children}
        </AnimatedLayout>
      </main>

      {!isHome && <Footer />}
    </div>
  )
}
