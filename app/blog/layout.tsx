import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog & Resources | Choudhary & Co. Accountants',
  description: 'Read the latest accounting tips, tax advice, and business guidance from Choudhary & Co. Accountants. Expert insights for small businesses and sole traders.',
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
