'use client'

import Container from '../Container'
import { useLanguage } from '@/store/useLanguage'

const Video = () => {
  const { language } = useLanguage(state => state)

  return (
    <div className='sticky top-0 snap-start scroll-mt-20 w-screen z-20 bg-white flex items-center h-[calc(100vh-80px)]'>
      <Container className='py-10 w-full'>
        <h1 className='text-2xl md:text-3xl lg:text-4xl font-bold text-center text-black'>
          {language === 'en' && <>MORE THAN AN AGENCY.</>}
          {language === 'cs' && <>VÍCE NEŽ JEN AGENTURA.</>}
          {language === 'de' && <>MEHR ALS EINE AGENTUR.</>}
        </h1>
        <p className='text-zinc-700 text-center max-w-[80ch] mx-auto'>
          {language === 'en' && (
            <>
              Because our team is spread worldwide, we can reach many of the
              most beautiful locations on Earth to successfully capture your
              products/services at its best and realize the goal you want to
              achieve as a brand.
            </>
          )}
          {language === 'cs' && (
            <>
              Protože je náš tým rozprostřen po celém světě, můžeme oslovit
              mnoho z nich. nejkrásnějších míst na Zemi, abychom úspěšně
              zachytili váš produkty/služby v tom nejlepším světle a realizovat
              cíl, který chcete dosáhnout. dosáhnout jako značka.
            </>
          )}
          {language === 'de' && (
            <>
              Planetopedia ist auf die Erstellung von Markeninhalten und die
              Durchführung von Social-Media-Kampagnen. Dazu verwendet unser Team
              aufmerksamkeitsstarke Techniken, die bei unseren Kunden und Ihren
              Lesern gut ankommen.
            </>
          )}
        </p>

        <div className='shadow-2xl'>
          <iframe
            src='https://www.youtube.com/embed/6FVQmdEMA3o?si=g37RNrek6Y-5PlpY'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            allowFullScreen
            className='w-full mt-4 md:mt-10 h-[350px] sm:h-[380px] md:h-[430px] lg:h-[480px] xl:h-[520px]'
          />
        </div>
      </Container>
    </div>
  )
}

export default Video
