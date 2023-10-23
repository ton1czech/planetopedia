'use client'

import { cn } from '@/lib/utils'
import { useLanguage } from '@/store/useLanguage'
import CountUp from 'react-countup'

interface ItemProps {
  num: number
  text: string
  delay?: number
}

const Item = ({ num, text, delay }: ItemProps) => {
  return (
    <div className={cn('text-black')}>
      <CountUp
        start={0}
        end={num}
        duration={2.75}
        useEasing={true}
        useGrouping={true}
        separator=' '
        decimal=','
        className={
          'font-bold text-4xl lg:text-5xl xl:text-6xl text-center md:text-left'
        }
        enableScrollSpy
        scrollSpyOnce
        delay={delay}
      />
      <p className='whitespace-nowrap text-2xl lg:text-3xl xl:text-4xl text-center md:text-left'>
        {text}
      </p>
    </div>
  )
}

const Marketing = () => {
  const { language } = useLanguage(state => state)

  return (
    <div>
      <h2 className='text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold mb-4 md:mb-10'>
        {language === 'en' && <>/ From 0 to 100,000 in a month</>}
        {language === 'cs' && <>/ Z 0 na 100.000 za měsíc</>}
        {language === 'de' && <>/ Von 0 bis 100.000 pro Monat</>}
      </h2>

      <div className='flex flex-col md:flex-row  items-center gap-2 md:gap-8 md:justify-between'>
        <Item
          num={400000}
          text={
            language === 'en'
              ? 'Followers'
              : language === 'cs'
              ? 'Sledujících'
              : language === 'de'
              ? 'Follower'
              : ''
          }
          delay={2}
        />
        <Item
          num={5200000}
          text={
            language === 'en'
              ? 'Impressions'
              : language === 'cs'
              ? 'Impresí'
              : language === 'de'
              ? 'Eindrücke'
              : ''
          }
          delay={2}
        />
        <Item
          num={65000}
          text={
            language === 'en'
              ? 'Profile Visits'
              : language === 'cs'
              ? 'Návštěvy profilu'
              : language === 'de'
              ? 'Profil Besuche'
              : ''
          }
          delay={2}
        />
      </div>
    </div>
  )
}

export default Marketing
