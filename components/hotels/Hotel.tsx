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
      <div className='relative w-full overflow-hidden aspect-square rounded-3xl group-hover:shadow-2xl'>
        <Image
          src={src}
          fill
          alt={name}
          className='object-cover transition duration-500 rounded-3xl group-hover:scale-110'
        />
      </div>
      <h3 className='mt-2 text-xl font-bold text-center md:text-2xl'>{name}</h3>
      {language === 'en' && (
        <p className='text-center text-zinc-700'>{locationEn}</p>
      )}
      {language === 'cs' && (
        <p className='text-center text-zinc-700'>{locationCz}</p>
      )}
      <p className='text-sm text-center text-zinc-600'>
        {minutes} minutes read
      </p>
    </Link>
  )
}

export default Hotel
