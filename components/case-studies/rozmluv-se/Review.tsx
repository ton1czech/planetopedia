'use client'

import { useEffect, useState } from 'react'
import { useLanguage } from '@/store/useLanguage'
import { Skeleton } from '@/components/ui/skeleton'
import Cz from './videos/Cz'
import En from './videos/En'

const Review = () => {
  const { language } = useLanguage(state => state)

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(false)
  }, [])

  return (
    <div>
      <h2 className='text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold mb-2'>
        {language === 'en' && <>/ Review</>}
        {language === 'cs' && <>/ Hodnocení</>}
        {language === 'de' && <>/ Überprüfung</>}
      </h2>
      <div className='flex justify-center items-center'>
        {isLoading ? (
          <Skeleton className='!h-[370px] sm:!h-[580px] md:!h-[750px]' />
        ) : (
          <>
            {language === 'cs' ? (
              <>
                <Cz />
              </>
            ) : (
              <>
                <En />
              </>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default Review
