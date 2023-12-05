'use client'

import { Montserrat } from 'next/font/google'
import Container from '../Container'
import LanguageSelector from './LanguageSelector'
import NavItem from './NavItem'
import { Menu } from 'lucide-react'
import Link from 'next/link'
import ExpandableNavItem from './ExpandableNavItem'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'
import { useLanguage } from '@/store/useLanguage'
import { useEffect, useState } from 'react'
import MobileNav from './MobileNav'
import { AnimatePresence } from 'framer-motion'

const montserrat = Montserrat({ subsets: ['latin'] })

const Navbar = () => {
  const { language } = useLanguage(state => state)

  const [isOpen, setIsOpen] = useState(false)
  const [isTopOfPage, setIsTopOfPage] = useState(false)

  const pathname = usePathname()

  const black = pathname === '/'
  const studio = pathname.includes('/studio')
  const blog = pathname === '/blog/hotels' || '/blog/restaurants'

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true)
      }
      if (window.scrollY !== 0) setIsTopOfPage(false)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <nav
        className={cn(
          'z-[1000] w-full h-20 py-5 transition duration-500',
          black ? 'bg-black/40' : 'bg-white/60 backdrop-blur-lg',
          studio ? 'block bg-white' : 'fixed top-0',
          blog && isTopOfPage && '!bg-transparent !backdrop-blur-none'
        )}
      >
        <Container>
          <div className='flex items-center justify-between'>
            <Link
              href='/'
              className={cn(
                'text-lg md:text-xl font-black',
                black ? 'text-white' : 'text-black',
                montserrat.className
              )}
            >
              PLANETOPEDIA
            </Link>

            <div className='items-center hidden gap-12 lg:flex'>
              <LanguageSelector black={black} />
              <ul
                className={cn(
                  'flex items-center gap-8',
                  black ? 'text-white' : 'text-black'
                )}
              >
                <NavItem
                  label={
                    language === 'en'
                      ? 'Our Creators'
                      : language === 'cs'
                      ? 'Naši Tvůrci'
                      : language === 'de'
                      ? 'Unsere Schöpfer'
                      : ''
                  }
                  href='/creators'
                  black={black}
                />
                <ExpandableNavItem
                  label='Blog'
                  links={[
                    {
                      href: '/blog/hotels',
                      label:
                        language === 'en'
                          ? 'Luxury Hotels'
                          : language === 'cs'
                          ? 'Luxusní Hotely'
                          : language === 'de'
                          ? 'Luxushotels'
                          : '',
                    },
                    {
                      label:
                        language === 'en'
                          ? 'Luxury Restaurant'
                          : language === 'cs'
                          ? 'Luxusní Restaurace'
                          : language === 'de'
                          ? 'Luxuriöses Restaurant'
                          : '',
                      href: '/blog/restaurants',
                    },
                  ]}
                  black={black}
                />
                <ExpandableNavItem
                  label={
                    language === 'en'
                      ? 'About'
                      : language === 'cs'
                      ? 'O Nás'
                      : language === 'de'
                      ? 'Über'
                      : ''
                  }
                  links={[
                    {
                      label:
                        language === 'en'
                          ? 'Team'
                          : language === 'cs'
                          ? 'Tým'
                          : language === 'de'
                          ? 'Team'
                          : '',
                      href: '/about/team',
                    },
                    {
                      label:
                        language === 'en'
                          ? 'Our Story'
                          : language === 'cs'
                          ? 'Náš Příběh'
                          : language === 'de'
                          ? 'Unsere Geschichte'
                          : '',
                      href: '/about/company',
                    },
                    {
                      label:
                        language === 'en'
                          ? 'Clients'
                          : language === 'cs'
                          ? 'Klienti'
                          : language === 'de'
                          ? 'Kunden'
                          : '',
                      href: '/about/clients',
                    },
                    {
                      label:
                        language === 'en'
                          ? 'Feedback'
                          : language === 'cs'
                          ? 'Zpětná Vazba'
                          : language === 'de'
                          ? 'Rückmeldung'
                          : '',
                      href: '/about/feedback',
                    },
                  ]}
                  black={black}
                />
                <ExpandableNavItem
                  label={
                    language === 'en'
                      ? 'Services'
                      : language === 'cs'
                      ? 'Služby'
                      : language === 'de'
                      ? 'Dienstleistungen'
                      : ''
                  }
                  links={[
                    {
                      label:
                        language === 'en'
                          ? 'For Creators'
                          : language === 'cs'
                          ? 'Pro Tvůrce'
                          : language === 'de'
                          ? 'Für Schöpfer'
                          : '',
                      href: '/services/for-creators',
                    },
                    {
                      label:
                        language === 'en'
                          ? 'For Hotels'
                          : language === 'cs'
                          ? 'Pro Hotely'
                          : language === 'de'
                          ? 'Für Hotels'
                          : '',
                      href: '/services/for-hotels',
                    },
                    {
                      label:
                        language === 'en'
                          ? 'For Brands'
                          : language === 'cs'
                          ? 'Pro Firmy'
                          : language === 'de'
                          ? 'Für Marken'
                          : '',
                      href: '/services/for-brands',
                    },
                  ]}
                  black={black}
                />
                <NavItem
                  label={
                    language === 'en'
                      ? 'Case Studies'
                      : language === 'cs'
                      ? 'Případové studie'
                      : language === 'de'
                      ? 'Fallstudien'
                      : ''
                  }
                  href='/case-studies'
                  black={black}
                />
              </ul>
            </div>

            <div className='flex items-center gap-3 lg:hidden'>
              <LanguageSelector black={black} />
              <Menu
                onClick={() => setIsOpen(true)}
                className={cn('', black ? 'text-white' : 'text-black')}
              />
            </div>
          </div>
        </Container>
      </nav>

      <AnimatePresence>
        {isOpen && <MobileNav black={black} setIsOpen={setIsOpen} />}
      </AnimatePresence>
    </>
  )
}

export default Navbar
