'use client'

import { useLanguage } from '@/store/useLanguage'
import Container from '../Container'
import Cz from './videos/Cz'
import En from './videos/En'

const Feedback = () => {
  const { language } = useLanguage(state => state)

  return (
    <div className='sticky top-0 snap-start scroll-mt-20 w-screen h-[90vh] z-20 bg-white flex items-center'>
      <Container>
        <h2 className='text-2xl text-center text-black md:text-3xl mt-20 mb-8'>
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

        <div className='grid place-content-center lg:hidden'>
          {language === 'cs' ? (
            <>
              <Cz />
            </>
          ) : (
            <>
              <En />
            </>
          )}
        </div>

        <div className='lg:grid grid-cols-2 hidden'>
          <Cz />
          <En />
        </div>
      </Container>
    </div>
  )
}

export default Feedback
