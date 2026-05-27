import type { Metadata } from 'next'
import Link from 'next/link'
import '../styles/globals.css'

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : undefined) ||
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : undefined) ||
  'http://localhost:3000'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'HFM Broker Review & Signup Guide | Independent Partner Portal',
  description: 'Comprehensive independent review of HFM broker. Learn how to open an account, trading conditions, regulation, and platform access.',
  keywords: 'HFM review, HFM registration, HFM signup, HFMarkets guide, independent broker review, CFD trading',
  openGraph: {
    title: 'HFM Broker Review & Signup Guide',
    description: 'Independent review of HFM broker. Regulation, trading conditions, and account registration guide.',
    type: 'website',
    url: '/',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ paddingBottom: '76px' }}>
        {children}

        <div
          className="mobile-cta-bar"
          style={{
            position: 'fixed',
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 200,
            padding: '12px 16px calc(12px + env(safe-area-inset-bottom))',
            background: 'rgba(6,8,16,0.96)',
            backdropFilter: 'blur(14px)',
            borderTop: '1px solid rgba(197,160,40,0.18)',
          }}
        >
          <Link
            href="https://my.hfm.com/en/register"
            target="_blank"
            style={{
              display: 'block',
              width: '100%',
              background: '#EF0107',
              color: '#fff',
              textAlign: 'center',
              padding: '14px 18px',
              fontFamily: "'Barlow Condensed',sans-serif",
              fontSize: 17,
              fontWeight: 700,
              letterSpacing: '2px',
              textTransform: 'uppercase',
              textDecoration: 'none',
              borderRadius: 4,
            }}
          >
            Open Account
          </Link>
        </div>

        <style>{`
          @media (min-width: 769px) {
            body { padding-bottom: 0 !important; }
            .mobile-cta-bar { display: none !important; }
          }
        `}</style>
      </body>
    </html>
  )
}
