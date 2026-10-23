import React, { useContext } from 'react'
import { AudioContext } from '../App'

export default function MobileBottomNav({ activeSection }) {
  const { playBeep } = useContext(AudioContext)

  const items = [
    { href: '#hero', icon: 'fa-house', label: 'Home' },
    { href: '#about', icon: 'fa-user-shield', label: 'Bio' },
    { href: '#experience', icon: 'fa-timeline', label: 'History' },
    { href: '#projects', icon: 'fa-code-branch', label: 'Projects' },
    { href: '#skills', icon: 'fa-microchip', label: 'Skills' },
    { href: '#contact', icon: 'fa-paper-plane', label: 'Contact' },
  ]

  return (
    <nav className="mobile-native-dock" aria-label="Mobile Navigation">
      {items.map((item) => (
        <a
          key={item.href}
          href={item.href}
          className={`dock-tab ${activeSection === item.href.slice(1) ? 'active' : ''}`}
          onClick={() => playBeep(900, 0.03)}
        >
          <i className={`fas ${item.icon}`} />
          <span>{item.label}</span>
        </a>
      ))}
    </nav>
  )
}
