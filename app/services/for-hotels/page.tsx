import Contact from '@/components/for-hotels/Contact'
import Hero from '@/components/for-hotels/Hero'

export default function ForHotels() {
  return (
    <section>
      <Hero />
      <div className='bg-zinc-200 pb-20 md:pb-32'>
        {/* <Benefits />
        <Expecting />
        <Test /> */}
        <Contact />
      </div>
    </section>
  )
}
