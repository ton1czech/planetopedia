import Benefits from '@/components/for-creators/Benefits'
import Contact from '@/components/for-creators/Contact'
import Expecting from '@/components/for-creators/Expecting'
import Hero from '@/components/for-creators/Hero'

export default function ForCreators() {
  return (
    <section>
      <Hero />
      <div>
        <Expecting />
        <Benefits />
        <Contact />
      </div>
    </section>
  )
}
