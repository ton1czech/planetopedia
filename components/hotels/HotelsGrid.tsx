'use client'

import { AnimatePresence } from 'framer-motion'
import { urlForImage } from '@/sanity/lib/image'
import Container from '../Container'
import Hotel from './Hotel'

interface HotelsGridProps {
  hotels: any
}

const HotelsGrid = ({ hotels }: HotelsGridProps) => {
  return (
    <div className='pt-24 pb-20 bg-white md:pt-32 md:pb-32'>
      <Container className='grid gap-6 md:grid-cols-2 lg:grid-cols-3 md:gap-12'>
        {hotels.map((hotel: any) => (
          <Hotel
            name={hotel.name}
            locationCz={hotel.location_cz}
            locationEn={hotel.location_en}
            minutes={hotel.minutes}
            src={urlForImage(hotel.image).url()}
            href={hotel.slug.current}
          />
        ))}
      </Container>
    </div>
  )
}

export default HotelsGrid
