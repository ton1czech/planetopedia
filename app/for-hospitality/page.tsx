import Charts from '@/components/for-hospitality/Charts'
import Email from '@/components/for-hospitality/Email'
import Feedback from '@/components/for-hospitality/Feedback'
import Hero from '@/components/for-hospitality/Hero'
import Review from '@/components/for-hospitality/Review'
import Work from '@/components/for-hospitality/Work'

export default function ForHotels() {
  return (
    <section>
      <Hero />
      <div>
        <Work />
        {/* <Video /> */}
        <Review />
        <Feedback />
        <Charts />
        {/* <Contact /> */}
        <Email />
      </div>
    </section>
  )
}
