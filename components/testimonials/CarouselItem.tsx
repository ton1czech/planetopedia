'use client'

import React, { useCallback, useContext } from 'react'
import { CarouselContext } from './Carousel'

interface Props {
  index: number
  children: JSX.Element
  className?: string
  isPhone?: boolean
}

const CarouselItem: React.FC<Props> = ({
  children,
  index,
  className,
  isPhone,
}) => {
  const { embla: emblaApi, selectedIndex } = useContext(CarouselContext)
  const isActive = selectedIndex === index

  const handleClick = useCallback(() => {
    if (emblaApi === undefined) return
    emblaApi.scrollTo(index)
  }, [emblaApi, index])

  return (
    <div
      className={`slide relative flex h-min ${
        isActive && '!opacity-100'
      } ${className}`}
      onClick={handleClick}
    >
      <div className={`${!isActive && isPhone && 'scale-75'}`}>{children}</div>
    </div>
  )
}

export default CarouselItem
