'use client'

import { AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { ReactNode } from 'react'
import PageTransition from './PageTransition'

interface AnimatedLayoutProps {
  children: ReactNode
  className?: string
}

export default function AnimatedLayout({ children, className }: AnimatedLayoutProps) {
  const pathname = usePathname()

  return (
    <AnimatePresence mode="wait" initial={false}>
      <PageTransition key={pathname} className={className}>
        {children}
      </PageTransition>
    </AnimatePresence>
  )
}
