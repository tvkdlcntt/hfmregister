import type { Metadata } from 'next'
import Navbar from './components/Navbar'
import AICanvas from './components/AICanvas'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'HFM – Trade Like a Champion | Official Arsenal FC Partner',
  description: 'HFM is an award-winning multi-asset forex broker trusted by 3.5M+ traders. FCA & FSCA regulated. Official Arsenal FC Partner. Zero commission trading from 0.0 pips.',
}

const WHY_CARDS = [
  { n: '01', icon: '⚡', title: 'Ultra-Fast Execution', body: 'Orders executed in under 0.1 seconds. No requotes, no dealing desk. Pure STP/ECN access to global liquidity pools.' },
  { n: '02', icon: '📊', title: '1000+ Instruments', body: 'Trade Forex majors, minors, exotics. Gold, silver, crude oil, global indices, and top-tier US stocks from one account.' },
  { n: '03', icon: '🛡️', title: 'Multi-Regulated', body: 'Licensed by FCA (UK), FSCA (South Africa), CySEC (Cyprus) and supervised across multiple global jurisdictions.' },
  { n: '04', icon: '💰', title: 'Zero Commission', body: 'Premium account types with zero commission on Forex trading. Tight spreads from 0.0 pips on major pairs.' },
  { n: '05', icon: '🏆', title: 'Award-Winning Platforms', body: 'Full MT4, MT5 and HFM Mobile App with advanced charting, Expert Advisors, copy trading and real-time analysis.' },
  { n: '06', icon: '🌍', title: '24/5 Global Support', body: 'Dedicated multilingual support team available 24 hours, 5 days a week across all major time zones.' },
]

const LEGAL_ENTITIES = [
  { name: 'HF Markets (SV) Ltd', detail: 'Company reg. 22747 IBC 2015 · Suite 305, Griffith Corporate Centre, P.O. Box 1510, Beachmont Kingstown, St. Vincent and the Grenadines.' },
  { name: 'HF Markets SA (PTY) Ltd', detail: 'Company reg. No. 2015/341406/07 · Suite 206 Granger Bay Court, 2nd Floor, North Wing, Beach Road V&A Waterfront, Cape Town, 8001.' },
  { name: 'HF Markets (Seychelles) Ltd', detail: 'Company reg. No. 8419176-1 · Room S203A, Second Floor, Orion Complex, Victoria, Mahe, Republic of Seychelles.' },
  { name: 'HF Markets Fintech Services Ltd', detail: 'Company reg. ΗΕ 348222 · Spyrou Kyprianou 50, Irida 3 Tower, 7th Floor, Larnaca 6057, Cyprus. Provides payment related services to group entities.' },
  { name: 'HF Markets (UK) Ltd', detail: 'Authorised and regulated by the FCA, firm reference number 801701. Company reg. No. 11118651 · Bloomsbury Building, 10 Bloomsbury Way, Holborn, London, WC1A 2SL.' },
]

