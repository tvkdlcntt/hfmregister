import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'HFM Review 2026 – Is HFM a Legit Broker? Full Analysis',
  description: 'In-depth HFM broker review 2026. Regulation, spreads, platforms, account types, fees and Arsenal FC partnership. FCA & FSCA regulated.',
  keywords: 'HFM review, HFMarkets review 2026, HFM broker review, is HFM legit, HFM spreads, HFM regulation',
  openGraph: {
    title: 'HFM Review 2026 – Full Broker Analysis',
    description: 'Comprehensive HFM broker review covering regulation, trading conditions, platforms, account types, fees and customer support.',
    type: 'article',
  },
  alternates: { canonical: 'https://hfm.com/review' },
}

const RATING_CATS = [
  { label: 'Regulation & Safety',    score: 4.8 },
  { label: 'Trading Conditions',     score: 4.6 },
  { label: 'Platform & Tools',       score: 4.7 },
  { label: 'Account Types',          score: 4.5 },
  { label: 'Customer Support',       score: 4.4 },
  { label: 'Deposits & Withdrawals', score: 4.5 },
]

const PROS = [
  'Regulated by FCA (UK) — one of the strictest financial regulators globally',
  'Ultra-tight spreads from 0.0 pips on Zero accounts',
  'Over 1,000 trading instruments across 6 asset classes',
  'MT4 and MT5 platforms with full Expert Advisor support',
  'Negative balance protection on retail accounts',
  'No minimum deposit on Standard accounts',
  'Official Partner of Arsenal FC — strong brand credibility',
  'Free VPS hosting for algorithmic traders',
]

const CONS = [
  'Offshore SVG entity used for some higher-leverage accounts',
  'Inactivity fee after 6 months of no trading',
  'Crypto CFDs not available in all jurisdictions',
  'No US clients accepted',
]

const ACCOUNT_TYPES = [
  { name:'Micro',       min:'$5',   spread:'From 1.2 pips', commission:'None',          leverage:'1:1000', best:'Beginners' },
  { name:'Premium',     min:'$100', spread:'From 1.2 pips', commission:'None',          leverage:'1:2000', best:'Intermediate' },
  { name:'Zero Spread', min:'$200', spread:'0.0 pips',      commission:'$6/lot RT',     leverage:'1:500',  best:'Scalpers' },
  { name:'HFcopy',      min:'$100', spread:'From 1.2 pips', commission:'Performance %', leverage:'1:500',  best:'Copy Traders' },
]

function Stars({ score }: { score: number }) {
  return (
    <span>
      {[...Array(5)].map((_, i) => (
        <span key={i} style={{ color: i < Math.floor(score) ? '#C5A028' : 'rgba(255,255,255,0.1)', fontSize: 18 }}>★</span>
      ))}
    </span>
  )
}

