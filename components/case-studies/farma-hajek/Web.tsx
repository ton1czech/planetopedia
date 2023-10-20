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
      <h2 className='text-lg md:text-xl mb-4 md:mb-10'>
        {language === 'en' && <>~ Web Development</>}
        {language === 'cs' && <>~ Tvorba Webu</>}
      </h2>

      <ReactCompareSlider
        itemOne={
          <ReactCompareSliderImage
            src={
              language === 'en'
                ? '/case-studies/farma-hajek/old-web-en.webp'
                : '/case-studies/farma-hajek/old-web-cz.webp'
            }
            srcSet={
              language === 'en'
                ? '/case-studies/farma-hajek/old-web-en.webp'
                : '/case-studies/farma-hajek/old-web-cz.webp'
            }
            alt='old web'
          />
        }
        itemTwo={
          <ReactCompareSliderImage
            src={
              language === 'en'
                ? '/case-studies/farma-hajek/new-web-en.webp'
                : '/case-studies/farma-hajek/new-web-cz.webp'
            }
            srcSet={
              language === 'en'
                ? '/case-studies/farma-hajek/new-web-en.webp'
                : '/case-studies/farma-hajek/new-web-cz.webp'
            }
            alt='new web'
          />
        }
        className='relative'
      />

      <ul className='mt-4 md:mt-10'>
        <li>{language === 'en' ? <>- Modern UI</> : <>- Moderní UI</>}</li>
        <li>
          {language === 'en' ? (
            <>- Newest technology</>
          ) : (
            <>- Nejnovější technologie</>
          )}
        </li>
        <li>{language === 'en' ? <>- Otimization</> : <>- Optimalizace</>}</li>
        <li>{language === 'en' ? <>- SEO</> : <>- SEO</>}</li>
        <li>
          {language === 'en' ? (
            <>- Mobile Responsive</>
          ) : (
            <>- Responzivní na mobilních zařízení</>
          )}
        </li>
        <li>{language === 'en' ? <>- Newsletter</> : <>- Newsletter</>}</li>
        <li>{language === 'en' ? <>- Email Form</> : <>- Email Formulář</>}</li>
        <li>{language === 'en' ? <>- EmailForm</> : <>- Email Formulář</>}</li>
        <li>
          {language === 'en' ? (
            <>- Multilingual (cz, en ,de)</>
          ) : (
            <>- Vícejazyčný (cz, en, de)</>
          )}
        </li>
      </ul>
    </div>
  )
}

export default Web
