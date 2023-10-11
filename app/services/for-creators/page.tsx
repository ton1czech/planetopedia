import Benefits from '@/components/for-creators/Benefits'
import Contact from '@/components/for-creators/Contact'
import Expecting from '@/components/for-creators/Expecting'
import Hero from '@/components/for-creators/Hero'
import Test from '@/components/for-creators/Test'

export default function ForCreators() {
  return (
    <section>
      <Hero />
      <div className='bg-zinc-200 pb-20 md:pb-32'>
        <Benefits />
        <Expecting />
        <Test />
        <Contact />
      </div>
    </section>
  )
}
