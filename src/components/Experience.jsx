import React, { useState, useContext } from 'react'
import { AudioContext } from '../App'

const experienceData = [
  {
    role: 'Cyber Security Intern',
    org: 'WE Telecommunications',
    orgIcon: 'fa-tower-broadcast',
    badge: '120 Hours Completed',
    period: '2023',
    location: 'Alexandria, Egypt',
    bullets: [
      'Conducted thorough vulnerability assessments on internal telecommunications networks utilizing <strong>Metasploit</strong> and Kali Linux security toolsets.',
      'Monitored, captured, and analyzed live network packet traffic with <strong>Wireshark</strong> to proactively detect anomalies, unauthorized intrusions, and security vulnerabilities.',
      'Assisted senior security analysts in designing, implementing, and hardening defensive network perimeter strategies.',
    ],
  },
]

const educationData = [
  {
    role: 'B.Sc. in Computer Science and AI',
    org: 'Pharos University in Alexandria',
    orgIcon: 'fa-graduation-cap',
    badge: 'Major: Cyber Security',
    period: '2022 – Expected 2026',
    location: 'Alexandria, Egypt',
    extra: 'GPA: 2.7',
    bullets: [
      'Focused coursework in Network Security, Advanced Cryptography, Operating Systems Hardening, Artificial Intelligence, and Computer Vision.',
      'Graduation Capstone: UpHeal / MindQuest — an intelligent mobile security architecture integrating Edge AI with Runtime Application Self-Protection (RASP).',
    ],
  },
]

function TimelineCards({ data }) {
  return data.map((item, i) => (
    <div className="timeline-card-wrapper" key={i}>
      <div className="timeline-node"><div className="timeline-node-inner" /></div>
      <div className="timeline-card">
        <div className="timeline-header">
          <div>
            <h3 className="timeline-role">{item.role}</h3>
            <div className="timeline-org">
              <i className={`fas ${item.orgIcon}`} /> {item.org}
            </div>
          </div>
          <span className="timeline-badge">{item.badge}</span>
        </div>
        <div className="timeline-location-period">
          <span><i className="fas fa-calendar-alt" /> {item.period}</span>
          <span><i className="fas fa-location-dot" /> {item.location}</span>
          {item.extra && <span><i className="fas fa-award" /> {item.extra}</span>}
        </div>
        <ul className="timeline-bullets">
          {item.bullets.map((b, j) => (
            <li key={j} dangerouslySetInnerHTML={{ __html: b }} />
          ))}
        </ul>
      </div>
    </div>
  ))
}

export default function Experience() {
  const [tab, setTab] = useState('experience')
  const { playBeep } = useContext(AudioContext)

  return (
    <section id="experience">
      <div className="container">
        <div className="section-header">
          <span className="section-pretitle"><i className="fas fa-network-wired" /> CHRONOLOGY // TRACK RECORD</span>
          <h2 className="section-title">Experience & Education</h2>
          <p className="section-subtitle">Practical industry telecommunications training paired with computer science rigor.</p>
        </div>

        <div className="timeline-tabs">
          {['experience', 'education'].map(t => (
            <button
              key={t}
              className={`tab-btn ${tab === t ? 'active' : ''}`}
              onClick={() => { setTab(t); playBeep(850, 0.03) }}
            >
              {t === 'experience' ? 'Industry Experience' : 'Academic Background'}
            </button>
          ))}
        </div>

        <div className="timeline-container">
          <div className="timeline-line" />
          {tab === 'experience'
            ? <TimelineCards data={experienceData} />
            : <TimelineCards data={educationData} />
          }
        </div>
      </div>
    </section>
  )
}
