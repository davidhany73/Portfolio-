import React from 'react'
import { portfolioData } from '../data/portfolioData'

export default function About() {
  const { personalInfo, education } = portfolioData
  const edu = education[0] || {}

  return (
    <section id="about">
      <div className="container">
        <div className="section-header">
          <span className="section-pretitle"><i className="fas fa-fingerprint" /> OPERATOR_PROFILE // DOSSIER</span>
          <h2 className="section-title holo-title">About {personalInfo.name}</h2>
          <p className="section-subtitle">Bridging offensive cybersecurity tactics with edge artificial intelligence.</p>
        </div>

        <div className="about-grid">
          {/* Cyber Terminal Emulator */}
          <div className="about-cyber-terminal">
            <div className="terminal-header">
              <div className="terminal-dots">
                <span className="dot dot-red" />
                <span className="dot dot-yellow" />
                <span className="dot dot-green" />
              </div>
              <span className="terminal-title">david@cyber-node:~# identity-check --target davidhany73</span>
              <span className="font-mono text-cyan" style={{ fontSize: '0.7rem' }}>
                <i className="fas fa-lock" /> SSL_SECURE
              </span>
            </div>
            <div className="terminal-body">
              <p><span className="term-cmd">operator@system:~$</span> whoami</p>
              <p className="term-output">&gt; <span className="term-val">{personalInfo.name}</span> ({personalInfo.preferredName})</p>
              <p className="term-output">&gt; <span className="term-param">Title:</span> {personalInfo.title}</p>
              <br />
              <p><span className="term-cmd">operator@system:~$</span> fetch-education --institution "PUA"</p>
              <p className="term-output">&gt; <span className="term-param">Degree:</span> {edu.degree}</p>
              <p className="term-output">&gt; <span className="term-param">Specialization:</span> {edu.specialization}</p>
              <p className="term-output">&gt; <span className="term-param">University:</span> {edu.institution}</p>
              <p className="term-output">&gt; <span className="term-param">Timeline:</span> {edu.period} | GPA: {edu.gpa}</p>
              <br />
              <p><span className="term-cmd">operator@system:~$</span> cat /etc/github-metrics.conf</p>
              <p className="term-output">&gt; GitHub Account: github.com/{portfolioData.socialLinks.githubUsername}</p>
              <p className="term-output">&gt; Repositories: 11 active systems (Python, C, C++, Web3, Flask)</p>
              <p className="term-output">&gt; Focus: Banking fraud classification, encrypted chat, biometric AI</p>
            </div>
          </div>

          {/* Dossier Content */}
          <div className="about-content">
            <p className="about-bio-lead">
              {personalInfo.bioLead}
            </p>
            <p className="about-bio-text">
              {personalInfo.bioDetails}
            </p>

            <div className="about-features-grid">
              {[
                { icon: 'fa-crosshairs', title: 'Red Teaming & C2', desc: 'Custom penetration tools, brute force simulation, and security auditing.' },
                { icon: 'fa-brain', title: 'Edge AI & Biometrics', desc: 'Multimodal attendance pipelines, OpenCV facial recognition, and fraud ML.' },
                { icon: 'fa-shield-halved', title: 'Encrypted Networks', desc: 'End-to-end socket communications, C crypto engines, and key agreement.' },
                { icon: 'fa-cube', title: 'Web3 & Full-Stack', desc: 'Ethereum crypto wallets, Flask relational DBs, and embedded robotics.' },
              ].map(f => (
                <div className="feature-box holo-border" key={f.title}>
                  <div className="feature-icon"><i className={`fas ${f.icon}`} /></div>
                  <h3 className="feature-title">{f.title}</h3>
                  <p className="feature-desc">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
