'use client'

import Earth from '@/components/3d/Earth'
import Container from '@/components/Container'
import { Montserrat, Caramel } from 'next/font/google'
import { TypeAnimation } from 'react-type-animation'

const montserrat = Montserrat({ subsets: ['latin'] })
const caramel = Caramel({ subsets: ['latin'], weight: '400' })

const Hero = () => {
  return (
    <Container className='bg-black h-screen w-screen'>
      <div className='absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] z-10 pointer-events-none'>
        <h1
          className={`${montserrat.className} font-black !italic text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl drop-shadow-lg text-stroke text-white`}
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
    </Container>
  )
}

export default Hero
