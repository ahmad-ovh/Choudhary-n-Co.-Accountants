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
  metadataBase: new URL('https://choudharyaccountants.co.uk'),
  title: 'Choudhary & Co. Accountants | Local Accountants in Stoke-on-Trent',
  description: 'Expert, fixed-fee tax returns, VAT, bookkeeping, and payroll services in Stoke-on-Trent. Claim all eligible reliefs, maximize profits, and secure MTD compliance. Book your free consultation today!',
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
    title: 'Grow Your Business & Minimize Tax | Choudhary & Co. Accountants',
    description: 'Stop overpaying tax. Get expert fixed-fee VAT, bookkeeping, and tax preparation services in Stoke-on-Trent. Fast, stress-free compliance. Book a free advice session!',
    url: 'https://choudharyaccountants.co.uk',
    siteName: 'Choudhary & Co. Accountants',
    images: [
      {
        url: '/images/og-image.png',
        width: 800,
        height: 600,
        alt: 'Professional accounting advice and financial consulting at Choudhary & Co. Accountants',
      },
    ],
    type: 'website',
    locale: 'en_GB',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Maximize Your Business Profits | Choudhary & Co. Accountants',
    description: 'Reliable, fixed-fee accounting & tax services for Stoke-on-Trent SMEs and sole traders. Secure your MTD compliance and stress-free tax filings. Claim your free consultation today!',
    images: ['/images/og-image.png'],
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
