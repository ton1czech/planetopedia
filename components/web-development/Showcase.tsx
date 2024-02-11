'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useLanguage } from '@/store/useLanguage'

const srcs = [
  '/services/for-brands/web/1.webp',
  '/services/for-brands/web/2.webp',
  '/services/for-brands/web/3.webp',
]

export const Showcase = () => {
  const { language } = useLanguage()

  const [src, setSrc] = useState<string>(srcs[0])
  const [index, setIndex] = useState<number>(0)

  useEffect(() => {
    const interval = setInterval(() => {
      const nextImageIndex = (index + 1) % srcs.length
      setIndex(nextImageIndex)
      setSrc(srcs[nextImageIndex])
    }, 5000)

    return () => clearInterval(interval)
  }, [index, srcs])

  return (
    <section>
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className='mb-4 text-xl font-semibold text-center md:text-3xl'
      >
        {language === 'en' && (
          <>
            Check out the projects <br className='md:hidden' /> we've worked on
          </>
        )}
        {language === 'cz' && (
          <>
            Podívejte se na projekty, <br className='md:hidden' /> na kterých
            jsme pracovali
          </>
        )}
      </motion.h2>
      <motion.img
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        src={src}
        alt='website'
        width={1100}
        height={650}
        className='mx-auto mb-20 md:mb-40'
      />
    </section>
  )
}
