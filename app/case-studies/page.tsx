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
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {caseStudies.map(casestudy => (
            <Link href={casestudy.href} className='group'>
              <div className='relative w-full mb-3 overflow-hidden transition duration-500 aspect-square group-hover:shadow-lg'>
                <Image
                  src={casestudy.image}
                  fill
                  alt={casestudy.title}
                  className='object-cover object-top transition duration-500 group-hover:scale-110'
                />
              </div>
              {language === 'en' && (
                <p className='text-center text-zinc-700'>
                  {casestudy.categoryEn}
                </p>
              )}
              {language === 'cs' && (
                <p className='text-center text-zinc-700'>
                  {casestudy.categoryCz}
                </p>
              )}
              <h3 className='text-xl font-medium text-center md:text-xl'>
                {casestudy.title}
              </h3>
            </Link>
          ))}
        </div>
      </Container>
    </div>
  )
}