export default function ReviewPage() {
  const overallScore = 4.6
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Review',
    name: 'HFM Broker Review 2026',
    reviewBody: 'Comprehensive review of HFM (HF Markets) covering regulation, trading conditions, platforms, account types, fees and customer support.',
    reviewRating: { '@type': 'Rating', ratingValue: overallScore, bestRating: 5, worstRating: 1 },
    author: { '@type': 'Organization', name: 'HFM Review Team' },
    itemReviewed: { '@type': 'FinancialProduct', name: 'HFM (HF Markets)', url: 'https://www.hfm.com' },
    datePublished: '2026-05-01',
    dateModified: '2026-05-25',
  }

  return (
    <div style={{ background: '#0d1117', color: '#e6edf3', fontFamily: "'Georgia','Times New Roman',serif", minHeight: '100vh' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* ── REVIEW NAV — standalone, minimal ── */}
      <header style={{ background: '#161b22', borderBottom: '1px solid #30363d', padding: '0 5%', height: 56, display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'sticky', top: 0, zIndex: 50 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <Link href="/" style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 20, fontWeight: 900, color: '#e6edf3', textDecoration: 'none', letterSpacing: 1 }}>
            HF<span style={{ color: '#C5A028' }}>M</span>
          </Link>
          <span style={{ color: '#30363d' }}>|</span>
          <span style={{ fontSize: 13, color: '#8b949e', fontFamily: 'system-ui,sans-serif' }}>Broker Review 2026</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <Link href="/" style={{ fontSize: 13, color: '#8b949e', textDecoration: 'none', fontFamily: 'system-ui,sans-serif' }}>← Back to HFM</Link>
          <Link href="https://my.hfm.com/en/register" target="_blank" style={{ background: '#EF0107', color: 'white', padding: '7px 18px', fontSize: 13, fontWeight: 600, textDecoration: 'none', borderRadius: 6, fontFamily: 'system-ui,sans-serif' }}>Open Account</Link>
        </div>
      </header>

      {/* ── HERO BANNER ── */}
      <div style={{ background: 'linear-gradient(135deg,#161b22 0%,#0d1117 60%)', borderBottom: '1px solid #21262d', padding: '52px 5% 40px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          {/* Breadcrumb */}
          <div style={{ fontSize: 13, color: '#8b949e', marginBottom: 20, fontFamily: 'system-ui,sans-serif', display: 'flex', gap: 6 }}>
            <Link href="/" style={{ color: '#C5A028', textDecoration: 'none' }}>Home</Link>
            <span>/</span><span>Broker Reviews</span>
            <span>/</span><span>HFM</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'flex-start', gap: 24, flexWrap: 'wrap' }}>
            {/* Logo box */}
            <div style={{ background: '#161b22', border: '1px solid #30363d', borderRadius: 8, padding: '16px 20px', display: 'flex', alignItems: 'center', gap: 10, flexShrink: 0 }}>
              <div style={{ background: '#EF0107', clipPath: 'polygon(50% 0%,93% 25%,93% 75%,50% 100%,7% 75%,7% 25%)', width: 40, height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Barlow Condensed',sans-serif", fontSize: 12, fontWeight: 900, color: 'white' }}>HFM</div>
              <div>
                <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 22, fontWeight: 900, color: '#e6edf3', lineHeight: 1 }}>HF<span style={{ color: '#C5A028' }}>M</span></div>
                <div style={{ fontSize: 11, color: '#8b949e', fontFamily: 'system-ui,sans-serif', marginTop: 2 }}>HF Markets Group</div>
              </div>
            </div>

            <div style={{ flex: 1, minWidth: 240 }}>
              <h1 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 'clamp(28px,4vw,44px)', fontWeight: 900, color: '#e6edf3', lineHeight: 1.05, marginBottom: 10, textTransform: 'uppercase', letterSpacing: -0.5 }}>
                HFM Broker Review 2026:<br />
                <span style={{ color: '#EF0107' }}>Is It</span> <span style={{ color: '#C5A028' }}>Legit?</span>
              </h1>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
                <Stars score={overallScore} />
                <span style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 26, fontWeight: 900, color: '#C5A028' }}>{overallScore}/5</span>
                <span style={{ fontSize: 12, color: '#8b949e', fontFamily: 'system-ui,sans-serif' }}>Updated May 2026</span>
                <span style={{ background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.3)', color: '#22c55e', fontSize: 11, fontWeight: 600, padding: '3px 10px', borderRadius: 20, fontFamily: 'system-ui,sans-serif' }}>✓ FCA Regulated</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── MAIN CONTENT ── */}
      <div style={{ maxWidth: 860, margin: '0 auto', padding: '48px 5% 80px' }}>

        {/* Score breakdown card */}
        <div style={{ background: '#161b22', border: '1px solid #30363d', borderRadius: 8, padding: '28px 32px', marginBottom: 48 }}>
          <div style={{ fontFamily: 'system-ui,sans-serif', fontSize: 11, fontWeight: 700, letterSpacing: 3, textTransform: 'uppercase', color: '#8b949e', marginBottom: 20 }}>Overall Rating Breakdown</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: '12px 32px' }}>
            {RATING_CATS.map(c => (
              <div key={c.label} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{ fontSize: 13, color: '#8b949e', fontFamily: 'system-ui,sans-serif', minWidth: 170 }}>{c.label}</div>
                <div style={{ flex: 1, background: '#21262d', borderRadius: 2, height: 5, overflow: 'hidden' }}>
                  <div style={{ width: `${(c.score/5)*100}%`, height: '100%', background: 'linear-gradient(90deg,#EF0107,#C5A028)' }} />
                </div>
                <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 15, fontWeight: 700, color: '#C5A028', minWidth: 32, textAlign: 'right' }}>{c.score}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Intro */}
        <p style={{ fontSize: 16, lineHeight: 1.85, color: '#c9d1d9', marginBottom: 20 }}>
          <strong style={{ color: '#e6edf3' }}>HFM (HF Markets)</strong> is one of the most recognizable names in global retail forex and CFD trading. Founded in 2010, the broker has grown from a mid-tier offshore operation into a multi-regulated institution serving over 3.5 million clients across more than 180 countries. In this comprehensive HFM review, we cover everything you need to know — regulation, trading conditions, spreads, platforms, account types, fees, deposits, and customer support — so you can make an informed decision in 2026.
        </p>
        <p style={{ fontSize: 16, lineHeight: 1.85, color: '#c9d1d9', marginBottom: 20 }}>
          What sets HFM apart is its combination of strong regulatory credentials — including a coveted FCA licence in the United Kingdom — competitive trading conditions, and a high-profile partnership with <strong style={{ color: '#EF0107' }}>Arsenal FC</strong> that signals genuine long-term brand investment. Whether you are a beginner looking for a low-cost entry point or a seasoned algo trader running Expert Advisors, HFM offers a product suite wide enough to accommodate virtually every trading style.
        </p>

        <hr style={{ border: 'none', borderTop: '1px solid #21262d', margin: '40px 0' }} />

        {/* Section 1: Regulation */}
        <h2 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 'clamp(22px,3vw,32px)', fontWeight: 900, textTransform: 'uppercase', color: '#e6edf3', marginBottom: 16, display: 'flex', alignItems: 'center', gap: 10 }}>
          <span style={{ color: '#EF0107', fontWeight: 900 }}>01.</span> Regulation & Safety
        </h2>
        <p style={{ fontSize: 15.5, lineHeight: 1.85, color: '#c9d1d9', marginBottom: 16 }}>
          Regulation is the single most important factor when evaluating any broker. HFM operates through a multi-entity structure that allows it to serve clients across different regulatory tiers while maintaining strong compliance standards in key markets.
        </p>
        <p style={{ fontSize: 15.5, lineHeight: 1.85, color: '#c9d1d9', marginBottom: 16 }}>
          The flagship entity, <strong style={{ color: '#e6edf3' }}>HF Markets (UK) Ltd</strong>, is authorised and regulated by the <strong style={{ color: '#C5A028' }}>Financial Conduct Authority (FCA)</strong> under firm reference number 801701. The FCA requires strict capital adequacy, client fund segregation in top-tier banks, and mandatory negative balance protection for all retail clients.
        </p>
        <p style={{ fontSize: 15.5, lineHeight: 1.85, color: '#c9d1d9', marginBottom: 16 }}>
          In South Africa, <strong style={{ color: '#e6edf3' }}>HF Markets SA (PTY) Ltd</strong> holds an FSP licence from the <strong style={{ color: '#C5A028' }}>FSCA</strong>. For European clients, <strong style={{ color: '#e6edf3' }}>HF Markets (Europe) Ltd</strong> is regulated by <strong style={{ color: '#C5A028' }}>CySEC</strong> (licence 183/12). The offshore entities in Seychelles and St. Vincent & the Grenadines serve clients in regions where higher leverage is permitted.
        </p>
        <div style={{ background: 'rgba(34,197,94,0.05)', border: '1px solid rgba(34,197,94,0.15)', borderRadius: 6, padding: '14px 18px', marginBottom: 24, fontSize: 14, color: '#8b949e', fontFamily: 'system-ui,sans-serif' }}>
          <strong style={{ color: '#22c55e' }}>✓ Verdict:</strong> HFM&apos;s FCA licence places it among the most trusted brokers globally. Client funds are fully segregated, and retail clients benefit from negative balance protection.
        </div>

        <hr style={{ border: 'none', borderTop: '1px solid #21262d', margin: '40px 0' }} />

        {/* Section 2: Trading Conditions */}
        <h2 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 'clamp(22px,3vw,32px)', fontWeight: 900, textTransform: 'uppercase', color: '#e6edf3', marginBottom: 16, display: 'flex', alignItems: 'center', gap: 10 }}>
          <span style={{ color: '#EF0107' }}>02.</span> Trading Conditions & Spreads
        </h2>
        <p style={{ fontSize: 15.5, lineHeight: 1.85, color: '#c9d1d9', marginBottom: 16 }}>
          HFM provides access to over <strong style={{ color: '#e6edf3' }}>1,000 financial instruments</strong> across Forex, Metals, Energies, Indices, Stocks, and Cryptocurrencies. EUR/USD spreads on the standard Premium account average around 1.2 pips during peak liquidity. The <strong style={{ color: '#C5A028' }}>Zero Spread account</strong> delivers 0.0 pip spreads with a commission of approximately $6 per round-turn lot — highly competitive against the industry average.
        </p>
        <p style={{ fontSize: 15.5, lineHeight: 1.85, color: '#c9d1d9', marginBottom: 16 }}>
          Leverage is jurisdiction-dependent: FCA clients are capped at 1:30 on major Forex pairs, while offshore clients can access up to <strong style={{ color: '#C5A028' }}>1:2000</strong>. Execution is STP/ECN with no dealing desk interference. Average execution speed sits below 0.1 seconds, making HFM well-suited to scalping and high-frequency strategies.
        </p>

        <hr style={{ border: 'none', borderTop: '1px solid #21262d', margin: '40px 0' }} />

        {/* Section 3: Account Types */}
        <h2 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 'clamp(22px,3vw,32px)', fontWeight: 900, textTransform: 'uppercase', color: '#e6edf3', marginBottom: 16, display: 'flex', alignItems: 'center', gap: 10 }}>
          <span style={{ color: '#EF0107' }}>03.</span> Account Types
        </h2>
        <p style={{ fontSize: 15.5, lineHeight: 1.85, color: '#c9d1d9', marginBottom: 24 }}>HFM offers a tiered account structure covering every level of trader experience:</p>
        <div style={{ overflowX: 'auto', marginBottom: 24 }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14, fontFamily: 'system-ui,sans-serif' }}>
            <thead>
              <tr style={{ background: '#161b22', borderBottom: '1px solid #30363d' }}>
                {['Account','Min Deposit','Spread','Commission','Leverage','Best For'].map(h => (
                  <th key={h} style={{ padding: '12px 14px', textAlign: 'left', fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', color: '#8b949e' }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {ACCOUNT_TYPES.map((a, i) => (
                <tr key={a.name} style={{ background: i%2===0 ? 'rgba(255,255,255,0.02)' : 'transparent', borderBottom: '1px solid #21262d' }}>
                  <td style={{ padding: '12px 14px', fontWeight: 600, color: '#e6edf3' }}>{a.name}</td>
                  <td style={{ padding: '12px 14px', color: '#8b949e' }}>{a.min}</td>
                  <td style={{ padding: '12px 14px', color: '#C5A028', fontWeight: 600 }}>{a.spread}</td>
                  <td style={{ padding: '12px 14px', color: '#8b949e' }}>{a.commission}</td>
                  <td style={{ padding: '12px 14px', color: '#8b949e' }}>{a.leverage}</td>
                  <td style={{ padding: '12px 14px', color: '#8b949e' }}>{a.best}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p style={{ fontSize: 15.5, lineHeight: 1.85, color: '#c9d1d9', marginBottom: 16 }}>
          The <strong style={{ color: '#e6edf3' }}>Micro account</strong> lets beginners trade from just $5 with 0.01 lot sizes — ideal for learning risk management without heavy capital commitment. Professional traders benefit most from the Zero Spread account&apos;s raw pricing combined with HFM&apos;s free VPS hosting for EA-driven systems.
        </p>

        <hr style={{ border: 'none', borderTop: '1px solid #21262d', margin: '40px 0' }} />

        {/* Section 4: Platforms */}
        <h2 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 'clamp(22px,3vw,32px)', fontWeight: 900, textTransform: 'uppercase', color: '#e6edf3', marginBottom: 16, display: 'flex', alignItems: 'center', gap: 10 }}>
          <span style={{ color: '#EF0107' }}>04.</span> Trading Platforms
        </h2>
        {[
          { name:'MetaTrader 4 (MT4)', body:"Industry-standard Forex platform. 30 built-in indicators, custom indicators, Expert Advisors, and one-click execution. Available on desktop (Windows/Mac), web, iOS and Android. Ideal for traders who rely on a proven, stable environment with a large EA developer community." },
          { name:'MetaTrader 5 (MT5)', body:"The next-generation platform expanding on MT4 with 21 timeframes, integrated economic calendar, depth-of-market view, and superior backtesting. MT5 is the platform of choice for HFM's full 1,000+ instrument suite including stocks and indices." },
          { name:'HFM Mobile App', body:"Proprietary mobile application for iOS and Android. Features real-time price alerts, one-tap order execution, live economic news, and full account management. One of the better mobile offerings in retail forex." },
          { name:'HFcopy (Social Trading)', body:"HFM's copy trading platform lets investors automatically replicate verified Strategy Providers. Transparent performance stats, customisable risk parameters, and no lock-up period. An accessible entry point for passive investors." },
        ].map(pl => (
          <div key={pl.name} style={{ marginBottom: 24 }}>
            <h3 style={{ fontFamily: 'system-ui,sans-serif', fontSize: 15, fontWeight: 700, color: '#C5A028', marginBottom: 8 }}>{pl.name}</h3>
            <p style={{ fontSize: 15.5, lineHeight: 1.85, color: '#c9d1d9' }}>{pl.body}</p>
          </div>
        ))}

        <hr style={{ border: 'none', borderTop: '1px solid #21262d', margin: '40px 0' }} />

        {/* Section 5: Fees */}
        <h2 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 'clamp(22px,3vw,32px)', fontWeight: 900, textTransform: 'uppercase', color: '#e6edf3', marginBottom: 16, display: 'flex', alignItems: 'center', gap: 10 }}>
          <span style={{ color: '#EF0107' }}>05.</span> Fees & Costs
        </h2>
        {[
          { title:'Swap / Overnight fees', body:"Standard positions held overnight incur swap charges based on interbank rates. Islamic (swap-free) accounts available upon request for Sharia-compliant trading." },
          { title:'Inactivity fee', body:"Accounts with no trading activity for 6 consecutive months are charged a $5 monthly fee — standard across regulated brokers, easily avoided by placing any trade." },
          { title:'Deposit & Withdrawal fees', body:"HFM charges zero fees on deposits. Bank wire withdrawals may carry bank-side charges; HFM itself imposes no withdrawal fee. E-wallet withdrawals (Skrill, Neteller) are processed within 24 hours at zero cost." },
        ].map(f => (
          <div key={f.title} style={{ marginBottom: 20 }}>
            <strong style={{ color: '#e6edf3', fontSize: 15, fontFamily: 'system-ui,sans-serif' }}>{f.title}:</strong>
            <p style={{ fontSize: 15.5, lineHeight: 1.85, color: '#c9d1d9', marginTop: 6 }}>{f.body}</p>
          </div>
        ))}

        <hr style={{ border: 'none', borderTop: '1px solid #21262d', margin: '40px 0' }} />

        {/* Section 6: Deposits */}
        <h2 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 'clamp(22px,3vw,32px)', fontWeight: 900, textTransform: 'uppercase', color: '#e6edf3', marginBottom: 16, display: 'flex', alignItems: 'center', gap: 10 }}>
          <span style={{ color: '#EF0107' }}>06.</span> Deposits & Withdrawals
        </h2>
        <p style={{ fontSize: 15.5, lineHeight: 1.85, color: '#c9d1d9', marginBottom: 16 }}>
          HFM accepts bank wire transfers, credit/debit cards (Visa, Mastercard), and e-wallets including Skrill, Neteller, and local payment solutions in selected regions. Deposits are processed instantly or within one business day. The minimum deposit starts at just $5 for Micro accounts.
        </p>
        <p style={{ fontSize: 15.5, lineHeight: 1.85, color: '#c9d1d9', marginBottom: 16 }}>
          E-wallet withdrawals are typically completed within 24 hours. Bank wire withdrawals may take 3–5 business days. Standard KYC document verification is required before the first withdrawal — a regulatory requirement under FCA and CySEC rules.
        </p>

        <hr style={{ border: 'none', borderTop: '1px solid #21262d', margin: '40px 0' }} />

        {/* Section 7: Arsenal */}
        <h2 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 'clamp(22px,3vw,32px)', fontWeight: 900, textTransform: 'uppercase', color: '#e6edf3', marginBottom: 16, display: 'flex', alignItems: 'center', gap: 10 }}>
          <span style={{ color: '#EF0107' }}>07.</span> HFM × Arsenal FC Partnership
        </h2>
        <p style={{ fontSize: 15.5, lineHeight: 1.85, color: '#c9d1d9', marginBottom: 16 }}>
          HFM is an <strong style={{ color: '#e6edf3' }}>Official Partner of Arsenal FC</strong> for the 2025/26 season — a partnership that coincides with Arsenal&apos;s Premier League title win under Mikel Arteta. The deal places HFM&apos;s branding in front of Arsenal&apos;s global audience of over 700 million fans worldwide.
        </p>
        <p style={{ fontSize: 15.5, lineHeight: 1.85, color: '#c9d1d9', marginBottom: 16 }}>
          Beyond marketing value, this partnership signals financial strength and long-term institutional commitment. Regulated brokers who invest in top-tier sports sponsorships are making public reputational bets — and HFM&apos;s Arsenal association reinforces that it is a broker operating at a level where public trust is both valued and protected.
        </p>

        <hr style={{ border: 'none', borderTop: '1px solid #21262d', margin: '40px 0' }} />

        {/* Pros & Cons */}
        <h2 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 'clamp(22px,3vw,32px)', fontWeight: 900, textTransform: 'uppercase', color: '#e6edf3', marginBottom: 24, display: 'flex', alignItems: 'center', gap: 10 }}>
          <span style={{ color: '#EF0107' }}>08.</span> Pros & Cons
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 24 }}>
          <div style={{ background: 'rgba(34,197,94,0.04)', border: '1px solid rgba(34,197,94,0.15)', borderRadius: 6, padding: '20px 22px' }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 3, textTransform: 'uppercase', color: '#22c55e', marginBottom: 14, fontFamily: 'system-ui,sans-serif' }}>Pros</div>
            {PROS.map(p => <div key={p} style={{ fontSize: 13.5, color: '#8b949e', marginBottom: 9, paddingLeft: 12, borderLeft: '2px solid rgba(34,197,94,0.3)', lineHeight: 1.6, fontFamily: 'system-ui,sans-serif' }}>{p}</div>)}
          </div>
          <div style={{ background: 'rgba(239,1,7,0.04)', border: '1px solid rgba(239,1,7,0.15)', borderRadius: 6, padding: '20px 22px' }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 3, textTransform: 'uppercase', color: '#EF0107', marginBottom: 14, fontFamily: 'system-ui,sans-serif' }}>Cons</div>
            {CONS.map(c => <div key={c} style={{ fontSize: 13.5, color: '#8b949e', marginBottom: 9, paddingLeft: 12, borderLeft: '2px solid rgba(239,1,7,0.3)', lineHeight: 1.6, fontFamily: 'system-ui,sans-serif' }}>{c}</div>)}
          </div>
        </div>

        <hr style={{ border: 'none', borderTop: '1px solid #21262d', margin: '40px 0' }} />

        {/* Final Verdict */}
        <h2 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 'clamp(22px,3vw,32px)', fontWeight: 900, textTransform: 'uppercase', color: '#e6edf3', marginBottom: 16, display: 'flex', alignItems: 'center', gap: 10 }}>
          <span style={{ color: '#EF0107' }}>09.</span> Final Verdict
        </h2>
        <p style={{ fontSize: 15.5, lineHeight: 1.85, color: '#c9d1d9', marginBottom: 16 }}>
          After a thorough analysis, HFM stands out as a <strong style={{ color: '#e6edf3' }}>highly credible, well-regulated broker</strong> delivering competitive conditions across a comprehensive instrument range. Its FCA regulation provides the gold standard of client protection, while its diverse account suite — from the $5 Micro to the Raw Zero Spread — caters to every level of trader.
        </p>
        <p style={{ fontSize: 15.5, lineHeight: 1.85, color: '#c9d1d9', marginBottom: 16 }}>
          The Arsenal FC partnership signals genuine long-term brand investment, not opportunistic marketing. Minor drawbacks like the inactivity fee and offshore leverage entities are standard industry practice and should not deter serious traders. <strong style={{ color: '#C5A028' }}>HFM scores 4.6/5</strong> and is recommended for beginner-to-intermediate traders seeking a regulated, feature-rich platform, and for advanced traders who need tight spreads and robust algo-trading infrastructure.
        </p>

        {/* CTA box */}
        <div style={{ background: '#161b22', border: '1px solid #30363d', borderRadius: 8, padding: '36px', textAlign: 'center', marginTop: 48 }}>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 3, textTransform: 'uppercase', color: '#EF0107', marginBottom: 10, fontFamily: 'system-ui,sans-serif' }}>Ready to Trade?</div>
          <h3 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 30, fontWeight: 900, textTransform: 'uppercase', color: '#e6edf3', marginBottom: 10 }}>Open Your HFM Account Today</h3>
          <p style={{ fontSize: 14, color: '#8b949e', marginBottom: 28, fontFamily: 'system-ui,sans-serif' }}>Join 3.5 million traders. No minimum deposit on Standard accounts.</p>
          <Link href="https://my.hfm.com/en/register" target="_blank" style={{ background: '#EF0107', color: 'white', padding: '15px 44px', fontFamily: "'Barlow Condensed',sans-serif", fontSize: 16, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', borderRadius: 4, textDecoration: 'none', display: 'inline-block' }}>Open Free Account</Link>
        </div>

        {/* Legal disclaimer */}
        <div style={{ marginTop: 48, padding: '18px 20px', background: 'rgba(239,1,7,0.03)', border: '1px solid rgba(239,1,7,0.12)', borderLeft: '3px solid rgba(239,1,7,0.4)', borderRadius: '0 4px 4px 0', fontSize: 12, color: '#6e7681', lineHeight: 1.8, fontFamily: 'system-ui,sans-serif' }}>
          <strong style={{ color: '#8b4848' }}>⚠ Risk Warning & Disclaimer:</strong> This review is for informational purposes only and does not constitute investment advice. Trading leveraged products such as Forex and CFDs carries a high degree of risk to your capital and may not be suitable for all investors. Past performance is not indicative of future results. Never invest money you cannot afford to lose.<br /><br />
          <strong style={{ color: '#6e7681' }}>Legal:</strong> HF Markets (SV) Ltd, reg. 22747 IBC 2015, St. Vincent & the Grenadines. HF Markets (UK) Ltd, FCA ref. 801701. HF Markets SA (PTY) Ltd, FSCA FSP 46632. HF Markets (Seychelles) Ltd, reg. 8419176-1. HF Markets Fintech Services Ltd, reg. ΗΕ 348222, Cyprus. HFM does not offer services to residents of the USA, Canada, Sudan, Syria, Iran, North Korea, UAE, Türkiye, and certain other jurisdictions.
        </div>

      </div>

      {/* ── STANDALONE FOOTER ── */}
      <footer style={{ background: '#0d1117', borderTop: '1px solid #21262d', padding: '20px 5%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12, fontFamily: 'system-ui,sans-serif' }}>
        <span style={{ fontSize: 12, color: '#6e7681' }}>© 2026 HF Markets Group · All Rights Reserved</span>
        <Link href="/" style={{ fontSize: 12, color: '#C5A028', textDecoration: 'none' }}>← Back to HFM Homepage</Link>
      </footer>

    </div>
  )
}
