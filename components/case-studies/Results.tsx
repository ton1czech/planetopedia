'use client'

import { useLanguage } from '@/store/useLanguage'
import Container from '../Container'

interface ResultsProps {
  children: React.ReactNode
}

const Results = ({ children }: ResultsProps) => {
  const { language } = useLanguage(state => state)

  return (
    <Container>
      <h2 className='text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold pt-6 md:pt-12 xl:pt-20 mb-2'>
        {language === 'en' && <>Results</>}
        {language === 'cs' && <>Výsledky</>}
        {language === 'de' && <>Ergebnisse</>}
      </h2>
      <div className='flex flex-col gap-6 md:gap-12 xl:gap-20'>{children}</div>
    </Container>
  )
}

export default Results
