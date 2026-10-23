import React from 'react'

const certs = [
  {
    icon: 'fa-network-wired',
    name: 'Cisco CCNA (200-301) Training Program',
    issuer: 'WE Telecommunications • 120 Hours',
    date: 'Aug 2024 – Sep 2024',
    tag: 'Verified Intensive',
    style: {},
    tagStyle: {},
  },
  {
    icon: 'fa-lock',
    name: 'CompTIA Security+ Certification',
    issuer: 'CompTIA Online',
    date: '2024',
    tag: 'Globally Recognized',
    style: { color: 'var(--purple-neon)', borderColor: 'var(--purple-neon)' },
    tagStyle: {},
  },
  {
    icon: 'fa-google',
    iconPrefix: 'fab',
    name: 'Google Cybersecurity Professional Certificate',
    issuer: 'Coursera • Google',
    date: '2023',
    tag: 'Professional Credential',
    style: { color: 'var(--green-cyber)', borderColor: 'var(--green-cyber)' },
    tagStyle: {},
  },
  {
    icon: 'fa-trophy',
    name: 'Certificate of Appreciation (Talent Day Show)',
    issuer: 'Pharos University • Alexandria',
    date: 'Feb 2023',
    tag: 'University Honor',
    style: { color: '#ffbd2e', borderColor: '#ffbd2e' },
    tagStyle: { color: '#ffbd2e', borderColor: 'rgba(255,189,46,0.3)', background: 'rgba(255,189,46,0.1)' },
    tagIcon: 'fa-star',
  },
]

export default function Certifications() {
  return (
    <section id="certifications">
      <div className="container">
        <div className="section-header">
          <span className="section-pretitle"><i className="fas fa-certificate" /> VERIFIED // CREDENTIALS</span>
          <h2 className="section-title">Certifications & Awards</h2>
          <p className="section-subtitle">Globally accredited professional certifications and university recognitions.</p>
        </div>

        <div className="certs-grid">
          {certs.map((c, i) => (
            <div className="cert-card" key={i}>
              <div className="cert-badge-icon" style={c.style}>
                <i className={`${c.iconPrefix || 'fas'} ${c.icon}`} />
              </div>
              <h3 className="cert-name">{c.name}</h3>
              <p className="cert-issuer">{c.issuer}</p>
              <div className="cert-date"><i className="far fa-clock" /> {c.date}</div>
              <span className="cert-verify-tag" style={c.tagStyle || {}}>
                <i className={`fas ${c.tagIcon || 'fa-shield-check'}`} /> {c.tag}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
