import type { Metadata } from 'next'
import '../styles/globals.css'

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : undefined) ||
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : undefined) ||
  'http://localhost:3000'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'HFM – Trade Like a Champion | Official Arsenal FC Partner',
  description: 'HFM is an award-winning multi-asset forex broker trusted by 3.5M+ traders worldwide. FCA regulated. Access Forex, Metals, Indices & Stocks. Official Partner of Arsenal FC.',
  keywords: 'HFM broker, HFMarkets, forex broker, CFD trading, FCA regulated broker, Arsenal FC partner, MetaTrader 5',
  openGraph: {
    title: 'HFM – Trade Like a Champion',
    description: 'Award-winning multi-asset broker. FCA regulated. Official Arsenal FC Partner.',
    type: 'website',
    url: '/',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
