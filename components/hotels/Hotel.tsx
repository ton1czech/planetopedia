'use client'

import { useLanguage } from '@/store/useLanguage'
import Image from 'next/image'
import Link from 'next/link'

interface HotelProps {
  src: any
  name: string
  locationCz: string
  locationEn: string
  minutes: number
  href: string
}

const Hotel = ({
  src,
  name,
  locationCz,
  locationEn,
  minutes,
  href,
}: HotelProps) => {
  const { language } = useLanguage(state => state)

  return (
    <Link href={`/blog/hotels/${href}`} className='group'>
      {src && (
        <div className='relative w-full mb-3 overflow-hidden transition duration-500 aspect-square group-hover:shadow-2xl'>
          <Image
            src={src}
            fill
            alt={name}
            className='object-cover transition duration-500 group-hover:scale-110'
          />
        </div>
      )}
      {language === 'en' && (
        <p className='text-center text-zinc-700'>{locationEn}</p>
      )}
      {language === 'cs' && (
        <p className='text-center text-zinc-700'>{locationCz}</p>
      )}
      <h3 className='text-xl font-medium text-center md:text-xl'>{name}</h3>
      <p className='text-sm text-center text-zinc-600'>
        {minutes}
        {language === 'en' && <> minutes read</>}
        {language === 'cs' && <> minuty čtení</>}
      </p>
    </Link>
  )
}

export default Hotel
