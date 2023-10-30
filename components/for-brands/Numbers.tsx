'use client'

import { cn } from '@/lib/utils'
import { useLanguage } from '@/store/useLanguage'
import CountUp from 'react-countup'

interface ItemProps {
  num: number
  text: string
  millions?: boolean
  delay?: number
}

const Item = ({ num, text, millions, delay }: ItemProps) => {
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
        suffix={millions ? 'M+' : '+'}
        className={
          'font-bold text-4xl lg:text-5xl xl:text-6xl text-center md:text-left'
        }
        enableScrollSpy
        scrollSpyOnce
        delay={delay}
      />
      <p className='text-2xl text-center whitespace-nowrap lg:text-3xl xl:text-4xl md:text-left'>
        {text}
      </p>
    </div>
  )
}

const Numbers = () => {
  const { language } = useLanguage(state => state)

  return (
    <div>
      <h2 className='mt-20 mb-2 text-lg font-semibold md:mt-36 md:text-xl lg:text-2xl xl:text-3xl'>
        {language === 'en' && <>/ In the last 30 days</>}
        {language === 'cs' && <>/ Za posledních 30 dní</>}
        {language === 'de' && <>/ Für die letzten 30 Tage</>}
      </h2>

      <div className='flex flex-col items-center gap-2 md:flex-row md:gap-8 md:justify-between'>
        <Item
          num={45}
          text={
            language === 'en'
              ? 'Notable Clients'
              : language === 'cs'
              ? 'Významných Klientů'
              : language === 'de'
              ? 'Bemerkenswerte Kunden'
              : ''
          }
          delay={0.2}
        />
        <Item
          num={10}
          text={
            language === 'en'
              ? 'Instagram Followers'
              : language === 'cs'
              ? 'Sledujících na Instagramu'
              : language === 'de'
              ? 'Instagram Follower'
              : ''
          }
          millions
          delay={0.6}
        />
        <Item
          num={200}
          text={
            language === 'en'
              ? 'Creators Worldwide'
              : language === 'cs'
              ? 'Tvůrců Celosvětově'
              : language === 'de'
              ? 'Schöpfer weltweit'
              : ''
          }
          delay={0.4}
        />
      </div>
    </div>
  )
}

export default Numbers
