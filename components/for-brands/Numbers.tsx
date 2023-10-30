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
    <div
      className={cn(
        'text-black text-center ring-1 ring-black/10 p-5 rounded-lg shadow-xl'
      )}
    >
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
          'font-black text-4xl lg:text-5xl xl:text-6xl text-center md:text-left'
        }
        enableScrollSpy
        scrollSpyOnce
        delay={delay}
      />
      <p className='text-xl text-center whitespace-nowrap lg:text-2xl xl:text-3xl'>
        {text}
      </p>
    </div>
  )
}

const Numbers = () => {
  const { language } = useLanguage(state => state)

  return (
    <div className='mt-6 md:mt-12'>
      <div className='grid lg:grid-cols-3 gap-4 lg:gap-8'>
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
