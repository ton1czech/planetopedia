'use client'

import { Montserrat } from 'next/font/google'
import Container from '../Container'
import LanguageSelector from './LanguageSelector'
import NavItem from './NavItem'
import { MenuIcon } from 'lucide-react'

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

          <div className='items-center hidden gap-20 md:flex'>
            <LanguageSelector />
            <ul className='flex items-center gap-8 text-white'>
              <NavItem label='Blog' href='/blog' />
              <NavItem label='About' href='/services' />
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
