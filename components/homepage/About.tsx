'use client'

import CountUp from 'react-countup'
import { motion } from 'framer-motion'
import { useLanguage } from '@/store/useLanguage'

interface ItemProps {
  num: number
  text: string
  millions?: boolean
  delay?: number
}

const Item = ({ num, text, millions, delay }: ItemProps) => {
  return (
    <div className='text-white rounded-md'>
      <CountUp
        start={0}
        end={num}
        duration={2.75}
        useEasing={true}
        useGrouping={true}
        separator=' '
        decimal=','
        suffix={millions ? 'M+' : '+'}
        className='relative text-2xl font-bold md:text-3xl before:absolute before:-left-5 before:top-0 before:w-px before:h-full before:bg-yellow-600/40'
        enableScrollSpy
        scrollSpyOnce
        delay={delay}
      />
      <p className='text-gold whitespace-nowrap'>{text}</p>
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
      className='grid gap-12 pb-10 md:pt-10 lg:grid-cols-3 absolute left-1/2 -bottom-60 lg:bottom-4 translate-x-[-50%] z-10'
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
        text={language === 'en' ? 'Creators Worldwide' : 'Celosvětových Tvůrců'}
        delay={2.6}
      />
    </motion.div>
  )
}

export default About
