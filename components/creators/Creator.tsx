'use client'

import { urlForImage } from '@/sanity/lib/image'
import { useLanguage } from '@/store/useLanguage'
import { Camera, Home, Instagram, Video } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '../ui/tooltip'

interface CreatorProps {
  src: any
  name: string
  instagram: string
  categories: any
  locationCz: string
  locationEn: string
  locationDe: string
  followers: number
}

const Creator = ({
  src,
  name,
  instagram,
  categories,
  locationCz,
  locationEn,
  locationDe,
  followers,
}: CreatorProps) => {
  const { language } = useLanguage(state => state)

  return (
    <Link
      href={`https://www.instagram.com/${instagram}/`}
      className='flex group bg-zinc-50 border border-zinc-600/10 shadow-xl hover:shadow-2xl transition duration-500 rounded-xl'
      target='_blank'
    >
      <div className='relative w-36 h-40 overflow-hidden transition duration-500 aspect-square group-hover:shadow-2xl rounded-tl-xl rounded-bl-xl'>
        <Image
          src={urlForImage(src).url()}
          fill
          alt={name}
          className='object-cover transition duration-500 group-hover:scale-110 rounded-tl-xl rounded-bl-xl'
        />

        <div className='absolute inset-0 grid transition duration-500 bg-transparent group-hover:bg-black/50 place-content-center'>
          <Instagram
            size={45}
            className='transition duration-500 group-hover:stroke-white stroke-transparent'
          />
        </div>
      </div>

      <div className='px-4 py-2 flex flex-col justify-between'>
        <div>
          <p className='text-sm text-zinc-700 pb-1'>@{instagram}</p>
          <p className='text-xl font-semibold'>
            {language === 'en' && <>{locationEn}</>}
            {language === 'cs' && <>{locationCz}</>}
            {language === 'de' && <>{locationDe}</>}
          </p>
          <p className='font-medium text-zinc-800'>
            {followers}{' '}
            {language === 'en'
              ? 'followers'
              : language === 'cs'
              ? 'sledujících'
              : language === 'de'
              ? 'Anhänger'
              : ''}
          </p>
        </div>
        <div className='text-sm flex gap-x-2'>
          {categories &&
            categories.map((category: any) => (
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    {category === 'Photographer' && (
                      <>
                        <Camera className='stroke-zinc-700 w-6 h-6' />
                      </>
                    )}
                    {category === 'Videographer' && (
                      <>
                        <Video className='stroke-zinc-700 w-6 h-6' />
                      </>
                    )}
                    {category === 'Hotels/Resorts' && (
                      <>
                        <Home className='stroke-zinc-700 w-6 h-6' />
                      </>
                    )}
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{category}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            ))}
        </div>
      </div>
    </Link>
  )
}

export default Creator
