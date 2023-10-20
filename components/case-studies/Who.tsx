'use client'

import { useLanguage } from '@/store/useLanguage'
import Container from '../Container'
import { caseStudies } from '@/database/case-studies'

interface WhoProps {
  bodyCz: string
  bodyEn: string
}

const Who = ({ bodyCz, bodyEn }: WhoProps) => {
  const { language } = useLanguage(state => state)
  const { title } = caseStudies[0]

  return (
    <Container>
      <h2 className='text-2xl md:text-3xl lg:text-4xl font-semibold pt-6 md:pt-12 xl:pt-20'>
        {language === 'en' && <>Who is {title}</>}
        {language === 'cs' && <>Kdo je {title}</>}
      </h2>
      {language === 'en' && <p>{bodyEn}</p>}
      {language === 'cs' && <p>{bodyCz}</p>}
    </Container>
  )
}

export default Who
