'use client'

import { useLanguage } from '@/store/useLanguage'

const ContentCreation = () => {
  const { language } = useLanguage(state => state)

  return (
    <div>
      <h2 className='text-lg md:text-xl'>
        {language === 'en' && <>~ Content Creation</>}
        {language === 'cs' && <>~ Tvorba Obsahu</>}
        {language === 'de' && <>~ Erstellung von Inhalten</>}
      </h2>
    </div>
  )
}

export default ContentCreation
