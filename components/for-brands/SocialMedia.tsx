'use client'

import Container from '../Container'
import { forBrands } from '@/database/for-brands'
import Items from './carousel/Items'
import { motion } from 'framer-motion'

const SocialMedia = () => {
  return (
    <div className='sticky top-0 snap-start scroll-mt-20 w-screen h-[calc(100vh-80px)] z-10 bg-black grid place-content-center'>
      <motion.div
        initial={{ x: 50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <Container className='h-[80vh] grid place-content-center'>
          {forBrands.map(brand => (
            <Items data={brand.socials} />
          ))}
        </Container>
      </motion.div>
    </div>
  )
}

export default SocialMedia
