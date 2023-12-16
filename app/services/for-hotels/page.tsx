import Contact from '@/components/for-hotels/Contact'
import Email from '@/components/for-hotels/Email'
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
        {/* <Contact /> */}
        <Email />
      </div>
    </section>
  )
}
