'use client'

import { useLanguage } from '@/store/useLanguage'
import Image from 'next/image'
import Link from 'next/link'

interface RestaurantProps {
  src: any
  name: string
  locationCz: string
  locationEn: string
  minutes: number
  href: string
}

const Restaurant = ({
  src,
  name,
  locationCz,
  locationEn,
  minutes,
  href,
}: RestaurantProps) => {
  const { language } = useLanguage(state => state)

  return (
    <Link href={`/blog/restaurants/${href}`} className='group font-cantarell'>
      <div className='relative w-full mb-3 overflow-hidden transition duration-500 aspect-square group-hover:shadow-2xl'>
        <Image
          src={src}
          fill
          alt={name}
          className='object-cover transition duration-500 group-hover:scale-110'
        />
      </div>
      {language === 'en' && (
        <p className='text-center text-zinc-700'>{locationEn}</p>
      )}
      {language === 'cs' && (
        <p className='text-center text-zinc-700'>{locationCz}</p>
      )}
      <h3 className='text-lg font-medium text-center md:text-xl'>{name}</h3>
      <p className='text-sm text-center text-zinc-600'>
        {minutes}
        {language === 'en' && <> minutes read</>}
        {language === 'cs' && <> minuty čtení</>}
      </p>
    </Link>
  )
}

export default Restaurant
