'use client'

import { useRef, useState } from 'react'

interface VideoProps {
  url: string
}

const Video = ({ url }: VideoProps) => {
  const [isActive, setIsActive] = useState<boolean>(false)

  const videoRef = useRef<HTMLVideoElement>(null)

  const mouseLeave = () => {
    if (isActive) {
      videoRef?.current?.pause()
    }
  }

  const mouseEnter = () => {
    if (isActive) {
      videoRef?.current?.play()
    }
  }

  return (
    <video
      ref={videoRef}
      controls
      className='w-[300px] md:w-[400px] h-full'
      onMouseLeave={mouseLeave}
      onMouseEnter={mouseEnter}
      onClick={() => setIsActive(true)}
    >
      <source src={url} />
    </video>
  )
}

export default Video
