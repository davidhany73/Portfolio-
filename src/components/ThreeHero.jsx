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
    camera.position.z = 7.2

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
    renderer.setSize(container.clientWidth, container.clientHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    container.appendChild(renderer.domElement)

    const holoGroup = new THREE.Group()
    scene.add(holoGroup)

    // 1. Central Quantum Icosahedron (Multi-layered Neural Node)
    const icoGeo = new THREE.IcosahedronGeometry(1.45, 1)
    const icoMat = new THREE.MeshPhongMaterial({
      color: 0x0284c7,
      emissive: 0x0f172a,
      wireframe: true,
      transparent: true,
      opacity: 0.95,
      wireframeLinewidth: 2
    })
    const innerIco = new THREE.Mesh(icoGeo, icoMat)
    holoGroup.add(innerIco)

    // 1b. Holographic Prismatic Core Sphere
    const coreGeo = new THREE.SphereGeometry(0.75, 32, 32)
    const coreMat = new THREE.MeshPhongMaterial({
      color: 0x0f172a,
      emissive: 0x0284c7,
      transparent: true,
      opacity: 0.85
    })
    const coreSphere = new THREE.Mesh(coreGeo, coreMat)
    holoGroup.add(coreSphere)

    // 2. Concentric Hologram Gyro Rings
    function createHoloRing(radius, tube, colorHex, rx, ry, rz) {
      const geo = new THREE.TorusGeometry(radius, tube, 16, 120)
      const mat = new THREE.MeshBasicMaterial({
        color: colorHex,
        wireframe: true,
        transparent: true,
        opacity: 0.85
      })
      const ring = new THREE.Mesh(geo, mat)
      ring.rotation.set(rx, ry, rz)
      return ring
    }
    const ring1 = createHoloRing(2.05, 0.024, 0x0284c7, Math.PI / 4, 0, 0)
    const ring2 = createHoloRing(2.40, 0.020, 0x7c3aed, -Math.PI / 3, Math.PI / 6, 0)
    const ring3 = createHoloRing(2.70, 0.024, 0x059669, Math.PI / 2.5, -Math.PI / 4, Math.PI / 5)
    holoGroup.add(ring1, ring2, ring3)

    // 3. Orbiting Data Satellites with Light Nodes
    const satCount = 10
    const satellites = []
    const satGeo = new THREE.OctahedronGeometry(0.13)
    const satMat = new THREE.MeshPhongMaterial({ color: 0x000000, emissive: 0x0284c7 })
    for (let i = 0; i < satCount; i++) {
      const sat = new THREE.Mesh(satGeo, satMat)
      const angle = (i / satCount) * Math.PI * 2
      const dist = 1.9 + (i % 3) * 0.45
      sat.position.set(Math.cos(angle) * dist, Math.sin(angle) * 0.6, Math.sin(angle) * dist)
      holoGroup.add(sat)
      satellites.push({ mesh: sat, speed: 0.014 + (i % 4) * 0.003, angle, dist })
    }

    // 4. Floating Holographic Quantum Dust Particles
    const pCount = 350
    const pGeo = new THREE.BufferGeometry()
    const pPos = new Float32Array(pCount * 3)
    const pCol = new Float32Array(pCount * 3)
    const palette = [
      new THREE.Color(0x0284c7),
      new THREE.Color(0x7c3aed),
      new THREE.Color(0x059669),
      new THREE.Color(0x0f172a)
    ]
    for (let i = 0; i < pCount; i++) {
      const i3 = i * 3
      const r = 3.6 + Math.random() * 5.2
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(Math.random() * 2 - 1)
      pPos[i3] = r * Math.sin(phi) * Math.cos(theta)
      pPos[i3 + 1] = r * Math.sin(phi) * Math.sin(theta)
      pPos[i3 + 2] = r * Math.cos(phi)
      const c = palette[i % palette.length]
      pCol[i3] = c.r; pCol[i3 + 1] = c.g; pCol[i3 + 2] = c.b
    }
    pGeo.setAttribute('position', new THREE.BufferAttribute(pPos, 3))
    pGeo.setAttribute('color', new THREE.BufferAttribute(pCol, 3))
    const pMat = new THREE.PointsMaterial({
      size: 0.052,
      vertexColors: true,
      transparent: true,
      opacity: 0.85
    })
    const particles = new THREE.Points(pGeo, pMat)
    scene.add(particles)

    // Lights
    scene.add(new THREE.AmbientLight(0xffffff, 2.0))
    const pl1 = new THREE.PointLight(0x0284c7, 3.0, 30)
    pl1.position.set(5, 4, 6)
    scene.add(pl1)
    const pl2 = new THREE.PointLight(0x7c3aed, 2.5, 30)
    pl2.position.set(-5, -4, 4)
    scene.add(pl2)

    // Mouse Interaction
    let targetRY = 0, targetRX = 0, pulseBoost = 1.0

    const onMove = (e) => {
      const rect = container.getBoundingClientRect()
      const x = (e.clientX ?? e.touches?.[0]?.clientX ?? 0) - rect.left - rect.width / 2
      const y = (e.clientY ?? e.touches?.[0]?.clientY ?? 0) - rect.top - rect.height / 2
      targetRY = (x / rect.width) * 1.3
      targetRX = (y / rect.height) * 1.3
    }
    window.addEventListener('mousemove', onMove)
    container.addEventListener('touchmove', onMove, { passive: true })

    const onClick = () => {
      pulseBoost = 4.0
      coreSphere.scale.set(1.6, 1.6, 1.6)
      setTimeout(() => coreSphere.scale.set(1, 1, 1), 220)
      try { playLaser() } catch (err) {}
    }
    container.addEventListener('click', onClick)

    // Animation Loop
    const clock = new THREE.Clock()
    let animId
    const animate = () => {
      animId = requestAnimationFrame(animate)
      const dt = clock.getDelta()
      const t = clock.getElapsedTime()

      holoGroup.rotation.y += (targetRY - holoGroup.rotation.y) * 0.06
      holoGroup.rotation.x += (targetRX - holoGroup.rotation.x) * 0.06

      innerIco.rotation.y += 0.009 * pulseBoost
      innerIco.rotation.x += 0.006 * pulseBoost
      ring1.rotation.z += 0.008 * pulseBoost
      ring2.rotation.z -= 0.010 * pulseBoost
      ring3.rotation.x += 0.007 * pulseBoost

      const pulse = Math.sin(t * 3.2) * 0.09 + 1.0
      coreSphere.scale.lerp(new THREE.Vector3(pulse, pulse, pulse), 0.12)

      satellites.forEach(s => {
        s.angle += s.speed * pulseBoost
        s.mesh.position.x = Math.cos(s.angle) * s.dist
        s.mesh.position.z = Math.sin(s.angle) * s.dist
        s.mesh.position.y = Math.sin(s.angle * 2.2 + t) * 0.65
        s.mesh.rotation.y += 0.03
      })

      particles.rotation.y = t * 0.025
      particles.rotation.x = Math.sin(t * 0.018) * 0.12

      if (pulseBoost > 1.0) {
        pulseBoost -= dt * 2.5
        if (pulseBoost < 1.0) pulseBoost = 1.0
      }

      renderer.render(scene, camera)
    }
    animate()

    const onResize = () => {
      if (!container) return
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
    <div className="hero-3d-viewport holo-container" ref={mountRef}>
      <div className="hud-corner hud-tl">NODE // HOLO-CORE<br />STATE: SECURE</div>
      <div className="hud-corner hud-tr">PROTOCOL: 0x7E<br />ENCRYPT: POLY1305</div>
      <div className="hud-corner hud-bl">HIPS: ACTIVE<br />FREQ: 433 MHz</div>
      <div className="hud-corner hud-br">IP: 127.0.0.1<br />PORT: 3000 (EST)</div>
      <div className="hud-badge-interactive holo-pulse">
        <i className="fas fa-hand-pointer text-cyan" />
        <span>INTERACTIVE 3D HOLO-CORE • DRAG & CLICK</span>
      </div>
    </div>
  )
}
