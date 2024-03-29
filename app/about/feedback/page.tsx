'use client'

import Container from '@/components/Container'
import CzBarbora from '@/components/feedback/barbora/CzBarbora'
import EnBarbora from '@/components/feedback/barbora/EnBarbora'
import CzOndrej from '@/components/feedback/ondrej/CzOndrej'
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
          {/* <h2 className='text-2xl md:text-3xl mb-3 text-center'>
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
          <Videos data={videos} /> */}

          <h2 className='text-2xl md:text-3xl text-center mb-8'>
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

          <div className='lg:hidden mb-10'>
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
            <div className='lg:flex justify-center hidden gap-20 mb-16'>
              <CzBarbora />
              <CzOndrej />
            </div>
          ) : (
            <div className='lg:flex justify-center hidden gap-20 mb-16'>
              <CzOndrej />
              <EnBarbora />
            </div>
          )}

          {/* <Testimonials data={reviewsBrands} /> */}
        </Container>
      </motion.div>
    </div>
  )
}
