'use client'

import { useLanguage } from '@/store/useLanguage'
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from 'react-compare-slider'

const Web = () => {
  const { language } = useLanguage(state => state)

  return (
    <div>
      <h2 className='text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold mb-2'>
        {language === 'en' && <>/ Web Development</>}
        {language === 'cs' && <>/ Tvorba Webu</>}
        {language === 'de' && <>/ Web-Entwicklung</>}
      </h2>

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

      <ul className='mt-4 md:mt-10'>
        <li>
          {language === 'en' && <>- Modern UI</>}
          {language === 'cs' && <>- Moderní UI</>}
          {language === 'de' && <>- Moderne UI</>}
        </li>
        <li>
          {language === 'en' && <>- Newest technology</>}
          {language === 'cs' && <>- Nejnovější technologie</>}
          {language === 'de' && <>- Die neueste Technologie</>}
        </li>
        <li>
          {language === 'en' && <>- Otimization</>}
          {language === 'cs' && <>- Optimalizace</>}
          {language === 'de' && <>- Otimierung</>}
        </li>
        <li>
          {language === 'en' && <>- SEO</>}
          {language === 'cs' && <>- SEO</>}
          {language === 'de' && <>- SEO</>}
        </li>
        <li>
          {language === 'en' && <>- Mobile Responsive</>}
          {language === 'cs' && <>- Responzivní na mobilních zařízení</>}
          {language === 'de' && <>- Mobil ansprechbar</>}
        </li>
        <li>
          {language === 'en' && <>- Newsletter</>}
          {language === 'cs' && <>- Newsletter</>}
          {language === 'de' && <>- Newsletter</>}
        </li>
        <li>
          {language === 'en' && <>- Email Form</>}
          {language === 'cs' && <>- Email Formulář</>}
          {language === 'de' && <>- E-Mail-Formular</>}
        </li>
        <li>
          {language === 'en' && <>- Multilingual (cz, en ,de)</>}
          {language === 'cs' && <>- Vícejazyčný (cz, en, de)</>}
          {language === 'de' && <>- Mehrsprachig (cz, en ,de)</>}
        </li>
      </ul>
    </div>
  )
}

export default Web
