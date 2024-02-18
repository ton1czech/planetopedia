'use client'

import { useLanguage } from '@/store/useLanguage'
import Container from '../Container'
import CzOndrej from '../feedback/ondrej/CzOndrej'
import EnBarbora from '../feedback/barbora/EnBarbora'
import CzBarbora from '../feedback/barbora/CzBarbora'
import { motion } from 'framer-motion'

export const Feedback = () => {
  const { language } = useLanguage()

  return (
    <Container className='mb-20 md:mb-40'>
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className='mb-4 text-xl font-bold md:text-3xl lg:text-4xl'
      >
        {language === 'en' && (
          <>
            What our <b>clients </b>say
          </>
        )}
        {language === 'cs' && (
          <>
            Co říkají naši <b>klienti</b>
          </>
        )}
      </motion.h2>

      <div className='mb-10 lg:hidden'>
        {language === 'cs' ? (
          <>
            <CzOndrej />
          </>
        ) : (
          <>
            <EnBarbora />
          </>
        )}
      </div>

      {language === 'cs' ? (
        <div className='justify-center hidden gap-20 mb-16 lg:flex'>
          <CzBarbora />
          <CzOndrej />
        </div>
      ) : (
        <div className='justify-center hidden gap-20 mb-16 lg:flex'>
          <CzOndrej />
          <EnBarbora />
        </div>
      )}
    </Container>
  )
}
