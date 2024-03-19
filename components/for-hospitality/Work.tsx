'use client'

import Container from '../Container'
import { forHotels } from '@/database/for-hotels'
import Image from 'next/image'
import { useLanguage } from '@/store/useLanguage'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

const Work = () => {
  const { language } = useLanguage(state => state)

  return (
    <div className='sticky top-0 snap-start scroll-mt-20 w-screen z-20 bg-white h-[calc(100vh-80px)]'>
      <Container className='grid place-content-center h-full'>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          className='mb-12'
        >
          <h2 className='mb-2 text-xl font-semibold md:text-2xl lg:text-3xl text-black'>
            {language === 'en' && <>Who we work with</>}
            {language === 'cs' && <>S kým spolupracujeme</>}
            {language === 'de' && <>Mit wem wir arbeiten</>}
          </h2>
          <p className='text-2xl text-justify md:text-3xl lg:text-4xl font-thin text-zinc-700'>
            {language === 'en' && (
              <>
                From the biggest hotel chains to companies and dynamic marketing
                agencies, our clients have the same thing in common: they face
                substantial challenges demanding innovative and distinctive
                solutions.
              </>
            )}
            {language === 'cs' && (
              <>
                Od největších hotelových řetězců po firmy a dynamické
                marketingové agentury mají naši klienti společné jedno: čelí
                zásadním výzvám vyžadující inovativní a osobitá řešení.
              </>
            )}
            {language === 'de' && (
              <>
                Von den größten Hotelketten bis hin zu Unternehmen und
                dynamischen Marketingagenturen haben unsere Kunden eines
                gemeinsam: Sie stehen vor grundlegenden Herausforderungen, die
                innovative und unverwechselbare Lösungen erfordern.
              </>
            )}
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          className='grid grid-cols-3 gap-14 md:grid-cols-4 xl:grid-cols-5'
        >
          {forHotels[0].logos.map(({ src, noPhone }) => (
            <div key={src} className='grid place-content-center'>
              <Image
                src={src}
                alt='logo'
                width={100}
                height={50}
                className={cn('w-full', noPhone && 'hidden')}
              />
            </div>
          ))}
        </motion.div>
      </Container>
    </div>
  )
}

export default Work
