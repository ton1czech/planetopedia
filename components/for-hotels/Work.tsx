'use client'

import Container from '../Container'
import { forHotels } from '@/database/for-hotels'
import Image from 'next/image'
import { useLanguage } from '@/store/useLanguage'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Skeleton } from '../ui/skeleton'
import { cn } from '@/lib/utils'
import { ArrowRight } from 'lucide-react'

const Work = () => {
  const { language } = useLanguage(state => state)

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(false)
  }, [])

  return (
    <div className='sticky top-0 snap-start scroll-mt-20 w-screen z-20 bg-white h-[calc(100vh-80px)]'>
      <Container className='py-10 text-white'>
        <h1 className='text-2xl md:text-3xl lg:text-4xl font-bold text-black text-center'>
          {language === 'en' && <>Who We Work With</>}
          {language === 'cs' && <>S kým spolupracujeme</>}
          {language === 'de' && <>Mit wem wir arbeiten</>}
        </h1>
        <p className='text-zinc-700 text-center max-w-[80ch] mx-auto'>
          {language === 'en' && (
            <>
              From the biggest hotel companies to brands and world-inspiring
              marketing agencies, our clients have the same thing in common: big
              challenges that require a fresh & different approach.
            </>
          )}
          {language === 'cs' && (
            <>
              Od největších hotelových společností až po značky a světově
              inspirativní marketingových agentur, mají naši klienti společné
              to, že jsou velcí velké výzvy, které vyžadují nový a odlišný
              přístup.
            </>
          )}
          {language === 'de' && (
            <>
              Von den größten Hotelunternehmen bis hin zu Marken und
              weltberühmten Marketingagenturen haben unsere Kunden eines
              gemeinsam: große Herausforderungen, die einen neuen und anderen
              Ansatz erfordern.
            </>
          )}
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

        <div className='grid lg:grid-cols-3 gap-4 mt-10'>
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

        <Link
          href='/blog/luxury-hotels'
          className='flex gap-2 items-center text-black underline text-center mx-auto w-full justify-center'
        >
          {language === 'en' && <>See all posts</>}
          {language === 'cs' && <>Zobrazit všechny příspěvky</>}
          {language === 'de' && <>Alle Beiträge anzeigen</>}
          <ArrowRight className='w-3 h-3' />
        </Link>
      </Container>
    </div>
  )
}

export default Work
