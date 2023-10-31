'use client'

import { useLanguage } from '@/store/useLanguage'
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from 'react-compare-slider'
import { motion } from 'framer-motion'

const Web = () => {
  const { language } = useLanguage(state => state)

  return (
    <div>
      <motion.h2
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        className='text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold mb-2'
      >
        {language === 'en' && <>/ Web Development</>}
        {language === 'cs' && <>/ Tvorba Webu</>}
        {language === 'de' && <>/ Web-Entwicklung</>}
      </motion.h2>

      <motion.ul
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        className='mb-4 md:mb-10 grid grid-cols-2 lg:grid-cols-4 gap-4'
      >
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
      </motion.ul>

      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
      >
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
      </motion.div>
    </div>
  )
}

export default Web
