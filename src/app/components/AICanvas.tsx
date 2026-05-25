'use client'
import { useEffect, useRef } from 'react'

export default function ForexCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')!
    let animId: number
    let tick = 0
    let tapeOffset = 0
    let W = 0, H = 0

    interface FloatNum { x:number; y:number; val:string; speed:number; opacity:number; size:number; color:string }
    let floatNums: FloatNum[] = []

    const pairs = [
      { color:'rgba(197,160,40,', baseY:0.42, amp:0.12, freq:0.018, phase:0, label:'EUR/USD' },
      { color:'rgba(239,1,7,',    baseY:0.58, amp:0.09, freq:0.022, phase:1.2, label:'GBP/USD' },
      { color:'rgba(100,180,255,',baseY:0.30, amp:0.14, freq:0.015, phase:2.4, label:'XAU/USD' },
      { color:'rgba(34,197,94,',  baseY:0.70, amp:0.08, freq:0.025, phase:0.8, label:'USD/JPY' },
    ]

    const tapeItems = ['EUR/USD 1.0842 ▲','GBP/USD 1.2674 ▼','USD/JPY 149.82 ▲','XAU/USD 2318.5 ▲','USD/CHF 0.9021 ▼','AUD/USD 0.6534 ▲','NZD/USD 0.5981 ▼','EUR/GBP 0.8564 ▲','USD/CAD 1.3642 ▼','EUR/JPY 162.14 ▲','US30 38924 ▼','NAS100 17830 ▲','WTI 81.34 ▼']

    function resize() {
      W = canvas.width = canvas.offsetWidth
      H = canvas.height = canvas.offsetHeight
      floatNums = []
      for (let i = 0; i < 28; i++) {
        floatNums.push({ x: W*0.3+Math.random()*W*0.7, y: Math.random()*H, val:(Math.random()*2-1).toFixed(4), speed:0.15+Math.random()*0.3, opacity:0.04+Math.random()*0.07, size:10+Math.random()*4, color:Math.random()<0.5?'197,160,40':Math.random()<0.5?'239,1,7':'34,197,94' })
      }
    }

    function drawBg() {
      ctx.fillStyle = '#05080f'; ctx.fillRect(0,0,W,H)
      const g = ctx.createRadialGradient(W*0.75,H*0.5,0,W*0.75,H*0.5,W*0.45)
      g.addColorStop(0,'rgba(197,160,40,0.05)'); g.addColorStop(1,'rgba(197,160,40,0)')
      ctx.fillStyle=g; ctx.fillRect(0,0,W,H)
      const r = ctx.createRadialGradient(W*0.95,H*0.1,0,W*0.95,H*0.1,W*0.3)
      r.addColorStop(0,'rgba(239,1,7,0.06)'); r.addColorStop(1,'rgba(239,1,7,0)')
      ctx.fillStyle=r; ctx.fillRect(0,0,W,H)
    }

    function drawGrid() {
      ctx.setLineDash([4,8])
      for (let i=0;i<8;i++) { const y=(H/8)*i; ctx.strokeStyle=`rgba(197,160,40,${i%2===0?0.05:0.025})`; ctx.lineWidth=0.5; ctx.beginPath(); ctx.moveTo(W*0.3,y); ctx.lineTo(W,y); ctx.stroke() }
      ctx.setLineDash([2,6])
      for (let i=0;i<12;i++) { const x=W*0.3+(W*0.7/12)*i; ctx.strokeStyle='rgba(255,255,255,0.02)'; ctx.lineWidth=0.5; ctx.beginPath(); ctx.moveTo(x,0); ctx.lineTo(x,H); ctx.stroke() }
      ctx.setLineDash([])
    }

    function drawFloatNums() {
      floatNums.forEach(n => {
        ctx.fillStyle=`rgba(${n.color},${n.opacity})`; ctx.font=`${n.size}px 'Barlow Condensed',monospace`; ctx.fillText(n.val,n.x,n.y)
        n.y+=n.speed; if(n.y>H+20){n.y=-10;n.x=W*0.3+Math.random()*W*0.7;n.val=(Math.random()*2-1).toFixed(4)}
      })
    }

    function drawForexLines() {
      pairs.forEach((p, pi) => {
        const pts: {x:number;y:number}[] = []
        for (let i=0;i<=120;i++) {
          const t=i/120
          const noise = Math.sin(t*Math.PI*6+p.phase+tick*p.freq)*p.amp*0.5 + Math.sin(t*Math.PI*11+p.phase*1.3+tick*p.freq*1.4)*p.amp*0.3 + Math.sin(t*Math.PI*3+p.phase*0.7+tick*p.freq*0.8)*p.amp*0.6 + Math.sin(t*Math.PI*18+tick*p.freq*2)*p.amp*0.15
          pts.push({ x:W*0.28+t*(W*0.72), y:H*p.baseY+noise*H })
        }
        ctx.beginPath(); ctx.moveTo(pts[0].x,H); pts.forEach(pt=>ctx.lineTo(pt.x,pt.y)); ctx.lineTo(pts[pts.length-1].x,H); ctx.closePath()
        const ag = ctx.createLinearGradient(0,H*p.baseY-p.amp*H,0,H*p.baseY+p.amp*H+60); ag.addColorStop(0,p.color+'0.06)'); ag.addColorStop(1,p.color+'0)')
        ctx.fillStyle=ag; ctx.fill()
        ctx.beginPath(); pts.forEach((pt,i)=>i===0?ctx.moveTo(pt.x,pt.y):ctx.lineTo(pt.x,pt.y))
        ctx.strokeStyle=p.color+'0.55)'; ctx.lineWidth=pi===0?1.8:1.2; ctx.setLineDash([]); ctx.stroke()
        const last=pts[pts.length-1]
        ctx.beginPath(); ctx.arc(last.x,last.y,4,0,Math.PI*2); ctx.fillStyle=p.color+'0.9)'; ctx.fill()
        const pr=6+Math.sin(tick*0.06)*3; ctx.beginPath(); ctx.arc(last.x,last.y,pr,0,Math.PI*2); ctx.strokeStyle=p.color+`${0.3+Math.sin(tick*0.06)*0.2})`; ctx.lineWidth=1; ctx.stroke()
        ctx.fillStyle=p.color+'0.7)'; ctx.font="bold 10px 'Barlow Condensed',monospace"; ctx.fillText(p.label,last.x+10,last.y+4)
      })
    }

    function drawCandleChart() {
      const cx=W*0.55,cy=H*0.06,cw=W*0.42,ch=H*0.3; const candles=28; const cw2=cw/candles
      ctx.strokeStyle='rgba(197,160,40,0.06)'; ctx.lineWidth=0.5; ctx.strokeRect(cx,cy,cw,ch)
      ctx.fillStyle='rgba(197,160,40,0.25)'; ctx.font="bold 10px 'Barlow Condensed',sans-serif"; ctx.fillText('EUR/USD  H1  MT5',cx+8,cy+14)
      for(let i=0;i<candles;i++){
        const seed=i*73.7+tick*0.002
        const open=0.3+0.4*((Math.sin(seed)*0.5+0.5)+(Math.sin(seed*0.3)*0.2))
        const close=0.3+0.4*((Math.sin(seed+0.8)*0.5+0.5)+(Math.sin(seed*0.3+0.5)*0.2))
        const high=Math.max(open,close)+0.05*Math.abs(Math.sin(seed*2))
        const low=Math.min(open,close)-0.05*Math.abs(Math.sin(seed*3))
        const bull=close>open; const col=bull?'rgba(34,197,94,':'rgba(239,1,7,'
        const x=cx+i*cw2+cw2*0.1; const bw=cw2*0.7; const toY=(v:number)=>cy+ch-ch*v
        ctx.strokeStyle=col+'0.6)'; ctx.lineWidth=0.8; ctx.beginPath(); ctx.moveTo(x+bw/2,toY(high)); ctx.lineTo(x+bw/2,toY(low)); ctx.stroke()
        ctx.fillStyle=col+(bull?'0.55)':'0.5)'); ctx.fillRect(x,Math.min(toY(open),toY(close)),bw,Math.abs(toY(open)-toY(close))||1)
      }
    }

    function drawTape() {
      const ty=H-90
      ctx.fillStyle='rgba(5,8,15,0.5)'; ctx.fillRect(W*0.28,ty,W*0.72,22)
      ctx.strokeStyle='rgba(197,160,40,0.08)'; ctx.lineWidth=0.5; ctx.strokeRect(W*0.28,ty,W*0.72,22)
      ctx.save(); ctx.beginPath(); ctx.rect(W*0.28,ty,W*0.72,22); ctx.clip()
      ctx.font="bold 11px 'Barlow Condensed',monospace"; ctx.letterSpacing='1px'
      let x=W*0.29+tapeOffset
      const drawItems = () => tapeItems.forEach(item=>{
        ctx.fillStyle=item.includes('▲')?'rgba(34,197,94,0.7)':item.includes('▼')?'rgba(239,1,7,0.7)':'rgba(197,160,40,0.7)'
        ctx.fillText(item,x,ty+15); x+=ctx.measureText(item).width+40
      })
      drawItems(); if(x<W) drawItems()
      ctx.restore(); tapeOffset-=0.7; if(tapeOffset<-W*1.2) tapeOffset=0
    }

    function draw() {
      tick++; ctx.clearRect(0,0,W,H)
      drawBg(); drawGrid(); drawFloatNums(); drawForexLines(); drawCandleChart(); drawTape()
      animId=requestAnimationFrame(draw)
    }

    const ro = new ResizeObserver(()=>{ cancelAnimationFrame(animId); resize(); draw() })
    ro.observe(canvas); resize(); draw()
    return ()=>{ cancelAnimationFrame(animId); ro.disconnect() }
  }, [])

  return <canvas ref={canvasRef} style={{ position:'absolute', inset:0, width:'100%', height:'100%' }} />
}
