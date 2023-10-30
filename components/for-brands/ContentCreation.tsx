'use client'

import { forBrands } from '@/database/for-brands'
import Image from 'next/image'
import React from 'react'
import Container from '../Container'
import { useLanguage } from '@/store/useLanguage'

const ContentCreation = () => {
  const { language } = useLanguage(state => state)

  return (
    <div className='sticky top-0 snap-start scroll-mt-20 w-screen h-[calc(100vh-80px)] z-20 bg-black flex items-center'>
      <Container>
        <p className='text-white text-center max-w-[80ch] mx-auto mb-6'>
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
        </p>
        <div className='grid grid-cols-4 gap-4'>
          {forBrands.map(item => (
            <>
              {item.content.map(image => (
                <Image
                  src={image}
                  alt='content creation'
                  width={600}
                  height={650}
                  className='object-cover w-full aspect-square'
                />
              ))}
            </>
          ))}
        </div>
      </Container>
    </div>
  )
}

export default ContentCreation
