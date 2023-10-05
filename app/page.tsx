import Earth from '@/components/3d/Earth'
import Container from '@/components/Container'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({ subsets: ['latin'] })

export default function Home() {
  return (
    <Container className='grid h-screen place-content-center'>
      <h1
        className={`${montserrat.className} font-black !italic text-3xl md:text-5xl lg:text-7xl xl:text-9xl drop-shadow-lg absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] z-10 pointer-events-none text-stroke`}
      >
        PLANETOPEDIA
      </h1>
      <Earth />
    </Container>
  )
}
