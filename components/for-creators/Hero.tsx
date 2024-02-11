'use client'

import { useLanguage } from '@/store/useLanguage'
import Container from '../Container'

const Hero = () => {
  const { language } = useLanguage(state => state)

  return (
    <div className='sticky top-0 w-screen h-screen bg-white -z-10'>
      <img
        src='/services/for-creators/hero.webp'
        alt='hero'
        className='absolute inset-0 object-cover object-top w-full h-full'
      />

      <div className='absolute inset-0 w-full h-full'>
        <Container className='grid items-center justify-center w-full h-full'>
          <div className='text-center text-white'>
            <h1 className='text-3xl font-black uppercase md:text-5xl lg:text-7xl'>
              {language === 'en' ? (
                <>Join the Community!</>
              ) : language === 'cs' ? (
                <>Připoj se do Komunity!</>
              ) : language === 'de' ? (
                <>Treten Sie dem Kommunity bei!</>
              ) : null}
            </h1>
          </div>
        </Container>
      </div>
    </div>
  )
}

export default Hero
