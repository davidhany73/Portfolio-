import React from 'react'

export default function CyberToast({ show, message }) {
  return (
    <div className={`toast-cyber ${show ? 'show' : ''}`}>
      <i className="fas fa-terminal text-cyan" />
      <span>{message}</span>
    </div>
  )
}
