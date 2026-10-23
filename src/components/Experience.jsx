import React, { useState, useContext } from 'react'
import { AudioContext } from '../App'
import { portfolioData } from '../data/portfolioData'

function ExperienceCards({ data }) {
  return data.map((item, i) => (
    <div className="timeline-card-wrapper" key={i}>
      <div className="timeline-node"><div className="timeline-node-inner" /></div>
      <div className="timeline-card holo-border">
        <div className="timeline-header">
          <div>
            <h3 className="timeline-role">{item.role}</h3>
            <div className="timeline-org">
              <i className={`fas ${item.orgIcon}`} /> {item.organization}
            </div>
          </div>
          <span className="timeline-badge">{item.hours}</span>
        </div>
        <div className="timeline-location-period">
          <span><i className="fas fa-calendar-alt" /> {item.period}</span>
          <span><i className="fas fa-location-dot" /> {item.location}</span>
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

function EducationCards({ data }) {
  return data.map((item, i) => (
    <div className="timeline-card-wrapper" key={i}>
      <div className="timeline-node"><div className="timeline-node-inner" /></div>
      <div className="timeline-card holo-border">
        <div className="timeline-header">
          <div>
            <h3 className="timeline-role">{item.degree}</h3>
            <div className="timeline-org">
              <i className="fas fa-graduation-cap" /> {item.institution}
            </div>
          </div>
          <span className="timeline-badge">{item.specialization}</span>
        </div>
        <div className="timeline-location-period">
          <span><i className="fas fa-calendar-alt" /> {item.period}</span>
          <span><i className="fas fa-location-dot" /> {item.location}</span>
          {item.gpa && <span><i className="fas fa-award" /> GPA: {item.gpa}</span>}
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
  const { experience, education } = portfolioData

  return (
    <section id="experience">
      <div className="container">
        <div className="section-header">
          <span className="section-pretitle"><i className="fas fa-network-wired" /> CHRONOLOGY // TRACK RECORD</span>
          <h2 className="section-title holo-title">Experience & Education</h2>
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
            ? <ExperienceCards data={experience} />
            : <EducationCards data={education} />
          }
        </div>
      </div>
    </section>
  )
}
