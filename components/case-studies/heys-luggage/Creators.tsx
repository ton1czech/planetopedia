'use client'

import { Skeleton } from '@/components/ui/skeleton'
import { useLanguage } from '@/store/useLanguage'
import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'
const Map = dynamic(
  () => import('@/components/case-studies/heys-luggage/Map'),
  { ssr: false }
)

const Creators = () => {
  const { language } = useLanguage(state => state)

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(false)
  }, [])

  return (
    <div>
      <h2 className='text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold mb-2'>
        {language === 'en' && <>/ Creators</>}
        {language === 'cs' && <>/ Tvůrci</>}
        {language === 'de' && <>/ Schöpfer</>}
      </h2>

      {isLoading ? (
        <Skeleton className='w-full h-[300px] md:h-[500px]' />
      ) : (
        <Map />
      )}
    </div>
  )
}

export default Creators
