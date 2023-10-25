'use client'

import { Skeleton } from '@/components/ui/skeleton'
import { useLanguage } from '@/store/useLanguage'
import { useEffect, useState } from 'react'
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from 'react-compare-slider'

const Web = () => {
  const { language } = useLanguage(state => state)

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(false)
  }, [])

  return (
    <div>
      <h2 className='text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold mb-2'>
        {language === 'en' && <>/ Web Development</>}
        {language === 'cs' && <>/ Tvorba Webu</>}
        {language === 'de' && <>/ Web-Entwicklung</>}
      </h2>

      <ul className='mb-4 md:mb-10 grid grid-cols-2 lg:grid-cols-4 gap-4'>
        <li className='text-center bg-zinc-100 rounded-md py-2 px-4 text-zinc-700'>
          {language === 'en' && <>Modern</>}
          {language === 'cs' && <>Moderní</>}
          {language === 'de' && <>Moderne</>}
        </li>
        <li className='text-center bg-zinc-100 rounded-md py-2 px-4 text-zinc-700'>
          {language === 'en' && <>Otimization</>}
          {language === 'cs' && <>Optimalizace</>}
          {language === 'de' && <>Otimierung</>}
        </li>
        <li className='text-center bg-zinc-100 rounded-md py-2 px-4 text-zinc-700'>
          {language === 'en' && <>SEO</>}
          {language === 'cs' && <>SEO</>}
          {language === 'de' && <>SEO</>}
        </li>
        <li className='text-center bg-zinc-100 rounded-md py-2 px-4 text-zinc-700'>
          {language === 'en' && <>Mobile</>}
          {language === 'cs' && <>Mobilní</>}
          {language === 'de' && <>Mobil</>}
        </li>
        <li className='text-center bg-zinc-100 rounded-md py-2 px-4 text-zinc-700'>
          {language === 'en' && <>Newsletter</>}
          {language === 'cs' && <>Newsletter</>}
          {language === 'de' && <>Newsletter</>}
        </li>
        <li className='text-center bg-zinc-100 rounded-md py-2 px-4 text-zinc-700'>
          {language === 'en' && <>Email Form</>}
          {language === 'cs' && <>Email Formulář</>}
          {language === 'de' && <>E-Mail-Formular</>}
        </li>
        <li className='text-center bg-zinc-100 rounded-md py-2 px-4 text-zinc-700'>
          {language === 'en' && <>Multilingual</>}
          {language === 'cs' && <>Vícejazyčný</>}
          {language === 'de' && <>Mehrsprachig</>}
        </li>
        <li className='text-center bg-zinc-100 rounded-md py-2 px-4 text-zinc-700'>
          {language === 'en' && <>Interactive</>}
          {language === 'cs' && <>Interaktivní</>}
          {language === 'de' && <>Interaktiv</>}
        </li>
      </ul>

      {isLoading ? (
        <Skeleton className='w-full h-[230px] sm:h-[350px] md:h-[400px] lg:h-[540px] 2xl:h-[660px]' />
      ) : (
        <ReactCompareSlider
          itemOne={
            <ReactCompareSliderImage
              src={
                language === 'en'
                  ? '/case-studies/farma-hajek/old-web-en.webp'
                  : language === 'cs'
                  ? '/case-studies/farma-hajek/old-web-cz.webp'
                  : language === 'de'
                  ? '/case-studies/farma-hajek/old-web-en.webp'
                  : ''
              }
              srcSet={
                language === 'en'
                  ? '/case-studies/farma-hajek/old-web-en.webp'
                  : language === 'cs'
                  ? '/case-studies/farma-hajek/old-web-cz.webp'
                  : language === 'de'
                  ? '/case-studies/farma-hajek/old-web-en.webp'
                  : ''
              }
              alt='old web'
            />
          }
          itemTwo={
            <ReactCompareSliderImage
              src={
                language === 'en'
                  ? '/case-studies/farma-hajek/new-web-en.webp'
                  : language === 'cs'
                  ? '/case-studies/farma-hajek/new-web-cz.webp'
                  : language === 'de'
                  ? '/case-studies/farma-hajek/new-web-en.webp'
                  : ''
              }
              srcSet={
                language === 'en'
                  ? '/case-studies/farma-hajek/new-web-en.webp'
                  : language === 'cs'
                  ? '/case-studies/farma-hajek/new-web-cz.webp'
                  : language === 'de'
                  ? '/case-studies/farma-hajek/new-web-en.webp'
                  : ''
              }
              alt='new web'
            />
          }
          className='relative'
        />
      )}
    </div>
  )
}

export default Web
