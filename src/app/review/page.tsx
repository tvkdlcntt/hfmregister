import type { Metadata } from 'next'
import Navbar from '../components/Navbar'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'HFM Review 2026 – Is HFM a Legit Broker? Full Analysis',
  description: 'In-depth HFM broker review 2026. We analyze regulation, spreads, platforms, account types, fees, and the Arsenal FC partnership. FCA & FSCA regulated. Read before you trade.',
  keywords: 'HFM review, HFMarkets review 2026, HFM broker review, is HFM legit, HFM spreads, HFM regulation, HFM MetaTrader 5',
  openGraph: {
    title: 'HFM Review 2026 – Full Broker Analysis',
    description: 'Comprehensive HFM broker review covering regulation, spreads, account types, platforms and more.',
    type: 'article',
  },
  alternates: { canonical: 'https://hfm.com/review' },
}

const RATING_CATS = [
  { label: 'Regulation & Safety', score: 4.8 },
  { label: 'Trading Conditions', score: 4.6 },
  { label: 'Platform & Tools', score: 4.7 },
  { label: 'Account Types', score: 4.5 },
  { label: 'Customer Support', score: 4.4 },
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
  { name: 'Micro', min: '$5', spread: 'From 1.2 pips', commission: 'None', leverage: '1:1000', best: 'Beginners' },
  { name: 'Premium', min: '$100', spread: 'From 1.2 pips', commission: 'None', leverage: '1:2000', best: 'Intermediate' },
  { name: 'Zero Spread', min: '$200', spread: '0.0 pips', commission: '$6/lot RT', leverage: '1:500', best: 'Scalpers' },
  { name: 'HFcopy', min: '$100', spread: 'From 1.2 pips', commission: 'Performance fee', leverage: '1:500', best: 'Copy Traders' },
]

function Stars({ score }: { score: number }) {
  const full = Math.floor(score)
  const half = score % 1 >= 0.5
  return (
    <span>
      {[...Array(5)].map((_, i) => (
        <span key={i} style={{ color: i < full ? '#C5A028' : i === full && half ? '#C5A028' : '#333', fontSize: 16 }}>
          {i < full ? '★' : i === full && half ? '⯨' : '☆'}
        </span>
      ))}
    </span>
  )
}

