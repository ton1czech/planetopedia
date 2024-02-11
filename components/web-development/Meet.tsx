'use client'

import { useLanguage } from '@/store/useLanguage'
import Container from '../Container'
import { motion } from 'framer-motion'

export const Meet = () => {
  const { language } = useLanguage()

  return (
    <section className='mb-20 md:mb-40'>
      <Container>
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className='mb-4 text-xl font-semibold md:text-3xl lg:text-4xl'
        >
          {language === 'en' && <>Meet your team</>}
          {language === 'cs' && <>Seznamte se se svým týmem</>}
        </motion.h2>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className='flex flex-col gap-4'
        >
          <div className='grid grid-cols-[1fr_3fr] gap-4'>
            <img
              src='/team/daniel-anthony-baudys.webp'
              alt='Daniel Anthony Baudyš'
            />
            <div>
              <p className='text-xl font-semibold'>Daniel Anthony Baudyš</p>
              <p className='text-zinc-700'>developer</p>
            </div>
          </div>
          <div className='grid grid-cols-[1fr_3fr] gap-4'>
            <img src='/team/dominik-grossl.webp' alt='Dominik Grossl' />
            <div>
              <p className='text-xl font-semibold'>Dominik Grössl</p>
              <p className='text-zinc-700'>project manager</p>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
