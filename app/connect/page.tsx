'use client'

import { useState, FormEvent } from 'react'

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
    <div className="relative h-screen overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">
        <section className="py-20">
        <div className="flex items-baseline gap-6 mb-12">
          <span className="text-emerald-400/60 text-sm font-mono tracking-widest uppercase">05</span>
          <h1 className="text-4xl font-bold text-slate-100">Connect</h1>
        </div>

        <p className="text-slate-400 mb-10 leading-relaxed">
          I&apos;m open to backend engineering discussions, system design challenges, or opportunities involving scalable infrastructure and AI systems.
        </p>

        <form className="space-y-5" onSubmit={handleSubmit}>
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
        </section>
      </div>
    </div>
  )
}
