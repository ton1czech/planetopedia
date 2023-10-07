'use client'

import Image from 'next/image'
import Container from '../Container'
import { urlForImage } from '@/sanity/lib/image'

interface HotelDetailProps {
  hotel: any
}

const HotelDetail = ({ hotel }: HotelDetailProps) => {
  return (
    <div className='pt-24 pb-20 bg-white md:pt-32 md:pb-32'>
      <Container>
        <h1>{hotel.name}</h1>
        <p>{hotel.location_en}</p>

        {hotel.intro_images.map((image: any) => (
          <Image
            src={urlForImage(image).url()}
            alt='intro image'
            width={900}
            height={400}
          />
        ))}

        <h1 className='pt-6 text-2xl font-bold uppercase md:pt-10 md:text-3xl lg:text-4xl'>
          hotel overview
        </h1>
        <h1 className='pt-6 text-2xl font-bold uppercase md:pt-10 md:text-3xl lg:text-4xl'>
          the rooms
        </h1>
        <h1 className='pt-6 text-2xl font-bold uppercase md:pt-10 md:text-3xl lg:text-4xl'>
          services and facilities
        </h1>
        <h1 className='pt-6 text-2xl font-bold uppercase md:pt-10 md:text-3xl lg:text-4xl'>
          spa & fitness
        </h1>
        <h1 className='pt-6 text-2xl font-bold uppercase md:pt-10 md:text-3xl lg:text-4xl'>
          food & drinks
        </h1>
        <h1 className='pt-6 text-2xl font-bold uppercase md:pt-10 md:text-3xl lg:text-4xl'>
          conclusion
        </h1>
      </Container>
    </div>
  )
}

export default HotelDetail
