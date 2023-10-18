import React from 'react'
import Carousel from './Carousel'
import CarouselItem from './CarouselItem'
import Video from './Video'

interface VideoProps {
  data: string[]
}

const Videos = ({ data }: VideoProps) => {
  return (
    <Carousel className='text-black'>
      {data.map((url: any, index: any) => (
        <CarouselItem index={index} key={index}>
          <Video url={url} />
        </CarouselItem>
      ))}
    </Carousel>
  )
}

export default Videos
