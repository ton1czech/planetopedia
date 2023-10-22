'use client'

import Container from '@/components/Container'
import Testimonials from '@/components/testimonials/Testimonials'
import Videos from '@/components/testimonials/Videos'
import { reviewsBrands } from '@/database/reviews'
import { videos } from '@/database/videos'
import { useLanguage } from '@/store/useLanguage'

export default function Feedback() {
  const { language } = useLanguage(state => state)

  return (
    <div className='pt-24 pb-20 bg-white md:pb-32 md:pt-32'>
      <Container>
        <h2 className='text-2xl md:text-3xl mb-3'>
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
              {' '}
              Was unsere <b>Schöpfer </b>sagen
            </>
          )}
        </h2>
        <Videos data={videos} />

        <h2 className='text-2xl md:text-3xl mb-4 md:mb-8 lg:mb-10 mt-8 md:mt-14'>
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
        <Testimonials data={reviewsBrands} />
      </Container>
    </div>
  )
}
