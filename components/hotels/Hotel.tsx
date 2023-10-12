'use client'

import { urlForImage } from '@/sanity/lib/image'
import { useLanguage } from '@/store/useLanguage'
import Image from 'next/image'
import Link from 'next/link'

interface HotelProps {
  hotel: any
}

const Hotel = ({ hotel }: HotelProps) => {
  const { language } = useLanguage(state => state)

  return (
    <Link href={`/blog/hotels/${hotel.slug}`} className='group'>
      {hotel.image && (
        <div className='relative w-full mb-3 overflow-hidden transition duration-500 aspect-square group-hover:shadow-2xl'>
          <Image
            src={urlForImage(hotel.image).url()}
            fill
            alt={hotel.name}
            className='object-cover transition duration-500 group-hover:scale-110'
          />
        </div>
      )}
      {language === 'en' && (
        <p className='text-center text-zinc-700'>{hotel.location_en}</p>
      )}
      {language === 'cs' && (
        <p className='text-center text-zinc-700'>{hotel.location_cz}</p>
      )}
      <h3 className='text-xl font-medium text-center md:text-xl'>
        {hotel.name}
      </h3>
      <p className='text-sm text-center text-zinc-600'>
        {hotel.minutes}
        {language === 'en' && <> minutes read</>}
        {language === 'cs' && <> minuty čtení</>}
      </p>
    </Link>
  )
}

export default Hotel
