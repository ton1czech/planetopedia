'use client'

import { useLanguage } from '@/store/useLanguage'
import Container from '../Container'
import { caseStudies } from '@/database/case-studies'

interface ResultsProps {
  children: React.ReactNode
}

const Results = ({ children }: ResultsProps) => {
  const { language } = useLanguage(state => state)
  const { title } = caseStudies[0]

  return (
    <Container>
      <h2 className='text-2xl md:text-3xl lg:text-4xl font-semibold pt-6 md:pt-12 xl:pt-20'>
        {language === 'en' && <>Results</>}
        {language === 'cs' && <>Výsledky</>}
      </h2>
      {children}
    </Container>
  )
}

export default Results
