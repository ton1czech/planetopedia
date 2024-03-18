import Charts from '@/components/for-hotels/Charts'
import Email from '@/components/for-hotels/Email'
import Feedback from '@/components/for-hotels/Feedback'
import Hero from '@/components/for-hotels/Hero'
import Review from '@/components/for-hotels/Review'
import Video from '@/components/for-hotels/Video'
import Work from '@/components/for-hotels/Work'

export default function ForHotels() {
  return (
    <section>
      <Hero />
      <div>
        <Work />
        <Video />
        <Review />
        <Feedback />
        <Charts />
        {/* <Contact /> */}
        <Email />
      </div>
    </section>
  )
}
