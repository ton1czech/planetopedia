'use client'

import { useLanguage } from '@/store/useLanguage'
import Items from './carousel/Items'

interface MarketingProps {
  content: { src: string; thumbnail: string }[] | undefined
}

const Marketing = ({ content }: MarketingProps) => {
  const { language } = useLanguage(state => state)

  return (
    <div>
      <h2 className='text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold mb-2'>
        {language === 'en' && <>/ Marketing</>}
        {language === 'cs' && <>/ Marketing</>}
        {language === 'de' && <>/ Marketing</>}
      </h2>

      <Items data={content!} />
    </div>
  )
}

export default Marketing
