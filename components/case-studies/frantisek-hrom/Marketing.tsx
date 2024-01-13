'use client'

import { cn } from '@/lib/utils'
import { useLanguage } from '@/store/useLanguage'
import CountUp from 'react-countup'
import { motion } from 'framer-motion'

interface ItemProps {
  num: number
  text: string
  delay?: number
}

const Item = ({ num, text, delay }: ItemProps) => {
  return (
    <div className={cn('text-black flex flex-col justify-center')}>
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
      <p className='text-2xl text-center whitespace-nowrap lg:text-3xl xl:text-4xl md:text-left'>
        {text}
      </p>
    </div>
  )
}

const Marketing = () => {
  const { language } = useLanguage(state => state)

  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
    >
      <h2 className='mb-2 text-lg font-semibold md:text-xl lg:text-2xl xl:text-3xl'>
        {language === 'en' && <>/ In the last 30 days</>}
        {language === 'cs' && <>/ Za posledních 30 dní</>}
        {language === 'de' && <>/ Für die letzten 30 Tage</>}
      </h2>

      <div className='flex flex-col items-center gap-2 md:flex-row md:gap-8 md:justify-between'>
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
    </motion.div>
  )
}

export default Marketing
