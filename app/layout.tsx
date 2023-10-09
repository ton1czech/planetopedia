import Navbar from '@/components/nav/Navbar'
import './globals.css'
import type { Metadata } from 'next'
import { Manrope } from 'next/font/google'
import ScrollObserver from '@/utils/scroll-observer'
import Footer from '@/components/footer/Footer'
import ToasterProvider from '@/providers/ToasterProvider'

const manrope = Manrope({ subsets: ['latin'], weight: '400' })

export const metadata: Metadata = {
  title: 'Planetopedia | More than an agency',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <ScrollObserver>
        <body className={`${manrope.className} overflow-x-hidden bg-black`}>
          <ToasterProvider />
          <Navbar />
          {children}
          <Footer />
        </body>
      </ScrollObserver>
    </html>
  )
}
