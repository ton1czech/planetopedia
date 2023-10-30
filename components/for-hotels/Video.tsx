'use client'

import Container from '../Container'
import { useLanguage } from '@/store/useLanguage'

const Video = () => {
  const { language } = useLanguage(state => state)

  return (
    <div className='sticky top-0 snap-start scroll-mt-20 w-screen z-20 bg-black flex items-center h-[calc(100vh-80px)]'>
      <Container className='py-10 w-full'>
        <h1 className='text-2xl md:text-3xl lg:text-4xl font-bold text-center text-white'>
          {language === 'en' && <>MORE THAN AN AGENCY.</>}
          {language === 'cs' && <>VÍCE NEŽ JEN AGENTURA.</>}
          {language === 'de' && <>MEHR ALS EINE AGENTUR.</>}
        </h1>
        <p className='text-zinc-300 text-center max-w-[80ch] mx-auto'>
          {language === 'en' && (
            <>
              Planetopedia specializes in creating eye-catching photography,
              video production and social media campaigns for the World’s
              leading luxury hotels, resorts and rental properties.
            </>
          )}
          {language === 'cs' && (
            <>
              Planetopedia se specializuje na tvorbu poutavých fotografií, videí
              a videí. a kampaně v sociálních médiích pro přední světové luxusní
              společnosti. hotelů, resortů a pronájmů.
            </>
          )}
          {language === 'de' && (
            <>
              Planetopedia ist spezialisiert auf die Erstellung
              aufmerksamkeitsstarker Fotografie-, Video Videoproduktion und
              Social-Media-Kampagnen für die weltweit führenden Luxushotels
              Hotels, Resorts und Mietobjekte.
            </>
          )}
        </p>

        <div className='ring-2 ring-white white-shadow'>
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
