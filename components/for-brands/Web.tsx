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
    <div className='sticky top-0 snap-start scroll-mt-20 w-screen z-20 bg-white h-[calc(100vh-80px)] grid place-content-center'>
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
