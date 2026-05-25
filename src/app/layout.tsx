import type { Metadata } from 'next'
import '../styles/globals.css'

export const metadata: Metadata = {
  title: 'HFM – Trade Like a Champion | Official Arsenal FC Partner',
  description: 'HFM is an award-winning multi-asset forex broker trusted by 3.5M+ traders worldwide. FCA regulated. Access Forex, Metals, Indices & Stocks. Official Partner of Arsenal FC.',
  keywords: 'HFM broker, HFMarkets, forex broker, CFD trading, FCA regulated broker, Arsenal FC partner, MetaTrader 5',
  openGraph: {
    title: 'HFM – Trade Like a Champion',
    description: 'Award-winning multi-asset broker. FCA regulated. Official Arsenal FC Partner.',
    type: 'website',
    url: 'https://hfm.com',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
