'use client'

import { useState, FormEvent } from 'react'

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', mobile: '', email: '', message: '' })
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
        setFormData({ name: '', mobile: '', email: '', message: '' })
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
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-mono mb-2" style={{ color: '#00ff41' }}>Name</label>
          <input
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="Your name"
            className="w-full px-4 py-3 rounded font-mono text-sm text-text-primary placeholder-gray-600 outline-none transition-all duration-200 focus:ring-1"
            style={{
              backgroundColor: 'rgba(13, 17, 23, 0.8)',
              border: '1px solid rgba(0, 255, 65, 0.15)',
            }}
          />
        </div>
        <div>
          <label className="block text-sm font-mono mb-2" style={{ color: '#00ff41' }}>Mobile</label>
          <input
            type="tel"
            value={formData.mobile}
            onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
            placeholder="Your mobile number"
            className="w-full px-4 py-3 rounded font-mono text-sm text-text-primary placeholder-gray-600 outline-none transition-all duration-200 focus:ring-1"
            style={{
              backgroundColor: 'rgba(13, 17, 23, 0.8)',
              border: '1px solid rgba(0, 255, 65, 0.15)',
            }}
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-mono mb-2" style={{ color: '#00ff41' }}>Email</label>
        <input
          type="email"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          placeholder="your@email.com"
          className="w-full px-4 py-3 rounded font-mono text-sm text-text-primary placeholder-gray-600 outline-none transition-all duration-200 focus:ring-1"
          style={{
            backgroundColor: 'rgba(13, 17, 23, 0.8)',
            border: '1px solid rgba(0, 255, 65, 0.15)',
          }}
        />
      </div>
      <div>
        <label className="block text-sm font-mono mb-2" style={{ color: '#00ff41' }}>Message</label>
        <textarea
          rows={5}
          required
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="Your message..."
          className="w-full px-4 py-3 rounded font-mono text-sm text-text-primary placeholder-gray-600 outline-none transition-all duration-200 resize-none focus:ring-1"
          style={{
            backgroundColor: 'rgba(13, 17, 23, 0.8)',
            border: '1px solid rgba(0, 255, 65, 0.15)',
          }}
        />
      </div>

      <div className="flex items-center gap-4">
        <button
          type="submit"
          disabled={status === 'sending'}
          className="px-8 py-3 rounded font-mono text-sm transition-all duration-200"
          style={{
            backgroundColor: status === 'sending' ? 'rgba(0, 255, 65, 0.2)' : 'rgba(0, 255, 65, 0.1)',
            border: '1px solid rgba(0, 255, 65, 0.4)',
            color: '#00ff41',
            cursor: status === 'sending' ? 'wait' : 'pointer',
          }}
        >
          {status === 'sending' ? 'Sending...' : 'Send Message →'}
        </button>

        {status === 'success' && (
          <span className="font-mono text-sm" style={{ color: '#00ff41' }}>
            ✓ Message sent successfully!
          </span>
        )}
        {status === 'error' && (
          <span className="font-mono text-sm" style={{ color: '#ff5f57' }}>
            ✗ Failed to send. Try again.
          </span>
        )}
      </div>
    </form>
  )
}
