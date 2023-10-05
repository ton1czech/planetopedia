'use client'

import { Montserrat } from 'next/font/google'
import Container from '../Container'
import LanguageSelector from './LanguageSelector'
import NavItem from './NavItem'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '../ui/navigation-menu'
import { navigationMenuTriggerStyle } from '@/components/ui/navigation-menu'

const montserrat = Montserrat({ subsets: ['latin'] })

const Navbar = () => {
  return (
    <nav className='fixed top-0 w-full py-5 bg-black'>
      <Container>
        <div className='flex items-center justify-between'>
          <h1
            className={`${montserrat.className} text-xl md:text-2xl font-black !italic text-white`}
          >
            PLANETOPEDIA
          </h1>

          <ul className='flex items-center gap-10 text-white'>
            <li className='mr-5'>
              <LanguageSelector />
            </li>
            <NavItem label='Blog' href='/blog' />
            <NavItem label='About' href='/services' />
            <NavItem label='Services' href='/services' />
          </ul>
        </div>
      </Container>
    </nav>
  )
}

export default Navbar
