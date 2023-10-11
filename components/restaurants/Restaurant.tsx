'use client'

import { useLanguage } from '@/store/useLanguage'
import Image from 'next/image'
import Link from 'next/link'

interface RestaurantProps {
  restaurant: any
}

const Restaurant = ({ restaurant }: RestaurantProps) => {
  const { language } = useLanguage(state => state)

  return (
    <Link href={`/blog/restaurants/${restaurant.href}`} className='group'>
      {restaurant.image && (
        <div className='relative w-full mb-3 overflow-hidden transition duration-500 aspect-square group-hover:shadow-2xl'>
          <Image
            src={restaurant.image}
            fill
            alt={restaurant.name}
            className='object-cover transition duration-500 group-hover:scale-110'
          />
        </div>
      )}
      {language === 'en' && (
        <p className='text-center text-zinc-700'>{restaurant.location_en}</p>
      )}
      {language === 'cs' && (
        <p className='text-center text-zinc-700'>{restaurant.location_cz}</p>
      )}
      <h3 className='text-lg font-medium text-center md:text-xl'>
        {restaurant.name}
      </h3>
      <p className='text-sm text-center text-zinc-600'>
        {restaurant.minutes}
        {language === 'en' && <> minutes read</>}
        {language === 'cs' && <> minuty čtení</>}
      </p>
    </Link>
  )
}

export default Restaurant
