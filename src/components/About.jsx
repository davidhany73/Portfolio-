import React from 'react'

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <div className="section-header">
          <span className="section-pretitle"><i className="fas fa-fingerprint" /> SEC_PROFILE // BIO</span>
          <h2 className="section-title">About David Hany</h2>
          <p className="section-subtitle">Bridging offensive cybersecurity tactics with edge artificial intelligence.</p>
        </div>

        <div className="about-grid">
          <div className="about-cyber-terminal">
            <div className="terminal-header">
              <div className="terminal-dots">
                <span className="dot dot-red" />
                <span className="dot dot-yellow" />
                <span className="dot dot-green" />
              </div>
              <span className="terminal-title">david@cyber-node:~# identity-check --verbose</span>
              <span className="font-mono text-cyan" style={{ fontSize: '0.7rem' }}>
                <i className="fas fa-lock" /> SSL_SECURE
              </span>
            </div>
            <div className="terminal-body">
              <p><span className="term-cmd">target@system:~$</span> whoami</p>
              <p className="term-output">&gt; <span className="term-val">David Hany</span> – Cyber Security & AI Engineer</p>
              <br />
              <p><span className="term-cmd">target@system:~$</span> fetch-education --institution "PUA"</p>
              <p className="term-output">&gt; <span className="term-param">Degree:</span> B.Sc. Computer Science and AI</p>
              <p className="term-output">&gt; <span className="term-param">Specialization:</span> Cyber Security</p>
              <p className="term-output">&gt; <span className="term-param">University:</span> Pharos University, Alexandria, Egypt</p>
              <p className="term-output">&gt; <span className="term-param">Timeline:</span> 2022 – 2026 (Expected) | GPA: 2.7</p>
              <br />
              <p><span className="term-cmd">target@system:~$</span> cat /etc/security-doctrine.conf</p>
              <p className="term-output">&gt; Core Strategy: Offensive Red Team verification backing automated Runtime Application Self-Protection (RASP) and Edge neural classification.</p>
              <p className="term-output">&gt; Native: Arabic | Fluent: English (Professional)</p>
            </div>
          </div>

          <div className="about-content">
            <p className="about-bio-lead">
              I specialize in identifying critical attack vectors, hardening operating environments,
              and infusing intelligent AI systems directly at the edge.
            </p>
            <p className="about-bio-text">
              Currently pursuing my <span className="text-cyan">B.Sc. in Computer Science and AI</span> with
              a concentrated focus on Cyber Security at Pharos University in Alexandria. My background blends
              extensive hands-on experience in telecommunications network defense, penetration testing with
              Metasploit, packet inspection with Wireshark, and developing autonomous Edge AI security paradigms.
            </p>

            <div className="about-features-grid">
              {[
                { icon: 'fa-crosshairs', title: 'Red Teaming & C2', desc: 'Custom C2 framework architecture, payload creation, and penetration testing.' },
                { icon: 'fa-brain', title: 'Edge AI & Vision', desc: 'Real-time classification using OpenCV, TensorFlow Lite, and embedded models.' },
                { icon: 'fa-shield-virus', title: 'RASP & HIPS', desc: 'Host-based intrusion prevention and application self-protection against tampering.' },
                { icon: 'fa-key', title: 'Cryptography', desc: 'Cryptographic protocols, blockchain digital signatures, and secure transaction logs.' },
              ].map(f => (
                <div className="feature-box" key={f.title}>
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
