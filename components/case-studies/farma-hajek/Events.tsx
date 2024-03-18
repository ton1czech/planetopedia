'use client'

import { useLanguage } from '@/store/useLanguage'
import Image from 'next/image'
import { motion } from 'framer-motion'

const Events = () => {
  const { language } = useLanguage(state => state)

  return (
    <div>
      <motion.h2
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        className='text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold mb-2'
      >
        {language === 'en' && <>/ A photo report</>}
        {language === 'cs' && <>/ Fotoreportáž</>}
        {language === 'de' && <>/ Eine Fotoreportage</>}
      </motion.h2>
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        className='grid md:grid-cols-[4fr_6fr] gap-6'
      >
        <p className='text-justify'>
          {language === 'en' && (
            <>
              Content creation and marketing for Strongman events at Farm Hájek,
              which offer a distinctive combination of strength, endurance, and
              entertainment set in the picturesque Czech countryside. These
              events provide not only exhilarating athletic challenges but also
              the chance for participants to experience the genuine agricultural
              ambiance of Farm Hájek.
            </>
          )}
          {language === 'cs' && (
            <>
              Tvorba obsahu a marketing pro akce Strongman na Farmě Hájek, které
              nabízejí osobitou kombinaci síly, vytrvalosti a zábavy v malebné
              české přírodě. Tyto akce poskytují nejen vzrušující sportovní
              výzvy, ale také možnost pro účastníky zažít pravou zemědělskou
              atmosféru Farmy Hájek.
            </>
          )}
          {language === 'de' && (
            <>
              Erstellung von Inhalten und Marketing für Strongman-Events auf der
              Farm Hájek, die eine einzigartige Kombination aus Kraft, Ausdauer
              und Unterhaltung in der malerischen tschechischen Landschaft
              bieten. Diese Veranstaltungen bieten nicht nur aufregende
              sportliche Herausforderungen, sondern auch die Möglichkeit für die
              Teilnehmer, das echte landwirtschaftliche Ambiente der Farm Hájek
              zu erleben.
            </>
          )}
        </p>
        <div className='relative w-full aspect-square h-[300px] sm:h-[400px] lg:h-[500px]'>
          <Image
            src='/case-studies/farma-hajek/strongman.webp'
            alt='strongman'
            fill
            className='object-cover object-center'
          />
        </div>
      </motion.div>
    </div>
  )
}

export default Events
