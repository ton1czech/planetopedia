'use client'

import { useLanguage } from '@/store/useLanguage'
import Container from '../Container'

interface WhatProps {
  bodyCz: string
  bodyEn: string
  bodyDe: string
}

const What = ({ bodyCz, bodyEn, bodyDe }: WhatProps) => {
  const { language } = useLanguage(state => state)

  return (
    <Container>
      <h2 className='text-2xl md:text-3xl lg:text-4xl font-semibold pt-6 md:pt-12 xl:pt-20'>
        {language === 'en' && <>What was the goal</>}
        {language === 'cs' && <>Co bylo cílem</>}
        {language === 'de' && <>Was war das Ziel?</>}
      </h2>
      {language === 'en' && <p>{bodyEn}</p>}
      {language === 'cs' && <p>{bodyCz}</p>}
      {language === 'de' && <p>{bodyDe}</p>}
    </Container>
  )
}

export default What
