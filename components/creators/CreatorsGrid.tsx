'use client'

import { useState } from 'react'
import Container from '../Container'
import Creator from './Creator'
import { Country } from './filters/Country'
import { useLanguage } from '@/store/useLanguage'

interface CreatorsGridProps {
  creators: any
}

const CreatorsGrid = ({ creators }: CreatorsGridProps) => {
  const { language } = useLanguage(state => state)

  const [countryCode, setCountryCode] = useState<string>('')

  const getFilteredClients = (countryCode: string) => {
    if (!countryCode) return creators

    return creators.filter((creator: any) =>
      creator.code.toLowerCase().includes(countryCode.toLowerCase())
    )
  }

  const filteredClients = getFilteredClients(countryCode)

  console.log(filteredClients)

  return (
    <div className='pt-24 pb-20 bg-white md:pt-32 md:pb-32'>
      <Container className='grid w-full gap-6 lg:grid-cols-3 md:gap-12'>
        <Country setCountryCode={setCountryCode} />
      </Container>
      <Container>
        <div className='w-full h-px bg-zinc-600/30 my-4 lg:my-8' />
      </Container>

      {filteredClients.length === 0 && (
        <Container>
          <h1 className='text-center text-2xl md:text-3xl lg:text-4xl font-bold'>
            {language === 'en' ? (
              <>No Results Found.</>
            ) : language === 'cs' ? (
              <>Nebyly nalezeny žádné výsledky.</>
            ) : language === 'de' ? (
              <>Keine Ergebnisse gefunden.</>
            ) : null}
          </h1>
        </Container>
      )}

      <Container className='grid w-full gap-6 md:grid-cols-2 lg:grid-cols-3 md:gap-12'>
        {filteredClients.map(
          ({
            image,
            name,
            instagram,
            categories,
            locationCz,
            locationEn,
            locationDe,
            followers,
          }: any) => (
            <Creator
              key={instagram}
              src={image}
              name={name}
              instagram={instagram}
              categories={categories}
              locationCz={locationCz}
              locationEn={locationEn}
              locationDe={locationDe}
              followers={followers}
            />
          )
        )}
      </Container>
    </div>
  )
}

export default CreatorsGrid
