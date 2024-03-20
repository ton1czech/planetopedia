'use client'

import Earth from '@/components/3d/Earth'
import Container from '@/components/Container'
import { Montserrat, Caramel } from 'next/font/google'
import { motion } from 'framer-motion'
import { useLanguage } from '@/store/useLanguage'
import { cn } from '@/lib/utils'

const montserrat = Montserrat({ subsets: ['latin'] })
const caramel = Caramel({ subsets: ['latin'], weight: '400' })

const Hero = () => {
  const { language } = useLanguage(state => state)

  return (
    <Container className='h-screen w-screen grid place-items-end z-[99999] bg-black'>
      <h1
        className={cn(
          'text-center relative z-10 text-xl text-transparent sm:text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl !leading-tight bg-clip-text bg-gradient-to-b from-neutral-200 to-neutral-500 w-full',
          montserrat.className
        )}
      >
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

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3 }}
      >
        <Earth />
      </motion.div>
      <div className='absolute top-0 left-0 z-10 w-full h-full md:pointer-events-none' />
    </Container>
  )
}

export default Hero
