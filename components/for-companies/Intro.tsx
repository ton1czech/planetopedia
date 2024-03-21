'use client'

import { useLanguage } from '@/store/useLanguage'
import Container from '../Container'

export const Intro = () => {
  const { language } = useLanguage()

  return (
    <div className='sticky top-0 snap-start scroll-mt-20 w-screen z-10 bg-black flex items-center h-[calc(100vh-80px)]'>
      <Container className='h-[80vh] grid place-content-center'>
        <h1 className='text-center relative z-10 text-4xl text-transparent sm:text-6xl md:text-7xl xl:text-[7.8rem] 2xl:text-9xl !leading-tight bg-clip-text bg-gradient-to-b from-neutral-200 to-neutral-500'>
          {language === 'en' && (
            <>
              We <b>transform</b> <br /> your <b>visitors</b> into <br /> loyal{' '}
              <b>customers.</b>
            </>
          )}
          {language === 'cs' && (
            <>
              <b>Přeměníme</b> vaše <br /> <b>návštěvníky</b> na <br /> věrné{' '}
              <b>zákazníky.</b>
            </>
          )}
        </h1>
      </Container>
    </div>
  )
}
