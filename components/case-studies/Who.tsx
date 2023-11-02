'use client'

import { useLanguage } from '@/store/useLanguage'
import Container from '../Container'
import { motion } from 'framer-motion'

interface WhoProps {
  bodyEn: string
  bodyCz: string
  bodyDe: string
  title: string
}

const Who = ({ bodyCz, bodyEn, bodyDe, title }: WhoProps) => {
  const { language } = useLanguage(state => state)

  return (
    <Container>
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
      >
        <h2 className='text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold pt-6 md:pt-12 xl:pt-20 mb-2'>
          {language === 'en' && <>Who is {title}</>}
          {language === 'cs' && <>Kdo je {title}</>}
          {language === 'de' && <>Wer ist {title}</>}
        </h2>
        <p className='text-justify'>
          {language === 'en' && <>{bodyEn}</>}
          {language === 'cs' && <>{bodyCz}</>}
          {language === 'de' && <>{bodyDe}</>}
        </p>
      </motion.div>
    </Container>
  )
}

export default Who
