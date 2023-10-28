import { videos } from '@/database/videos'
import Container from '../Container'
import Videos from '../testimonials/Videos'

const Expecting = () => {
  return (
    <div className='sticky top-0 snap-start scroll-mt-20 w-screen h-[90vh] z-10 bg-white'>
      <Container className='grid place-content-center h-[80vh]'>
        <Videos data={videos} />
      </Container>
    </div>
  )
}

export default Expecting
