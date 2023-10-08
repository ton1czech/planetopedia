'use client'

import { useLanguage } from '@/store/useLanguage'
import Image from 'next/image'

const logos = [
  {
    src: '/logos/fourseasons.webp',
    label: 'Four Seasons',
  },
  {
    src: '/logos/jumeirah.webp',
    label: 'Jumeirah',
  },
  {
    src: '/logos/shangrila.webp',
    label: 'Shangri-la',
  },
  {
    src: '/logos/sheraton.webp',
    label: 'Sheraton',
  },
  {
    src: '/logos/theluxurycollection.webp',
    label: 'The luxury collection',
  },
  {
    src: '/logos/ritzcarlton.webp',
    label: 'Ritz Carlton',
  },
  {
    src: '/logos/dji.webp',
    label: 'DJI',
  },
  {
    src: '/logos/samsonite.webp',
    label: 'Samsonite',
  },
  {
    src: '/logos/sony.webp',
    label: 'Sony',
  },
  {
    src: '/logos/vans.webp',
    label: 'Vans',
  },
]

const WorkWith = () => {
  const { language } = useLanguage(state => state)

  return (
    <div>
      <div className='mb-12'>
        <h2 className='mb-2 text-xl font-thin md:text-2xl lg:text-3xl text-zinc-600'>
          {language === 'en' && <>Who we work with</>}
          {language === 'cs' && <>S kým spolupracujeme</>}
        </h2>
        <div className='grid gap-6 md:grid-cols-2 md:gap-12'>
          <p className='text-2xl font-semibold text-justify md:text-3xl lg:text-4xl'>
            {language === 'en' && (
              <>We are here for people who want to stay connected.</>
            )}
            {language === 'cs' && (
              <>Jsme zde pro lidi, kteří chtějí zůstat ve spojení</>
            )}
          </p>
          <p className='text-lg'>
            {language === 'en' && (
              <>
                From the biggest hotel companies to brands and world-inspiring
                marketing agencies, our clients have the same thing in common:
                big challenges that require a fresh & different approach.
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
          </p>
        </div>
      </div>

      <div className='grid items-center justify-center w-full grid-cols-2 gap-14 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6'>
        {logos.map(({ src, label }) => (
          <div className='grid place-content-center'>
            <Image
              src={src}
              alt={label}
              width={100}
              height={50}
              className='w-full'
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default WorkWith
