'use client'

import { useLanguage } from '@/store/useLanguage'
import Image from 'next/image'

const Events = () => {
  const { language } = useLanguage(state => state)

  return (
    <div>
      <h2 className='text-lg md:text-xl'>
        {language === 'en' && <>~ Events</>}
        {language === 'cs' && <>~ Akce</>}
        {language === 'en' && <>~ Veranstaltungen</>}
      </h2>
      <p className='mb-4'>
        {language === 'en' && (
          <>
            Strongman events at Farm Hájek represent a unique blend of strength,
            endurance, and entertainment taking place in the heart of the Czech
            countryside. These events offer not only thrilling athletic
            challenges but also the opportunity for participants to immerse
            themselves in the authentic agricultural environment of Farm Hájek.
          </>
        )}
        {language === 'cs' && (
          <>
            Strongman akce na Farmě Hájek představují jedinečnou kombinaci síly,
            vytrvalosti a zábavy, která se odehrává v srdci českého venkova.
            Tyto akce přinášejí nejen vzrušující sportovní výzvy, ale také
            umožňují účastníkům prožít pravé zemědělské prostředí Farmy Hájek.
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
      <div className='relative w-full h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px]'>
        <Image
          src='/case-studies/farma-hajek/strongman.webp'
          alt='strongman'
          fill
          className='object-cover object-center'
        />
      </div>
    </div>
  )
}

export default Events
