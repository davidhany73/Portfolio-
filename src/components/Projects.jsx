import React, { useState, useRef, useContext } from 'react'
import { AudioContext } from '../App'

const projectsData = [
  {
    title: 'UpHeal / MindQuest',
    category: 'rasp ai',
    icon: 'fa-shield-cat',
    iconColor: null,
    badge: 'Graduation Project',
    badgeClass: 'badge-featured',
    desc: 'Engineered a multi-layered Android security paradigm featuring a Host-Based Intrusion Prevention System (HIPS), Edge AI for real-time visual classification, and Runtime Application Self-Protection (RASP) against reverse-engineering and runtime hooking.',
    tags: ['Android Security', 'Edge AI', 'RASP', 'TensorFlow Lite', 'HIPS'],
    linkColor: null,
  },
  {
    title: 'Custom C2 Framework (Craxs RAT)',
    category: 'c2',
    icon: 'fa-skull',
    iconColor: 'var(--red-alert)',
    badge: 'Red Team Tool',
    badgeClass: 'badge-redteam',
    desc: 'Developed a Python-based Command and Control (C2) server and client payload architecture simulating remote shell access, automated directory traversal, and cryptographic file operations for red team penetration testing.',
    tags: ['Python', 'C2 Architecture', 'Socket Programming', 'Cryptography', 'Red Team'],
    linkColor: 'var(--red-alert)',
  },
  {
    title: 'Automated Attendance System',
    category: 'ai',
    icon: 'fa-eye',
    iconColor: 'var(--green-cyber)',
    badge: 'Computer Vision',
    badgeClass: 'badge-ai',
    desc: 'Architected an intelligent biometric tracking system utilizing OpenCV and Python for automated facial recognition, real-time feature extraction, and verifiable attendance recording with database synchronization.',
    tags: ['Python', 'OpenCV', 'Facial Recognition', 'NumPy'],
    linkColor: 'var(--green-cyber)',
  },
  {
    title: 'Blockchain Wallet',
    category: 'crypto',
    icon: 'fa-cube',
    iconColor: null,
    badge: 'Cryptography',
    badgeClass: 'badge-featured',
    desc: 'Engineered a cryptographically secure digital transaction wallet implementing asymmetric key generation, SHA-256 hash chains, and digital signatures to guarantee untampered ledger transactions.',
    tags: ['Cryptography', 'SHA-256', 'Digital Signatures', 'Public-Key Infra'],
    linkColor: null,
  },
  {
    title: 'Secure Banking App Prototype',
    category: 'crypto',
    icon: 'fa-vault',
    iconColor: null,
    badge: 'FinTech Security',
    badgeClass: 'badge-featured',
    desc: 'Simulated a resilient enterprise banking application in Java featuring secure transaction processing pipelines, encrypted credential stores, and tamper-resistant audit activity logging.',
    tags: ['Java', 'Secure Transactions', 'Audit Logging', 'Encryption'],
    linkColor: null,
  },
  {
    title: 'Social Media DB Clone',
    category: 'crypto',
    icon: 'fa-database',
    iconColor: null,
    badge: 'Backend & DB',
    badgeClass: 'badge-featured',
    desc: 'Rebuilt and optimized a scalable relational database clone utilizing MySQL schemas for high-concurrency data storage, paired with a Flask RESTful framework for backend feature testing.',
    tags: ['MySQL', 'Flask', 'Python', 'REST APIs'],
    linkColor: null,
  },
]

const filters = [
  { label: 'All Systems', value: 'all' },
  { label: 'Edge AI & RASP', value: 'rasp' },
  { label: 'Red Team & C2', value: 'c2' },
  { label: 'Vision & AI', value: 'ai' },
  { label: 'Crypto & Backend', value: 'crypto' },
]

function TiltCard({ project, onHoverSound }) {
  const ref = useRef(null)

  const handleMove = (e) => {
    const card = ref.current
    if (!card) return
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const cx = rect.width / 2
    const cy = rect.height / 2
    const rotateX = ((y - cy) / cy) * -12
    const rotateY = ((x - cx) / cx) * 12
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`
    card.style.setProperty('--mouse-x', `${(x / rect.width) * 100}%`)
    card.style.setProperty('--mouse-y', `${(y / rect.height) * 100}%`)
  }

  const handleLeave = () => {
    if (ref.current) ref.current.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1,1,1)'
  }

  const iconStyle = project.iconColor
    ? { borderColor: project.iconColor, color: project.iconColor }
    : {}

  return (
    <div
      className="project-card"
      ref={ref}
      data-category={project.category}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      onMouseEnter={onHoverSound}
    >
      <div className="project-top">
        <div className="project-header-meta">
          <div className="project-icon-box" style={iconStyle}>
            <i className={`fas ${project.icon}`} />
          </div>
          <span className={`project-badge ${project.badgeClass}`}>{project.badge}</span>
        </div>
        <h3 className="project-title">{project.title}</h3>
        <p className="project-desc">{project.desc}</p>
      </div>
      <div className="project-bottom">
        <div className="project-tags">
          {project.tags.map(t => <span className="tag-chip" key={t}>{t}</span>)}
        </div>
        <div className="project-actions">
          <a
            href="https://github.com/davidhany10"
            target="_blank"
            rel="noopener noreferrer"
            className="project-link-btn"
            style={project.linkColor ? { color: project.linkColor } : {}}
          >
            <span>View Code</span> <i className="fas fa-arrow-up-right-from-square" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  const [filter, setFilter] = useState('all')
  const { playBeep } = useContext(AudioContext)

  const filtered = filter === 'all'
    ? projectsData
    : projectsData.filter(p => p.category.includes(filter))

  return (
    <section id="projects">
      <div className="container">
        <div className="section-header">
          <span className="section-pretitle"><i className="fas fa-microchip" /> DEPLOYED ARTIFACTS // LAB</span>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">Interactive 3D cards displaying offensive frameworks, intelligent defenses, and secure prototypes.</p>
        </div>

        <div className="projects-filter-bar">
          {filters.map(f => (
            <button
              key={f.value}
              className={`filter-btn ${filter === f.value ? 'active' : ''}`}
              onClick={() => { setFilter(f.value); playBeep(850, 0.03) }}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filtered.map(p => (
            <TiltCard
              key={p.title}
              project={p}
              onHoverSound={() => playBeep(850, 0.03)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
