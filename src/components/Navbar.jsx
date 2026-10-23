import React, { useContext, useState } from 'react'
import { AudioContext } from '../App'
import { openLinkedIn } from '../utils/linking'
import { portfolioData } from '../data/portfolioData'

export default function Navbar({ onOpenCV }) {
  const { audioEnabled, setAudioEnabled, playBeep, playChirp } = useContext(AudioContext)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { personalInfo } = portfolioData

  const links = [
    { href: '#hero', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#experience', label: 'Experience' },
    { href: '#skills', label: 'Skills' },
    { href: '#certifications', label: 'Certs' },
    { href: '#contact', label: 'Contact' },
  ]

  const toggleAudio = () => {
    setAudioEnabled(prev => !prev)
    if (!audioEnabled) playChirp(880)
  }

  return (
    <nav className="nav-hud holo-glass">
      <a href="#hero" className="brand-badge">
        <div className="brand-hex">DB</div>
        <div className="brand-text">
          <span className="brand-title">{personalInfo.name.toUpperCase()}</span>
          <span className="brand-status">
            <span className="pulse-dot" /> CYBER // AI DEVELOPER
          </span>
        </div>
      </a>

      <ul className={`nav-links ${mobileOpen ? 'open' : ''}`} id="nav-links">
        {links.map(link => (
          <li key={link.href}>
            <a
              href={link.href}
              className="nav-link"
              onClick={() => { setMobileOpen(false); playBeep(850, 0.03) }}
              onMouseEnter={() => playBeep(850, 0.03)}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      <div className="nav-actions">
        {/* Verified LinkedIn Button */}
        <button
          onClick={() => { playBeep(950, 0.04); openLinkedIn() }}
          className="cyber-icon-btn holo-btn"
          title={`Connect on LinkedIn (${portfolioData.socialLinks.linkedinDisplay})`}
          aria-label="LinkedIn Profile"
        >
          <i className="fab fa-linkedin-in text-cyan" />
        </button>

        {/* Audio Toggle */}
        <button
          className={`cyber-icon-btn ${audioEnabled ? 'active' : ''}`}
          onClick={toggleAudio}
          title={audioEnabled ? 'Sound: Enabled' : 'Sound: Muted'}
          aria-label="Toggle Sound"
        >
          <i className={`fas ${audioEnabled ? 'fa-volume-up' : 'fa-volume-mute'}`} />
        </button>

        {/* CV Preview Trigger */}
        <button
          onClick={() => { playBeep(900, 0.04); onOpenCV() }}
          className="cyber-btn cyber-btn-primary nav-connect-btn"
        >
          <i className="fas fa-file-pdf" />
          <span>RESUME</span>
        </button>

        {/* Mobile Hamburger */}
        <button
          className="mobile-toggle"
          onClick={() => setMobileOpen(prev => !prev)}
          aria-label="Toggle Navigation"
        >
          <i className={`fas ${mobileOpen ? 'fa-times' : 'fa-bars'}`} />
        </button>
      </div>
    </nav>
  )
}
