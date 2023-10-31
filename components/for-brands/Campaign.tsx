'use client'

import Image from 'next/image'
import Container from '../Container'
import dynamic from 'next/dynamic'
import { useLanguage } from '@/store/useLanguage'
const Map = dynamic(() => import('@/components/for-brands/Map'), { ssr: false })

const Campaign = () => {
  const { language } = useLanguage(state => state)

  return (
    <div className='sticky top-0 snap-start scroll-mt-20 w-screen h-[calc(100vh-80px)] z-30 bg-black flex items-center'>
      <Container className='grid md:grid-cols-[3fr_2fr] gap-14'>
        <div className='flex flex-col justify-between gap-10 md:gap-0'>
          <div>
            <p className='uppercase text-lg text-justify text-zinc-200'>
              {language === 'en' && <>social media influencer campaign</>}
              {language === 'cs' && (
                <>influencerská kampaň na sociálních sítích</>
              )}
              {language === 'de' && <>social-media-influencer-kampagne</>}
            </p>
            <h1 className='font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-2'>
              Heys Luggage
            </h1>
            <p className='text-zinc-300'>
              {language === 'en' && (
                <>
                  Heys Luggage joined forces with five talented Planetopedia
                  creators from five countries, delivering resounding success
                  and reaching new heights on social media. Together, we brought
                  the world to life, inspiring audiences worldwide.
                </>
              )}
              {language === 'cs' && (
                <>
                  Společnost Heys Luggage spojila síly s pěti talentovanými
                  pracovníky Planetopedia tvůrců z pěti zemí, kteří dosáhli
                  obrovského úspěchu a a dosáhli nových výšin na sociálních
                  sítích. Společně jsme přinesli svět k životu a inspirovali
                  publikum po celém světě.
                </>
              )}
              {language === 'de' && (
                <>
                  Heys Luggage hat sich mit fünf talentierten Planetopedia aus
                  fünf Ländern zusammen, um einen durchschlagenden Erfolg zu
                  erzielen und neue Höhen in den sozialen Medien zu erreichen.
                  Gemeinsam haben wir die Welt zum Leben erweckt und das
                  Publikum weltweit inspiriert.
                </>
              )}
            </p>
          </div>
          <Map />
        </div>
        <Image
          width={700}
          height={1000}
          alt='heys luggage campaign'
          src='/services/for-brands/heysluggage.jpg'
          className='hidden md:block'
        />
      </Container>
    </div>
  )
}

export default Campaign
