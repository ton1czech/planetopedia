import Contact from '@/components/for-brands/Contact'
import ContentCreation from '@/components/for-brands/ContentCreation'
import Hero from '@/components/for-brands/Hero'
import Work from '@/components/for-brands/Work'

export default function ForBrands() {
  return (
    <section>
      <Hero />
      <div>
        <Work />
        <ContentCreation />
        <Contact />
      </div>
    </section>
  )
}
