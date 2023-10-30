'use client'

import { forBrands } from '@/database/for-brands'
import Image from 'next/image'
import React from 'react'
import Container from '../Container'

const ContentCreation = () => {
  return (
    <div className='sticky top-0 snap-start scroll-mt-20 w-screen h-[90vh] z-20 bg-black flex items-center'>
      <Container>
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