export default function HomePage() {
  return (
    <>
      <Navbar />

      {/* ── HERO ── */}
      <section style={{ minHeight: '93vh', position: 'relative', display: 'flex', alignItems: 'center', overflow: 'hidden', background: '#060810' }}>
        <AICanvas />

        {/* vignette */}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(6,8,16,0.93) 0%, rgba(6,8,16,0.76) 38%, rgba(6,8,16,0.22) 65%, rgba(6,8,16,0.04) 100%)', zIndex: 1 }} />

        {/* content */}
        <div style={{ position: 'relative', zIndex: 2, padding: '0 5%', maxWidth: 640 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(239,1,7,0.1)', border: '1px solid rgba(239,1,7,0.3)', color: '#ff5a5f', fontFamily: "'Barlow Condensed',sans-serif", fontSize: 12, fontWeight: 700, letterSpacing: '2.5px', textTransform: 'uppercase', padding: '6px 14px', borderRadius: 2, marginBottom: 24 }}>
            <span className="pulse-dot" style={{ width: 6, height: 6, background: '#EF0107', borderRadius: '50%', flexShrink: 0 }} />
            Official Partner · Arsenal FC 2025/26
          </div>
          <h1 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 'clamp(58px,8vw,102px)', fontWeight: 900, lineHeight: 0.89, textTransform: 'uppercase', letterSpacing: -2, marginBottom: 22 }}>
            <span style={{ color: '#F0EFEA', display: 'block' }}>Trade</span>
            <span style={{ color: '#EF0107', display: 'block' }}>Like a</span>
            <span style={{ color: 'transparent', display: 'block', WebkitTextStroke: '1.5px rgba(197,160,40,0.45)' }}>Champion</span>
          </h1>
          <p style={{ fontSize: 16, color: '#7a7e8a', lineHeight: 1.75, maxWidth: 460, marginBottom: 36, fontWeight: 300 }}>
            HFM is an <strong style={{ color: '#F0C842', fontWeight: 600 }}>award-winning multi-asset broker</strong> trusted by 3.5 million traders worldwide. Powered by AI-grade infrastructure — access Forex, Metals, Indices and Stocks with institutional-grade conditions.
          </p>
          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            <Link href="https://my.hfm.com/en/register" target="_blank" style={{ background: '#EF0107', color: 'white', padding: '16px 42px', fontFamily: "'Barlow Condensed',sans-serif", fontSize: 16, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', borderRadius: 2, textDecoration: 'none' }}>Open Free Account</Link>
            <Link href="/review" style={{ background: 'transparent', color: '#C5A028', padding: '16px 36px', fontFamily: "'Barlow Condensed',sans-serif", fontSize: 16, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', border: '1px solid rgba(197,160,40,0.45)', borderRadius: 2, textDecoration: 'none' }}>Why HFM</Link>
          </div>
        </div>

        {/* stats bar */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, zIndex: 4, background: 'rgba(11,15,26,0.78)', backdropFilter: 'blur(12px)', borderTop: '1px solid rgba(197,160,40,0.1)', display: 'flex', padding: '20px 5%', gap: 48, flexWrap: 'wrap' }}>
          {[['3.5M+','Traders Worldwide'],['1:2000','Max Leverage'],['1000+','Instruments'],['0.0','Pips From']].map(([n,l]) => (
            <div key={l}>
              <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 38, fontWeight: 900, color: '#C5A028', lineHeight: 1 }}>{n}</div>
              <div style={{ fontSize: 11, letterSpacing: 2, textTransform: 'uppercase', color: '#7a7e8a', marginTop: 4 }}>{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── TICKER ── */}
      <div style={{ background: '#EF0107', padding: '11px 0', overflow: 'hidden' }}>
        <div className="ticker-track" style={{ display: 'flex', whiteSpace: 'nowrap' }}>
          {[...Array(2)].map((_, rep) => (
            ['Forex','Metals','Indices','Stocks','Crypto','Energies','FCA Regulated','FSCA Licensed','Official Arsenal FC Partner','MT4 & MT5'].map((t, i) => (
              <span key={`${rep}-${i}`} style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 13, fontWeight: 700, letterSpacing: 3, textTransform: 'uppercase', color: 'white', padding: '0 36px' }}>
                {t} <span style={{ color: 'rgba(255,255,255,0.35)' }}>·</span>
              </span>
            ))
          ))}
        </div>
      </div>

      {/* ── WHY HFM ── */}
      <section style={{ padding: '96px 5%' }}>
        <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 12, fontWeight: 700, letterSpacing: 4, textTransform: 'uppercase', color: '#EF0107', marginBottom: 14 }}>Why Choose HFM</div>
        <h2 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 'clamp(36px,5vw,66px)', fontWeight: 900, textTransform: 'uppercase', lineHeight: 0.93, letterSpacing: -1, marginBottom: 52 }}>
          Trade With The<br /><span style={{ color: '#C5A028' }}>Best Conditions</span>
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: 1, background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.05)' }}>
          {WHY_CARDS.map((c) => (
            <div key={c.n} className="why-card" style={{ background: '#0b0f1a', padding: '40px 32px', position: 'relative', overflow: 'hidden', transition: 'background 0.3s' }}>
              <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 80, fontWeight: 900, color: 'rgba(255,255,255,0.035)', position: 'absolute', top: 12, right: 20, lineHeight: 1 }}>{c.n}</div>
              <div style={{ fontSize: 32, marginBottom: 12 }}>{c.icon}</div>
              <h3 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 20, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 12, color: '#F0EFEA' }}>{c.title}</h3>
              <p style={{ fontSize: 14, color: '#7a7e8a', lineHeight: 1.75 }}>{c.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── ARSENAL × HFM ── */}
      <section style={{ position: 'relative', overflow: 'hidden', minHeight: 640, display: 'flex', alignItems: 'center' }}>
        <div style={{ position: 'absolute', inset: 0 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/arsenal-bg.jpg" alt="Arsenal FC" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', filter: 'brightness(0.45) saturate(1.3)' }} />
        </div>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(6,8,16,0.97) 0%, rgba(6,8,16,0.82) 38%, rgba(6,8,16,0.4) 62%, rgba(6,8,16,0.1) 100%)' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 55% 70% at 80% 50%,rgba(239,1,7,0.1) 0%,transparent 65%)' }} />

        <div style={{ position: 'relative', zIndex: 2, padding: '80px 5%', maxWidth: 580 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 24 }}>
            <div style={{ background: '#EF0107', clipPath: 'polygon(50% 0%,93% 25%,93% 75%,50% 100%,7% 75%,7% 25%)', width: 46, height: 46, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Barlow Condensed',sans-serif", fontSize: 13, fontWeight: 900, color: 'white', flexShrink: 0 }}>HFM</div>
            <span style={{ color: 'rgba(255,255,255,0.25)', fontFamily: "'Barlow Condensed',sans-serif", fontSize: 20 }}>×</span>
            <span style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 17, fontWeight: 700, color: '#F0EFEA', letterSpacing: 2, textTransform: 'uppercase' }}>Arsenal FC</span>
          </div>
          <span style={{ display: 'inline-block', background: 'rgba(197,160,40,0.12)', border: '1px solid rgba(197,160,40,0.4)', color: '#C5A028', fontFamily: "'Barlow Condensed',sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: 3, padding: '5px 14px', marginBottom: 20, borderRadius: 2, textTransform: 'uppercase' }}>Official Partnership · Season 2025/26</span>
          <h2 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 'clamp(40px,5vw,66px)', fontWeight: 900, textTransform: 'uppercase', lineHeight: 0.93, letterSpacing: -1, marginBottom: 20 }}>
            <span style={{ color: '#EF0107', display: 'block' }}>The Gunners.</span>
            <span style={{ color: '#C5A028', display: 'block' }}>Our Partners.</span>
          </h2>
          <p style={{ fontSize: 15, color: '#7a7e8a', lineHeight: 1.8, marginBottom: 30, maxWidth: 450 }}>
            HFM is proud to be an Official Partner of Arsenal FC. A partnership built on precision, ambition, and winning mentality. As Arteta&apos;s Gunners dominate the Premier League, HFM equips traders with the professional-grade edge to dominate global financial markets.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 32, maxWidth: 420 }}>
            {[['PL Champions','2025/26 Season'],['60,704','Emirates Capacity'],['140+','Years of History'],['3.5M+','HFM Active Traders']].map(([v,k]) => (
              <div key={k} style={{ background: 'rgba(8,10,13,0.6)', border: '1px solid rgba(255,255,255,0.1)', padding: '14px 18px', borderRadius: 2, backdropFilter: 'blur(6px)' }}>
                <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 26, fontWeight: 900, color: '#C5A028', lineHeight: 1 }}>{v}</div>
                <div style={{ fontSize: 11, color: '#7a7e8a', letterSpacing: '1.5px', textTransform: 'uppercase', marginTop: 4 }}>{k}</div>
              </div>
            ))}
          </div>
          <Link href="https://my.hfm.com/en/register" target="_blank" style={{ background: '#EF0107', color: 'white', padding: '16px 40px', fontFamily: "'Barlow Condensed',sans-serif", fontSize: 16, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', borderRadius: 2, textDecoration: 'none', display: 'inline-block' }}>Open Account Now</Link>
        </div>
      </section>

      {/* ── LEGAL ── */}
      <section style={{ background: '#0b0f1a', borderTop: '1px solid rgba(255,255,255,0.05)', padding: '52px 5% 40px' }}>
        <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: 4, textTransform: 'uppercase', color: '#7a7e8a', marginBottom: 20, display: 'flex', alignItems: 'center', gap: 10 }}>
          <span style={{ display: 'block', width: 20, height: 1, background: '#7a7e8a' }} />
          Legal Information
        </div>
        <p style={{ fontSize: 13, color: '#7a7e8a', lineHeight: 1.75, marginBottom: 16, maxWidth: 1000 }}>
          <strong style={{ color: 'rgba(255,255,255,0.5)', fontWeight: 500 }}>Legal:</strong> HF Markets (SV) Ltd is incorporated in St. Vincent &amp; the Grenadines as an International Business Company with the registration number 22747 IBC 2015.
        </p>
        <p style={{ fontSize: 12.5, color: '#616469', lineHeight: 1.9, marginBottom: 16, maxWidth: 1000 }}>
          The website is operated and provides content by HF Markets Group of companies, which include:{' '}
          {LEGAL_ENTITIES.map((e, i) => (
            <span key={i}><strong style={{ color: 'rgba(255,255,255,0.4)', fontWeight: 500 }}>{e.name}</strong>, {e.detail}{i < LEGAL_ENTITIES.length - 1 ? ' ' : ''}</span>
          ))}
        </p>
        <div style={{ background: 'rgba(239,1,7,0.04)', borderLeft: '3px solid rgba(239,1,7,0.5)', padding: '14px 18px', fontSize: 12, color: '#705055', lineHeight: 1.75, maxWidth: 1000, borderRadius: '0 2px 2px 0', marginBottom: 12 }}>
          <strong style={{ color: '#a06065', fontWeight: 600 }}>⚠ Risk Warning:</strong> Trading Leveraged Products such as Forex and Derivatives may not be suitable for all investors as they carry a high degree of risk to your capital. Please ensure you fully understand the risks involved, consider your investment objectives and level of experience before trading. Seek independent advice if necessary.
        </div>
        <p style={{ fontSize: 12, color: '#555a60', lineHeight: 1.7, maxWidth: 1000 }}>
          <strong style={{ color: 'rgba(255,255,255,0.25)' }}>Regional Restrictions:</strong> HFM does not offer services to residents of certain jurisdictions including the USA, Canada, Sudan, Syria, Iran, North Korea, UAE, Türkiye, and others.
        </p>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ background: '#060810', borderTop: '1px solid rgba(255,255,255,0.04)', padding: '22px 5%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{ background: '#EF0107', clipPath: 'polygon(50% 0%,93% 25%,93% 75%,50% 100%,7% 75%,7% 25%)', width: 26, height: 26, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Barlow Condensed',sans-serif", fontSize: 9, fontWeight: 900, color: 'white' }}>HFM</div>
          <span style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 22, fontWeight: 900, color: '#F0EFEA' }}>HF<span style={{ color: '#C5A028' }}>M</span></span>
        </div>
        <p style={{ fontSize: 12, color: '#7a7e8a' }}>© 2026 HF Markets Group · All Rights Reserved</p>
        <p style={{ fontSize: 12, color: '#7a7e8a' }}>Official Partner of Arsenal FC</p>
      </footer>
    </>
  )
}
