import React, { useContext, useState } from 'react'
import { TouchableOpacity } from 'react-native'
import ThreeHero from './ThreeHero'
import { AudioContext } from '../App'
import { openLinkedIn, openGitHub } from '../utils/linking'
import { portfolioData } from '../data/portfolioData'

export default function Hero({ onOpenCV }) {
  const { playBeep } = useContext(AudioContext)
  const [imgError, setImgError] = useState(false)
  const basePath = import.meta.env.BASE_URL || './'
  const { personalInfo } = portfolioData

  return (
    <section className="hero-section" id="hero">
      <div className="container hero-grid">
        <div className="hero-content">
          
          {/* Top Tagline */}
          <div className="hero-tagline-wrapper holo-border">
            <i className="fas fa-shield-halved text-cyan" />
            <span>PROTOCOL 0x7E // QUANTUM DEFENSE & NEURAL AI</span>
          </div>

          {/* Profile Picture & Identity Badge Header */}
          <div className="hero-profile-header">
            <div className="profile-avatar-wrapper">
              <div className="profile-scanner-ring" />
              <img
                src={imgError ? 'https://avatars.githubusercontent.com/u/347058330?v=4' : personalInfo.avatar}
                alt={personalInfo.name}
                className="profile-avatar-img"
                onError={() => setImgError(true)}
              />
              <span className="profile-status-blip" title="System Status: Active" />
            </div>

            <div className="profile-meta-text">
              <span className="profile-handle-badge">
                <i className="fab fa-github text-green" /> @{portfolioData.socialLinks.githubUsername}
              </span>
              <span className="profile-location-text">
                <i className="fas fa-location-dot text-cyan" /> {personalInfo.location}
              </span>
            </div>
          </div>

          <h1 className="hero-name holo-title">{personalInfo.name}</h1>
          <div className="hero-alt-name">
            <span>Also known as <strong>{personalInfo.preferredName}</strong></span>
          </div>

          <div className="hero-role">
            <span style={{ color: '#000000', fontWeight: '800' }}>{personalInfo.title}</span>
          </div>

          <p className="hero-description">
            {personalInfo.tagline}
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
              href={`${basePath}${personalInfo.cvFileName}`}
              download="David_Hany_CV.pdf"
              className="cyber-btn cyber-btn-outline"
              onMouseEnter={() => playBeep(850, 0.03)}
            >
              <i className="fas fa-download text-cyan" />
              <span>Download PDF</span>
            </a>

            {/* Verified LinkedIn with True Checkmark */}
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => { playBeep(900, 0.03); openLinkedIn() }}
              style={{ textDecoration: 'none' }}
            >
              <div className="cyber-btn cyber-btn-linkedin">
                <i className="fab fa-linkedin-in text-cyan" />
                <span>LinkedIn</span>
                <i className="fas fa-check text-green" style={{ fontSize: '0.85rem' }} />
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
            {personalInfo.metrics.map((m, i) => (
              <div className="metric-item" key={i}>
                <span className="metric-value" style={{ color: '#000000', fontWeight: '900' }}>
                  {m.value}
                </span>
                <span className="metric-label">{m.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 3D Holographic Core Canvas */}
        <ThreeHero />
      </div>
    </section>
  )
}
