import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us | Choudhary & Co. Accountants',
  description: 'Contact Choudhary & Co. Accountants in Stoke-on-Trent for a free consultation. Call 01782 123 456 or visit our office at 42 High Street, Stoke-on-Trent.',
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
