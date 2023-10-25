'use client'

import { useEffect, useState } from 'react'
import Carousel from './Carousel'
import CarouselItem from './CarouselItem'
import Video from './Video'
import { Skeleton } from '../ui/skeleton'

interface VideoProps {
  data: {
    video: string
    thumbnail: string
  }[]
}

const Videos = ({ data }: VideoProps) => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(false)
  }, [])

  return (
    <Carousel className='!h-[370px] sm:!h-[580px] md:!h-[750px]'>
      {data.map((item: any, index: any) => (
        <CarouselItem
          index={index}
          key={index}
          isPhone
          className='!h-[370px] sm:!h-[580px] md:!h-[750px]'
        >
          {isLoading ? (
            <Skeleton className='!h-[370px] sm:!h-[580px] md:!h-[750px]' />
          ) : (
            <Video video={item.video} thumbnail={item.thumbnail} />
          )}
        </CarouselItem>
      ))}
    </Carousel>
  )
}

export default Videos
