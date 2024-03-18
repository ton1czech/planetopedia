import { Collaboration } from '@/components/web-development/Collaboration'
import Email from '@/components/web-development/Email'
import { Features } from '@/components/web-development/Features'
import { Feedback } from '@/components/web-development/Feedback'
import { Hero } from '@/components/web-development/Hero'
import { Intro } from '@/components/web-development/Intro'
import { Meet } from '@/components/web-development/Meet'
import { Showcase } from '@/components/web-development/Showcase'

export default function Page() {
  return (
    <main className='pb-20 bg-white md:pb-32'>
      <Hero />
      <Intro />
      <Showcase />
      <Features />
      <Collaboration />
      <Feedback />
      <Meet />
      <Email />
    </main>
  )
}
