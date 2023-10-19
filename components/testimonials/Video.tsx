'use client'

import { useEffect, useRef, useState } from 'react'

interface VideoProps {
  url: string
}

const Video = ({ url }: VideoProps) => {
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
      className='flex max-w-[200px] sm:max-w-[300px] md:max-w-[400px] h-min'
      onClick={handleClick}
    >
      <source src={url} />
    </video>
  )
}

export default Video
