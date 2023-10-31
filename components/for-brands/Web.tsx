'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const srcs = [
  '/services/for-brands/web/1.webp',
  '/services/for-brands/web/2.webp',
]

const Web = () => {
  const [src, setSrc] = useState<string>(srcs[0])
  const [index, setIndex] = useState<number>(0)

  useEffect(() => {
    const interval = setInterval(() => {
      const nextImageIndex = (index + 1) % srcs.length
      setIndex(nextImageIndex)
      setSrc(srcs[nextImageIndex])
    }, 3000)

    return () => clearInterval(interval)
  }, [index, srcs])

  return (
    <div className='sticky top-0 snap-start scroll-mt-20 w-screen z-[60] bg-white h-[calc(100vh-80px)] grid place-content-center'>
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <Image src={src} alt='website' width={1200} height={700} />
      </motion.div>
    </div>
  )
}

export default Web
