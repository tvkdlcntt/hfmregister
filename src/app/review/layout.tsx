import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'HFM Review 2026 – Is HFM a Legit Broker? Full Analysis',
  description: 'In-depth HFM broker review 2026. We analyze regulation, spreads, platforms, account types, fees, and the Arsenal FC partnership. FCA & FSCA regulated. Read before you trade.',
}

export default function ReviewLayout({ children }: { children: React.ReactNode }) {
  // Standalone layout — no shared Navbar/Footer
  return <>{children}</>
}
