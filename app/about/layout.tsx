import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us | Choudhary & Co. Accountants',
  description: 'Learn about Choudhary & Co. Accountants - local accounting experts serving Stoke-on-Trent. Meet our team of qualified accountants dedicated to helping your business succeed.',
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
