'use client'

import { useLanguage } from '@/store/useLanguage'
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from 'react-compare-slider'

const BrandBuilding = () => {
  const { language } = useLanguage(state => state)

  return (
    <div>
      <h2 className='text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold mb-2'>
        {language === 'en' && <>/ From 0 to 100,000 in a month</>}
        {language === 'cs' && <>/ Z 0 na 100.000 za měsíc</>}
        {language === 'de' && <>/ Von 0 bis 100.000 pro Monat</>}
      </h2>

      <ReactCompareSlider
        itemOne={
          <ReactCompareSliderImage
            src='/case-studies/frantisek-hrom/slider-1.webp'
            srcSet='/case-studies/frantisek-hrom/slider-1.webp'
            alt='frantisek civil'
            className='max-h-[400px] md:max-h-[600px] lg:max-h-[800px] !object-top'
          />
        }
        itemTwo={
          <ReactCompareSliderImage
            src='/case-studies/frantisek-hrom/slider-2.webp'
            srcSet='/case-studies/frantisek-hrom/slider-2.webp'
            alt='frantisek influencer'
            className='max-h-[400px] md:max-h-[600px] lg:max-h-[800px] !object-top'
          />
        }
        className='relative'
      />
    </div>
  )
}

export default BrandBuilding
