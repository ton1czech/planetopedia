'use client'

import Container from '../Container'
import { useLanguage } from '@/store/useLanguage'
import { motion } from 'framer-motion'

const Video = () => {
  const { language } = useLanguage(state => state)

  return (
    <div className='sticky top-0 snap-start scroll-mt-20 w-screen z-20 bg-black flex items-center h-[calc(100vh-80px)]'>
      <Container className='w-full'>
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className='text-2xl font-bold text-center text-white md:text-3xl lg:text-4xl'
        >
          {language === 'en' && <>More than an Agency.</>}
          {language === 'cs' && <>Více než jen Agentura.</>}
          {language === 'de' && <>Mehr als eine Agentur.</>}
        </motion.h1>
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className='text-zinc-300 text-center max-w-[80ch] mx-auto mb-10 lg:mb-4'
        >
          {language === 'en' && (
            <>
              Planetopedia specializes in creating eye-catching photography,
              video production and social media campaigns for the World’s
              leading luxury hotels, resorts and rental properties.
            </>
          )}
          {language === 'cs' && (
            <>
              Planetopedia se specializuje na tvorbu poutavých fotografií, video
              produkci a kampaně na sociálních sítích pro přední světové luxusní
              společnosti, hotely, resorty.
            </>
          )}
          {language === 'de' && (
            <>
              Planetopedia ist spezialisiert auf die Erstellung
              aufmerksamkeitsstarker Fotografie-, Video Videoproduktion und
              Social-Media-Kampagnen für die weltweit führenden Luxushotels
              Hotels, Resorts und Mietobjekte.
            </>
          )}
        </motion.p>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className='ring-2 ring-white white-shadow'
        >
          <iframe
            src='https://www.youtube.com/embed/7r-yCNlE6RM?si=bH9tXeH0qTHJOaVh'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            allowFullScreen
            className='w-full mt-4 md:mt-10 h-[220px] sm:h-[380px] md:h-[430px] lg:h-[480px] xl:h-[520px] 2xl:h-[620px]'
          />
        </motion.div>
      </Container>
    </div>
  )
}

export default Video
