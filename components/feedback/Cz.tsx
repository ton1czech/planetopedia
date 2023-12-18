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
    <div>
      <h4 className='text-center md:text-lg xl:text-xl text-zinc-800'>
        Ondřej Plic / Grundstein s. r. o.
      </h4>
      <video
        ref={videoRef}
        className='!max-w-[250px] md:!max-w-[300px] xl:!max-w-[310px] 2xl:!max-w-[370px] !h-[400px] sm:!h-[520px] md:!h-[580px] flex justify-center items-center mx-auto'
        onClick={handleClick}
        playsInline
        poster='/feedback/3.webp'
      >
        <source src='https://i.imgur.com/rKI6iYe.mp4' />
      </video>
    </div>
  )
}

export default Cz
