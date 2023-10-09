'use client'

import CountUp from 'react-countup'
import { motion } from 'framer-motion'
import { useLanguage } from '@/store/useLanguage'
import { cn } from '@/lib/utils'

interface ItemProps {
  num: number
  text: string
  millions?: boolean
  delay?: number
  margin?: boolean
}

const Item = ({ num, text, millions, delay, margin }: ItemProps) => {
  return (
    <div
      className={cn(
        'text-white rounded-md'
        // margin && 'ml-0 lg:ml-6 xl:ml-7'
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
          'relative font-bold sm:text-2xl md:text-3xl before:absolute before:-left-5 before:top-0 before:w-px before:h-full before:bg-yellow-600/40'
        }
        enableScrollSpy
        scrollSpyOnce
        delay={delay}
      />
      <p className='text-[9px] sm:text-sm md:text-base text-gold whitespace-nowrap'>
        {text}
      </p>
    </div>
  )
}

const About = () => {
  const { language } = useLanguage(state => state)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.8, duration: 0.5 }}
      className='absolute flex ml-2 -translate-x-1/2 rounded-sm gap-9 md:gap-12 lg:gap-16 left-1/2 bottom-14 bg-black/70 lg:bg-transparent'
    >
      <Item
        num={45}
        text={language === 'en' ? 'Notable Clients' : 'Významných Klientů'}
        delay={2}
      />
      <Item
        num={10}
        text={
          language === 'en'
            ? 'Instagram Followers'
            : 'Sledujících na Instagramu'
        }
        millions
        delay={2.3}
      />
      <Item
        num={250}
        text={language === 'en' ? 'Creators Worldwide' : 'Tvůrců Celosvětově'}
        delay={2.6}
        margin
      />
    </motion.div>
  )
}

export default About
