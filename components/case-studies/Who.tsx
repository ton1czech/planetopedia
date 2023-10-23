'use client'

import { useLanguage } from '@/store/useLanguage'
import Container from '../Container'

interface WhoProps {
  bodyCz: string
  bodyEn: string
  bodyDe: string
  title: string
}

const Who = ({ bodyCz, bodyEn, bodyDe, title }: WhoProps) => {
  const { language } = useLanguage(state => state)

  return (
    <Container>
      <h2 className='text-2xl md:text-3xl lg:text-4xl font-semibold pt-6 md:pt-12 xl:pt-20'>
        {language === 'en' && <>Who is {title}</>}
        {language === 'cs' && <>Kdo je {title}</>}
        {language === 'de' && <>Wer ist {title}</>}
      </h2>
      {language === 'en' && <p>{bodyEn}</p>}
      {language === 'cs' && <p>{bodyCz}</p>}
      {language === 'de' && <p>{bodyDe}</p>}
    </Container>
  )
}

export default Who
