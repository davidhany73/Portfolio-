import React, { useEffect, useRef } from 'react'
import ThreeSkills from './ThreeSkills'
import { portfolioData } from '../data/portfolioData'

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
        <span style={{ color: '#000000', fontWeight: '800' }}>{level}</span>
      </div>
      <div className="skill-progress-track">
        <div className={`skill-progress-fill ${fillClass}`} ref={barRef} style={{ width: '0%' }} data-level={level} />
      </div>
    </div>
  )
}

export default function Skills() {
  const { skills } = portfolioData

  const skillCategories = [
    {
      title: 'Programming & Systems Development',
      iconClass: 'icon-prog',
      icon: 'fa-code',
      colorClass: 'text-cyan',
      fillClass: 'fill-cyan',
      skills: skills.programming || []
    },
    {
      title: 'Cybersecurity, Cryptography & Red Team',
      iconClass: 'icon-cyber',
      icon: 'fa-shield-halved',
      colorClass: 'text-purple',
      fillClass: 'fill-purple',
      skills: skills.cybersecurity || []
    },
    {
      title: 'AI, Machine Learning & Computer Vision',
      iconClass: 'icon-ai',
      icon: 'fa-brain',
      colorClass: 'text-green',
      fillClass: 'fill-green',
      skills: skills.aiAndData || []
    },
  ]

  return (
    <section id="skills">
      <div className="container">
        <div className="section-header">
          <span className="section-pretitle"><i className="fas fa-sliders" /> CAPABILITIES // TELEMETRY</span>
          <h2 className="section-title holo-title">Technical Skills</h2>
          <p className="section-subtitle">Interactive 3D tag sphere paired with validated proficiency telemetry.</p>
        </div>

        <div className="skills-layout">
          <ThreeSkills />

          <div className="skills-hud-container">
            {skillCategories.map(cat => (
              <div className="skill-category-card holo-glass" key={cat.title}>
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
