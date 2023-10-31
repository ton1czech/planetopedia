'use client'

import { forBrands } from '@/database/for-brands'
import Image from 'next/image'
import React from 'react'
import Container from '../Container'
import { useLanguage } from '@/store/useLanguage'
import { motion } from 'framer-motion'

const ContentCreation = () => {
  const { language } = useLanguage(state => state)

  return (
    <div className='sticky top-0 snap-start scroll-mt-20 w-screen h-[calc(100vh-80px)] z-40 bg-white flex items-center'>
      <Container>
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className='text-black text-center max-w-[90ch] mx-auto mb-6'
        >
          {language === 'en' && (
            <>
              Because our team is spread <b>worldwide</b>, we can reach many of
              the most beautiful locations on Earth to successfully capture
              <b> your products/services </b>at its best and realize the
              <b> goal </b>you want <b> to achieve </b>as a brand.
            </>
          )}
          {language === 'cs' && (
            <>
              Because our team is spread <b>worldwide</b>, we can reach many of
              the most beautiful locations on Earth to successfully capture
              <b> your products/services </b>at its best and realize the
              <b> goal </b>you want <b> to achieve </b>as a brand.
            </>
          )}
          {language === 'de' && (
            <>
              Because our team is spread <b>worldwide</b>, we can reach many of
              the most beautiful locations on Earth to successfully capture
              <b> your products/services </b>at its best and realize the
              <b> goal </b>you want <b> to achieve </b>as a brand.
            </>
          )}
        </motion.p>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className='grid grid-cols-3 lg:grid-cols-4 gap-4'
        >
          {forBrands.map(item => (
            <>
              {item.content.map(image => (
                <Image
                  src={image}
                  alt='content creation'
                  width={600}
                  height={650}
                  className='object-cover w-full aspect-square'
                  key={image}
                />
              ))}
            </>
          ))}
        </motion.div>
      </Container>
    </div>
  )
}

export default ContentCreation
