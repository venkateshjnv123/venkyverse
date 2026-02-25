'use client'

import { useState, FormEvent } from 'react'
import SystemBackground from '@/components/home/SystemBackground'

export default function ConnectPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setStatus('sending')

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
          subject: `Portfolio Contact: ${formData.name}`,
          from_name: formData.name,
          ...formData,
        }),
      })

      const data = await res.json()
      if (data.success) {
        setStatus('success')
        setFormData({ name: '', email: '', message: '' })
        setTimeout(() => setStatus('idle'), 5000)
      } else {
        setStatus('error')
        setTimeout(() => setStatus('idle'), 5000)
      }
    } catch {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 5000)
    }
  }

  return (
    <div className="relative">
      <SystemBackground density="low" />
      
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-20">
        <div className="flex items-baseline gap-6 mb-12">
          <span className="text-emerald-400/60 text-sm font-mono tracking-widest uppercase">05</span>
          <h1 className="text-4xl font-bold text-slate-100">Connect</h1>
        </div>

        <p className="text-slate-400 mb-16 leading-relaxed max-w-3xl">
          I&apos;m open to backend engineering discussions, system design challenges, or opportunities involving scalable infrastructure and AI systems.
        </p>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Left Column - Direct Contact Links */}
          <div className="space-y-8">
            <div>
              <h3 className="text-sm font-medium text-slate-500 mb-2 uppercase tracking-wider">Email</h3>
              <a 
                href="mailto:venkateshpatnala3@gmail.com" 
                className="text-slate-300 hover:text-emerald-400 transition-colors duration-200"
              >
                venkateshpatnala3@gmail.com
              </a>
            </div>

            <div>
              <h3 className="text-sm font-medium text-slate-500 mb-2 uppercase tracking-wider">LinkedIn</h3>
              <a 
                href="https://linkedin.com/in/venkatesh-patnala" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-emerald-400 transition-colors duration-200"
              >
                linkedin.com/in/venkatesh-patnala
              </a>
            </div>

            <div>
              <h3 className="text-sm font-medium text-slate-500 mb-2 uppercase tracking-wider">GitHub</h3>
              <a 
                href="https://github.com/venkateshpatnala" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-emerald-400 transition-colors duration-200"
              >
                github.com/venkateshpatnala
              </a>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm text-slate-400 mb-2">Name</label>
                <input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your name"
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-800 rounded-md text-slate-300 placeholder-slate-600 focus:border-emerald-400/50 focus:outline-none transition-colors duration-200"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm text-slate-400 mb-2">Email</label>
                <input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-800 rounded-md text-slate-300 placeholder-slate-600 focus:border-emerald-400/50 focus:outline-none transition-colors duration-200"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm text-slate-400 mb-2">Message</label>
                <textarea
                  id="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Your message..."
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-800 rounded-md text-slate-300 placeholder-slate-600 focus:border-emerald-400/50 focus:outline-none resize-none transition-colors duration-200"
                />
              </div>

              <div className="flex items-center gap-4">
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="px-6 py-2 border border-emerald-400/40 text-emerald-400 rounded-md hover:bg-emerald-400/10 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === 'sending' ? 'Sending...' : 'Send Message'}
                </button>

                {status === 'success' && (
                  <span className="text-sm text-emerald-400">
                    Message sent successfully
                  </span>
                )}
                {status === 'error' && (
                  <span className="text-sm text-red-400">
                    Failed to send. Try again.
                  </span>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
