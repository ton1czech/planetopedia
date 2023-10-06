import Earth from '@/components/3d/Earth'
import Container from '@/components/Container'
import { Montserrat, Caramel } from 'next/font/google'

const montserrat = Montserrat({ subsets: ['latin'] })
const caramel = Caramel({ subsets: ['latin'], weight: '400' })

const Hero = () => {
  return (
    <Container className='bg-black h-screen w-screen'>
      <div className='absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] z-10 pointer-events-none'>
        <h1
          className={`${montserrat.className} font-black !italic text-3xl md:text-5xl lg:text-7xl xl:text-9xl drop-shadow-lg text-stroke text-white`}
        >
          PLANETOPEDIA
        </h1>
        <p
          className={`${caramel.className} text-center text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl text-gold drop-shadow-sm -mt-3 md:-mt-5`}
        >
          More than an agency
        </p>
      </div>

      <Earth />
    </Container>
  )
}

export default Hero
