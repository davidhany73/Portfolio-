import React from 'react'

export default function CVModal({ isOpen, onClose }) {
  if (!isOpen) return null
  const basePath = import.meta.env.BASE_URL || './'
  const cvUrl = `${basePath}David_Hany_CV.pdf`

  return (
    <div className="modal-backdrop open" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '920px' }}>
        <div className="modal-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <i className="fas fa-file-invoice text-cyan" style={{ fontSize: '1.2rem' }} />
            <div>
              <h3 className="modal-title" style={{ fontSize: '1.05rem', lineHeight: '1.2' }}>David Hany &bull; Curriculum Vitae</h3>
              <span className="font-mono text-cyan" style={{ fontSize: '0.68rem', letterSpacing: '0.05em' }}>
                VERIFIED ATS FORMAT &bull; 2 PAGES &bull; 11 GITHUB REPOSITORIES
              </span>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <a
              href={cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="cyber-btn cyber-btn-outline hide-mobile"
              style={{ padding: '0.45rem 0.85rem', fontSize: '0.75rem' }}
              title="Open CV in separate tab"
            >
              <i className="fas fa-arrow-up-right-from-square text-cyan" /> Fullscreen
            </a>
            <a
              href={cvUrl}
              download="David_Hany_CV.pdf"
              className="cyber-btn cyber-btn-primary"
              style={{ padding: '0.45rem 0.95rem', fontSize: '0.75rem' }}
            >
              <i className="fas fa-download" /> Download CV
            </a>
            <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">&times;</button>
          </div>
        </div>

        <div className="modal-content-scroll" style={{ padding: '1rem' }}>
          {/* PDF Viewer with Full Controls */}
          <div style={{ width: '100%', height: '620px', background: '#0a0e16', borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--border-cyber)' }}>
            <object
              data={`${cvUrl}#toolbar=1&navpanes=0`}
              type="application/pdf"
              width="100%"
              height="100%"
              style={{ border: 'none' }}
            >
              <iframe
                src={`${cvUrl}#toolbar=1`}
                title="David Hany CV"
                width="100%"
                height="100%"
                style={{ border: 'none' }}
              >
                <div style={{ textAlign: 'center', padding: '3rem 1.5rem', color: '#94a3b8' }}>
                  <p style={{ marginBottom: '1rem', fontSize: '1rem' }}>Your device does not support inline PDF viewing.</p>
                  <a
                    href={cvUrl}
                    download="David_Hany_CV.pdf"
                    className="cyber-btn cyber-btn-primary"
                  >
                    <i className="fas fa-download" /> Click Here to Download David_Hany_CV.pdf
                  </a>
                </div>
              </iframe>
            </object>
          </div>
        </div>
      </div>
    </div>
  )
}
