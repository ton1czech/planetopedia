import Campaign from '@/components/for-brands/Campaign'
import Contact from '@/components/for-brands/Contact'
import ContentCreation from '@/components/for-brands/ContentCreation'
import Feedback from '@/components/for-brands/Feedback'
import Hero from '@/components/for-brands/Hero'
import Video from '@/components/for-brands/Video'
import Work from '@/components/for-brands/Work'

export default function ForBrands() {
  return (
    <section>
      <Hero />
      <div>
        <Work />
        <ContentCreation />
        <Video />
        <Campaign />
        <Feedback />
        <Contact />
      </div>
    </section>
  )
}
