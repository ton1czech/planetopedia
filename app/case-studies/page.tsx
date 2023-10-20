'use client'

import Container from '@/components/Container'
import { caseStudies } from '@/database/case-studies'
import { useLanguage } from '@/store/useLanguage'
import Image from 'next/image'
import Link from 'next/link'

export default function CaseStudies() {
  const { language } = useLanguage(state => state)

  return (
    <div className='pt-24 pb-20 bg-white md:pb-32 md:pt-32'>
      <Container>
        <div className='flex gap-14 md:gap-24 flex-col'>
          {caseStudies.map(casestudy => (
            <Link href={casestudy.href} className='group grid md:grid-cols-2'>
              <div className='flex flex-col justify-between'>
                <div>
                  <h3 className='text-2xl font-black text-center md:text-3xl lg:text-4xl mb-1 md:text-left'>
                    {casestudy.title}
                  </h3>
                  <div className='pb-2 md:pb-4 text-center text-zinc-600 text-sm md:text-left'>
                    {language === 'en' && <p>{casestudy.categoryEn}</p>}
                    {language === 'cs' && <p>{casestudy.categoryCz}</p>}
                  </div>
                </div>
                <div className='text-center text-zinc-800 md:text-lg md:text-left'>
                  {language === 'en' && (
                    <p>
                      {casestudy.servicesEn.map(service => (
                        <p>{service}</p>
                      ))}
                    </p>
                  )}
                  {language === 'cs' && (
                    <p>
                      {casestudy.servicesCz.map(service => (
                        <p>{service}</p>
                      ))}
                    </p>
                  )}
                </div>
                <button className='ring-2 ring-black rounded-md w-full md:w-1/2 font-bold py-3 hover:text-white hover:bg-black transition'>
                  {language === 'en' && <>Learn More</>}
                  {language === 'cs' && <>Dozvědět se více</>}
                </button>
              </div>
              <div className='relative w-full overflow-hidden transition duration-500 aspect-video group-hover:shadow-lg'>
                <Image
                  src={casestudy.image}
                  fill
                  alt={casestudy.title}
                  className='object-cover transition duration-500 group-hover:scale-110'
                />
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </div>
  )
}
