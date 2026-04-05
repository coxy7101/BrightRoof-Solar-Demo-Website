import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'BrightRoof Solar | Free Solar Panel Quotes for UK Homes',
  description: 'Get a free solar panel quote for your home. MCS certified installers, 25-year warranty, and save up to 70% on electricity bills. Trusted by 1,200+ UK homeowners.',
  keywords: ['solar panels UK', 'solar installation', 'free solar quote', 'residential solar', 'MCS certified'],
  authors: [{ name: 'BrightRoof Solar' }],
  openGraph: {
    title: 'BrightRoof Solar | Free Solar Panel Quotes for UK Homes',
    description: 'Get a free solar panel quote for your home. MCS certified installers, 25-year warranty, and save up to 70% on electricity bills.',
    type: 'website',
    locale: 'en_GB',
    siteName: 'BrightRoof Solar',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BrightRoof Solar | Free Solar Panel Quotes',
    description: 'Get a free solar panel quote for your home. MCS certified installers, 25-year warranty.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
