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
          {language === 'en' && <>Meet your developer</>}
          {language === 'cs' && <>Seznamte se se svým vývojářem</>}
        </motion.h2>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className='grid gap-6 md:grid-cols-2'
        >
          <img
            src='/team/daniel-anthony-baudys.webp'
            alt='Daniel Anthony Baudyš'
          />
        </motion.div>
      </Container>
    </section>
  )
}
