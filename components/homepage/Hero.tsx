'use client'

import Earth from '@/components/3d/Earth'
import Container from '@/components/Container'
import { Montserrat, Caramel } from 'next/font/google'
import { TypeAnimation } from 'react-type-animation'
import { motion } from 'framer-motion'
import About from './About'

const montserrat = Montserrat({ subsets: ['latin'] })
const caramel = Caramel({ subsets: ['latin'], weight: '400' })

const Hero = () => {
  return (
    <Container className='bg-black h-screen w-screen grid place-items-end z-[99999]'>
      <h1
        className={`${montserrat.className} font-bold !italic text-3xl sm:text-4xl md:text-5xl lg:text-6xl 
                      drop-shadow-lg text-stroke text-white hero-shadow absolute left-1/2 top-1/2 translate-x-[-50%]
                      translate-y-[-100%] z-10 pointer-events-none`}
      >
        PLANETOPEDIA
      </h1>
      <p
        className={`${caramel.className} text-center text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl 
                      text-gold drop-shadow-sm  absolute left-1/2 top-1/2 translate-x-[-50%]
                      translate-y-[-25%] z-10 pointer-events-none whitespace-nowrap`}
      >
        <TypeAnimation
          sequence={[1000, 'More than an agency']}
          speed={15}
          cursor={false}
        />
      </p>

      <Earth />

      <About />
    </Container>
  )
}

export default Hero
