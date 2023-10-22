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
      className='grid grid-cols-2 group bg-zinc-50 border border-zinc-600/10 shadow-xl hover:shadow-2xl transition duration-500 rounded-xl'
      target='_blank'
    >
      <div className='relative w-full overflow-hidden transition duration-500 aspect-square group-hover:shadow-2xl rounded-tl-xl rounded-bl-xl'>
        <Image
          src={urlForImage(src).url()}
          fill
          alt={name}
          className='object-cover transition duration-500 group-hover:scale-110 rounded-tl-xl rounded-bl-xl'
        />
        <div className='absolute bottom-0 left-1/2 -translate-x-1/2'>
          <h3 className='text-lg font-semibold'>@{instagram}</h3>
        </div>

        <div className='absolute inset-0 grid transition duration-500 bg-transparent group-hover:bg-black/50 place-content-center'>
          <Instagram
            size={45}
            className='transition duration-500 group-hover:stroke-white stroke-transparent'
          />
        </div>
      </div>

      <div className='grid grid-rows-2 justify-center p-1 text-center'>
        <div>
          <p className='text-sm'>
            {language === 'en' ? <>{locationEn}</> : <>{locationCz}</>}
          </p>
          <p className='font-medium'>{followers} followers</p>
        </div>
        <div className='text-sm'>
          {categories.map((category: any) => (
            <p>{category}</p>
          ))}
        </div>
      </div>
    </Link>
  )
}

export default Creator
