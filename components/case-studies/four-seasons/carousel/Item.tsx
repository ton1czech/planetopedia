'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

interface ItemProps {
  src: string
  thumbnail: string
}

const Item = ({ src, thumbnail }: ItemProps) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false)

  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const handleOutsideClick = (event: any) => {
      if (
        isPlaying &&
        videoRef.current &&
        !videoRef?.current?.contains(event.target)
      ) {
        videoRef?.current?.pause()
      }
    }

    document.addEventListener('click', handleOutsideClick)

    return () => {
      document.removeEventListener('click', handleOutsideClick)
    }
  }, [isPlaying])

  const handleClick = () => {
    setIsPlaying(prev => !prev)

    if (isPlaying) {
      videoRef?.current?.pause()
    } else {
      videoRef?.current?.play()
    }
  }

  return (
    <div className='!max-w-[200px] md:!max-w-[300px] xl:!max-w-[350px] 2xl:!max-w-[400px] !h-[370px] sm:!h-[580px] md:!h-[750px]'>
      {src.includes('.mp4') ? (
        <video
          ref={videoRef}
          className='!max-w-[200px] md:!max-w-[300px] xl:!max-w-[350px] 2xl:!max-w-[400px]'
          onClick={handleClick}
          playsInline
          poster={thumbnail}
        >
          <source src={src} />
        </video>
      ) : (
        <div className='!max-w-[200px] md:!max-w-[300px] xl:!max-w-[350px] 2xl:!max-w-[400px]'>
          <img src={src} alt='mockup' />
        </div>
      )}
    </div>
  )
}

export default Item
