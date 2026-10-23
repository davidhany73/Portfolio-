import React, { useContext } from 'react'
import { AudioContext } from '../App'
import { openLinkedIn, openGitHub } from '../utils/linking'
import { portfolioData } from '../data/portfolioData'

export default function Footer() {
  const { playBeep } = useContext(AudioContext)
  const { personalInfo, socialLinks } = portfolioData

  return (
    <footer className="site-footer">
      <div className="container footer-content">
        <div className="footer-credits">
          <p className="font-display" style={{ color: '#fff', fontSize: '0.95rem' }}>
            &copy; 2026 {personalInfo.name.toUpperCase()} ({personalInfo.preferredName}) &bull; {personalInfo.title.toUpperCase()}
          </p>
          <p style={{ marginTop: '0.25rem', color: 'var(--text-dim)', fontSize: '0.8rem' }}>
            Engineered with React Native for Web &bull; Three.js 3D Holo-Core &bull; {personalInfo.location}
          </p>
        </div>
        <div className="footer-socials">
          <button
            onClick={() => { playBeep(900, 0.03); openLinkedIn() }}
            className="social-link holo-btn"
            title={`LinkedIn (${socialLinks.linkedinDisplay})`}
            aria-label="LinkedIn"
          >
            <i className="fab fa-linkedin-in text-cyan" />
          </button>
          <button
            onClick={() => { playBeep(900, 0.03); openGitHub() }}
            className="social-link holo-btn"
            title={`GitHub (${socialLinks.githubUsername})`}
            aria-label="GitHub"
          >
            <i className="fab fa-github text-green" />
          </button>
          <a
            href={socialLinks.email}
            className="social-link"
            title="Email"
            onClick={() => playBeep(900, 0.03)}
          >
            <i className="fas fa-envelope text-purple" />
          </a>
          <a
            href={socialLinks.phone}
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
