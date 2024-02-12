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
            <h1 className='text-3xl font-black uppercase sm:text-5xl md:text-6xl lg:text-7xl'>
              {language === 'en' && <>Web Development</>}
              {language === 'cs' && <>Tvorba Webu</>}
            </h1>
            <p className='relative z-10 text-sm text-center sm:text-xl md:text-3xl text-neutral-100'>
              for <b className='text-zinc-200'>individuals</b> and{' '}
              <b className='text-zinc-200'>companies</b>, elegantly.
            </p>
          </div>
        </Container>
      </div>
    </section>
  )
}
