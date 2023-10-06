'use client'

import { Montserrat } from 'next/font/google'
import Container from '../Container'
import LanguageSelector from './LanguageSelector'
import NavItem from './NavItem'
import { MenuIcon } from 'lucide-react'
import Link from 'next/link'
import ExpandableNavItem from './ExpandableNavItem'

const montserrat = Montserrat({ subsets: ['latin'] })

const Navbar = () => {
  return (
    <nav className='fixed top-0 z-50 w-full py-5 bg-black'>
      <Container>
        <div className='flex items-center justify-between'>
          <Link
            href='/'
            className={`${montserrat.className} text-xl md:text-2xl font-black !italic text-white`}
          >
            PLANETOPEDIA
          </Link>

          <div className='items-center hidden gap-20 md:flex'>
            <LanguageSelector />
            <ul className='flex items-center gap-8 text-white'>
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
              />
              <NavItem label='Services' href='/services' />
            </ul>
          </div>

          <div className='flex items-center gap-5 md:hidden'>
            <LanguageSelector />
            <MenuIcon className='text-white' />
          </div>
        </div>
      </Container>
    </nav>
  )
}

export default Navbar
