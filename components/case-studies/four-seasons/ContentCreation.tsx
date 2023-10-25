'use client'

import { useLanguage } from '@/store/useLanguage'
import Items from './carousel/Items'

interface ContentCreation {
  content: { src: string; thumbnail: string }[] | undefined
}

const ContentCreation = ({ content }: ContentCreation) => {
  const { language } = useLanguage(state => state)

  return (
    <div>
      <h2 className='text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold mb-2'>
        {language === 'en' && <>/ Content Creation</>}
        {language === 'cs' && <>/ Tvorba Obsahu</>}
        {language === 'de' && <>/ Erstellung von Inhalten</>}
      </h2>

      <Items data={content!} />
    </div>
  )
}

export default ContentCreation
