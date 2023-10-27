'use client'

import { Skeleton } from '@/components/ui/skeleton'
import { cn } from '@/lib/utils'
import { useLanguage } from '@/store/useLanguage'
import Image from 'next/image'
import { useEffect, useState } from 'react'

interface ContentCreation {
  images: string[] | undefined
  rotate?: boolean
}

const ContentCreation = ({ images, rotate }: ContentCreation) => {
  const { language } = useLanguage(state => state)

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(false)
  }, [])

  return (
    <div>
      <h2 className='text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold mb-2'>
        {language === 'en' && <>/ Content Creation</>}
        {language === 'cs' && <>/ Tvorba Obsahu</>}
        {language === 'de' && <>/ Erstellung von Inhalten</>}
      </h2>

      <div className='grid md:grid-cols-2 gap-4'>
        {images?.map(image => (
          <>
            {isLoading ? (
              <Skeleton className='w-full aspect-square' />
            ) : (
              <Image
                src={image}
                alt='content creation'
                width={650}
                height={650}
                className={cn(
                  'aspect-square object-cover w-full',
                  rotate && '-rotate-90'
                )}
              />
            )}
          </>
        ))}
      </div>
    </div>
  )
}

export default ContentCreation
