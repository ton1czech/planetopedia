import { videos } from '@/database/videos'
import Container from '../Container'
import Videos from '../testimonials/Videos'

const Expecting = () => {
  return (
    <div className='sticky top-0 snap-start scroll-mt-20 w-screen h-[90vh] z-10 bg-white'>
      <Container className='pt-32 md:pt-10'>
        <Videos data={videos} />
      </Container>
    </div>
  )
}

export default Expecting
