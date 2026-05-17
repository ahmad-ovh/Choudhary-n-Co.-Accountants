import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Services | Choudhary & Co. Accountants',
  description: 'Professional accounting services including tax returns, bookkeeping, payroll, VAT returns, self-assessment, and business advisory for small businesses in Stoke-on-Trent.',
}

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
