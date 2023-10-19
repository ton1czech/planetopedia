'use client'

import { useEffect, useRef, useState } from 'react'

interface VideoProps {
  video: string
  thumbnail: string
}

const Video = ({ video, thumbnail }: VideoProps) => {
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
      className='!max-w-[200px] sm:!max-w-[300px] md:!max-w-[400px] !h-[370px] sm:!h-[580px] md:!h-[750px]'
      onClick={handleClick}
      playsInline
      poster={thumbnail}
    >
      <source src={video} />
    </video>
  )
}

export default Video
