import React, { useState, useContext } from 'react'
import { AudioContext, ToastContext } from '../App'

export default function Contact() {
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)
  const { playBeep, playLaser, playSuccess } = useContext(AudioContext)
  const showToast = useContext(ToastContext)

  const copyToClipboard = (val) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(val).then(() => {
        showToast(`Copied: ${val}`)
        playSuccess()
      })
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSending(true)
    playLaser()
    setTimeout(() => {
      setSending(false)
      setSent(true)
      playSuccess()
      showToast('Secure Packet Dispatched to David Hany!')
      e.target.reset()
      setTimeout(() => setSent(false), 3500)
    }, 1400)
  }

  return (
    <section id="contact">
      <div className="container">
        <div className="section-header">
          <span className="section-pretitle"><i className="fas fa-satellite-dish" /> TRANSMIT // GET IN TOUCH</span>
          <h2 className="section-title">Initiate Contact</h2>
          <p className="section-subtitle">Reach out for red-team security engagements, Edge AI development, or engineering roles.</p>
        </div>

        <div className="contact-wrapper">
          <div className="hud-corner hud-tl">COMMS_LINK</div>
          <div className="hud-corner hud-tr">256-BIT SSL</div>

          <div className="contact-info-col">
            <h3 className="contact-headline">Let's Secure the Future Together.</h3>
            <p className="contact-subtext">
              Available for cyber security research, full-time engineering roles, and innovative AI implementations.
            </p>

            <div className="contact-items-list">
              <div className="contact-channel-card">
                <div className="channel-icon"><i className="fas fa-envelope" /></div>
                <div className="channel-details">
                  <span className="channel-label">Academic & Professional Email</span>
                  <span className="channel-val">202201324@pua.edu.eg</span>
                </div>
                <button className="copy-pill-btn" onClick={() => copyToClipboard('202201324@pua.edu.eg')}>
                  <i className="far fa-copy" /> Copy
                </button>
              </div>
              <div className="contact-channel-card">
                <div className="channel-icon"><i className="fas fa-phone" /></div>
                <div className="channel-details">
                  <span className="channel-label">Mobile & WhatsApp</span>
                  <span className="channel-val">+20 121 222 2818</span>
                </div>
                <button className="copy-pill-btn" onClick={() => copyToClipboard('+201212222818')}>
                  <i className="far fa-copy" /> Copy
                </button>
              </div>
              <div className="contact-channel-card">
                <div className="channel-icon"><i className="fas fa-location-dot" /></div>
                <div className="channel-details">
                  <span className="channel-label">Current Headquarters</span>
                  <span className="channel-val">Alexandria, Egypt</span>
                </div>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label" htmlFor="sender-name">
                <i className="fas fa-user-astronaut" /> Operator Name
              </label>
              <input type="text" id="sender-name" className="form-input" placeholder="e.g. Elena Rostova" required />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="sender-email">
                <i className="fas fa-at" /> Return Frequency (Email)
              </label>
              <input type="email" id="sender-email" className="form-input" placeholder="e.g. elena@securitycorp.io" required />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="sender-msg">
                <i className="fas fa-terminal" /> Encrypted Message Payload
              </label>
              <textarea id="sender-msg" className="form-textarea" placeholder="Discussing Red Team assessments, Edge AI prototypes, or engineering opportunities..." required />
            </div>
            <button type="submit" className={`btn-3d-submit ${sending ? 'depressed' : ''}`}>
              {sending ? (
                <><i className="fas fa-spinner fa-spin" /> TRANSMITTING PACKETS...</>
              ) : sent ? (
                <><i className="fas fa-check" /> TRANSMISSION CONFIRMED</>
              ) : (
                <><span>SEND SECURE MESSAGE</span> <i className="fas fa-paper-plane" /></>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
