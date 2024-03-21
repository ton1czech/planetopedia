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
              Content creation and marketing for Strongman events at Farma
              Hájek. A combination of strength, endurance and fun in the
              picturesque Czech countryside. These events are not only an
              exciting sporting challenge, but also an opportunity to get to
              know the farm.
            </>
          )}
          {language === 'cs' && (
            <>
              Tvorba obsahu a marketing pro Strongman akce na Farmě Hájek.
              Kombinace síly, vytrvalosti a zábavy v malebné české přírodě. Tyto
              akce jsou nejen vzrušující sportovní výzva, ale také možnost
              poznat samotnou myšlenku farmy.
            </>
          )}
          {language === 'de' && <></>}
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
