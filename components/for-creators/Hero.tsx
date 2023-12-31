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

      <div className='absolute bg-black/10 inset-0 w-full h-full'>
        <Container className='grid items-center justify-center h-full w-full'>
          <div className='text-white text-center'>
            <h1 className='text-3xl font-black uppercase md:text-5xl lg:text-7xl'>
              {language === 'en' ? (
                <>Join the Team!</>
              ) : language === 'cs' ? (
                <>Připoj se do Týmu!</>
              ) : language === 'de' ? (
                <>Treten Sie dem Team bei!</>
              ) : null}
            </h1>
            <p className='text-lg md:text-3xl lg:text-4xl tracking-wide'>
              {language === 'en' ? (
                <>Let us take your work seriously</>
              ) : language === 'cs' ? (
                <>Vezmeme Vaši práci vážně</>
              ) : language === 'de' ? (
                <>Lassen Sie uns Ihre Arbeit ernst nehmen</>
              ) : null}
            </p>
          </div>
        </Container>
      </div>
    </div>
  )
}

export default Hero
