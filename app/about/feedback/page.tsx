'use client'

import Container from '@/components/Container'
import Testimonials from '@/components/testimonials/Testimonials'
import Videos from '@/components/testimonials/Videos'
import { reviewsCreators, reviewsBrands } from '@/database/reviews'
import { videos } from '@/database/videos'
import { useLanguage } from '@/store/useLanguage'

export default function Feedback() {
  const { language } = useLanguage(state => state)

  return (
    <div className='pt-24 pb-20 bg-white md:pb-32 md:pt-32'>
      <Container>
        <Videos data={videos} />

        <h2 className='text-2xl md:text-3xl mb-3 mt-8 md:mt-14'>
          {language === 'en' ? (
            <>
              What our <b>creators </b>say
            </>
          ) : (
            <>
              Co říkají naši <b>tvůrci</b>
            </>
          )}
        </h2>
        <Testimonials data={reviewsCreators} />

        <h2 className='text-2xl md:text-3xl mb-3 mt-8 md:mt-14'>
          {language === 'en' ? (
            <>
              What our <b>clients </b>say
            </>
          ) : (
            <>
              Co říkají naši <b>klienti</b>
            </>
          )}
        </h2>
        <Testimonials data={reviewsBrands} />
      </Container>
    </div>
  )
}
