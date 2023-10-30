'use client'

import Container from '../Container'
import Image from 'next/image'
import { useLanguage } from '@/store/useLanguage'
import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'
import { forBrands } from '@/database/for-brands'
import Numbers from './Numbers'

const Work = () => {
  const { language } = useLanguage(state => state)

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(false)
  }, [])

  return (
    <div className='sticky top-0 snap-start scroll-mt-20 w-screen h-[90vh] z-20 bg-white'>
      <Container className='py-10 text-white'>
        <h1 className='text-2xl font-bold text-center text-black md:text-3xl lg:text-4xl mb-5'>
          Who We Work With
        </h1>
        <p className='text-zinc-700 text-center max-w-[80ch] mx-auto'>
          From the biggest hotel companies to brands and world-inspiring
          marketing agencies, our clients have the same thing in common: big
          challenges that require a fresh & different approach.
        </p>

        {forBrands.map(brands => (
          <div className='grid items-center justify-center w-full grid-cols-3 mt-10 gap-14 lg:grid-cols-6'>
            {brands.logos.map(brand => (
              <div
                className={cn(
                  'grid place-content-center',
                  brand.noPhone && 'hidden md:grid'
                )}
              >
                <Image
                  src={brand.src}
                  alt='hotel'
                  width={100}
                  height={50}
                  className='w-full'
                />
              </div>
            ))}
          </div>
        ))}

        <h1 className='text-2xl font-bold text-center text-black md:text-3xl lg:text-4xl mb-5 mt-16 md:mt-28'>
          Our social media impact
        </h1>
        <p className='text-zinc-700 text-center max-w-[80ch] mx-auto'>
          Planetopedia specializes in creating branded content and launching
          social media campaigns. To do so, our team uses eye-catching
          techniques, which resonate with our clients and your readers.
        </p>
        <Numbers />
      </Container>
    </div>
  )
}

export default Work
