'use client'

import { useLanguage } from '@/store/useLanguage'
import Container from '../Container'

const Hero = () => {
  const { language } = useLanguage(state => state)

  return (
    <div className='w-screen h-[90vh] lg:h-screen'>
      <video
        muted
        autoPlay
        loop
        playsInline
        className='absolute inset-0 object-cover object-center w-full h-full'
      >
        <source src='https://i.imgur.com/OXBeHNd.mp4' />
      </video>

      <div className='absolute inset-0 w-full h-full pt-24 md:pt-32 services-gradient'>
        <Container className='grid items-center h-full'>
          <h1 className='text-2xl md:text-5xl font-bold uppercase'>
            {language === 'en' ? <>For Creators</> : <>Pro Tvůrce</>}
          </h1>
        </Container>
      </div>
    </div>
  )
}

export default Hero
