import React, { useContext, useState } from 'react'
import { AudioContext } from '../App'

export default function Navbar() {
  const { audioEnabled, setAudioEnabled, playBeep, playChirp } = useContext(AudioContext)
  const [mobileOpen, setMobileOpen] = useState(false)

  const links = [
    { href: '#hero', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#skills', label: 'Skills' },
    { href: '#certifications', label: 'Certs' },
    { href: '#contact', label: 'Contact' },
  ]

  const toggleAudio = () => {
    setAudioEnabled(prev => !prev)
    if (!audioEnabled) playChirp(880)
  }

  return (
    <nav className="nav-hud">
      <a href="#hero" className="brand-badge">
        <div className="brand-hex">DH</div>
        <div className="brand-text">
          <span className="brand-title">DAVID HANY</span>
          <span className="brand-status">
            <span className="pulse-dot" /> SEC_CORE: ACTIVE
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
        <button
          className={`audio-toggle-btn ${audioEnabled ? 'active' : ''}`}
          onClick={toggleAudio}
          title={audioEnabled ? 'Sound: Enabled' : 'Sound: Muted'}
        >
          <i className={`fas ${audioEnabled ? 'fa-volume-up' : 'fa-volume-mute'}`} />
        </button>

        <a href="#contact" className="cyber-btn cyber-btn-primary nav-connect-btn">
          <span>CONNECT</span>
        </a>

        <button
          className="mobile-toggle"
          onClick={() => setMobileOpen(prev => !prev)}
          aria-label="Menu"
        >
          <i className={`fas ${mobileOpen ? 'fa-times' : 'fa-bars'}`} />
        </button>
      </div>
    </nav>
  )
}
