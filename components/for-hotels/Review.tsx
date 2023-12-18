'use client'

import { forHotels } from '@/database/for-hotels'
import Items from './carousel/Items'
import Container from '../Container'
import { useLanguage } from '@/store/useLanguage'
import { motion } from 'framer-motion'

const Review = () => {
  const { language } = useLanguage(state => state)

  return (
    <div className='sticky top-0 snap-start scroll-mt-20 w-screen z-30 bg-white grid place-content-center h-[calc(100vh-80px)]'>
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <Container className='h-[80vh] grid place-content-center'>
          <h2 className='text-2xl md:text-3xl mb-4 text-black text-center lg:mt-28 2xl:mt-0'>
            {language === 'en' && (
              <>
                <b>Maximizing</b> Your Social Media Presence
              </>
            )}
            {language === 'cs' && (
              <>
                <b>Maximalizace</b> Vaší přítomnosti na sociálních sítích
              </>
            )}
            {language === 'de' && (
              <>
                <b>Maximierung</b> Ihrer Social Media-Präsenz
              </>
            )}
          </h2>

          {forHotels.map(hotel => (
            <Items data={hotel.feedbacks} />
          ))}
        </Container>
      </motion.div>
    </div>
  )
}

export default Review
