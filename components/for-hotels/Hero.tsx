'use client'

import { useLanguage } from '@/store/useLanguage'
import Container from '../Container'

const Hero = () => {
  const { language } = useLanguage(state => state)

  return (
    <div className='sticky top-0 w-screen h-screen bg-white -z-10'>
      <video
        muted
        autoPlay
        loop
        playsInline
        className='absolute inset-0 object-cover object-center w-full h-full'
      >
        <source src='/services/for-hotels/hero.mp4' />
      </video>

      <div className='absolute bg-black/10 inset-0 w-full h-full'>
        <Container className='grid items-center justify-center h-full w-full'>
          <div className='text-white text-center'>
            <h1 className='text-3xl font-black uppercase md:text-5xl lg:text-7xl'>
              For Hotels
            </h1>
          </div>
        </Container>
      </div>
    </div>
  )
}

export default Hero
