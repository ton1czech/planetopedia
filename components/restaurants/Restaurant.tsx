'use client'

import { useLanguage } from '@/store/useLanguage'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Skeleton } from '../ui/skeleton'

interface RestaurantProps {
  restaurant: any
}

const Restaurant = ({ restaurant }: RestaurantProps) => {
  const { language } = useLanguage(state => state)

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(false)
  }, [])

  return (
    <Link
      href={`/blog/restaurants/${restaurant.slug.current}`}
      className='group'
    >
      {restaurant.image && (
        <div className='relative w-full mb-3 overflow-hidden transition duration-500 aspect-square group-hover:shadow-2xl'>
          {isLoading ? (
            <Skeleton className='aspect-square w-[320px] sm:w-[600px] md:w-[345px] lg:w-[470px]' />
          ) : (
            <Image
              src={restaurant.image}
              fill
              alt={restaurant.name}
              className='object-cover transition duration-500 group-hover:scale-110'
            />
          )}
        </div>
      )}
      {language === 'en' && (
        <p className='text-center text-zinc-700'>{restaurant.location_en}</p>
      )}
      {language === 'cs' && (
        <p className='text-center text-zinc-700'>{restaurant.location_cz}</p>
      )}
      {language === 'de' && (
        <p className='text-center text-zinc-700'>{restaurant.location_de}</p>
      )}
      <h3 className='text-lg font-medium text-center md:text-xl'>
        {restaurant.name}
      </h3>
      <p className='text-sm text-center text-zinc-600'>
        {restaurant.minutes}
        {language === 'en' && <> Minutes read</>}
        {language === 'cs' && <> Minuty čtení</>}
        {language === 'de' && <> Minuten gelesen</>}
      </p>
    </Link>
  )
}

export default Restaurant
