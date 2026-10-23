import React from 'react'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-content">
        <div className="footer-credits">
          <p>&copy; 2026 David Hany. Engineered for Cyber Security & Artificial Intelligence.</p>
          <p style={{ marginTop: '0.25rem' }}>Built with React, Three.js & Cyber Dark UI.</p>
        </div>
        <div className="footer-socials">
          {[
            { href: 'https://github.com/davidhany10', icon: 'fab fa-github', title: 'GitHub' },
            { href: 'https://www.linkedin.com/in/david-hany', icon: 'fab fa-linkedin-in', title: 'LinkedIn' },
            { href: 'mailto:202201324@pua.edu.eg', icon: 'fas fa-envelope', title: 'Email' },
            { href: 'tel:+201212222818', icon: 'fas fa-phone', title: 'Phone' },
          ].map(s => (
            <a key={s.title} href={s.href} target="_blank" rel="noopener noreferrer" className="social-link" title={s.title}>
              <i className={s.icon} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
