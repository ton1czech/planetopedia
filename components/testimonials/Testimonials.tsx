import Carousel from './Carousel'
import CarouselItem from './CarouselItem'
import Review from './Review'

interface TestimonialsProps {
  data: {
    body: string
    by: string
  }[]
}

const Testimonials = ({ data }: TestimonialsProps) => (
  <Carousel className='text-black' autoplay>
    {data.map((review: any, index: any) => (
      <CarouselItem index={index} key={index}>
        <Review body={review.body} by={review.by} />
      </CarouselItem>
    ))}
  </Carousel>
)

export default Testimonials
