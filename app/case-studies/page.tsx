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
        <div className='flex flex-col gap-14 md:gap-24'>
          {caseStudies.map(casestudy => (
            <Link
              href={casestudy.href}
              className='grid group md:grid-cols-2 gap-4'
            >
              <div className='flex flex-col justify-between order-2 md:order-1'>
                <div>
                  <h3 className='-mb-1 md:mb-1 text-2xl font-black md:text-3xl lg:text-4xl'>
                    {casestudy.title}
                  </h3>
                  <div className='text-sm text-zinc-600 mb-2'>
                    {language === 'en' && <p>{casestudy.categoryEn}</p>}
                    {language === 'cs' && <p>{casestudy.categoryCz}</p>}
                    {language === 'de' && <p>{casestudy.categoryDe}</p>}
                  </div>
                </div>
                <div className='text-right text-zinc-800 md:text-lg md:text-left uppercase'>
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
                  {language === 'de' && (
                    <p>
                      {casestudy.servicesDe.map(service => (
                        <p>{service}</p>
                      ))}
                    </p>
                  )}
                </div>
                <button className='px-4 py-2 text-sm transition rounded-md w-full md:w-min h-min ring-1 ring-black hover:text-white hover:bg-black whitespace-nowrap mt-4 md:mt-0'>
                  {language === 'en' && <>Learn More</>}
                  {language === 'cs' && <>Dozvědět se více</>}
                  {language === 'de' && <>Mehr erfahren</>}
                </button>
              </div>
              <div className='relative w-full overflow-hidden transition duration-500 aspect-video group-hover:shadow-lg order-1 md:order-2'>
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
