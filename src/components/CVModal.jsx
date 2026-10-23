import React from 'react'

export default function CVModal({ isOpen, onClose }) {
  if (!isOpen) return null
  const basePath = import.meta.env.BASE_URL || './'

  return (
    <div className="modal-backdrop open" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <i className="fas fa-id-badge text-cyan" />
            <h3 className="modal-title">David Hany &bull; Curriculum Vitae</h3>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <a
              href={`${basePath}David_Hany_CV.pdf`}
              download="David_Hany_CV.pdf"
              className="cyber-btn cyber-btn-primary"
              style={{ padding: '0.4rem 0.85rem', fontSize: '0.75rem' }}
            >
              <i className="fas fa-download" /> Download PDF
            </a>
            <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">&times;</button>
          </div>
        </div>

        <div className="modal-content-scroll">
          {/* PDF Embed / Preview */}
          <div style={{ width: '100%', height: '580px', background: '#0a0e16', borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--border-cyber)' }}>
            <iframe
              src={`${basePath}David_Hany_CV.pdf#toolbar=0`}
              title="David Hany CV"
              width="100%"
              height="100%"
              style={{ border: 'none' }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
