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
        {language === 'en' && <>/ Events</>}
        {language === 'cs' && <>/ Akce</>}
        {language === 'de' && <>/ Veranstaltungen</>}
      </motion.h2>
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        className='grid md:grid-cols-[4fr_6fr] gap-6'
      >
        <p className='text-justify'>
          {language === 'en' && (
            <>
              Strongman events at Farm Hájek represent a unique blend of
              strength, endurance, and entertainment taking place in the heart
              of the Czech countryside. These events offer not only thrilling
              athletic challenges but also the opportunity for participants to
              immerse themselves in the authentic agricultural environment of
              Farm Hájek.
            </>
          )}
          {language === 'cs' && (
            <>
              Strongman akce na Farmě Hájek představují jedinečnou kombinaci
              síly, vytrvalosti a zábavy, která se odehrává v srdci českého
              venkova. Tyto akce přinášejí nejen vzrušující sportovní výzvy, ale
              také umožňují účastníkům prožít pravé zemědělské prostředí Farmy
              Hájek.
            </>
          )}
          {language === 'de' && (
            <>
              Die Strongman-Veranstaltungen auf der Farm Hájek sind eine
              einzigartige Mischung aus Kraft, Ausdauer und Unterhaltung, die im
              Herzen der tschechischen Landschaft. Diese Veranstaltungen bieten
              nicht nur aufregende sportliche Herausforderungen, sondern bieten
              den Teilnehmern auch die Möglichkeit, in die in die authentische
              landwirtschaftliche Umgebung des Bauernhofs Hájek einzutauchen.
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
