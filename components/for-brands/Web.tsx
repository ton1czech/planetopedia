'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const Web = () => {
  return (
    <div className='sticky top-0 snap-start scroll-mt-20 w-screen z-[60] bg-white h-[calc(100vh-80px)] grid place-content-center'>
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <Image
          src='/case-studies/farma-hajek/new-web-en.webp'
          alt='website'
          width={1300}
          height={750}
        />
      </motion.div>
    </div>
  )
}

export default Web
