import React, { useContext } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import ThreeHero from './ThreeHero'
import { AudioContext } from '../App'
import { openLinkedIn, openGitHub, LINKEDIN_URL, GITHUB_URL } from '../utils/linking'

export default function Hero({ onOpenCV }) {
  const { playBeep } = useContext(AudioContext)
  const basePath = import.meta.env.BASE_URL || './'

  return (
    <section className="hero-section" id="hero">
      <div className="container hero-grid">
        <div className="hero-content">
          <div className="hero-tagline-wrapper holo-border">
            <i className="fas fa-shield-halved text-cyan" />
            <span>PROTOCOL 0x7E // QUANTUM DEFENSE & NEURAL AI</span>
          </div>

          <h1 className="hero-name holo-title">David Hany</h1>

          <div className="hero-role">
            <span className="text-cyan">Cyber Security Specialist</span>
            <span className="hero-role-separator">&bull;</span>
            <span className="text-green glow-green">AI Engineer</span>
          </div>

          <p className="hero-description">
            Securing mission-critical networks, executing red-team penetration operations,
            and architecting resilient <span className="hero-highlight">Edge AI & RASP paradigms</span>.
            Bridging adversarial offensive testing with autonomous defense algorithms.
          </p>

          {/* React Native Touchable CTA Group */}
          <div className="hero-cta-group">
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => { playBeep(850, 0.03); onOpenCV() }}
              style={{ textDecoration: 'none' }}
            >
              <div className="cyber-btn cyber-btn-primary holo-glow">
                <i className="fas fa-eye" />
                <span>Preview CV</span>
              </div>
            </TouchableOpacity>

            <a
              href={`${basePath}David_Hany_CV.pdf`}
              download="David_Hany_CV.pdf"
              className="cyber-btn cyber-btn-outline"
              onMouseEnter={() => playBeep(850, 0.03)}
            >
              <i className="fas fa-download text-cyan" />
              <span>Download PDF</span>
            </a>

            {/* React Native LinkedIn Link (Verified) */}
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => { playBeep(900, 0.03); openLinkedIn() }}
              style={{ textDecoration: 'none' }}
            >
              <div className="cyber-btn cyber-btn-linkedin">
                <i className="fab fa-linkedin text-cyan" />
                <span>LinkedIn</span>
                <i className="fas fa-arrow-up-right-from-square" style={{ fontSize: '0.75rem', opacity: 0.8 }} />
              </div>
            </TouchableOpacity>

            {/* React Native GitHub Link */}
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => { playBeep(900, 0.03); openGitHub() }}
              style={{ textDecoration: 'none' }}
            >
              <div className="cyber-btn cyber-btn-ghost">
                <i className="fab fa-github text-green" />
                <span>GitHub</span>
              </div>
            </TouchableOpacity>
          </div>

          {/* Live Holographic Telemetry Counters */}
          <div className="hero-metrics holo-glass">
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

        {/* 3D Holographic Core Canvas */}
        <ThreeHero />
      </div>
    </section>
  )
}
