import React from 'react'
import Container from '../Container'
import { forBrands } from '@/database/for-brands'
import Items from './carousel/Items'

const SocialMedia = () => {
  return (
    <div className='sticky top-0 snap-start scroll-mt-20 w-screen h-[calc(100vh-80px)] z-20 bg-black flex items-center'>
      <Container className='h-[80vh] grid place-content-center'>
        {forBrands.map(brand => (
          <Items data={brand.socials} />
        ))}
      </Container>
    </div>
  )
}

export default SocialMedia
