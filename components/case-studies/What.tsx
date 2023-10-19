'use client'

import { useLanguage } from '@/store/useLanguage'
import Container from '../Container'

interface WhatProps {
  children: React.ReactNode
}

const What = ({ children }: WhatProps) => {
  const { language } = useLanguage(state => state)

  return (
    <Container>
      <h2 className='text-2xl md:text-3xl lg:text-4xl font-semibold pt-6 md:pt-12 xl:pt-20'>
        {language === 'en' && <>What was the goal</>}
        {language === 'cs' && <>Co bylo cílem</>}
      </h2>
      {children}
    </Container>
  )
}

export default What
