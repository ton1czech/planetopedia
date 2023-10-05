import Container from '@/components/Container'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({ subsets: ['latin'] })

export default function Home() {
  return (
    <Container className='grid h-screen place-content-center'>
      <h1
        className={`${montserrat.className} font-black !italic text-3xl md:text-5xl lg:text-7xl xl:text-9xl drop-shadow-lg`}
      >
        Planetopedia
      </h1>
    </Container>
  )
}
