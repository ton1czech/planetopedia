import { Collaboration } from '@/components/web-development/Collaboration'
import Email from '@/components/web-development/Email'
import { Hero } from '@/components/web-development/Hero'
import { Meet } from '@/components/web-development/Meet'
import { Showcase } from '@/components/web-development/Showcase'

export default function Page() {
  return (
    <main className='pt-24 pb-20 bg-white md:pt-32 md:pb-32'>
      <Hero />
      <Showcase />
      <Collaboration />
      <Meet />
      <Email />
    </main>
  )
}
