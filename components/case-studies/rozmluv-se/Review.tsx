'use client'

import { useLanguage } from '@/store/useLanguage'
import Cz from './videos/Cz'
import En from './videos/En'
import { motion } from 'framer-motion'

const Review = () => {
  const { language } = useLanguage(state => state)

  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
    >
      <h2 className='text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold mb-2'>
        {language === 'en' && <>/ Review</>}
        {language === 'cs' && <>/ Hodnocení</>}
        {language === 'de' && <>/ Überprüfung</>}
      </h2>
      <div className='flex justify-center items-center'>
        <>
          {language === 'cs' ? (
            <>
              <Cz />
            </>
          ) : (
            <>
              <En />
            </>
          )}
        </>
      </div>
    </motion.div>
  )
}

export default Review
