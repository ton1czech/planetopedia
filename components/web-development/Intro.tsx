'use client'

import Container from '../Container'
import { BackgroundBeams } from '../ui/background-beams'

export const Intro = () => {
  return (
    <section className='relative h-[60vh] md:h-[85vh] w-full antialiased mb-20 lg:mb-40 grid place-content-center'>
      <Container>
        <h1 className='text-center relative z-10 text-4xl text-transparent sm:text-6xl md:text-7xl xl:text-[7.8rem] 2xl:text-9xl !leading-tight bg-clip-text bg-gradient-to-b from-neutral-600 to-neutral-950'>
          We <b>transform</b> <br /> your <b>visitors</b> into <br /> loyal{' '}
          <b>customers.</b>
        </h1>
      </Container>
      <BackgroundBeams />
    </section>
  )
}
