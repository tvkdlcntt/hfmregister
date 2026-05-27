'use client'
import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav style={{
      position: 'sticky', top: 0, zIndex: 100,
      background: 'rgba(6,8,16,0.93)',
      backdropFilter: 'blur(16px)',
      borderBottom: '1px solid rgba(197,160,40,0.12)',
    }}>
      <div style={{ padding: '0 5%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 64 }}>
        {/* Logo */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
          <div style={{
            width: 36, height: 36, background: '#EF0107', flexShrink: 0,
            clipPath: 'polygon(50% 0%,93% 25%,93% 75%,50% 100%,7% 75%,7% 25%)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: "'Barlow Condensed',sans-serif", fontSize: 12, fontWeight: 900, color: 'white',
          }}>HFM</div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 22, fontWeight: 900, color: '#F0EFEA', letterSpacing: 1, lineHeight: 1 }}>
              HF<span style={{ color: '#C5A028' }}>M</span>
            </span>
            <span style={{ fontSize: 9, color: '#7a7e8a', textTransform: 'uppercase', letterSpacing: '1px', fontFamily: "'Barlow Condensed',sans-serif", marginTop: 2 }}>
              Independent Partner
            </span>
          </div>
        </Link>

        {/* Desktop links */}
        <ul style={{ display: 'flex', gap: 28, listStyle: 'none', margin: 0 }} className="desktop-nav">
          {['Markets', 'Platforms', 'Promotions', 'About'].map(l => (
            <li key={l}>
              <Link href="#" style={{
                fontFamily: "'Barlow Condensed',sans-serif", fontSize: 14, fontWeight: 600,
                letterSpacing: '1.5px', textTransform: 'uppercase', color: '#7a7e8a', textDecoration: 'none',
              }}>{l}</Link>
            </li>
          ))}
          <li>
            <Link href="/Why-HFM" style={{
              fontFamily: "'Barlow Condensed',sans-serif", fontSize: 14, fontWeight: 600,
              letterSpacing: '1.5px', textTransform: 'uppercase', color: '#C5A028', textDecoration: 'none',
            }}>Why HFM</Link>
          </li>
        </ul>

        {/* CTA */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <Link href="https://my.hfm.com/en/register" target="_blank" style={{
            background: '#EF0107', color: 'white', padding: '9px 22px',
            fontFamily: "'Barlow Condensed',sans-serif", fontSize: 13, fontWeight: 700,
            letterSpacing: '2px', textTransform: 'uppercase', textDecoration: 'none', borderRadius: 2,
          }}>Open Account</Link>

          {/* Hamburger */}
          <button
            onClick={() => setOpen(!open)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'none', flexDirection: 'column', gap: 5, padding: 4 }}
            className="hamburger"
            aria-label="Menu"
          >
            {[0,1,2].map(i => (
              <span key={i} style={{ display: 'block', width: 22, height: 2, background: '#F0EFEA', borderRadius: 1 }} />
            ))}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{
          background: 'rgba(11,15,26,0.98)', borderTop: '1px solid rgba(255,255,255,0.06)',
          padding: '20px 5%', display: 'flex', flexDirection: 'column', gap: 16,
        }}>
          {['Markets', 'Platforms', 'Promotions', 'About', 'Why HFM'].map(l => (
            <Link key={l} href={l === 'Why HFM' ? '/Why-HFM' : '#'} style={{
              fontFamily: "'Barlow Condensed',sans-serif", fontSize: 18, fontWeight: 700,
              letterSpacing: '2px', textTransform: 'uppercase',
              color: l === 'Why HFM' ? '#C5A028' : '#F0EFEA', textDecoration: 'none',
            }} onClick={() => setOpen(false)}>{l}</Link>
          ))}
        </div>
      )}

      <style>{`
        @media(max-width:768px){
          .desktop-nav{display:none !important}
          .hamburger{display:flex !important}
        }
      `}</style>
    </nav>
  )
}
