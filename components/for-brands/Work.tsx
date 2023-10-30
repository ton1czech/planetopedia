'use client'

import Container from '../Container'
import Image from 'next/image'
import { useLanguage } from '@/store/useLanguage'
import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'
import { forBrands } from '@/database/for-brands'
import Numbers from './Numbers'

const Work = () => {
  const { language } = useLanguage(state => state)

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(false)
  }, [])

  return (
    <div className='sticky top-0 snap-start scroll-mt-20 w-screen h-[90vh] z-20 bg-white'>
      <Container className='py-10 text-white'>
        <h1 className='text-2xl font-bold text-center text-black md:text-3xl lg:text-4xl mb-5'>
          {language === 'en' && <>Who We Work With</>}
          {language === 'cs' && <>S kým spolupracujeme</>}
          {language === 'de' && <>Mit wem wir arbeiten</>}
        </h1>
        <p className='text-zinc-700 text-center max-w-[80ch] mx-auto'>
          {language === 'en' && (
            <>
              From the biggest hotel companies to brands and world-inspiring
              marketing agencies, our clients have the same thing in common: big
              challenges that require a fresh & different approach.
            </>
          )}
          {language === 'cs' && (
            <>
              Od největších hotelových společností až po značky a světově
              inspirativní marketingových agentur, mají naši klienti společné
              to, že jsou velcí velké výzvy, které vyžadují nový a odlišný
              přístup.
            </>
          )}
          {language === 'de' && (
            <>
              Von den größten Hotelunternehmen bis hin zu Marken und
              weltberühmten Marketingagenturen haben unsere Kunden eines
              gemeinsam: große Herausforderungen, die einen neuen und anderen
              Ansatz erfordern.
            </>
          )}
        </p>

        {forBrands.map(brands => (
          <div className='grid items-center justify-center w-full grid-cols-3 mt-10 gap-14 lg:grid-cols-6'>
            {brands.logos.map(brand => (
              <div
                className={cn(
                  'grid place-content-center',
                  brand.noPhone && 'hidden md:grid'
                )}
              >
                <Image
                  src={brand.src}
                  alt='hotel'
                  width={100}
                  height={50}
                  className='w-full'
                />
              </div>
            ))}
          </div>
        ))}

        <h1 className='text-2xl font-bold text-center text-black md:text-3xl lg:text-4xl mb-5 mt-16 md:mt-28'>
          {language === 'en' && <>Our social media impact</>}
          {language === 'cs' && <>Náš vliv na sociální média</>}
          {language === 'de' && <>Unser Einfluss auf die sozialen Medien</>}
        </h1>
        <p className='text-zinc-700 text-center max-w-[80ch] mx-auto'>
          {language === 'en' && (
            <>
              Planetopedia specializes in creating branded content and launching
              social media campaigns. To do so, our team uses eye-catching
              techniques, which resonate with our clients and your readers.
            </>
          )}
          {language === 'cs' && (
            <>
              Společnost Planetopedia se specializuje na vytváření značkového
              obsahu a uvádění na trh kampaně v sociálních médiích. K tomu náš
              tým používá poutavé techniky, které mají ohlas u našich klientů i
              vašich čtenářů.
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
        <Numbers />
      </Container>
    </div>
  )
}

export default Work
