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
        <source src='https://cdn.coverr.co/videos/coverr-a-female-video-editor-is-checking-her-social-media-5063/1080p.mp4' />
      </video>

      <div className='absolute inset-0 w-full h-full pt-24 md:pt-32 services-gradient'>
        <Container className='grid items-center h-full'>
          <h1 className='text-2xl font-bold uppercase md:text-5xl'>
            {language === 'en' ? <>For Brands</> : <>Pro Značky</>}
          </h1>
        </Container>
      </div>
    </div>
  )
}

export default Hero
