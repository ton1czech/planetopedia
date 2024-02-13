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
        <source src='/services/for-brands/hero.mp4' />
      </video>

      <div className='absolute inset-0 w-full h-full bg-black/10'>
        <Container className='grid items-center justify-center w-full h-full'>
          <div className='text-center text-white'>
            <h1 className='text-3xl font-black uppercase md:text-5xl lg:text-7xl'>
              {language === 'en' ? (
                <>For Brands</>
              ) : language === 'cs' ? (
                <>Pro Firmy</>
              ) : language === 'de' ? (
                <>Für Marken</>
              ) : null}
            </h1>
          </div>
        </Container>
      </div>
    </div>
  )
}

export default Hero
