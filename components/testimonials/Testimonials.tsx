import { reviews } from '@/database/reviews'
import Carousel from './Carousel'
import CarouselItem from './CarouselItem'
import Review from './Review'

const Testimonials: React.FC = () => (
  <Carousel className='text-black'>
    {reviews.map((review, index) => (
      <CarouselItem index={index}>
        <Review body={review.body} by={review.by} />
      </CarouselItem>
    ))}
  </Carousel>
)

export default Testimonials
