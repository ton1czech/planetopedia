'use client'

import CountUp from 'react-countup'

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
        className='text-2xl font-bold md:text-3xl before:absolute relative before:-left-5 before:top-0 before:w-px before:h-full before:bg-yellow-600/40'
        enableScrollSpy
        scrollSpyOnce
        scrollSpyDelay={delay}
      />
      <p className='text-gold whitespace-nowrap'>{text}</p>
    </div>
  )
}

const About = () => {
  return (
    <div className='grid gap-6 pb-10 md:pt-10 lg:grid-cols-4 absolute left-1/2 translate-x-[-50%]'>
      <Item num={45} text='Happy clients' delay={700} />
      <Item num={10} text='Instagram followers' millions delay={500} />
      <Item num={250} text='creators around the world' delay={800} />
      <Item
        num={40}
        text='Accounts reached in the last 30 days'
        millions
        delay={1100}
      />
    </div>
  )
}

export default About
