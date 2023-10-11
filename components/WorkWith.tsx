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
  {
    src: '/logos/anantara.webp',
    label: '',
  },
  {
    src: '/logos/bayerischerhof.webp',
    label: '',
  },
  {
    src: '/logos/charleshotel.webp',
    label: '',
  },
  {
    src: '/logos/corinthia.webp',
    label: '',
  },
  {
    src: '/logos/cretamaris.webp',
    label: '',
  },
  {
    src: '/logos/delpintor.webp',
    label: '',
  },
  {
    src: '/logos/docomunich.webp',
    label: '',
  },
  {
    src: '/logos/doldergrand.webp',
    label: '',
  },
  {
    src: '/logos/eurostarsmadrid.webp',
    label: '',
  },
  {
    src: '/logos/fuschl.webp',
    label: '',
  },
  {
    src: '/logos/granhotelsoller.webp',
    label: '',
  },
  {
    src: '/logos/ilpalagio.webp',
    label: '',
  },
  {
    src: '/logos/latelier.webp',
    label: '',
  },
  {
    src: '/logos/lenarcisse.webp',
    label: '',
  },
  {
    src: '/logos/matildpalace.webp',
    label: '',
  },
  {
    src: '/logos/middleeight.webp',
    label: '',
  },
  {
    src: '/logos/minocpalace.webp',
    label: '',
  },
  {
    src: '/logos/panpacific.webp',
    label: '',
  },
  {
    src: '/logos/pontroyal.webp',
    label: '',
  },
  {
    src: '/logos/sofiterl.webp',
    label: '',
  },
  {
    src: '/logos/sunborn.webp',
    label: '',
  },
  {
    src: '/logos/thelandmark.webp',
    label: '',
  },
  {
    src: '/logos/topazlamee.webp',
    label: '',
  },
  {
    src: '/logos/sheratongrand.webp',
    label: '',
  },
  {
    src: '/logos/seaside.webp',
    label: '',
  },
  {
    src: '/logos/qctermeroma.webp',
    label: '',
  },
  {
    src: '/logos/secretdeparis.webp',
    label: '',
  },
  {
    src: '/logos/sixsenses.webp',
    label: '',
  },
]

const czlogos = [
  {
    src: '/logos/farmahajek.webp',
    label: '',
  },
  {
    src: '/logos/grundstein.webp',
    label: '',
  },
  {
    src: '/logos/colorzeman.webp',
    label: '',
  },
  {
    src: '/logos/lumicoffee.webp',
    label: '',
  },
  {
    src: '/logos/niceface.webp',
    label: '',
  },
  {
    src: '/logos/homehpstav.webp',
    label: '',
  },
  {
    src: '/logos/rozmluvse.webp',
    label: '',
  },
]

interface WorkWithProps {
  isCompanyPage?: boolean
}

const WorkWith = ({ isCompanyPage }: WorkWithProps) => {
  const { language } = useLanguage(state => state)

  return (
    <div>
      {isCompanyPage ? (
        <div className='mb-12 flex flex-col gap-5 max-w-3xl mx-auto text-justify'>
          <h2 className='mb-2 text-xl font-thin md:text-2xl lg:text-3xl text-zinc-600'>
            {language === 'en' && <>Who we work with</>}
            {language === 'cs' && <>S kým spolupracujeme</>}
          </h2>
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
      ) : (
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
                  inspirativní marketingových agentur, mají naši klienti
                  společné to, že jsou velcí velké výzvy, které vyžadují nový a
                  odlišný přístup.
                </>
              )}
            </p>
          </div>
        </div>
      )}

      <div className='grid items-center justify-center w-full grid-cols-3 gap-14 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6'>
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

      <div className='mt-10 mb-8 md:mt-20'>
        <div className='w-full h-px bg-zinc-400' />
        <p className='mt-2 text-lg md:text-xl text-zinc-600'>
          {language === 'en' ? (
            <>Clients in the Czech republic</>
          ) : (
            <>Klienti v České republice</>
          )}
        </p>
      </div>

      <div className='grid items-center justify-center w-full grid-cols-3 gap-14 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6'>
        {czlogos.map(({ src, label }) => (
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
