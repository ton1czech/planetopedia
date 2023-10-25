'use client'

import { useLanguage } from '@/store/useLanguage'
import Container from '../Container'

interface WhoProps {
  bodyEn: string
  bodyCz: string
  bodyDe: string
  title: string
  boldEn?: string
  boldCz?: string
  boldDe?: string
}

const Who = ({
  bodyCz,
  bodyEn,
  bodyDe,
  title,
  boldCz,
  boldDe,
  boldEn,
}: WhoProps) => {
  const { language } = useLanguage(state => state)

  return (
    <Container>
      <h2 className='text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold pt-6 md:pt-12 xl:pt-20 mb-2'>
        {language === 'en' && <>Who is {title}</>}
        {language === 'cs' && <>Kdo je {title}</>}
        {language === 'de' && <>Wer ist {title}</>}
      </h2>
      <h5 className='font-bold text-lg'>
        {language === 'en' && <>{boldEn}</>}
        {language === 'cs' && <>{boldCz}</>}
        {language === 'de' && <>{boldDe}</>}
      </h5>
      <p className='text-justify'>
        {language === 'en' && <>{bodyEn}</>}
        {language === 'cs' && <>{bodyCz}</>}
        {language === 'de' && <>{bodyDe}</>}
      </p>
    </Container>
  )
}

export default Who
