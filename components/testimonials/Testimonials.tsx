import Carousel from './Carousel'
import CarouselItem from './CarouselItem'
import Review from './Review'

interface TestimonialsProps {
  data: any
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
