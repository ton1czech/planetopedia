import Testimonials from '@/components/testimonials/Testimonials'
import Video from '@/components/videos/Video'
import { videos } from '@/database/videos'

export default function Feedback() {
  return (
    <div className='pt-24 pb-20 bg-white md:pb-32 md:pt-32'>
      <div className='flex flex-col justify-center w-full items-center pb-10 md:pb-20'>
        {videos.map(video => (
          <Video url={video.url} />
        ))}
      </div>
      <Testimonials />
    </div>
  )
}
