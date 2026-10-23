import React, { useRef, useEffect, useContext } from 'react'
import * as THREE from 'three'
import { AudioContext } from '../App'

export default function ThreeHero() {
  const mountRef = useRef(null)
  const { playLaser } = useContext(AudioContext)

  useEffect(() => {
    const container = mountRef.current
    if (!container) return

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.1, 1000)
    camera.position.z = 7.5

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
    renderer.setSize(container.clientWidth, container.clientHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    container.appendChild(renderer.domElement)

    const coreGroup = new THREE.Group()
    scene.add(coreGroup)

    // Central Icosahedron
    const icoGeo = new THREE.IcosahedronGeometry(1.4, 1)
    const icoMat = new THREE.MeshPhongMaterial({
      color: 0x00f0ff, emissive: 0x003366,
      wireframe: true, transparent: true, opacity: 0.85
    })
    const innerIco = new THREE.Mesh(icoGeo, icoMat)
    coreGroup.add(innerIco)

    // Inner glowing core
    const coreGeo = new THREE.SphereGeometry(0.7, 32, 32)
    const coreMat = new THREE.MeshBasicMaterial({ color: 0x00ffcc, transparent: true, opacity: 0.7 })
    const coreSphere = new THREE.Mesh(coreGeo, coreMat)
    coreGroup.add(coreSphere)

    // Orbital rings
    function createRing(radius, tube, color, rx, ry) {
      const geo = new THREE.TorusGeometry(radius, tube, 16, 100)
      const mat = new THREE.MeshBasicMaterial({ color, wireframe: true, transparent: true, opacity: 0.65 })
      const ring = new THREE.Mesh(geo, mat)
      ring.rotation.x = rx; ring.rotation.y = ry
      return ring
    }
    const ring1 = createRing(2.0, 0.02, 0x00f0ff, Math.PI / 4, 0)
    const ring2 = createRing(2.35, 0.015, 0xa855f7, -Math.PI / 3, Math.PI / 6)
    const ring3 = createRing(2.65, 0.02, 0x00ff66, Math.PI / 2.5, -Math.PI / 4)
    coreGroup.add(ring1, ring2, ring3)

    // Satellites
    const satGeo = new THREE.OctahedronGeometry(0.12)
    const satMat = new THREE.MeshBasicMaterial({ color: 0x00f0ff })
    const satellites = []
    for (let i = 0; i < 8; i++) {
      const sat = new THREE.Mesh(satGeo, satMat)
      const angle = (i / 8) * Math.PI * 2
      const dist = 1.8 + (i % 3) * 0.4
      sat.position.set(Math.cos(angle) * dist, Math.sin(angle) * 0.5, Math.sin(angle) * dist)
      coreGroup.add(sat)
      satellites.push({ mesh: sat, speed: 0.015 + i * 0.003, angle, dist })
    }

    // Background particles
    const pCount = 350
    const pGeo = new THREE.BufferGeometry()
    const pPos = new Float32Array(pCount * 3)
    const pCol = new Float32Array(pCount * 3)
    const palette = [
      new THREE.Color(0x00f0ff), new THREE.Color(0xa855f7),
      new THREE.Color(0x00ff66), new THREE.Color(0x3b82f6)
    ]
    for (let i = 0; i < pCount; i++) {
      const i3 = i * 3
      const r = 3.5 + Math.random() * 5
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(Math.random() * 2 - 1)
      pPos[i3] = r * Math.sin(phi) * Math.cos(theta)
      pPos[i3 + 1] = r * Math.sin(phi) * Math.sin(theta)
      pPos[i3 + 2] = r * Math.cos(phi)
      const c = palette[Math.floor(Math.random() * palette.length)]
      pCol[i3] = c.r; pCol[i3 + 1] = c.g; pCol[i3 + 2] = c.b
    }
    pGeo.setAttribute('position', new THREE.BufferAttribute(pPos, 3))
    pGeo.setAttribute('color', new THREE.BufferAttribute(pCol, 3))
    const pMat = new THREE.PointsMaterial({
      size: 0.045, vertexColors: true, transparent: true,
      opacity: 0.75, blending: THREE.AdditiveBlending
    })
    const particles = new THREE.Points(pGeo, pMat)
    scene.add(particles)

    // Lights
    scene.add(new THREE.AmbientLight(0x0d1b2a, 1.2))
    const pl1 = new THREE.PointLight(0x00f0ff, 2, 20)
    pl1.position.set(4, 3, 5)
    scene.add(pl1)
    const pl2 = new THREE.PointLight(0xa855f7, 2, 20)
    pl2.position.set(-4, -3, 3)
    scene.add(pl2)

    // Interaction
    let targetRY = 0, targetRX = 0, pulseSpeed = 1.0

    const onMove = (e) => {
      const rect = container.getBoundingClientRect()
      const x = (e.clientX ?? e.touches?.[0]?.clientX ?? 0) - rect.left - rect.width / 2
      const y = (e.clientY ?? e.touches?.[0]?.clientY ?? 0) - rect.top - rect.height / 2
      targetRY = (x / rect.width) * 1.2
      targetRX = (y / rect.height) * 1.2
    }
    window.addEventListener('mousemove', onMove)
    container.addEventListener('touchmove', onMove, { passive: true })

    const onClick = () => {
      pulseSpeed = 3.5
      coreSphere.scale.set(1.5, 1.5, 1.5)
      setTimeout(() => coreSphere.scale.set(1, 1, 1), 200)
      try { playLaser() } catch(e) {}
    }
    container.addEventListener('click', onClick)

    // Animation loop
    const clock = new THREE.Clock()
    let animId
    const animate = () => {
      animId = requestAnimationFrame(animate)
      const dt = clock.getDelta()
      const t = clock.getElapsedTime()

      coreGroup.rotation.y += (targetRY - coreGroup.rotation.y) * 0.05
      coreGroup.rotation.x += (targetRX - coreGroup.rotation.x) * 0.05

      innerIco.rotation.y += 0.008 * pulseSpeed
      innerIco.rotation.x += 0.005 * pulseSpeed
      ring1.rotation.z += 0.007 * pulseSpeed
      ring2.rotation.z -= 0.009 * pulseSpeed
      ring3.rotation.x += 0.006 * pulseSpeed

      const pulse = Math.sin(t * 3) * 0.08 + 1.0
      coreSphere.scale.lerp(new THREE.Vector3(pulse, pulse, pulse), 0.1)

      satellites.forEach(s => {
        s.angle += s.speed * pulseSpeed
        s.mesh.position.x = Math.cos(s.angle) * s.dist
        s.mesh.position.z = Math.sin(s.angle) * s.dist
        s.mesh.position.y = Math.sin(s.angle * 2 + t) * 0.6
        s.mesh.rotation.y += 0.02
      })

      particles.rotation.y = t * 0.02
      particles.rotation.x = Math.sin(t * 0.015) * 0.1

      if (pulseSpeed > 1.0) {
        pulseSpeed -= dt * 2.0
        if (pulseSpeed < 1.0) pulseSpeed = 1.0
      }

      renderer.render(scene, camera)
    }
    animate()

    const onResize = () => {
      camera.aspect = container.clientWidth / container.clientHeight
      camera.updateProjectionMatrix()
      renderer.setSize(container.clientWidth, container.clientHeight)
    }
    window.addEventListener('resize', onResize)

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('resize', onResize)
      container.removeEventListener('click', onClick)
      container.removeEventListener('touchmove', onMove)
      renderer.dispose()
      if (container.contains(renderer.domElement)) container.removeChild(renderer.domElement)
    }
  }, [])

  return (
    <div className="hero-3d-viewport" ref={mountRef}>
      <div className="hud-corner hud-tl">NODE // 01<br/>GEO: 31.2001° N</div>
      <div className="hud-corner hud-tr">SYS_STAT: NORMAL<br/>ENCRYPT: AES-256-GCM</div>
      <div className="hud-corner hud-bl">HIPS: ENGAGED<br/>FREQ: 433 MHz</div>
      <div className="hud-corner hud-br">IP: 192.168.1.10<br/>PORT: 4444 (EST)</div>
      <div className="hud-badge-interactive">
        <i className="fas fa-hand-pointer text-cyan" />
        <span>INTERACTIVE 3D CORE • DRAG & CLICK</span>
      </div>
    </div>
  )
}
