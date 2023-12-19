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
      className='!max-w-[230px] md:!max-w-[330px] xl:!max-w-[380px] 2xl:!max-w-[450px] !h-[420px] sm:!h-[630px] md:!h-[720px]'
      onClick={handleClick}
      playsInline
      poster={thumbnail}
    >
      <source src={video} />
    </video>
  )
}

export default Video
