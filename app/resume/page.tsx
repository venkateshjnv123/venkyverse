export default function ResumePage() {
  return (
    <div style={{ backgroundColor: 'transparent' }} className="min-h-screen">
      <div className="max-w-5xl mx-auto px-6 py-12 relative z-10">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold font-mono" style={{ color: '#00ff41' }}>Resume</h1>
          <a
            href="/resume.pdf"
            download="Venkatesh_Patnala_Resume.pdf"
            className="px-5 py-2.5 rounded font-mono text-sm transition-all duration-200 inline-flex items-center gap-2"
            style={{
              border: '1px solid rgba(0, 255, 65, 0.4)',
              color: '#00ff41',
              backgroundColor: 'rgba(0, 255, 65, 0.05)',
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Download PDF
          </a>
        </div>

        <div
          className="rounded-lg overflow-hidden"
          style={{ border: '1px solid rgba(0, 255, 65, 0.15)' }}
        >
          <object
            data="/resume.pdf"
            type="application/pdf"
            className="w-full"
            style={{ height: 'calc(100vh - 180px)', minHeight: '600px' }}
          >
            <div className="flex flex-col items-center justify-center py-20 gap-4">
              <p className="text-text-secondary font-mono text-sm">
                PDF preview not supported in this browser.
              </p>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded font-mono text-sm inline-flex items-center gap-2"
                style={{
                  border: '1px solid rgba(0, 255, 65, 0.4)',
                  color: '#00ff41',
                  backgroundColor: 'rgba(0, 255, 65, 0.05)',
                }}
              >
                Open PDF in new tab
              </a>
            </div>
          </object>
        </div>
      </div>
    </div>
  )
}
