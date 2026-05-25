import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Why HFM? HFM Review 2026 | Full Broker Analysis',
  description: 'Why HFM? Read our in-depth HFM review covering regulation, spreads, platforms, fees, account types, safety, and whether HFM fits beginners or active traders.',
  keywords: 'Why HFM, HFM review, HFM broker review 2026, is HFM legit, HFM safe, HFM minimum deposit, HFM MT4 MT5',
  alternates: {
    canonical: '/Why-HFM',
  },
  openGraph: {
    title: 'Why HFM? Full HFM Broker Review 2026',
    description: 'Detailed HFM broker analysis covering regulation, spreads, trading platforms, fees, support, and account suitability.',
    type: 'article',
    url: '/Why-HFM',
  },
}

export default function ReviewLayout({ children }: { children: React.ReactNode }) {
  // Standalone layout — no shared Navbar/Footer
  return <>{children}</>
}
