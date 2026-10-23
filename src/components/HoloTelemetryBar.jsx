import React, { useState, useEffect } from 'react'

export default function HoloTelemetryBar() {
  const [time, setTime] = useState('')
  const [ping, setPing] = useState(14)

  useEffect(() => {
    const updateTime = () => {
      const d = new Date()
      setTime(d.toLocaleTimeString('en-US', { hour12: false }) + ' UTC')
    }
    updateTime()
    const timer = setInterval(updateTime, 1000)
    const pingTimer = setInterval(() => {
      setPing(Math.floor(10 + Math.random() * 8))
    }, 3000)
    return () => {
      clearInterval(timer)
      clearInterval(pingTimer)
    }
  }, [])

  return (
    <div className="holo-telemetry-bar">
      <div className="telemetry-item">
        <span className="telemetry-dot live" />
        <span className="telemetry-label">SYSTEM:</span>
        <span className="telemetry-val text-green">ONLINE // HOLO-2.0</span>
      </div>
      <div className="telemetry-item hide-mobile">
        <span className="telemetry-label">CIPHER:</span>
        <span className="telemetry-val text-cyan">CHACHA20-POLY1305</span>
      </div>
      <div className="telemetry-item hide-mobile">
        <span className="telemetry-label">PING:</span>
        <span className="telemetry-val text-cyan">{ping}ms</span>
      </div>
      <div className="telemetry-item hide-mobile">
        <span className="telemetry-label">GEO_NODE:</span>
        <span className="telemetry-val text-purple">ALEXANDRIA [EG]</span>
      </div>
      <div className="telemetry-item">
        <span className="telemetry-label">SYS_TIME:</span>
        <span className="telemetry-val">{time}</span>
      </div>
    </div>
  )
}
