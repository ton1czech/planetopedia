'use client'

import { useLanguage } from '@/store/useLanguage'
import Container from '../Container'
import { useContext, useRef } from 'react'
import { ScrollContext } from '@/utils/scroll-observer'

const Hero = () => {
  const { language } = useLanguage(state => state)

  const refContainer = useRef<HTMLDivElement>(null)
  const { scrollY } = useContext(ScrollContext)

  let progress = 0

  const { current: elContainer } = refContainer
  if (elContainer) {
    progress = Math.min(1, scrollY / elContainer.clientHeight)
  }

  return (
    <div
      className='w-screen sticky top-0 h-screen -z-10'
      ref={refContainer}
      style={{
        transform: `translateY(-${progress * 20}vh)`,
      }}
    >
      <video
        muted
        autoPlay
        loop
        playsInline
        className='absolute inset-0 object-cover object-center w-full h-full'
      >
        <source src='https://i.imgur.com/LcNeI4p.mp4' />
      </video>

      <div className='absolute inset-0 w-full h-full pt-24 md:pt-32 services-gradient'>
        <Container className='grid items-center h-full'>
          <h1 className='text-2xl md:text-5xl font-bold uppercase'>
            {language === 'en' ? <>For Hotels</> : <>Pro Hotely</>}
          </h1>
        </Container>
      </div>
    </div>
  )
}

export default Hero
