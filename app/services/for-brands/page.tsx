import Contact from '@/components/for-brands/Contact'
import Hero from '@/components/for-brands/Hero'

export default function ForBrands() {
  return (
    <section>
      <Hero />
      <div className='pb-20 bg-zinc-200 md:pb-32'>
        {/* <Benefits />
        <Expecting />
        <Test /> */}
        <Contact />
      </div>
    </section>
  )
}
