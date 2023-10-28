import Contact from '@/components/for-hotels/Contact'
import Hero from '@/components/for-hotels/Hero'
import Video from '@/components/for-hotels/Video'
import Work from '@/components/for-hotels/Work'

export default function ForHotels() {
  return (
    <section>
      <Hero />
      <div>
        <Work />
        <Video />
        <Contact />
      </div>
    </section>
  )
}
