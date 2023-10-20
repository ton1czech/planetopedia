'use client'

import { useLanguage } from '@/store/useLanguage'

const Web = () => {
  const { language } = useLanguage(state => state)

  return (
    <div>
      <h2 className='text-lg md:text-xl'>
        {language === 'en' && <>~ Web Development</>}
        {language === 'cs' && <>~ Tvorba Webu</>}
      </h2>
    </div>
  )
}

export default Web
