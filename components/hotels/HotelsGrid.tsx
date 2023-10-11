'use client'

import Container from '../Container'
import Hotel from './Hotel'

interface HotelsGridProps {
  hotels: any
}

const HotelsGrid = ({ hotels }: HotelsGridProps) => {
  return (
    <div className='pt-24 pb-20 bg-white md:pt-32 md:pb-32'>
      <div className='max-w-5xl mx-auto'>
        <Container className='grid w-full gap-6 md:grid-cols-2 md:gap-12'>
          {hotels.map((hotel: any) => (
            <Hotel hotel={hotel} />
          ))}
        </Container>
      </div>
    </div>
  )
}

export default HotelsGrid
