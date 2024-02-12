import Navbar from '@/components/nav/Navbar'
import './globals.css'
import type { Metadata, Viewport } from 'next'
import { Manrope } from 'next/font/google'
import Footer from '@/components/footer/Footer'
import ToasterProvider from '@/providers/ToasterProvider'
import Head from 'next/head'

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://planetopedia.agency'),
  title: 'Planetopedia | More than an agency',
  description:
    "Planetopedia is an innovative marketing digital agency focused on marketing solutions and eye-catching content production. Since most people in the world watch social media on their smartphones, we have adapted to this and learned how to create high engagement content for today's target groups.",
  applicationName: 'Planetopedia',
  authors: [
    { name: 'Daniel Anthony Baudyš', url: 'https://github.com/ton1czech' },
  ],
  creator: 'Daniel Anthony Baudyš',
  category: 'travel agency',
  keywords: [
    'travel',
    'instagram',
    'whatsapp',
    'luxury',
    'photographers',
    'fotografové',
    'videographers',
    'videografové',
    'blog',
    'restaurants',
    'hotels',
    'four seasons',
    'farma hajek',
    'jumeirah',
    'sheraton',
    'shagrila',
    'dji',
    'vans',
    'sony',
    'color zeman',
    'grundstein',
    'niceface medical',
    'lumi coffee',
    'frantisek hrom',
    'rozmluv se',
    'heys luggage',
    'web development',
    'social media management',
    'content creation',
    'organizing events',
    'more than an agency',
    'social media influencer campaign',
    'clients',
    'creators',
  ],
}

export const viewport: Viewport = {
  initialScale: 1,
  width: 'device-width',
  maximumScale: 1,
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <Head>
        <meta
          name='google-site-verification'
          content='qX0rcP5-c8gZODKkUbQJXJoUU6eHXkVfPCrEVV-Afcc'
        />
      </Head>
      <body className={`${manrope.className} overflow-x-hidden bg-black`}>
        <ToasterProvider />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
