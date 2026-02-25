import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import SpotlightCursor from '@/components/SpotlightCursor'
import SocialSidebar from '@/components/SocialSidebar'
import AnimatedLayout from '@/components/AnimatedLayout'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Backend Engineer Portfolio',
  description: 'Professional portfolio for a backend engineer specializing in system design and scalability',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SpotlightCursor />
        <Navbar />
        <SocialSidebar />
        <main className="min-h-screen">
          <AnimatedLayout>
            {children}
          </AnimatedLayout>
        </main>
        <Footer />
      </body>
    </html>
  )
}
