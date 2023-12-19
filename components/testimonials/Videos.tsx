import Carousel from './Carousel'
import CarouselItem from './CarouselItem'
import Video from './Video'

interface VideoProps {
  data: {
    video: string
    thumbnail: string
  }[]
}

const Videos = ({ data }: VideoProps) => {
  return (
    <Carousel className='!h-[420px] sm:!h-[630px] md:!h-[720px]'>
      {data.map((item: any, index: any) => (
        <CarouselItem
          index={index}
          key={index}
          isPhone
          className='!h-[420px] sm:!h-[630px] md:!h-[720px]'
        >
          <Video video={item.video} thumbnail={item.thumbnail} />
        </CarouselItem>
      ))}
    </Carousel>
  )
}

export default Videos
