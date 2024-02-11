import Container from '../Container'
import { BackgroundBeams } from '../ui/background-beams'

export const Intro = () => {
  return (
    <section className='relative h-[60vh] md:h-[85vh] w-full antialiased mb-20 lg:mb-40 grid place-content-center'>
      <Container>
        <h1 className='text-center relative z-10 text-4xl text-transparent sm:text-6xl md:text-7xl xl:text-8xl 2xl:text-9xl !leading-tight bg-clip-text bg-gradient-to-b from-neutral-600 to-neutral-950'>
          we <b>transform</b> <br /> your <b>visitors</b> into <br /> loyal{' '}
          <b>customers</b>
        </h1>
        <p className='relative z-10 mt-10 text-center text-lg md:mt-14 lg:mt-20 md:text-2xl xl:text-3xl 2xl:text-4xl text-neutral-500'>
          <b>Web development</b> for <b>individuals</b>{' '}
          <br className='sm:hidden' /> and <b>companies</b>, elegantly
        </p>
      </Container>
      <BackgroundBeams />
    </section>
  )
}