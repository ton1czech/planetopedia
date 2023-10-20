'use client'

import { useLanguage } from '@/store/useLanguage'

const Events = () => {
  const { language } = useLanguage(state => state)

  return (
    <div>
      <h2 className='text-lg md:text-xl'>
        {language === 'en' && <>~ Events</>}
        {language === 'cs' && <>~ Akce</>}
      </h2>
    </div>
  )
}

export default Events
