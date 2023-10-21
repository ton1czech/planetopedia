'use client'

import { urlForImage } from '@/sanity/lib/image'
import { useLanguage } from '@/store/useLanguage'
import { Instagram } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

interface CreatorProps {
  src: any
  name: string
  instagram: string
  categories: any
  code: string
  locationCz: string
  locationEn: string
  followers: number
}

const Creator = ({
  src,
  name,
  instagram,
  categories,
  code,
  locationCz,
  locationEn,
  followers,
}: CreatorProps) => {
  const { language } = useLanguage(state => state)

  console.log(categories[0])

  return (
    <Link
      href={`https://www.instagram.com/${instagram}/`}
      className='grid grid-cols-2 group bg-zinc-100'
      target='_blank'
    >
      <div className='relative w-full overflow-hidden transition duration-500 aspect-square group-hover:shadow-2xl'>
        <Image
          src={urlForImage(src).url()}
          fill
          alt={name}
          className='object-cover transition duration-500 group-hover:scale-110'
        />

        <div className='absolute inset-0 grid transition duration-500 bg-transparent group-hover:bg-black/50 place-content-center'>
          <Instagram
            size={45}
            className='transition duration-500 group-hover:stroke-white stroke-transparent'
          />
        </div>
      </div>

      <div className='flex flex-col justify-between p-1'>
        <div>
          <h3 className='text-lg font-semibold'>@{instagram}</h3>
          <p>{language === 'en' ? <>{locationEn}</> : <>{locationCz}</>}</p>
          <p>{followers} followers</p>
        </div>
        <div className='text-sm'>
          {categories.map((category: any) => (
            <p>- {category}</p>
          ))}
        </div>
      </div>
    </Link>
  )
}

export default Creator
