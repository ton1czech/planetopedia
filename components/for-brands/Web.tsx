'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useLanguage } from '@/store/useLanguage'
import Container from '../Container'

const srcs = [
  '/services/for-brands/web/1.webp',
  '/services/for-brands/web/2.webp',
]

const Web = () => {
  const { language } = useLanguage(state => state)

  const [src, setSrc] = useState<string>(srcs[0])
  const [index, setIndex] = useState<number>(0)

  useEffect(() => {
    const interval = setInterval(() => {
      const nextImageIndex = (index + 1) % srcs.length
      setIndex(nextImageIndex)
      setSrc(srcs[nextImageIndex])
    }, 3000)

    return () => clearInterval(interval)
  }, [index, srcs])

  return (
    <div className='sticky top-0 snap-start scroll-mt-20 w-screen z-[60] bg-white h-[calc(100vh-80px)] grid place-content-center'>
      <Container>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <h2 className='text-2xl text-center text-black md:text-3xl mb-4'>
            {language === 'en' && <>Web Development</>}
            {language === 'cs' && <>Tvorba Webu</>}
            {language === 'de' && <>Web-Entwicklung</>}
          </h2>
          <p className='text-black text-justify lg:text-center max-w-[90ch] mx-auto mb-6'>
            {language === 'en' && (
              <>
                We use cutting edge technologies to achieve maximum speed,
                optimal display on all types of displays and excellent search
                engine ranking through SEO optimization.
              </>
            )}
            {language === 'cs' && (
              <>
                Využíváme nejnovější technologie k dosažení maximální rychlosti,
                optimálního zobrazení na všech typech displejů a vynikajícího
                umístění ve vyhledávačích díky SEO optimalizaci.
              </>
            )}
            {language === 'de' && (
              <>
                Wir nutzen die neuesten Technologien, um maximale
                Geschwindigkeit, optimale Darstellung auf allen Arten von
                Bildschirmen und hervorragende Platzierungen in Suchmaschinen
                durch SEO-Optimierung zu erreichen.
              </>
            )}
          </p>
          <Image src={src} alt='website' width={1100} height={650} />
        </motion.div>
      </Container>
    </div>
  )
}

export default Web
