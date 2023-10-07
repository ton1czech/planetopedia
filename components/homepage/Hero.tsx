'use client'

import Earth from '@/components/3d/Earth'
import Container from '@/components/Container'
import { Montserrat, Caramel } from 'next/font/google'
import { motion } from 'framer-motion'
import { useLanguage } from '@/store/useLanguage'

const montserrat = Montserrat({ subsets: ['latin'] })
const caramel = Caramel({ subsets: ['latin'], weight: '400' })

const Hero = () => {
  const { language } = useLanguage(state => state)
  return (
    <Container className='h-screen w-screen grid place-items-end z-[99999] bg-black'>
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.5 }}
        className={`${montserrat.className} font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl 
                      text-white absolute left-1/2 top-1/2 translate-x-[-50%]
                      translate-y-[-100%] z-10 pointer-events-none select-none`}
      >
        PLANETOPEDIA
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1.5 }}
        className={`${caramel.className} text-center text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl 
                      text-gold drop-shadow-sm  absolute left-1/2 top-1/2 translate-x-[-50%]
                      translate-y-[-25%] z-10 pointer-events-none whitespace-nowrap select-none`}
      >
        {language === 'en' && <>More than an agency</>}
        {language === 'cs' && <>Více než jen agentura</>}
      </motion.p>

      <Earth />
    </Container>
  )
}

export default Hero
