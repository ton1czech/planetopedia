'use client'

import { useLanguage } from '@/store/useLanguage'
import Container from '../Container'
import { motion } from 'framer-motion'

interface WhatProps {
  bodyCz: string
  bodyEn: string
  bodyDe: string
}

const What = ({ bodyCz, bodyEn, bodyDe }: WhatProps) => {
  const { language } = useLanguage(state => state)

  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
    >
      <Container>
        <h2 className='text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold pt-6 md:pt-12 xl:pt-20 mb-2'>
          {language === 'en' && <>What was the goal</>}
          {language === 'cs' && <>Co bylo cílem</>}
          {language === 'de' && <>Was war das Ziel?</>}
        </h2>
        <p className='text-justify'>
          {language === 'en' && <>{bodyEn}</>}
          {language === 'cs' && <>{bodyCz}</>}
          {language === 'de' && <>{bodyDe}</>}
        </p>
      </Container>
    </motion.div>
  )
}

export default What
