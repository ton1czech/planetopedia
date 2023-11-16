import Navbar from '@/components/nav/Navbar'
import './globals.css'
import type { Metadata } from 'next'
import { Manrope } from 'next/font/google'
import Footer from '@/components/footer/Footer'
import ToasterProvider from '@/providers/ToasterProvider'
import Script from 'next/script'
import Head from 'next/head'

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://planetopedia.agency'),
  title: 'Planetopedia | More than an agency',
  description: '',
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
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

        <Script
          async
          src='https://www.googletagmanager.com/gtag/js?id=G-F2GNWDQBT8'
        ></Script>
        <Script>
          {`
             window.dataLayer = window.dataLayer || [];
             function gtag(){dataLayer.push(arguments);}
             gtag('js', new Date());

             gtag('config', 'G-F2GNWDQBT8');
          `}
        </Script>
      </body>
    </html>
  )
}
