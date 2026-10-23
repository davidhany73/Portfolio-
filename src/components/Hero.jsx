import React, { useContext } from 'react'
import ThreeHero from './ThreeHero'
import { AudioContext } from '../App'

export default function Hero({ onOpenCV }) {
  const { playBeep } = useContext(AudioContext)
  const basePath = import.meta.env.BASE_URL || './'

  return (
    <section className="hero-section" id="hero">
      <div className="container hero-grid">
        <div className="hero-content">
          <div className="hero-tagline-wrapper">
            <i className="fas fa-shield-halved" />
            <span>SYSTEM PROTOCOL 0x7E • DEFENSE & INTELLIGENCE</span>
          </div>

          <h1 className="hero-name">David Hany</h1>
          <div className="hero-role">
            <span>Cyber Security</span>
            <span className="hero-role-separator">&bull;</span>
            <span className="text-green glow-green">AI Engineer</span>
          </div>

          <p className="hero-description">
            Securing mission-critical digital landscapes and engineering resilient{' '}
            <span className="hero-highlight">Edge AI & RASP frameworks</span>. Bridging offensive
            red-team penetration testing with proactive neural defense architectures.
          </p>

          <div className="hero-cta-group">
            <button
              onClick={() => { onOpenCV(); playBeep(850, 0.03) }}
              className="cyber-btn cyber-btn-primary"
              style={{ border: 'none', cursor: 'pointer' }}
            >
              <i className="fas fa-file-pdf" />
              <span>Preview CV</span>
            </button>
            <a
              href={`${basePath}David_Hany_CV.pdf`}
              download="David_Hany_CV.pdf"
              className="cyber-btn cyber-btn-outline"
              onMouseEnter={() => playBeep(850, 0.03)}
            >
              <i className="fas fa-download text-cyan" />
              <span>Download CV</span>
            </a>
            <a
              href="https://www.linkedin.com/in/david-hany"
              target="_blank"
              rel="noopener noreferrer"
              className="cyber-btn cyber-btn-outline"
              onMouseEnter={() => playBeep(850, 0.03)}
            >
              <i className="fab fa-linkedin-in text-purple" />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://github.com/davidhany10"
              target="_blank"
              rel="noopener noreferrer"
              className="cyber-btn cyber-btn-ghost"
              onMouseEnter={() => playBeep(850, 0.03)}
            >
              <i className="fab fa-github text-green" />
              <span>GitHub</span>
            </a>
          </div>

          <div className="hero-metrics">
            <div className="metric-item">
              <span className="metric-value text-cyan">120+</span>
              <span className="metric-label">Telecom Sec Hours</span>
            </div>
            <div className="metric-item">
              <span className="metric-value text-green">6+</span>
              <span className="metric-label">Engineered Systems</span>
            </div>
            <div className="metric-item">
              <span className="metric-value text-purple">4</span>
              <span className="metric-label">Accreditations</span>
            </div>
          </div>
        </div>

        <ThreeHero />
      </div>
    </section>
  )
}
