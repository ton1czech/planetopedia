'use client'

import Image from 'next/image'
import Container from '../Container'
import dynamic from 'next/dynamic'
import { useLanguage } from '@/store/useLanguage'
const Map = dynamic(() => import('@/components/for-companies/Map'), {
  ssr: false,
})
import { motion } from 'framer-motion'

const Campaign = () => {
  const { language } = useLanguage(state => state)

  return (
    <div className='sticky top-0 snap-start scroll-mt-20 w-screen h-[calc(100vh-80px)] z-30 bg-black flex items-center'>
      <Container className='grid md:grid-cols-[3fr_2fr] gap-14'>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className='flex flex-col justify-between gap-10 md:gap-0'
        >
          <div>
            <p className='text-justify uppercase md:text-lg text-zinc-200'>
              {language === 'en' && <>we are everywhere</>}
              {language === 'cs' && <>jsme všude</>}
              {language === 'de' && <>wir sind überall</>}
            </p>
            <h1 className='mb-2 text-3xl font-bold text-white md:text-4xl lg:text-5xl'>
              Heys Luggage
            </h1>
            <p className='text-zinc-300'>
              {language === 'en' && (
                <>
                  Heys Luggage joined forces with five talented creators from
                  five countries, delivering resounding success and reaching new
                  heights on social media. Together, we brought the world to
                  life, inspiring audiences worldwide.
                </>
              )}
              {language === 'cs' && (
                <>
                  Společnost Heys Luggage spojila síly s pěti talentovanými
                  tvůrci z pěti zemí, dosáhla obrovského úspěchu a nových výšin
                  na sociálních sítích. Společně jsme oživili svět a inspirovali
                  publikum po celém světě.
                </>
              )}
              {language === 'de' && (
                <>
                  Heys Luggage hat sich mit fünf talentierten Künstlern aus fünf
                  Ländern zusammengetan, um einen durchschlagenden Erfolg zu
                  erzielen und in den sozialen Medien neue Maßstäbe zu setzen.
                  Gemeinsam haben wir die Welt zum Leben erweckt und das
                  Publikum weltweit inspiriert.
                </>
              )}
            </p>
          </div>
          <Map />
        </motion.div>
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <Image
            width={700}
            height={1000}
            alt='heys luggage campaign'
            src='/services/for-brands/heysluggage.jpg'
            className='hidden md:block'
          />
        </motion.div>
      </Container>
    </div>
  )
}

export default Campaign
