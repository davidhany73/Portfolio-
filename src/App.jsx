import React, { useState, createContext } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CyberToast from './components/CyberToast'
import Scanlines from './components/Scanlines'
import CVModal from './components/CVModal'

export const AudioContext = createContext()
export const ToastContext = createContext()

function App() {
  const [audioEnabled, setAudioEnabled] = useState(false)
  const [toast, setToast] = useState({ show: false, message: '' })
  const [audioCtx, setAudioCtx] = useState(null)
  const [cvOpen, setCvOpen] = useState(false)

  const showToast = (message) => {
    setToast({ show: true, message })
    setTimeout(() => setToast({ show: false, message: '' }), 3800)
  }

  const playBeep = (freq = 600, duration = 0.05, type = 'sine') => {
    if (!audioEnabled) return
    try {
      let ctx = audioCtx
      if (!ctx) {
        ctx = new (window.AudioContext || window.webkitAudioContext)()
        setAudioCtx(ctx)
      }
      if (ctx.state === 'suspended') ctx.resume()
      const osc = ctx.createOscillator()
      const gain = ctx.createGain()
      osc.type = type
      osc.frequency.setValueAtTime(freq, ctx.currentTime)
      gain.gain.setValueAtTime(0.04, ctx.currentTime)
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + duration)
      osc.connect(gain)
      gain.connect(ctx.destination)
      osc.start()
      osc.stop(ctx.currentTime + duration)
    } catch (e) { /* Audio policy */ }
  }

  const playChirp = (freq = 950) => {
    if (!audioEnabled) return
    try {
      let ctx = audioCtx
      if (!ctx) {
        ctx = new (window.AudioContext || window.webkitAudioContext)()
        setAudioCtx(ctx)
      }
      if (ctx.state === 'suspended') ctx.resume()
      const osc = ctx.createOscillator()
      const gain = ctx.createGain()
      osc.type = 'sine'
      osc.frequency.setValueAtTime(freq, ctx.currentTime)
      osc.frequency.exponentialRampToValueAtTime(freq * 1.5, ctx.currentTime + 0.08)
      gain.gain.setValueAtTime(0.05, ctx.currentTime)
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08)
      osc.connect(gain)
      gain.connect(ctx.destination)
      osc.start()
      osc.stop(ctx.currentTime + 0.08)
    } catch (e) {}
  }

  const playLaser = () => {
    if (!audioEnabled) return
    try {
      let ctx = audioCtx
      if (!ctx) {
        ctx = new (window.AudioContext || window.webkitAudioContext)()
        setAudioCtx(ctx)
      }
      if (ctx.state === 'suspended') ctx.resume()
      const osc = ctx.createOscillator()
      const gain = ctx.createGain()
      osc.type = 'sawtooth'
      osc.frequency.setValueAtTime(800, ctx.currentTime)
      osc.frequency.exponentialRampToValueAtTime(120, ctx.currentTime + 0.25)
      gain.gain.setValueAtTime(0.06, ctx.currentTime)
      gain.gain.linearRampToValueAtTime(0.001, ctx.currentTime + 0.25)
      osc.connect(gain)
      gain.connect(ctx.destination)
      osc.start()
      osc.stop(ctx.currentTime + 0.25)
    } catch (e) {}
  }

  const playSuccess = () => {
    if (!audioEnabled) return
    const notes = [523.25, 659.25, 783.99, 1046.50]
    notes.forEach((freq, idx) => {
      setTimeout(() => playBeep(freq, 0.12, 'triangle'), idx * 60)
    })
  }

  const audioAPI = {
    audioEnabled, setAudioEnabled,
    playBeep, playChirp, playLaser, playSuccess
  }

  return (
    <AudioContext.Provider value={audioAPI}>
      <ToastContext.Provider value={showToast}>
        <Scanlines />
        <Navbar onOpenCV={() => setCvOpen(true)} />
        <Hero onOpenCV={() => setCvOpen(true)} />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Certifications />
        <Contact />
        <Footer />
        <CVModal isOpen={cvOpen} onClose={() => setCvOpen(false)} />
        <CyberToast show={toast.show} message={toast.message} />
      </ToastContext.Provider>
    </AudioContext.Provider>
  )
}

export default App
