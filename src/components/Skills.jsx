import React, { useEffect, useRef } from 'react'
import ThreeSkills from './ThreeSkills'

const skillCategories = [
  {
    title: 'Programming & Development',
    iconClass: 'icon-prog',
    icon: 'fa-code',
    colorClass: 'text-cyan',
    fillClass: 'fill-cyan',
    skills: [
      { name: 'Python (Automation, Sockets, AI)', level: '95%' },
      { name: 'C# / Java', level: '88%' },
      { name: 'JavaScript / SQL (MySQL)', level: '85%' },
    ],
  },
  {
    title: 'Cybersecurity & Tools',
    iconClass: 'icon-cyber',
    icon: 'fa-shield-virus',
    colorClass: 'text-purple',
    fillClass: 'fill-purple',
    skills: [
      { name: 'Wireshark & Packet Inspection', level: '92%' },
      { name: 'Metasploit & Penetration Testing', level: '90%' },
      { name: 'Kali Linux & Linux OS Hardening', level: '94%' },
    ],
  },
  {
    title: 'AI, Computer Vision & Data',
    iconClass: 'icon-ai',
    icon: 'fa-brain',
    colorClass: 'text-green',
    fillClass: 'fill-green',
    skills: [
      { name: 'OpenCV & Computer Vision', level: '90%' },
      { name: 'TensorFlow Lite & Edge AI', level: '86%' },
      { name: 'Pandas, NumPy & MATLAB', level: '88%' },
    ],
  },
]

function SkillBar({ name, level, colorClass, fillClass }) {
  const barRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && barRef.current) {
          barRef.current.style.width = level
        }
      },
      { threshold: 0.2 }
    )
    if (barRef.current) observer.observe(barRef.current)
    return () => observer.disconnect()
  }, [level])

  return (
    <div className="skill-bar-item">
      <div className="skill-bar-labels">
        <span>{name}</span>
        <span className={colorClass}>{level}</span>
      </div>
      <div className="skill-progress-track">
        <div className={`skill-progress-fill ${fillClass}`} ref={barRef} style={{ width: '0%' }} data-level={level} />
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <div className="section-header">
          <span className="section-pretitle"><i className="fas fa-sliders" /> MATRIX // CAPABILITIES</span>
          <h2 className="section-title">Technical Skills</h2>
          <p className="section-subtitle">Interactive 3D tag sphere paired with validated proficiency telemetry.</p>
        </div>

        <div className="skills-layout">
          <ThreeSkills />

          <div className="skills-hud-container">
            {skillCategories.map(cat => (
              <div className="skill-category-card" key={cat.title}>
                <div className="skill-cat-header">
                  <div className={`skill-cat-icon ${cat.iconClass}`}><i className={`fas ${cat.icon}`} /></div>
                  <h3 className="skill-cat-title">{cat.title}</h3>
                </div>
                <div className="skill-bar-group">
                  {cat.skills.map(s => (
                    <SkillBar
                      key={s.name}
                      name={s.name}
                      level={s.level}
                      colorClass={cat.colorClass}
                      fillClass={cat.fillClass}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
