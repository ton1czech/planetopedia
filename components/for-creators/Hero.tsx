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
        <source src='https://cdn.coverr.co/videos/coverr-sunset-in-bali-4090/1080p.mp4' />
      </video>

      <div className='absolute bg-black/20 inset-0 w-full h-full pt-24 md:pt-32'>
        <Container className='grid items-center justify-center h-full w-full'>
          <div className='text-white text-center'>
            <h1 className='text-3xl  font-bold uppercase md:text-5xl lg:text-7xl'>
              Join the Team!
            </h1>
            <p className='text-lg md:text-3xl'>
              Let us take your work seriously
            </p>
          </div>
        </Container>
      </div>
    </div>
  )
}

export default Hero
