import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Self-Assessment Tax Return Deadlines | Choudhary & Co. Accountants',
  description: 'Learn about self-assessment tax return deadlines for 2024/25 and how to avoid late filing penalties. Expert advice from Choudhary & Co. Accountants in Stoke-on-Trent.',
}

export default function BlogPostLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
