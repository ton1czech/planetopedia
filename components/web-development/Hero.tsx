'use client'

import { useLanguage } from '@/store/useLanguage'
import Container from '../Container'

export const Hero = () => {
  const { language } = useLanguage()

  return (
    <section className='relative w-screen h-screen'>
      <video
        muted
        autoPlay
        loop
        playsInline
        className='absolute inset-0 object-cover object-center w-full h-full'
      >
        <source src='https://cdn.coverr.co/videos/coverr-typing-on-a-keyboard-866/1080p.mp4' />
      </video>

      <div className='absolute inset-0 z-10 w-screen h-screen bg-black/10'>
        <Container className='grid items-center justify-center w-full h-full'>
          <div className='text-center text-white'>
            <h1 className='text-3xl font-black uppercase md:text-5xl lg:text-7xl'>
              {language === 'en' && <>Web Development</>}
              {language === 'cs' && <>Web Development</>}
            </h1>
          </div>
        </Container>
      </div>
    </section>
  )
}
