import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Choudhary & Co. Accountants | Local Accountants in Stoke-on-Trent',
  description: 'Professional accounting services for small businesses, sole traders, and local businesses in Stoke-on-Trent. Expert tax returns, bookkeeping, VAT, and business advisory services with fixed-fee pricing.',
  keywords: ['accountants Stoke-on-Trent', 'tax services', 'bookkeeping', 'VAT returns', 'small business accounting', 'local accountants'],
  authors: [{ name: 'Choudhary & Co. Accountants' }],
  openGraph: {
    title: 'Choudhary & Co. Accountants | Local Accountants in Stoke-on-Trent',
    description: 'Professional accounting services for small businesses, sole traders, and local businesses in Stoke-on-Trent.',
    type: 'website',
    locale: 'en_GB',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#1e3a5f',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
