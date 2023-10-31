'use client'

import Container from '../Container'
import { forBrands } from '@/database/for-brands'
import Items from './carousel/Items'
import { motion } from 'framer-motion'
import { useLanguage } from '@/store/useLanguage'

const SocialMedia = () => {
  const { language } = useLanguage(state => state)
  return (
    <div className='sticky top-0 snap-start scroll-mt-20 w-screen h-[calc(100vh-80px)] z-10 bg-black grid place-content-center mt-8'>
      <motion.div
        initial={{ x: 50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <Container className='h-[60vh] grid place-content-center'>
          <h2 className='text-2xl text-center text-white md:text-3xl mt-28 mb-4'>
            {language === 'en' && <>our impact on social media</>}
            {language === 'cs' && <>náš vliv na sociální média</>}
            {language === 'de' && <>unser Einfluss auf die sozialen Medien</>}
          </h2>

          {forBrands.map(brand => (
            <Items data={brand.socials} />
          ))}
        </Container>
      </motion.div>
    </div>
  )
}

export default SocialMedia
