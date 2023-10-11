'use client'

import { Montserrat } from 'next/font/google'
import Container from '../Container'
import LanguageSelector from './LanguageSelector'
import NavItem from './NavItem'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import ExpandableNavItem from './ExpandableNavItem'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'
import { useLanguage } from '@/store/useLanguage'
import { useState } from 'react'
import MobileNav from './MobileNav'
import { AnimatePresence } from 'framer-motion'

const montserrat = Montserrat({ subsets: ['latin'] })

const Navbar = () => {
  const { language } = useLanguage(state => state)

  const [isOpen, setIsOpen] = useState(false)

  const pathname = usePathname()

  const black = pathname === '/'
  const studio = pathname.includes('/studio')

  const Icon = isOpen ? X : Menu

  return (
    <>
      <nav
        className={cn(
          'z-[9999] w-full h-20  py-5',
          black ? 'bg-black/40' : 'bg-white/60 backdrop-blur-lg',
          studio ? 'block' : 'fixed top-0'
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

            <div className='items-center hidden gap-12 md:flex'>
              <LanguageSelector black={black} />
              <ul
                className={cn(
                  'flex items-center gap-8',
                  black ? 'text-white' : 'text-black'
                )}
              >
                <NavItem
                  label={language === 'en' ? 'Our Creators' : 'Naši Tvůrci'}
                  href='/creators'
                  black={black}
                />
                <ExpandableNavItem
                  label='Blog'
                  links={[
                    {
                      label:
                        language === 'en' ? 'Luxury Hotels' : 'Luxusní Hotely',
                      href: '/blog/hotels',
                    },
                    {
                      label:
                        language === 'en'
                          ? 'Luxury Restaurant'
                          : 'Luxusní Restaurace',
                      href: '/blog/restaurants',
                    },
                  ]}
                  black={black}
                />
                <ExpandableNavItem
                  label={language === 'en' ? 'About' : 'O Nás'}
                  links={[
                    {
                      label: language === 'en' ? 'Team' : 'Tým',
                      href: '/about/team',
                    },
                    {
                      label: language === 'en' ? 'Company' : 'Společnost',
                      href: '/about/company',
                    },
                    {
                      label: language === 'en' ? 'Clients' : 'Klienti',
                      href: '/about/clients',
                    },
                    {
                      label: language === 'en' ? 'Feedback' : 'Zpětná Vazba',
                      href: '/about/feedback',
                    },
                  ]}
                  black={black}
                />
                <ExpandableNavItem
                  label={language === 'en' ? 'Services' : 'Služby'}
                  links={[
                    {
                      label: language === 'en' ? 'For Creators' : 'Pro Tvůrce',
                      href: '/services/for-creators',
                    },
                    {
                      label: language === 'en' ? 'For Hotels' : 'Pro Hotely',
                      href: '/services/for-hotels',
                    },
                    {
                      label: language === 'en' ? 'For Brands' : 'Pro Značky',
                      href: '/services/for-brands',
                    },
                  ]}
                  black={black}
                />
              </ul>
            </div>

            <div className='flex items-center gap-3 md:hidden'>
              <LanguageSelector black={black} />
              <Icon
                onClick={() => setIsOpen(prev => !prev)}
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
