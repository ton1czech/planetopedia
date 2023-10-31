'use client'

import Container from '@/components/Container'
import Filter from '@/components/case-studies/Filter'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { caseStudies } from '@/database/case-studies'
import { useLanguage } from '@/store/useLanguage'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { motion } from 'framer-motion'

export default function CaseStudies() {
  const { language } = useLanguage(state => state)

  const [service, setService] = useState<string>('')

  const getFilteredCaseStudies = (service: string) => {
    if (!service) {
      return caseStudies
    }

    const filteredCreators = caseStudies.filter((caseStudy: any) => {
      const matchesServices =
        !service ||
        (caseStudy.servicesEn && caseStudy.servicesEn.includes(service)) ||
        (caseStudy.servicesCz && caseStudy.servicesCz.includes(service)) ||
        (caseStudy.servicesDe && caseStudy.servicesDe.includes(service))

      return matchesServices
    })

    return filteredCreators
  }

  const filteredCaseStudies = getFilteredCaseStudies(service)

  return (
    <div className='pt-24 pb-20 bg-white md:pb-32 md:pt-32'>
      <Container>
        <Accordion type='single' collapsible>
          <AccordionItem value='item-1'>
            <AccordionTrigger>
              {language === 'en' && <>Filter</>}
              {language === 'cs' && <>Filtrovat</>}
              {language === 'de' && <>Filter</>}
            </AccordionTrigger>
            <AccordionContent>
              <Filter setService={setService} service={service} />
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <div className='flex flex-col mt-10 md:mt-20 gap-14 md:gap-24'>
          {filteredCaseStudies.map(casestudy => (
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
            >
              <Link
                key={casestudy.href}
                href={casestudy.href}
                className='grid gap-4 group md:grid-cols-2'
              >
                <div className='flex flex-col justify-between order-2 md:order-1'>
                  <div>
                    <h3 className='-mb-1 text-2xl font-black md:mb-1 md:text-3xl lg:text-4xl'>
                      {casestudy.title}
                    </h3>
                    <div className='mb-2 text-sm text-zinc-600'>
                      {language === 'en' && <p>{casestudy.categoryEn}</p>}
                      {language === 'cs' && <p>{casestudy.categoryCz}</p>}
                      {language === 'de' && <p>{casestudy.categoryDe}</p>}
                    </div>
                  </div>
                  <div className='text-right uppercase text-zinc-800 md:text-lg md:text-left'>
                    {language === 'en' && (
                      <p>
                        {casestudy.servicesEn.map(service => (
                          <p key={service}>{service}</p>
                        ))}
                      </p>
                    )}
                    {language === 'cs' && (
                      <p>
                        {casestudy.servicesCz.map(service => (
                          <p key={service}>{service}</p>
                        ))}
                      </p>
                    )}
                    {language === 'de' && (
                      <p>
                        {casestudy.servicesDe.map(service => (
                          <p key={service}>{service}</p>
                        ))}
                      </p>
                    )}
                  </div>
                  <button className='w-full px-4 py-2 mt-4 text-sm transition rounded-md md:w-min h-min ring-1 ring-black hover:text-white hover:bg-black whitespace-nowrap md:mt-0'>
                    {language === 'en' && <>Learn More</>}
                    {language === 'cs' && <>Dozvědět se více</>}
                    {language === 'de' && <>Mehr erfahren</>}
                  </button>
                </div>
                <div className='relative order-1 w-full overflow-hidden transition duration-500 aspect-video group-hover:shadow-lg md:order-2'>
                  <Image
                    src={casestudy.image}
                    fill
                    alt={casestudy.title}
                    className='object-cover transition duration-500 group-hover:scale-110'
                  />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </Container>
    </div>
  )
}
