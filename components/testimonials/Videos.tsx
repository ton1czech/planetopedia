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
    <Carousel className='!h-[370px] sm:!h-[580px] lg:!h-[620px] 2xl:!h-[750px]'>
      {data.map((item: any, index: any) => (
        <CarouselItem
          index={index}
          key={index}
          isPhone
          className='!h-[370px] sm:!h-[580px] lg:!h-[620px] 2xl:!h-[750px]'
        >
          <Video video={item.video} thumbnail={item.thumbnail} />
        </CarouselItem>
      ))}
    </Carousel>
  )
}

export default Videos
