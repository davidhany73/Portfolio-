import React from 'react'
import { portfolioData } from '../data/portfolioData'

export default function Certifications() {
  const { certifications } = portfolioData

  return (
    <section id="certifications">
      <div className="container">
        <div className="section-header">
          <span className="section-pretitle"><i className="fas fa-certificate" /> VERIFIED // ACCREDITATIONS</span>
          <h2 className="section-title holo-title">Certifications & Awards</h2>
          <p className="section-subtitle">Globally accredited professional certifications and university recognitions.</p>
        </div>

        <div className="certs-grid">
          {certifications.map((c, i) => (
            <div className="cert-card holo-border" key={i}>
              <div className="cert-badge-icon">
                <i className={`${c.iconPrefix || 'fas'} ${c.icon}`} />
              </div>
              <h3 className="cert-name">{c.name}</h3>
              <p className="cert-issuer" style={{ color: '#0f172a', fontWeight: '700' }}>{c.issuer}</p>
              <div className="cert-date"><i className="far fa-clock" /> {c.date}</div>
              <span className="cert-verify-tag" style={{ color: '#0f172a', fontWeight: '700' }}>
                <i className="fas fa-shield-check" style={{ color: '#059669' }} /> {c.tag}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
