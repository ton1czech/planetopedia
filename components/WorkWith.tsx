'use client'

import { logosCZ, logosEN } from '@/database/logos'
import { cn } from '@/lib/utils'
import { useLanguage } from '@/store/useLanguage'
import Image from 'next/image'
import { motion } from 'framer-motion'

interface WorkWithProps {
  isCompanyPage?: boolean
}

const WorkWith = ({ isCompanyPage }: WorkWithProps) => {
  const { language } = useLanguage(state => state)

  return (
    <div>
      {isCompanyPage ? (
        <div className='mb-12 flex flex-col gap-5 max-w-3xl mx-auto text-justify'>
          <motion.h2
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            className='mb-2 text-xl font-thin md:text-2xl lg:text-3xl text-zinc-600'
          >
            {language === 'en' && <>Who we work with</>}
            {language === 'cs' && <>S kým spolupracujeme</>}
            {language === 'de' && <>Mit wem wir arbeiten</>}
          </motion.h2>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            className='text-2xl font-semibold text-justify md:text-3xl lg:text-4xl'
          >
            {language === 'en' && (
              <>We are here for people who want to stay connected.</>
            )}
            {language === 'cs' && (
              <>Jsme zde pro lidi, kteří chtějí zůstat ve spojení</>
            )}
            {language === 'de' && (
              <>Wir sind für Menschen da, die in Verbindung bleiben wollen.</>
            )}
          </motion.p>
          <motion.p
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            className='text-lg'
          >
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
                inspirativní marketingové agentury, naši klienti mají společné
                jedno: velké výzvy, které vyžadují nový a odlišný přístup.
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
          </motion.p>
        </div>
      ) : (
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          className='mb-12'
        >
          <h2 className='mb-2 text-xl font-thin md:text-2xl lg:text-3xl text-zinc-600'>
            {language === 'en' && <>Who we work with</>}
            {language === 'cs' && <>S kým spolupracujeme</>}
            {language === 'de' && <>Mit wem wir arbeiten</>}
          </h2>
          <div className='grid gap-6 md:grid-cols-2 md:gap-12'>
            <p className='text-2xl font-semibold text-justify md:text-3xl lg:text-4xl'>
              {language === 'en' && (
                <>We are here for people who want to stay connected.</>
              )}
              {language === 'cs' && (
                <>Jsme zde pro lidi, kteří chtějí zůstat ve spojení</>
              )}
              {language === 'de' && (
                <>Wir sind für Menschen da, die in Verbindung bleiben wollen.</>
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
                  inspirativní marketingové agentury, naši klienti mají společné
                  jedno: velké výzvy, které vyžadují nový a odlišný přístup.
                </>
              )}
              {language === 'de' && (
                <>
                  Von den größten Hotelunternehmen bis hin zu Marken und
                  weltberühmten Marketingagenturen haben unsere Kunden eines
                  gemeinsam: große Herausforderungen, die einen neuen und
                  anderen Ansatz erfordern.
                </>
              )}
            </p>
          </div>
        </motion.div>
      )}

      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
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
      </motion.div>

      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        className={cn(
          'mt-10 mb-8 md:mt-20',
          isCompanyPage && 'max-w-3xl mx-auto'
        )}
      >
        <div className='w-full h-px bg-zinc-400' />
        <p className='mt-2 text-lg md:text-xl text-zinc-600'>
          {language === 'en' && <>Clients in the Czech republic</>}
          {language === 'cs' && <>Klienti v České republice</>}
          {language === 'de' && <>Kunden in der Tschechischen Republik</>}
        </p>
      </motion.div>

      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
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
      </motion.div>
    </div>
  )
}

export default WorkWith
