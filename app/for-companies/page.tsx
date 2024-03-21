import Charts from '@/components/for-companies/Charts'
import Email from '@/components/for-companies/Email'
import Feedback from '@/components/for-companies/Feedback'
import Hero from '@/components/for-companies/Hero'
import { Intro } from '@/components/for-companies/Intro'
import SocialMedia from '@/components/for-companies/SocialMedia'
import Work from '@/components/for-companies/Work'

export default function ForBrands() {
  return (
    <section>
      <Hero />
      <div>
        <Intro />
        <Work />
        <SocialMedia />
        <Charts />
        <Feedback />
        <Email />
      </div>
    </section>
  )
}
