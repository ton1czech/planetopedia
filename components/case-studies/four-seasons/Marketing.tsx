'use client'

import { useLanguage } from '@/store/useLanguage'
import Items from './carousel/Items'
import { motion } from 'framer-motion'

interface MarketingProps {
  content: { src: string; thumbnail: string }[] | undefined
}

const Marketing = ({ content }: MarketingProps) => {
  const { language } = useLanguage(state => state)

  return (
    <div>
      <motion.h2
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        className='text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold mb-2'
      >
        {language === 'en' && <>/ Marketing</>}
        {language === 'cs' && <>/ Marketing</>}
        {language === 'de' && <>/ Marketing</>}
      </motion.h2>

      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
      >
        <Items data={content!} />
      </motion.div>
    </div>
  )
}

export default Marketing
