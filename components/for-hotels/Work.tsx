'use client'

import Container from '../Container'
import { forHotels } from '@/database/for-hotels'
import Image from 'next/image'
import { useLanguage } from '@/store/useLanguage'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Skeleton } from '../ui/skeleton'
import { cn } from '@/lib/utils'

const Work = () => {
  const { language } = useLanguage(state => state)

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(false)
  }, [])

  return (
    <div className='sticky top-0 snap-start scroll-mt-20 w-screen h-[90vh] z-20 bg-white'>
      <Container className='py-10 text-white'>
        <h1 className='text-2xl md:text-3xl lg:text-4xl font-bold text-black text-center'>
          Who We Work With
        </h1>
        <p className='text-zinc-700 text-center max-w-[80ch] mx-auto'>
          From the biggest hotel companies to brands and world-inspiring
          marketing agencies, our clients have the same thing in common: big
          challenges that require a fresh & different approach.
        </p>

        {forHotels.map(hotels => (
          <div className='grid items-center justify-center w-full grid-cols-3 gap-14 lg:grid-cols-6 mt-10'>
            {hotels.logos.map(hotel => (
              <div
                className={cn(
                  'grid place-content-center',
                  hotel.noPhone && 'hidden md:grid'
                )}
              >
                <Image
                  src={hotel.src}
                  alt='hotel'
                  width={100}
                  height={50}
                  className='w-full'
                />
              </div>
            ))}
          </div>
        ))}

        <div className='grid lg:grid-cols-3 gap-4 mt-10 lg:mt-20'>
          {forHotels.map(hotel => (
            <>
              {hotel.posts?.map(post => (
                <Link
                  href={post.slug}
                  className={cn('group', post.noPhone && 'hidden md:block')}
                >
                  {post.src && (
                    <div className='relative w-full mb-3 overflow-hidden transition duration-500 aspect-video md:aspect-square group-hover:shadow-2xl'>
                      {isLoading ? (
                        <Skeleton className='aspect-square w-[320px] sm:w-[600px] md:w-[345px] lg:w-[470px]' />
                      ) : (
                        <Image
                          src={post.src}
                          fill
                          alt={post.title}
                          className='object-cover transition duration-500 group-hover:scale-110'
                        />
                      )}
                    </div>
                  )}
                  {language === 'en' && (
                    <p className='text-center text-zinc-700'>
                      {post.locationEn}
                    </p>
                  )}
                  {language === 'cs' && (
                    <p className='text-center text-zinc-700'>
                      {post.locationCz}
                    </p>
                  )}
                  {language === 'de' && (
                    <p className='text-center text-zinc-700'>
                      {post.locationDe}
                    </p>
                  )}
                  <h3 className='text-xl font-medium text-center md:text-xl text-black'>
                    {post.title}
                  </h3>
                </Link>
              ))}
            </>
          ))}
        </div>
      </Container>
    </div>
  )
}

export default Work
