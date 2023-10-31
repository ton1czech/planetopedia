'use client'

import { useLanguage } from '@/store/useLanguage'
import dynamic from 'next/dynamic'
const Map = dynamic(
  () => import('@/components/case-studies/heys-luggage/Map'),
  { ssr: false }
)
import { motion } from 'framer-motion'

const Creators = () => {
  const { language } = useLanguage(state => state)

  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
    >
      <h2 className='text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold mb-2'>
        {language === 'en' && <>/ Creators</>}
        {language === 'cs' && <>/ Tvůrci</>}
        {language === 'de' && <>/ Schöpfer</>}
      </h2>

      <Map />
    </motion.div>
  )
}

export default Creators
