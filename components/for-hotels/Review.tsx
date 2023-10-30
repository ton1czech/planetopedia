'use client'

import { forHotels } from '@/database/for-hotels'
import Items from './carousel/Items'
import Container from '../Container'
import { useLanguage } from '@/store/useLanguage'

const Review = () => {
  const { language } = useLanguage(state => state)

  return (
    <div className='sticky top-0 snap-start scroll-mt-20 w-screen z-30 bg-white grid place-content-center h-[calc(100vh-80px)]'>
      <Container className='h-[80vh] grid place-content-center'>
        <h2 className='text-2xl md:text-3xl mt-28 text-black text-center'>
          {language === 'en' && (
            <>
              <b>Maximizing</b> Your Social Media Presence
            </>
          )}
          {language === 'cs' && (
            <>
              <b>Maximalizace</b> vaší přítomnosti na sociálních sítích
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
    </div>
  )
}

export default Review
