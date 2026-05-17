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
  metadataBase: new URL('https://choudhary-n-co-accountants.vercel.app/'),
  title: 'Choudhary & Co. Accountants | Stoke-on-Trent, ST6',
  description: 'Expert fixed-fee tax returns, VAT, and bookkeeping in Stoke-on-Trent. Claim all eligible tax reliefs and maximize profits. Book a free consultation today!',
  keywords: [
    'accountants Stoke-on-Trent',
    'tax returns Stoke-on-Trent',
    'bookkeeping Stoke-on-Trent',
    'VAT returns Stoke-on-Trent',
    'payroll services Stoke-on-Trent',
    'small business accounting',
    'local accountants Staffordshire'
  ],
  authors: [{ name: 'Choudhary & Co. Accountants' }],
  openGraph: {
    title: 'Minimize Tax & Boost Profits | Choudhary & Co. ST6',
    description: 'Stop overpaying tax. Get expert fixed-fee VAT, bookkeeping, and tax preparation in Stoke-on-Trent. Claim all eligible reliefs. Book a free advice session!',
    url: 'https://choudhary-n-co-accountants.vercel.app',
    siteName: 'Choudhary & Co. Accountants',
    images: [
      {
        url: 'https://choudhary-n-co-accountants.vercel.app/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Professional accounting advice and financial consulting at Choudhary & Co. Accountants',
      },
    ],
    type: 'website',
    locale: 'en_GB',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Maximize Your Business Profits | Choudhary & Co. ST6',
    description: 'Reliable, fixed-fee accounting & tax services for Stoke-on-Trent sole traders and SMEs. Secure MTD compliance and claim all reliefs. Book a free consultation!',
    images: ['https://choudhary-n-co-accountants.vercel.app/images/og-image.jpg'],
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
