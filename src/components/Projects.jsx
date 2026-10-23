import React, { useState, useRef, useContext } from 'react'
import { AudioContext } from '../App'
import { portfolioData } from '../data/portfolioData'

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
    const rotateX = ((y - cy) / cy) * -10
    const rotateY = ((x - cx) / cx) * 10
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`
    card.style.setProperty('--mouse-x', `${(x / rect.width) * 100}%`)
    card.style.setProperty('--mouse-y', `${(y / rect.height) * 100}%`)
  }

  const handleLeave = () => {
    if (ref.current) ref.current.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1,1,1)'
  }

  return (
    <div
      className={`project-card holo-border ${project.featured ? 'project-featured' : ''}`}
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      onMouseEnter={onHoverSound}
    >
      <div className="project-top">
        <div className="project-header-meta">
          <div className="project-icon-box">
            <i className={`fas ${
              project.category.includes('ai') ? 'fa-brain text-green' :
              project.category.includes('c2') || project.category.includes('redteam') ? 'fa-skull text-red' :
              project.category.includes('systems') ? 'fa-robot text-purple' :
              project.category.includes('web') ? 'fa-cube text-cyan' :
              'fa-shield-halved text-cyan'
            }`} />
          </div>
          <span className={`project-badge ${project.badgeColor || 'badge-featured'}`}>
            {project.badge}
          </span>
        </div>

        <h3 className="project-title">{project.title}</h3>
        <p className="project-desc">{project.description}</p>
      </div>

      <div className="project-bottom">
        {/* Tech Stack Chips */}
        <div className="project-tags">
          {project.tech.map(t => (
            <span className="tag-chip" key={t}>{t}</span>
          ))}
        </div>

        {/* Action Buttons: GitHub Repo + Optional Demo */}
        <div className="project-actions">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link-btn"
            title={`View ${project.title} on GitHub`}
          >
            <i className="fab fa-github" />
            <span>GitHub Repo</span>
            <i className="fas fa-arrow-up-right-from-square" style={{ fontSize: '0.75rem' }} />
          </a>

          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link-btn text-green"
              style={{ marginLeft: 'auto' }}
            >
              <i className="fas fa-play" />
              <span>Live Demo</span>
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  const [filter, setFilter] = useState('all')
  const [search, setSearch] = useState('')
  const { playBeep } = useContext(AudioContext)
  const { categories, projects } = portfolioData

  const filtered = projects.filter(p => {
    const matchesFilter = filter === 'all' || p.category.includes(filter)
    const matchesSearch = search.trim() === '' ||
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.description.toLowerCase().includes(search.toLowerCase()) ||
      p.tech.some(t => t.toLowerCase().includes(search.toLowerCase()))
    return matchesFilter && matchesSearch
  })

  return (
    <section id="projects">
      <div className="container">
        <div className="section-header">
          <span className="section-pretitle"><i className="fas fa-code-branch" /> GITHUB_REPOSITORIES // SHOWCASE</span>
          <h2 className="section-title holo-title">Featured Projects</h2>
          <p className="section-subtitle">
            Dynamic repository showcase sourced directly from{' '}
            <a href="https://github.com/davidhany73" target="_blank" rel="noopener noreferrer" className="text-cyan font-mono" style={{ textDecoration: 'none' }}>
              github.com/davidhany73 <i className="fas fa-arrow-up-right-from-square" style={{ fontSize: '0.75rem' }} />
            </a>
          </p>
        </div>

        {/* Search Bar & Filter Controls */}
        <div className="projects-controls-wrapper">
          <div className="projects-search-box holo-border">
            <i className="fas fa-magnifying-glass text-cyan" />
            <input
              type="text"
              placeholder="Search projects by name, language, or tech stack (e.g. Python, OpenCV, C)..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="projects-search-input"
            />
            {search && (
              <button onClick={() => setSearch('')} className="search-clear-btn" aria-label="Clear search">
                &times;
              </button>
            )}
          </div>

          <div className="projects-filter-bar">
            {categories.map(c => (
              <button
                key={c.value}
                className={`filter-btn ${filter === c.value ? 'active' : ''}`}
                onClick={() => { setFilter(c.value); playBeep(850, 0.03) }}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        {filtered.length > 0 ? (
          <div className="projects-grid">
            {filtered.map(p => (
              <TiltCard
                key={p.id}
                project={p}
                onHoverSound={() => playBeep(850, 0.03)}
              />
            ))}
          </div>
        ) : (
          <div className="projects-empty-state holo-glass">
            <i className="fas fa-folder-open text-dim" style={{ fontSize: '2.5rem', marginBottom: '1rem' }} />
            <p className="font-mono text-muted">No repositories found matching "{search}".</p>
            <button
              onClick={() => { setSearch(''); setFilter('all'); }}
              className="cyber-btn cyber-btn-primary"
              style={{ marginTop: '1rem', padding: '0.5rem 1.2rem', fontSize: '0.8rem' }}
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
