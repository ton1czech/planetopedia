'use client'

import CountUp from 'react-countup'
import Container from '../Container'

interface ItemProps {
  num: number
  text: string
  millions?: boolean
  delay?: number
}

const Item = ({ num, text, millions, delay }: ItemProps) => {
  return (
    <div className='p-4 text-center text-white border rounded-md border-white/10 bg-gradient-to-br from-zinc-200/10 to-white/10'>
      <CountUp
        start={0}
        end={num}
        duration={2.75}
        useEasing={true}
        useGrouping={true}
        separator=' '
        decimal=','
        suffix={millions ? 'M+' : '+'}
        className='text-4xl font-bold md:text-5xl'
        enableScrollSpy
        scrollSpyOnce
        scrollSpyDelay={delay}
      />
      <p className='text-sm text-gold'>{text}</p>
    </div>
  )
}

const About = () => {
  return (
    <Container className='grid gap-6 pb-20 md:pt-10 lg:grid-cols-3'>
      <Item num={10} text='Instagram followers' millions delay={500} />
      <Item num={250} text='creators around the world' delay={800} />
      <Item
        num={40}
        text='Accounts reached in the last 30 days'
        millions
        delay={1100}
      />
    </Container>
  )
}

export default About
