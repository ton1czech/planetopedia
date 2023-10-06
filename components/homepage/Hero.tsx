'use client'

import Earth from '@/components/3d/Earth'
import Container from '@/components/Container'
import { Montserrat, Caramel } from 'next/font/google'
import { TypeAnimation } from 'react-type-animation'
import About from './About'

const montserrat = Montserrat({ subsets: ['latin'] })
const caramel = Caramel({ subsets: ['latin'], weight: '400' })

const Hero = () => {
  return (
    <Container className='bg-black h-screen w-screen grid place-items-end z-[99999]'>
      <div className='absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] z-10 pointer-events-none'>
        <h1
          className={`${montserrat.className} font-bold !italic text-3xl sm:text-4xl md:text-5xl lg:text-6xl drop-shadow-lg text-stroke text-white`}
        >
          PLANETOPEDIA
        </h1>
        <p
          className={`${caramel.className} text-center text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl text-gold drop-shadow-sm -mt-3 lg:-mt-5`}
        >
          <TypeAnimation
            sequence={['More than an agency', 1000]}
            speed={20}
            cursor={false}
          />
        </p>
      </div>

      <Earth />

      <About />
    </Container>
  )
}

export default Hero
