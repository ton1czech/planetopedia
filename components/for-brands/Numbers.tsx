'use client'

import { cn } from '@/lib/utils'
import { useLanguage } from '@/store/useLanguage'
import CountUp from 'react-countup'

interface ItemProps {
  num: number
  text: string
  millions?: boolean
  delay?: number
  zero?: boolean
  thousands?: boolean
}

const Item = ({ num, text, millions, delay, zero, thousands }: ItemProps) => {
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
        decimals={thousands ? 1 : 0}
        suffix={millions ? 'M+' : zero ? '' : thousands ? 'K' : '+'}
        className={
          'font-black text-3xl lg:text-5xl xl:text-6xl text-center md:text-left'
        }
        enableScrollSpy
        scrollSpyOnce
        delay={delay}
      />
      <p className='text-xs text-center sm:text-base lg:text-2xl xl:text-3xl'>
        {text}
      </p>
    </div>
  )
}

const Numbers = () => {
  const { language } = useLanguage(state => state)

  return (
    <div className='mt-6 md:mt-12'>
      <div className='grid grid-cols-3 gap-4 lg:gap-8'>
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
          delay={2}
        />
        <Item
          num={1.2}
          text={
            language === 'en'
              ? 'Reels Created'
              : language === 'cs'
              ? 'Vytvořených Reels'
              : language === 'de'
              ? ''
              : ''
          }
          thousands
          delay={2.3}
        />
        <Item
          num={0}
          text={
            language === 'en'
              ? 'Dissatisfied Clients'
              : language === 'cs'
              ? 'Nespokojených Klientů'
              : language === 'de'
              ? ''
              : ''
          }
          zero
          delay={2.6}
        />
      </div>
    </div>
  )
}

export default Numbers
