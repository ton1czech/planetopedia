'use client'

import Container from '../Container'
import { useLanguage } from '@/store/useLanguage'
import { motion } from 'framer-motion'

const Video = () => {
  const { language } = useLanguage(state => state)

  return (
    <div className='sticky top-0 snap-start scroll-mt-20 w-screen z-50 bg-black flex items-center h-[calc(100vh-80px)]'>
      <Container className='py-10 w-full'>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <h1 className='text-2xl md:text-3xl lg:text-4xl font-bold text-center text-white'>
            {language === 'en' && <>More than an Agency.</>}
            {language === 'cs' && <>Více než jen Agentura.</>}
            {language === 'de' && <>Mehr als eine Agentur.</>}
          </h1>
          <p className='text-zinc-300 text-center max-w-[80ch] mx-auto'>
            {language === 'en' && (
              <>
                Planetopedia specializes in creating eye-catching photography,
                video production and social media campaigns for the World’s
                leading luxury hotels, resorts and rental properties.
              </>
            )}
            {language === 'cs' && (
              <>
                Planetopedia se specializuje na tvorbu poutavých fotografií,
                video produkci a kampaně v sociálních sítích pro přední světové
                luxusní společnosti, hotely, resorty.
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
          </p>

          <div className='ring-2 ring-white white-shadow'>
            <iframe
              src='https://www.youtube.com/embed/6FVQmdEMA3o?si=g37RNrek6Y-5PlpY'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              allowFullScreen
              className='w-full mt-4 md:mt-10 h-[220px] sm:h-[380px] md:h-[430px] lg:h-[480px] xl:h-[520px] 2xl:h-[620px]'
            />
          </div>
        </motion.div>
      </Container>
    </div>
  )
}

export default Video
