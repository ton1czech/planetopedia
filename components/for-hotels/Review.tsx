import { forHotels } from '@/database/for-hotels'
import Items from './carousel/Items'
import Container from '../Container'

const Review = () => {
  return (
    <div className='sticky top-0 snap-start scroll-mt-20 w-screen h-[90vh] z-30 bg-white grid place-content-center'>
      <Container className='mt-20 h-[80vh]'>
        {forHotels.map(hotel => (
          <Items data={hotel.feedbacks} />
        ))}
      </Container>
    </div>
  )
}

export default Review
