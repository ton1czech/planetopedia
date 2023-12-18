'use client'

import Container from '@/components/Container'
import CzBarbora from '@/components/feedback/barbora/CzBarbora'
import EnBarbora from '@/components/feedback/barbora/EnBarbora'
import CzOndrej from '@/components/feedback/ondrej/CzOndrej'
import Testimonials from '@/components/testimonials/Testimonials'
import Videos from '@/components/testimonials/Videos'
import { reviewsBrands } from '@/database/reviews'
import { videos } from '@/database/videos'
import { useLanguage } from '@/store/useLanguage'
import { motion } from 'framer-motion'

export default function Feedback() {
  const { language } = useLanguage(state => state)

  return (
    <div className='pt-24 pb-20 bg-white md:pb-32 md:pt-32'>
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
      >
        <Container>
          <h2 className='text-2xl md:text-3xl mb-3 text-center'>
            {language === 'en' && (
              <>
                What our <b>creators </b>say
              </>
            )}
            {language === 'cs' && (
              <>
                Co říkají naši <b>tvůrci</b>
              </>
            )}
            {language === 'de' && (
              <>
                Was unsere <b>Schöpfer </b>sagen
              </>
            )}
          </h2>
          <Videos data={videos} />

          <h2 className='text-2xl md:text-3xl mt-8 md:mt-14 text-center mb-3'>
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
            {language === 'de' && (
              <>
                Was unsere <b>Kunden </b>sagen
              </>
            )}
          </h2>

          <div className='lg:hidden'>
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
            <div className='lg:grid grid-cols-2 hidden gap-8 mb-20'>
              <CzBarbora />
              <CzOndrej />
            </div>
          ) : (
            <div className='lg:grid grid-cols-2 hidden gap-8 mb-20'>
              <CzOndrej />
              <CzBarbora />
            </div>
          )}
          <Testimonials data={reviewsBrands} />
        </Container>
      </motion.div>
    </div>
  )
}
