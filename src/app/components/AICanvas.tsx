'use client'
import { useEffect, useRef } from 'react'

export default function AICanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')!
    let animId: number

    interface Node { x:number; y:number; vx:number; vy:number; r:number; type:number; pulse:number; pulseSpeed:number }
    interface Stream { x:number; y:number; speed:number; length:number; opacity:number; color:string }
    interface Circuit { x:number; y:number; dir:string; len:number; progress:number; speed:number; color:string; opacity:number }

    let W = 0, H = 0
    let nodes: Node[] = []
    let streams: Stream[] = []
    let circuits: Circuit[] = []

    function resize() {
      const currentCanvas = canvasRef.current
      if (!currentCanvas) return
      W = currentCanvas.width = currentCanvas.offsetWidth
      H = currentCanvas.height = currentCanvas.offsetHeight
      initNodes(); initStreams(); initCircuits()
    }

    function initNodes() {
      nodes = []
      const count = Math.floor((W * H) / 9000)
      for (let i = 0; i < count; i++) {
        nodes.push({
          x: Math.random() * W, y: Math.random() * H,
          vx: (Math.random() - 0.5) * 0.35, vy: (Math.random() - 0.5) * 0.35,
          r: Math.random() * 2 + 1,
          type: Math.random() < 0.55 ? 0 : Math.random() < 0.6 ? 1 : 2,
          pulse: Math.random() * Math.PI * 2,
          pulseSpeed: 0.02 + Math.random() * 0.03,
        })
      }
    }

    function initStreams() {
      streams = []
      const cols = Math.floor(W / 22)
      for (let i = 0; i < cols; i++) {
        if (Math.random() > 0.55) continue
        streams.push({ x: i * 22 + Math.random() * 10, y: Math.random() * H, speed: 0.4 + Math.random() * 1.2, length: 40 + Math.random() * 80, opacity: 0.03 + Math.random() * 0.06, color: Math.random() < 0.7 ? '197,160,40' : '239,1,7' })
      }
    }

    function initCircuits() {
      circuits = []
      for (let i = 0; i < 18; i++) {
        circuits.push({ x: Math.random() * W, y: Math.random() * H, dir: Math.random() < 0.5 ? 'h' : 'v', len: 30 + Math.random() * 120, progress: Math.random(), speed: 0.003 + Math.random() * 0.006, color: Math.random() < 0.6 ? '197,160,40' : '239,1,7', opacity: 0.06 + Math.random() * 0.1 })
      }
    }

    function drawHexGrid() {
      const size = 44
      const cols = Math.ceil(W / (size * 1.5)) + 2
      const rows = Math.ceil(H / (size * 1.73)) + 2
      ctx.strokeStyle = 'rgba(197,160,40,0.04)'; ctx.lineWidth = 0.5
      for (let row = -1; row < rows; row++) {
        for (let col = -1; col < cols; col++) {
          const x = col * size * 1.5
          const y = row * size * 1.73 + (col % 2 === 0 ? 0 : size * 0.865)
          ctx.beginPath()
          for (let i = 0; i < 6; i++) {
            const angle = Math.PI / 180 * (60 * i - 30)
            const px = x + size * Math.cos(angle); const py = y + size * Math.sin(angle)
            i === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py)
          }
          ctx.closePath(); ctx.stroke()
        }
      }
    }

    function drawOrbs() {
      const g1 = ctx.createRadialGradient(W * 0.72, H * 0.45, 0, W * 0.72, H * 0.45, W * 0.35)
      g1.addColorStop(0, 'rgba(197,160,40,0.07)'); g1.addColorStop(1, 'rgba(197,160,40,0)')
      ctx.fillStyle = g1; ctx.fillRect(0, 0, W, H)
      const g2 = ctx.createRadialGradient(W * 0.9, H * 0.15, 0, W * 0.9, H * 0.15, W * 0.22)
      g2.addColorStop(0, 'rgba(239,1,7,0.08)'); g2.addColorStop(1, 'rgba(239,1,7,0)')
      ctx.fillStyle = g2; ctx.fillRect(0, 0, W, H)
    }

    function drawStreams() {
      streams.forEach(s => {
        const grad = ctx.createLinearGradient(s.x, s.y - s.length, s.x, s.y)
        grad.addColorStop(0, `rgba(${s.color},0)`); grad.addColorStop(1, `rgba(${s.color},${s.opacity})`)
        ctx.strokeStyle = grad; ctx.lineWidth = 1
        ctx.beginPath(); ctx.moveTo(s.x, s.y - s.length); ctx.lineTo(s.x, s.y); ctx.stroke()
        s.y += s.speed
        if (s.y - s.length > H) s.y = -s.length
      })
    }

    function drawCircuits() {
      circuits.forEach(c => {
        c.progress += c.speed
        if (c.progress > 1) { c.progress = 0; c.x = Math.random() * W; c.y = Math.random() * H; c.dir = Math.random() < 0.5 ? 'h' : 'v'; c.len = 30 + Math.random() * 120 }
        const ex = c.dir === 'h' ? c.x + c.len * c.progress : c.x
        const ey = c.dir === 'v' ? c.y + c.len * c.progress : c.y
        const grad = ctx.createLinearGradient(c.x, c.y, ex, ey)
        grad.addColorStop(0, `rgba(${c.color},0)`); grad.addColorStop(1, `rgba(${c.color},${c.opacity})`)
        ctx.strokeStyle = grad; ctx.lineWidth = 1.2
        ctx.beginPath(); ctx.moveTo(c.x, c.y); ctx.lineTo(ex, ey); ctx.stroke()
        ctx.fillStyle = `rgba(${c.color},${c.opacity * 2})`
        ctx.beginPath(); ctx.arc(ex, ey, 2, 0, Math.PI * 2); ctx.fill()
      })
    }

    function drawConnections() {
      const maxDist = 120
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x; const dy = nodes[i].y - nodes[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < maxDist) {
            const alpha = (1 - dist / maxDist) * 0.18
            ctx.strokeStyle = nodes[i].type === 1 || nodes[j].type === 1 ? `rgba(239,1,7,${alpha})` : nodes[i].type === 2 || nodes[j].type === 2 ? `rgba(120,160,255,${alpha * 0.7})` : `rgba(197,160,40,${alpha})`
            ctx.lineWidth = 0.6
            ctx.beginPath(); ctx.moveTo(nodes[i].x, nodes[i].y); ctx.lineTo(nodes[j].x, nodes[j].y); ctx.stroke()
          }
        }
      }
    }

    function drawNodes() {
      nodes.forEach(n => {
        n.pulse += n.pulseSpeed
        const glow = 0.7 + 0.3 * Math.sin(n.pulse)
        const color = n.type === 0 ? `rgba(197,160,40,${glow * 0.85})` : n.type === 1 ? `rgba(239,1,7,${glow * 0.7})` : `rgba(140,180,255,${glow * 0.6})`
        const grad = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, n.r * 4)
        grad.addColorStop(0, color); grad.addColorStop(1, 'rgba(0,0,0,0)')
        ctx.fillStyle = grad; ctx.beginPath(); ctx.arc(n.x, n.y, n.r * 4, 0, Math.PI * 2); ctx.fill()
        ctx.fillStyle = color; ctx.beginPath(); ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2); ctx.fill()
        n.x += n.vx; n.y += n.vy
        if (n.x < 0 || n.x > W) n.vx *= -1
        if (n.y < 0 || n.y > H) n.vy *= -1
      })
    }

    function draw() {
      ctx.clearRect(0, 0, W, H)
      drawOrbs(); drawHexGrid(); drawStreams(); drawCircuits(); drawConnections(); drawNodes()
      animId = requestAnimationFrame(draw)
    }

    const ro = new ResizeObserver(() => { cancelAnimationFrame(animId); resize(); draw() })
    ro.observe(canvas)
    resize(); draw()
    return () => { cancelAnimationFrame(animId); ro.disconnect() }
  }, [])

  return <canvas ref={canvasRef} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} />
}
