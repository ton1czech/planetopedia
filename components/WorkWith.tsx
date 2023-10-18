'use client'

import { logosCZ, logosEN } from '@/database/logos'
import { cn } from '@/lib/utils'
import { useLanguage } from '@/store/useLanguage'
import Image from 'next/image'

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

      <div
        className={cn(
          'grid items-center justify-center w-full grid-cols-3 gap-14 md:grid-cols-4 lg:grid-cols-4',
          !isCompanyPage && 'xl:grid-cols-5 2xl:grid-cols-6',
          isCompanyPage && 'max-w-3xl mx-auto'
        )}
      >
        {logosEN.map(({ src, label }) => (
          <div key={src} className='grid place-content-center'>
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

      <div
        className={cn(
          'mt-10 mb-8 md:mt-20',
          isCompanyPage && 'max-w-3xl mx-auto'
        )}
      >
        <div className='w-full h-px bg-zinc-400' />
        <p className='mt-2 text-lg md:text-xl text-zinc-600'>
          {language === 'en' ? (
            <>Clients in the Czech republic</>
          ) : (
            <>Klienti v České republice</>
          )}
        </p>
      </div>

      <div
        className={cn(
          'grid items-center justify-center w-full grid-cols-3 gap-14 md:grid-cols-4 lg:grid-cols-4',
          !isCompanyPage && 'xl:grid-cols-5 2xl:grid-cols-6',
          isCompanyPage && 'max-w-3xl mx-auto'
        )}
      >
        {logosCZ.map(({ src, label }) => (
          <div key={src} className='grid place-content-center'>
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
