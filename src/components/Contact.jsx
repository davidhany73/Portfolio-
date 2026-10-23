import React, { useState, useContext } from 'react'
import { AudioContext, ToastContext } from '../App'
import { openLinkedIn, LINKEDIN_URL, EMAIL_ADDRESS, PHONE_NUMBER } from '../utils/linking'

export default function Contact() {
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)
  const { playBeep, playLaser, playSuccess } = useContext(AudioContext)
  const showToast = useContext(ToastContext)

  const copyToClipboard = (val, label) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(val).then(() => {
        showToast(`Copied ${label}: ${val}`)
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
      showToast('Encrypted Packet Dispatched to David Hany!')
      e.target.reset()
      setTimeout(() => setSent(false), 3800)
    }, 1300)
  }

  return (
    <section id="contact">
      <div className="container">
        <div className="section-header">
          <span className="section-pretitle"><i className="fas fa-satellite-dish" /> TRANSMIT // SECURE CHANNELS</span>
          <h2 className="section-title holo-title">Initiate Contact</h2>
          <p className="section-subtitle">Reach out for red-team penetration engagements, Edge AI systems, or full-time roles.</p>
        </div>

        <div className="contact-wrapper holo-glass">
          <div className="hud-corner hud-tl">COMMS // 256-BIT</div>
          <div className="hud-corner hud-tr">STATUS // LISTENING</div>

          <div className="contact-info-col">
            <h3 className="contact-headline">Let's Architect Resilient Systems.</h3>
            <p className="contact-subtext">
              Available for offensive security audits, custom C2 framework evaluations,
              and machine learning deployments at the edge.
            </p>

            <div className="contact-items-list">
              {/* Verified LinkedIn Channel */}
              <div className="contact-channel-card holo-border">
                <div className="channel-icon" style={{ background: 'rgba(0, 160, 255, 0.15)', borderColor: 'var(--cyan-neon)' }}>
                  <i className="fab fa-linkedin-in text-cyan" />
                </div>
                <div className="channel-details">
                  <span className="channel-label">Professional Network</span>
                  <span className="channel-val">linkedin.com/in/david-hany-naeam-a9485032b</span>
                </div>
                <button
                  type="button"
                  className="copy-pill-btn holo-btn"
                  onClick={() => { playBeep(950, 0.03); openLinkedIn() }}
                  title="Open LinkedIn"
                >
                  <i className="fas fa-check text-green" /> Open
                </button>
              </div>

              {/* Email */}
              <div className="contact-channel-card holo-border">
                <div className="channel-icon">
                  <i className="fas fa-envelope text-cyan" />
                </div>
                <div className="channel-details">
                  <span className="channel-label">Academic & Professional Email</span>
                  <span className="channel-val">{EMAIL_ADDRESS}</span>
                </div>
                <button
                  type="button"
                  className="copy-pill-btn"
                  onClick={() => copyToClipboard(EMAIL_ADDRESS, 'Email')}
                >
                  <i className="far fa-copy" /> Copy
                </button>
              </div>

              {/* Phone */}
              <div className="contact-channel-card holo-border">
                <div className="channel-icon">
                  <i className="fas fa-phone text-green" />
                </div>
                <div className="channel-details">
                  <span className="channel-label">Mobile & WhatsApp</span>
                  <span className="channel-val">{PHONE_NUMBER}</span>
                </div>
                <button
                  type="button"
                  className="copy-pill-btn"
                  onClick={() => copyToClipboard(PHONE_NUMBER, 'Phone')}
                >
                  <i className="far fa-copy" /> Copy
                </button>
              </div>

              {/* Location */}
              <div className="contact-channel-card holo-border">
                <div className="channel-icon">
                  <i className="fas fa-location-dot text-purple" />
                </div>
                <div className="channel-details">
                  <span className="channel-label">Current Headquarters</span>
                  <span className="channel-val">Alexandria, Egypt</span>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label" htmlFor="sender-name">
                <i className="fas fa-user-astronaut" /> Operator Name
              </label>
              <input type="text" id="sender-name" className="form-input holo-input" placeholder="e.g. Sarah Connor" required />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="sender-email">
                <i className="fas fa-at" /> Return Frequency (Email)
              </label>
              <input type="email" id="sender-email" className="form-input holo-input" placeholder="e.g. sarah@cyberdyne.io" required />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="sender-msg">
                <i className="fas fa-terminal" /> Encrypted Payload
              </label>
              <textarea id="sender-msg" className="form-textarea holo-input" placeholder="Discussing Red Team assessments, Edge AI security, or engineering opportunities..." required />
            </div>

            <button type="submit" className={`btn-3d-submit ${sending ? 'depressed' : ''}`}>
              {sending ? (
                <><i className="fas fa-spinner fa-spin" /> TRANSMITTING ENCRYPTED PACKETS...</>
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
