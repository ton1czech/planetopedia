'use client'

import { useEffect, useRef, useState } from 'react'

const En = () => {
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
    <div>
      <h4 className='text-center md:text-lg xl:text-xl text-zinc-200'>
        Barbora Špádová / Rozmluv se s. r. o.
      </h4>
      <video
        ref={videoRef}
        className='!max-w-[250px] md:!max-w-[300px] xl:!max-w-[330px] 2xl:!max-w-[370px] !h-[400px] sm:!h-[520px] md:!h-[630px] flex justify-center items-center'
        onClick={handleClick}
        playsInline
        poster='/feedback/6.webp'
      >
        <source src='https://i.imgur.com/bQbRl0K.mp4' />
      </video>
    </div>
  )
}

export default En
