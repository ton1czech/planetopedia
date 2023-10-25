'use client'

import { Skeleton } from '@/components/ui/skeleton'
import { useLanguage } from '@/store/useLanguage'
import Image from 'next/image'
import { useEffect, useState } from 'react'

interface CollaborationProps {
  logos: string[] | undefined
}

const Collaboration = ({ logos }: CollaborationProps) => {
  const { language } = useLanguage(state => state)

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(false)
  }, [])

  return (
    <div>
      <h2 className='text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold mb-2'>
        {language === 'en' && <>/ Collaboration</>}
        {language === 'cs' && <>/ Spolupráce</>}
        {language === 'de' && <>/ Zusammenarbeit</>}
      </h2>

      <div className='grid items-center justify-center w-full grid-cols-3 gap-14 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6'>
        {logos?.map(logo => (
          <div key={logo} className='grid place-content-center'>
            {isLoading ? (
              <Skeleton className='aspect-square w-[65px] sm:w-[112px] md:w-[128px]' />
            ) : (
              <Image
                src={logo}
                alt={logo}
                width={100}
                height={50}
                className='w-full'
              />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Collaboration
