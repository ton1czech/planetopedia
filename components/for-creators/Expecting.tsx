'use client'

import { videos } from '@/database/videos'
import Container from '../Container'
import Videos from '../testimonials/Videos'
import { useLanguage } from '@/store/useLanguage'

const Expecting = () => {
  const { language } = useLanguage(state => state)

  return (
    <div className='sticky top-0 snap-start scroll-mt-20 w-screen h-[90vh] z-10 bg-white'>
      <Container className='grid place-content-center h-[80vh]'>
        <h2 className='text-2xl text-center text-black md:text-3xl mt-36'>
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
      </Container>
    </div>
  )
}

export default Expecting
