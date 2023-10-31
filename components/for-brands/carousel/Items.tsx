'use client'

import { useEffect, useState } from 'react'
import { Skeleton } from '@/components/ui/skeleton'
import Item from './Item'
import Carousel from '@/components/testimonials/Carousel'
import CarouselItem from '@/components/testimonials/CarouselItem'

interface ItemsProps {
  data: {
    src: string
  }[]
}

const Items = ({ data }: ItemsProps) => {
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
            <Item src={item.src} thumbnail={item.thumbnail} />
          )}
        </CarouselItem>
      ))}
    </Carousel>
  )
}

export default Items
