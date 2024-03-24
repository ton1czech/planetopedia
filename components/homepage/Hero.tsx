'use client'

import Earth from '@/components/3d/Earth'
import Container from '@/components/Container'
import { motion } from 'framer-motion'
import { SlidingText } from './SlidingText'

const Hero = () => {
  return (
    <Container className='h-screen w-screen bg-black text-white'>
      <SlidingText />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3 }}
        className='!overflow-hidden !w-screen !h-screen'
      >
        <Earth />
      </motion.div>
      <div className='absolute top-0 left-0 z-10 w-full h-full md:pointer-events-none' />
    </Container>
  )
}

export default Hero
