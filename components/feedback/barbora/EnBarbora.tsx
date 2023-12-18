'use client'

import { useEffect, useRef, useState } from 'react'

const EnBarbora = () => {
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
      <h4 className='text-center md:text-lg xl:text-xl text-zinc-800'>
        Barbora Špádová / Rozmluv se s. r. o.
      </h4>
      <video
        ref={videoRef}
        className='!max-w-[200px] md:!max-w-[300px] xl:!max-w-[350px] 2xl:!max-w-[400px] !h-[370px] sm:!h-[580px] md:!h-[750px]'
        onClick={handleClick}
        playsInline
        poster='/about/feedback/en.webp'
      >
        <source src='https://i.imgur.com/00ezrhJ.mp4' />
      </video>
    </div>
  )
}

export default EnBarbora
