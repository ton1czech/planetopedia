'use client'

import { Montserrat } from 'next/font/google'
import Container from '../Container'
import LanguageSelector from './LanguageSelector'
import NavItem from './NavItem'
import { MenuIcon } from 'lucide-react'
import Link from 'next/link'
import ExpandableNavItem from './ExpandableNavItem'
import { cn } from '@/lib/utils'
import { useRouter, usePathname } from 'next/navigation'

const montserrat = Montserrat({ subsets: ['latin'] })

const Navbar = () => {
  const pathname = usePathname()

  const black = pathname === '/'
  const studio = pathname.includes('/studio')

  return (
    <nav
      className={cn(
        'z-50 w-full py-5',
        black ? 'bg-black/40' : 'bg-white/60 backdrop-blur-lg',
        studio ? 'block' : 'fixed top-0'
      )}
    >
      <Container>
        <div className='flex items-center justify-between'>
          <Link
            href='/'
            className={cn(
              'text-xl md:text-2xl font-black',
              black ? 'text-white' : 'text-black',
              montserrat.className
            )}
          >
            PLANETOPEDIA
          </Link>

          <div className='items-center hidden gap-20 md:flex'>
            <LanguageSelector black={black} />
            <ul
              className={cn(
                'flex items-center gap-8',
                black ? 'text-white' : 'text-black'
              )}
            >
              <ExpandableNavItem
                label='Blog'
                links={[
                  {
                    label: 'Luxury Hotels',
                    href: '/blog/hotels',
                  },
                  {
                    label: 'Luxury Restaurants',
                    href: '/blog/restaurants',
                  },
                ]}
                black={black}
              />
              <ExpandableNavItem
                label='About'
                links={[
                  {
                    label: 'Team',
                    href: '/about/team',
                  },
                  {
                    label: 'Company',
                    href: '/about/company',
                  },
                  {
                    label: 'Clients',
                    href: '/about/clients',
                  },
                  {
                    label: 'Feedback',
                    href: '/about/feedback',
                  },
                ]}
                black={black}
              />
              <NavItem label='Services' href='/services' black={black} />
            </ul>
          </div>

          <div className='flex items-center gap-3 md:hidden'>
            <LanguageSelector black={black} />
            <MenuIcon className={cn('', black ? 'text-white' : 'text-black')} />
          </div>
        </div>
      </Container>
    </nav>
  )
}

export default Navbar
