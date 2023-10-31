'use client'

import { useLanguage } from '@/store/useLanguage'
import dynamic from 'next/dynamic'
const Map = dynamic(
  () => import('@/components/case-studies/heys-luggage/Map'),
  { ssr: false }
)

const Creators = () => {
  const { language } = useLanguage(state => state)

  return (
    <div>
      <h2 className='text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold mb-2'>
        {language === 'en' && <>/ Creators</>}
        {language === 'cs' && <>/ Tvůrci</>}
        {language === 'de' && <>/ Schöpfer</>}
      </h2>

      <Map />
    </div>
  )
}

export default Creators
