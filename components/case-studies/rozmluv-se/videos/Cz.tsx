'use client'

import { useEffect, useRef, useState } from 'react'

const Cz = () => {
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
    <video
      ref={videoRef}
      className='!max-w-[200px] md:!max-w-[300px] xl:!max-w-[350px] 2xl:!max-w-[400px] !h-[370px] sm:!h-[580px] md:!h-[750px] flex justify-center items-center'
      onClick={handleClick}
      playsInline
      poster='/feedback/7.webp'
    >
      <source src='https://i.imgur.com/AYnKqwJ.mp4' />
    </video>
  )
}

export default Cz
