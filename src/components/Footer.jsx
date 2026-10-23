import React, { useContext } from 'react'
import { AudioContext } from '../App'
import { openLinkedIn, openGitHub, LINKEDIN_URL, GITHUB_URL, EMAIL_ADDRESS, PHONE_NUMBER } from '../utils/linking'

export default function Footer() {
  const { playBeep } = useContext(AudioContext)

  return (
    <footer className="site-footer">
      <div className="container footer-content">
        <div className="footer-credits">
          <p className="font-display" style={{ color: '#fff', fontSize: '0.95rem' }}>
            &copy; 2026 DAVID HANY &bull; CYBER SECURITY & AI ENGINEER
          </p>
          <p style={{ marginTop: '0.25rem', color: 'var(--text-dim)', fontSize: '0.8rem' }}>
            Engineered with React Native for Web &bull; Three.js 3D Holo-Core &bull; Alexandria, Egypt
          </p>
        </div>
        <div className="footer-socials">
          <button
            onClick={() => { playBeep(900, 0.03); openLinkedIn() }}
            className="social-link holo-btn"
            title="LinkedIn (david-hany-naeam-a9485032b)"
            aria-label="LinkedIn"
          >
            <i className="fab fa-linkedin-in text-cyan" />
          </button>
          <button
            onClick={() => { playBeep(900, 0.03); openGitHub() }}
            className="social-link holo-btn"
            title="GitHub (davidhany10)"
            aria-label="GitHub"
          >
            <i className="fab fa-github text-green" />
          </button>
          <a
            href={`mailto:${EMAIL_ADDRESS}`}
            className="social-link"
            title="Email"
            onClick={() => playBeep(900, 0.03)}
          >
            <i className="fas fa-envelope text-purple" />
          </a>
          <a
            href={`tel:${PHONE_NUMBER.replace(/\s+/g, '')}`}
            className="social-link"
            title="Phone"
            onClick={() => playBeep(900, 0.03)}
          >
            <i className="fas fa-phone text-cyan" />
          </a>
        </div>
      </div>
    </footer>
  )
}
