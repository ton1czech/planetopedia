'use client'

import { useLanguage } from '@/store/useLanguage'
import Cz from './videos/Cz'
import En from './videos/En'

const Review = () => {
  const { language } = useLanguage(state => state)

  return (
    <div>
      <h2 className='text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold mb-2'>
        {language === 'en' && <>/ Review</>}
        {language === 'cs' && <>/ Hodnocení</>}
        {language === 'de' && <>/ Überprüfung</>}
      </h2>
      <div className='flex justify-center items-center'>
        <>
          {language === 'cs' ? (
            <>
              <Cz />
            </>
          ) : (
            <>
              <En />
            </>
          )}
        </>
      </div>
    </div>
  )
}

export default Review