const S = {
  page: { background: '#060810', color: '#F0EFEA', fontFamily: "'Barlow',sans-serif", minHeight: '100vh' } as React.CSSProperties,
  container: { maxWidth: 860, margin: '0 auto', padding: '60px 5% 80px' } as React.CSSProperties,
  h1: { fontFamily: "'Barlow Condensed',sans-serif", fontSize: 'clamp(36px,5vw,58px)', fontWeight: 900, textTransform: 'uppercase' as const, lineHeight: 0.95, letterSpacing: -1, marginBottom: 20 },
  h2: { fontFamily: "'Barlow Condensed',sans-serif", fontSize: 'clamp(24px,3.5vw,38px)', fontWeight: 900, textTransform: 'uppercase' as const, letterSpacing: -0.5, marginBottom: 18, marginTop: 52, color: '#F0EFEA' },
  h3: { fontFamily: "'Barlow Condensed',sans-serif", fontSize: 22, fontWeight: 700, textTransform: 'uppercase' as const, letterSpacing: 0.5, marginBottom: 12, marginTop: 32, color: '#C5A028' },
  p: { fontSize: 15.5, color: '#9a9da8', lineHeight: 1.85, marginBottom: 18 },
  label: { fontFamily: "'Barlow Condensed',sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: 4, textTransform: 'uppercase' as const, color: '#EF0107', marginBottom: 10, display: 'block' },
  divider: { border: 'none', borderTop: '1px solid rgba(255,255,255,0.07)', margin: '48px 0' },
}

export default function ReviewPage() {
  const overallScore = 4.6
  const publishDate = '2026-05-01'
  const updateDate  = '2026-05-25'

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Review',
    name: 'HFM Broker Review 2026',
    reviewBody: 'Comprehensive review of HFM (HF Markets) covering regulation, trading conditions, platforms, account types, fees and customer support.',
    reviewRating: { '@type': 'Rating', ratingValue: overallScore, bestRating: 5, worstRating: 1 },
    author: { '@type': 'Organization', name: 'HFM Review Team' },
    itemReviewed: { '@type': 'FinancialProduct', name: 'HFM (HF Markets)', url: 'https://www.hfm.com' },
    datePublished: publishDate,
    dateModified: updateDate,
  }

  return (
    <div style={S.page}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />

      <div style={S.container}>

        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" style={{ fontSize: 13, color: '#7a7e8a', marginBottom: 32, display: 'flex', gap: 6, alignItems: 'center' }}>
          <Link href="/" style={{ color: '#C5A028', textDecoration: 'none' }}>Home</Link>
          <span>/</span>
          <span>HFM Review</span>
        </nav>

        {/* Header */}
        <span style={S.label}>Broker Review · Updated May 2026</span>
        <h1 style={S.h1}>
          <span style={{ color: '#EF0107' }}>HFM</span> Broker Review 2026:<br />
          <span style={{ color: '#C5A028' }}>Is It Legit?</span> Full Analysis
        </h1>

        {/* Score card */}
        <div style={{ background: '#0b0f1a', border: '1px solid rgba(197,160,40,0.2)', borderRadius: 4, padding: '32px', marginBottom: 48, marginTop: 32 }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: 32, alignItems: 'center' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 72, fontWeight: 900, color: '#C5A028', lineHeight: 1 }}>{overallScore}</div>
              <div style={{ fontSize: 24, letterSpacing: 2 }}><Stars score={overallScore} /></div>
              <div style={{ fontSize: 11, letterSpacing: 2, textTransform: 'uppercase', color: '#7a7e8a', marginTop: 6 }}>Overall Score</div>
            </div>
            <div>
              {RATING_CATS.map(c => (
                <div key={c.label} style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 10 }}>
                  <div style={{ fontSize: 13, color: '#9a9da8', minWidth: 180 }}>{c.label}</div>
                  <div style={{ flex: 1, background: 'rgba(255,255,255,0.06)', borderRadius: 2, height: 6, overflow: 'hidden' }}>
                    <div style={{ width: `${(c.score / 5) * 100}%`, height: '100%', background: 'linear-gradient(90deg,#EF0107,#C5A028)', borderRadius: 2 }} />
                  </div>
                  <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 16, fontWeight: 700, color: '#C5A028', minWidth: 36 }}>{c.score}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Intro */}
        <p style={S.p}>
          <strong style={{ color: '#F0EFEA' }}>HFM (HF Markets)</strong> is one of the most recognizable names in global retail forex and CFD trading. Founded in 2010, the broker has grown from a mid-tier offshore operation into a multi-regulated institution serving over 3.5 million clients across more than 180 countries. In this comprehensive HFM review, we cover everything you need to know: regulation, trading conditions, spreads, platforms, account types, fees, deposits, and customer support — so you can decide whether HFM is the right broker for your trading needs in 2026.
        </p>
        <p style={S.p}>
          What makes HFM stand out in an increasingly crowded brokerage landscape is its combination of a strong regulatory framework — including a coveted FCA licence in the United Kingdom — competitive trading conditions, and a high-profile partnership with <strong style={{ color: '#EF0107' }}>Arsenal FC</strong> that signals long-term brand investment. Whether you are a beginner looking for a straightforward entry point or a seasoned algo trader running Expert Advisors, HFM offers a product suite wide enough to accommodate multiple trading styles.
        </p>

        <hr style={S.divider} />

        {/* Regulation */}
        <h2 style={S.h2}><span style={{ color: '#EF0107' }}>01.</span> Regulation & Safety</h2>
        <p style={S.p}>
          Regulation is the single most important factor when evaluating any broker. HFM operates through a multi-entity structure that allows it to serve clients across different regulatory tiers while maintaining strong compliance standards in key markets.
        </p>
        <p style={S.p}>
          The crown jewel of HFM&apos;s regulatory portfolio is <strong style={{ color: '#F0EFEA' }}>HF Markets (UK) Ltd</strong>, which is authorised and regulated by the <strong style={{ color: '#C5A028' }}>Financial Conduct Authority (FCA)</strong> under firm reference number 801701. The FCA is widely regarded as one of the world&apos;s most rigorous financial regulators, requiring strict capital adequacy, client fund segregation, and mandatory negative balance protection for retail clients.
        </p>
        <p style={S.p}>
          In South Africa, <strong style={{ color: '#F0EFEA' }}>HF Markets SA (PTY) Ltd</strong> holds a Financial Services Provider licence from the <strong style={{ color: '#C5A028' }}>Financial Sector Conduct Authority (FSCA)</strong> under FSP number 46632. For European and international clients, <strong style={{ color: '#F0EFEA' }}>HF Markets (Europe) Ltd</strong> is regulated by <strong style={{ color: '#C5A028' }}>CySEC</strong> with licence number 183/12, providing access to the EU&apos;s investor compensation scheme. Additionally, <strong style={{ color: '#F0EFEA' }}>HF Markets (Seychelles) Ltd</strong> and <strong style={{ color: '#F0EFEA' }}>HF Markets (SV) Ltd</strong> serve clients in jurisdictions where higher leverage ratios are permitted under lighter-touch regulatory frameworks.
        </p>
        <p style={S.p}>
          Client funds held with HFM&apos;s regulated entities are kept in segregated bank accounts at top-tier banks, entirely separate from the broker&apos;s own operating capital. Retail clients under the FCA and CySEC entities also benefit from negative balance protection, meaning you can never lose more than your deposited capital.
        </p>
        <p style={S.p}>
          <strong style={{ color: '#C5A028' }}>Verdict:</strong> HFM&apos;s regulatory structure is robust. The FCA licence alone places it among the most trusted brokers operating globally. Combined with FSCA and CySEC oversight, traders in most regions benefit from strong legal protections.
        </p>

        <hr style={S.divider} />

        {/* Trading Conditions */}
        <h2 style={S.h2}><span style={{ color: '#EF0107' }}>02.</span> Trading Conditions & Spreads</h2>
        <p style={S.p}>
          HFM offers access to over <strong style={{ color: '#F0EFEA' }}>1,000 financial instruments</strong> across six major asset classes: Forex, Metals, Energies, Indices, Stocks, and Cryptocurrencies. This breadth makes it suitable for traders who want to diversify across multiple markets from a single account.
        </p>
        <p style={S.p}>
          On the standard Premium account, EUR/USD spreads average around 1.2 pips during peak liquidity hours — competitive for a no-commission account. For traders who prioritise raw spreads and don&apos;t mind paying a small commission per lot, the <strong style={{ color: '#C5A028' }}>Zero Spread account</strong> delivers EUR/USD spreads of 0.0 pips with a commission of approximately $6 per round-turn lot. This is highly competitive against industry benchmarks.
        </p>
        <p style={S.p}>
          Leverage is regulated by jurisdiction: FCA clients are capped at 1:30 on major Forex pairs, while clients under offshore entities can access leverage up to <strong style={{ color: '#C5A028' }}>1:2000</strong>. Execution is conducted via STP/ECN model with no dealing desk intervention, meaning your orders are matched directly against liquidity providers. Execution speed is typically below 0.1 seconds, making HFM suitable for scalping and high-frequency strategies.
        </p>

        <hr style={S.divider} />

        {/* Account Types */}
        <h2 style={S.h2}><span style={{ color: '#EF0107' }}>03.</span> Account Types</h2>
        <p style={S.p}>HFM provides several account options tailored to different experience levels and trading styles:</p>

        <div style={{ overflowX: 'auto', marginBottom: 24 }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
            <thead>
              <tr style={{ background: 'rgba(239,1,7,0.08)', borderBottom: '1px solid rgba(197,160,40,0.2)' }}>
                {['Account','Min Deposit','Spread','Commission','Max Leverage','Best For'].map(h => (
                  <th key={h} style={{ padding: '12px 14px', textAlign: 'left', fontFamily: "'Barlow Condensed',sans-serif", fontSize: 12, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', color: '#C5A028' }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {ACCOUNT_TYPES.map((a, i) => (
                <tr key={a.name} style={{ background: i % 2 === 0 ? 'rgba(255,255,255,0.02)' : 'transparent', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                  <td style={{ padding: '12px 14px', fontWeight: 600, color: '#F0EFEA' }}>{a.name}</td>
                  <td style={{ padding: '12px 14px', color: '#9a9da8' }}>{a.min}</td>
                  <td style={{ padding: '12px 14px', color: '#C5A028', fontWeight: 600 }}>{a.spread}</td>
                  <td style={{ padding: '12px 14px', color: '#9a9da8' }}>{a.commission}</td>
                  <td style={{ padding: '12px 14px', color: '#9a9da8' }}>{a.leverage}</td>
                  <td style={{ padding: '12px 14px', color: '#9a9da8' }}>{a.best}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p style={S.p}>
          For beginners, the <strong style={{ color: '#F0EFEA' }}>Micro account</strong> allows trading as small as 0.01 lots with a minimum deposit of just $5, making it ideal for learning risk management without significant capital exposure. Professional traders and algorithmic systems benefit most from the Zero Spread account&apos;s raw pricing and the free VPS hosting that HFM provides for accounts meeting a minimum equity threshold.
        </p>

        <hr style={S.divider} />

        {/* Platforms */}
        <h2 style={S.h2}><span style={{ color: '#EF0107' }}>04.</span> Trading Platforms</h2>
        <p style={S.p}>
          HFM supports all major trading platforms, giving clients flexibility in how they access the markets:
        </p>
        <h3 style={S.h3}>MetaTrader 4 (MT4)</h3>
        <p style={S.p}>
          The industry-standard platform for Forex trading. MT4 offers a robust charting environment with 30 built-in indicators, support for custom indicators and Expert Advisors (EAs), and reliable one-click execution. Available on desktop (Windows/Mac), web browser, iOS and Android. Ideal for traders who rely on a tested, stable environment with a large community of EA developers.
        </p>
        <h3 style={S.h3}>MetaTrader 5 (MT5)</h3>
        <p style={S.p}>
          The next-generation platform that expands on MT4 with 21 timeframes (vs MT4&apos;s 9), an integrated economic calendar, depth-of-market view, and improved backtesting capabilities. MT5 is the platform of choice for traders accessing HFM&apos;s full suite of 1,000+ instruments including stocks and indices. HFM provides free access to MT5 across all account types.
        </p>
        <h3 style={S.h3}>HFM Mobile App</h3>
        <p style={S.p}>
          HFM&apos;s proprietary mobile application delivers a streamlined trading experience optimised for iOS and Android. Features include real-time price alerts, one-tap execution, live economic news, and account management — making it one of the better mobile offerings in the retail broker space.
        </p>
        <h3 style={S.h3}>HFcopy (Social Trading)</h3>
        <p style={S.p}>
          HFM&apos;s copy trading platform allows investors to follow and automatically replicate the trades of verified Strategy Providers. With transparent performance statistics, customisable risk parameters, and no minimum lock-up period, HFcopy is an accessible entry point for passive investors who want market exposure without active management.
        </p>

        <hr style={S.divider} />

        {/* Fees */}
        <h2 style={S.h2}><span style={{ color: '#EF0107' }}>05.</span> Fees & Costs</h2>
        <p style={S.p}>
          Beyond spreads and commissions, traders should be aware of the following HFM fees:
        </p>
        <p style={S.p}>
          <strong style={{ color: '#F0EFEA' }}>Swap/Overnight fees:</strong> Standard positions held overnight incur swap charges based on interbank rates. HFM offers Islamic (swap-free) accounts upon request for clients who require Sharia-compliant trading conditions.
        </p>
        <p style={S.p}>
          <strong style={{ color: '#F0EFEA' }}>Inactivity fee:</strong> Accounts with no trading activity for 6 consecutive months are charged a monthly maintenance fee of $5. This is standard across many regulated brokers and can be avoided simply by placing any trade.
        </p>
        <p style={S.p}>
          <strong style={{ color: '#F0EFEA' }}>Deposit & withdrawal fees:</strong> HFM charges no fees on deposits. Withdrawals via bank wire may incur bank-side charges, but HFM itself does not impose a withdrawal fee. E-wallet withdrawals (Skrill, Neteller, PayPal) are typically processed within 24 hours at no cost.
        </p>

        <hr style={S.divider} />

        {/* Deposits */}
        <h2 style={S.h2}><span style={{ color: '#EF0107' }}>06.</span> Deposits & Withdrawals</h2>
        <p style={S.p}>
          HFM accepts a broad range of payment methods to accommodate traders globally: bank wire transfer, credit/debit cards (Visa, Mastercard), and e-wallets including Skrill, Neteller, and local payment solutions in selected regions. Deposits are processed instantly or within one business day depending on the method. The minimum deposit varies by account type — as low as $5 for Micro accounts.
        </p>
        <p style={S.p}>
          Withdrawal processing times are among the faster in the industry: e-wallet withdrawals are typically completed within 24 hours, while bank wire transfers may take 3–5 business days depending on the recipient bank&apos;s processing times. HFM requires KYC document verification before processing the first withdrawal, which is standard practice under FCA and CySEC regulations.
        </p>

        <hr style={S.divider} />

        {/* Arsenal Partnership */}
        <h2 style={S.h2}><span style={{ color: '#EF0107' }}>07.</span> HFM × Arsenal FC Partnership</h2>
        <p style={S.p}>
          One of the most visible aspects of HFM&apos;s brand positioning is its <strong style={{ color: '#C5A028' }}>Official Partnership with Arsenal Football Club</strong> for the 2025/26 season — a landmark year in which Arsenal clinched the Premier League title under Mikel Arteta. The partnership represents a significant investment in brand credibility, placing the HFM name in front of Arsenal&apos;s global fanbase of over 700 million people.
        </p>
        <p style={S.p}>
          For traders, this partnership is more than marketing. It signals financial strength, long-term institutional commitment, and the kind of reputational stake that a broker with serious regulatory obligations makes when it associates itself with one of the world&apos;s most scrutinised sports brands. Regulated brokers value their reputations — and Arsenal FC affiliation reinforces that HFM is invested in maintaining public trust.
        </p>

        <hr style={S.divider} />

        {/* Pros & Cons */}
        <h2 style={S.h2}><span style={{ color: '#EF0107' }}>08.</span> Pros & Cons</h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginBottom: 24 }}>
          <div style={{ background: 'rgba(34,197,94,0.04)', border: '1px solid rgba(34,197,94,0.15)', borderRadius: 4, padding: '24px' }}>
            <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 14, fontWeight: 700, letterSpacing: 3, textTransform: 'uppercase', color: '#22c55e', marginBottom: 16 }}>✓ Pros</div>
            {PROS.map(p => <div key={p} style={{ fontSize: 14, color: '#9a9da8', marginBottom: 10, paddingLeft: 12, borderLeft: '2px solid rgba(34,197,94,0.3)', lineHeight: 1.6 }}>{p}</div>)}
          </div>
          <div style={{ background: 'rgba(239,1,7,0.04)', border: '1px solid rgba(239,1,7,0.15)', borderRadius: 4, padding: '24px' }}>
            <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 14, fontWeight: 700, letterSpacing: 3, textTransform: 'uppercase', color: '#EF0107', marginBottom: 16 }}>✗ Cons</div>
            {CONS.map(c => <div key={c} style={{ fontSize: 14, color: '#9a9da8', marginBottom: 10, paddingLeft: 12, borderLeft: '2px solid rgba(239,1,7,0.3)', lineHeight: 1.6 }}>{c}</div>)}
          </div>
        </div>

        <hr style={S.divider} />

        {/* Verdict */}
        <h2 style={S.h2}><span style={{ color: '#EF0107' }}>09.</span> Final Verdict</h2>
        <p style={S.p}>
          After a thorough analysis, HFM emerges as a <strong style={{ color: '#F0EFEA' }}>highly credible, well-regulated broker</strong> that delivers competitive trading conditions across a comprehensive instrument range. Its FCA regulation provides the gold standard of client protection for UK and international traders, while its diverse account suite — from the $5 Micro account to the Raw Zero Spread account — means there is a product for every level of trader.
        </p>
        <p style={S.p}>
          The Arsenal FC partnership is not merely cosmetic. It speaks to a broker that is investing heavily in long-term brand trust, and its continued expansion across African and Asian markets demonstrates genuine global ambition. Minor drawbacks such as the inactivity fee and the use of an offshore entity for some high-leverage accounts are common across the industry and should not deter serious traders.
        </p>
        <p style={S.p}>
          <strong style={{ color: '#C5A028' }}>HFM scores 4.6/5 in our 2026 broker review</strong> and is recommended for beginner to intermediate traders who want a regulated, feature-rich platform, and for experienced traders looking for tight spreads, strong execution, and algo-trading infrastructure.
        </p>

        {/* CTA */}
        <div style={{ background: 'linear-gradient(135deg,rgba(239,1,7,0.1) 0%,rgba(197,160,40,0.06) 100%)', border: '1px solid rgba(197,160,40,0.2)', borderRadius: 4, padding: '36px', textAlign: 'center', marginTop: 48 }}>
          <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 13, fontWeight: 700, letterSpacing: 4, textTransform: 'uppercase', color: '#EF0107', marginBottom: 12 }}>Ready to Trade?</div>
          <h3 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 32, fontWeight: 900, textTransform: 'uppercase', color: '#F0EFEA', marginBottom: 12 }}>Open Your HFM Account Today</h3>
          <p style={{ fontSize: 14, color: '#7a7e8a', marginBottom: 28, maxWidth: 480, margin: '0 auto 28px' }}>Join 3.5 million traders worldwide. No minimum deposit on Standard accounts. Start trading in minutes.</p>
          <Link href="https://my.hfm.com/en/register" target="_blank" style={{ background: '#EF0107', color: 'white', padding: '16px 48px', fontFamily: "'Barlow Condensed',sans-serif", fontSize: 17, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', borderRadius: 2, textDecoration: 'none', display: 'inline-block' }}>Open Free Account</Link>
        </div>

        {/* Legal disclaimer */}
        <div style={{ marginTop: 52, padding: '20px', background: 'rgba(239,1,7,0.04)', borderLeft: '3px solid rgba(239,1,7,0.4)', borderRadius: '0 2px 2px 0', fontSize: 12, color: '#605558', lineHeight: 1.75 }}>
          <strong style={{ color: '#905055', fontWeight: 600 }}>⚠ Risk Warning & Disclaimer:</strong> This review is provided for informational purposes only and does not constitute investment advice. Trading Leveraged Products such as Forex and CFDs carries a high degree of risk to your capital and may not be suitable for all investors. Past performance is not indicative of future results. You should never invest money you cannot afford to lose. <strong style={{ color: '#905055' }}>Legal:</strong> HF Markets (SV) Ltd is incorporated in St. Vincent &amp; the Grenadines, reg. 22747 IBC 2015. HF Markets (UK) Ltd is authorised and regulated by the FCA, firm ref. 801701. HF Markets SA (PTY) Ltd is regulated by the FSCA, FSP 46632. HFM does not offer services to residents of the USA, Canada, Sudan, Syria, Iran, North Korea, UAE, Türkiye, and certain other jurisdictions.
        </div>

      </div>

      {/* Footer */}
      <footer style={{ background: '#060810', borderTop: '1px solid rgba(255,255,255,0.04)', padding: '22px 5%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{ background: '#EF0107', clipPath: 'polygon(50% 0%,93% 25%,93% 75%,50% 100%,7% 75%,7% 25%)', width: 26, height: 26, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Barlow Condensed',sans-serif", fontSize: 9, fontWeight: 900, color: 'white' }}>HFM</div>
          <span style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 22, fontWeight: 900, color: '#F0EFEA' }}>HF<span style={{ color: '#C5A028' }}>M</span></span>
        </div>
        <p style={{ fontSize: 12, color: '#7a7e8a' }}>© 2026 HF Markets Group · All Rights Reserved</p>
        <Link href="/" style={{ fontSize: 12, color: '#C5A028', textDecoration: 'none' }}>← Back to Home</Link>
      </footer>
    </div>
  )
}
