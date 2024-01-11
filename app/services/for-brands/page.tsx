import Campaign from '@/components/for-brands/Campaign'
import Charts from '@/components/for-brands/Charts'
import Contact from '@/components/for-brands/Contact'
import ContentCreation from '@/components/for-brands/ContentCreation'
import Email from '@/components/for-brands/Email'
import Feedback from '@/components/for-brands/Feedback'
import Hero from '@/components/for-brands/Hero'
import SocialMedia from '@/components/for-brands/SocialMedia'
import Video from '@/components/for-brands/Video'
import Web from '@/components/for-brands/Web'
import Work from '@/components/for-brands/Work'

export default function ForBrands() {
  return (
    <section>
      <Hero />
      <div>
        <Work />
        <SocialMedia />
        <Charts />
        {/* <Campaign /> */}
        {/* <ContentCreation /> */}
        <Video />
        <Web />
        <Feedback />
        {/* <Contact /> */}
        <Email />
      </div>
    </section>
  )
}
