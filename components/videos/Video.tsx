'use client'

import ReactPlayer from 'react-player'

interface VideoProps {
  url: string
}

const Video = ({ url }: VideoProps) => {
  return <ReactPlayer url={url} controls />
}

export default Video
