import React, { useRef, useEffect } from 'react'
import * as THREE from 'three'

const skillsData = [
  { text: 'Python', color: '#00f0ff' },
  { text: 'C#', color: '#00f0ff' },
  { text: 'Java', color: '#00f0ff' },
  { text: 'JavaScript', color: '#00f0ff' },
  { text: 'SQL / MySQL', color: '#00f0ff' },
  { text: 'Wireshark', color: '#ff0055' },
  { text: 'Metasploit', color: '#ff0055' },
  { text: 'Kali Linux', color: '#ff0055' },
  { text: 'Linux OS', color: '#ff0055' },
  { text: 'Network Defense', color: '#ff0055' },
  { text: 'RASP & HIPS', color: '#ff0055' },
  { text: 'TensorFlow Lite', color: '#00ff66' },
  { text: 'OpenCV', color: '#00ff66' },
  { text: 'Pandas & NumPy', color: '#00ff66' },
  { text: 'MATLAB', color: '#00ff66' },
  { text: 'Node.js', color: '#a855f7' },
  { text: 'Cryptography', color: '#00f0ff' },
  { text: 'Android Security', color: '#00ff66' },
]

function createTextSprite(text, colorHex) {
  const canvas = document.createElement('canvas')
  canvas.width = 320; canvas.height = 80
  const ctx = canvas.getContext('2d')

  ctx.fillStyle = 'rgba(10, 15, 25, 0.85)'
  ctx.strokeStyle = colorHex
  ctx.lineWidth = 3

  const x = 10, y = 10, w = 300, h = 60, r = 12
  ctx.beginPath()
  ctx.moveTo(x + r, y)
  ctx.lineTo(x + w - r, y); ctx.quadraticCurveTo(x + w, y, x + w, y + r)
  ctx.lineTo(x + w, y + h - r); ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h)
  ctx.lineTo(x + r, y + h); ctx.quadraticCurveTo(x, y + h, x, y + h - r)
  ctx.lineTo(x, y + r); ctx.quadraticCurveTo(x, y, x + r, y)
  ctx.closePath(); ctx.fill(); ctx.stroke()

  ctx.fillStyle = '#ffffff'
  ctx.font = 'bold 26px "JetBrains Mono", monospace'
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  ctx.fillText(text, 160, 40)

  const texture = new THREE.CanvasTexture(canvas)
  texture.minFilter = THREE.LinearFilter
  const mat = new THREE.SpriteMaterial({ map: texture, transparent: true, opacity: 0.92 })
  const sprite = new THREE.Sprite(mat)
  sprite.scale.set(1.1, 0.28, 1)
  return sprite
}

export default function ThreeSkills() {
  const mountRef = useRef(null)

  useEffect(() => {
    const container = mountRef.current
    if (!container) return

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(50, container.clientWidth / container.clientHeight, 0.1, 1000)
    camera.position.z = 4.8

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
    renderer.setSize(container.clientWidth, container.clientHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    container.appendChild(renderer.domElement)

    const sphereGroup = new THREE.Group()
    scene.add(sphereGroup)

    // Wireframe inner sphere
    const wGeo = new THREE.SphereGeometry(1.9, 16, 16)
    const wMat = new THREE.MeshBasicMaterial({ color: 0x00f0ff, wireframe: true, transparent: true, opacity: 0.12 })
    sphereGroup.add(new THREE.Mesh(wGeo, wMat))

    // Fibonacci sphere distribution
    const N = skillsData.length
    const radius = 2.1
    const phi = Math.PI * (3 - Math.sqrt(5))

    skillsData.forEach((skill, i) => {
      const y = 1 - (i / (N - 1)) * 2
      const r = Math.sqrt(1 - y * y)
      const theta = phi * i
      const sprite = createTextSprite(skill.text, skill.color)
      sprite.position.set(Math.cos(theta) * r * radius, y * radius, Math.sin(theta) * r * radius)
      sphereGroup.add(sprite)
    })

    // Drag interaction
    let isDragging = false, prevPos = { x: 0, y: 0 }
    let dVx = 0, dVy = 0

    const onDown = (e) => {
      isDragging = true
      const ev = e.touches ? e.touches[0] : e
      prevPos = { x: ev.clientX, y: ev.clientY }
    }
    const onUp = () => { isDragging = false }
    const onDrag = (e) => {
      if (!isDragging) return
      const ev = e.touches ? e.touches[0] : e
      dVx = (ev.clientX - prevPos.x) * 0.005
      dVy = (ev.clientY - prevPos.y) * 0.005
      sphereGroup.rotation.y += dVx
      sphereGroup.rotation.x += dVy
      prevPos = { x: ev.clientX, y: ev.clientY }
    }
    renderer.domElement.addEventListener('mousedown', onDown)
    window.addEventListener('mouseup', onUp)
    renderer.domElement.addEventListener('mousemove', onDrag)
    renderer.domElement.addEventListener('touchstart', onDown, { passive: true })
    window.addEventListener('touchend', onUp)
    renderer.domElement.addEventListener('touchmove', onDrag, { passive: true })

    let animId
    const animate = () => {
      animId = requestAnimationFrame(animate)
      if (!isDragging) {
        sphereGroup.rotation.y += 0.005 + dVx
        sphereGroup.rotation.x += dVy
        dVx *= 0.95; dVy *= 0.95
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
      window.removeEventListener('mouseup', onUp)
      window.removeEventListener('touchend', onUp)
      window.removeEventListener('resize', onResize)
      renderer.dispose()
      if (container.contains(renderer.domElement)) container.removeChild(renderer.domElement)
    }
  }, [])

  return (
    <div className="skills-3d-wrapper" ref={mountRef}>
      <div className="hud-corner hud-tl">3D SPHERE VIEW</div>
      <div className="hud-corner hud-tr">FIBONACCI LATTICE</div>
      <div className="hud-corner hud-bl">DRAG TO ROTATE</div>
      <div className="hud-corner hud-br">TAGS: 18</div>
    </div>
  )
}
