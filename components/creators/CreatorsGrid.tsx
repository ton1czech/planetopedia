'use client'

import { useState } from 'react'
import Container from '../Container'
import Creator from './Creator'
import { Country } from './filters/Country'
import { useLanguage } from '@/store/useLanguage'
import { Skills } from './filters/Skills'
import { Followers } from './filters/Followers'
import { motion } from 'framer-motion'

interface CreatorsGridProps {
  creators: any
}

const CreatorsGrid = ({ creators }: CreatorsGridProps) => {
  const { language } = useLanguage(state => state)

  const [countryCode, setCountryCode] = useState<string>('')
  const [followers, setFollowers] = useState<any>({
    min: undefined,
    max: undefined,
  })
  const [skill, setSkill] = useState<string>('')

  const getFilteredClients = (
    countryCode: string,
    skill: string,
    followers: { min: number; max: number } | undefined
  ) => {
    if (!countryCode && !skill && !followers) {
      return creators
    }

    const filteredCreators = creators.filter((creator: any) => {
      const matchesCountry =
        !countryCode ||
        (creator.code &&
          creator.code.toLowerCase().includes(countryCode.toLowerCase()))

      const matchesSkill =
        !skill || (creator.categories && creator.categories.includes(skill))

      const matchesFollowers =
        !followers ||
        (creator.followers >= followers.min &&
          creator.followers <= followers.max)

      return matchesCountry && matchesSkill && matchesFollowers
    })

    return filteredCreators
  }

  const filteredClients = getFilteredClients(countryCode, skill, followers)

  return (
    <motion.div className='pt-24 pb-20 bg-white md:pt-32 md:pb-32'>
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
      >
        <Container className='grid w-full gap-4 lg:grid-cols-3 lg:gap-12'>
          <Country setCountryCode={setCountryCode} />
          <Skills setSkill={setSkill} />
          <Followers setFollowers={setFollowers} />
        </Container>
        <Container>
          <div className='my-4 lg:my-8'>
            <div className='w-full h-px bg-zinc-600/30' />
            <p className='text-sm text-zinc-700/90'>
              {filteredClients.length} creators
            </p>
          </div>
        </Container>
      </motion.div>

      {filteredClients.length === 0 && (
        <Container>
          <h1 className='text-2xl font-bold text-center md:text-3xl lg:text-4xl'>
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

      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
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
      </motion.div>
    </motion.div>
  )
}

export default CreatorsGrid
