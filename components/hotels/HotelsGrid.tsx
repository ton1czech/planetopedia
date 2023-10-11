'use client'

import { useState } from 'react'
import Container from '../Container'
import Hotel from './Hotel'
import { Input } from '../ui/input'
import { useLanguage } from '@/store/useLanguage'

interface HotelsGridProps {
  hotels: any
}

const HotelsGrid = ({ hotels }: HotelsGridProps) => {
  const { language } = useLanguage(state => state)

  const [query, setQuery] = useState<string>('')

  const getFilteredHotels = (query: string) => {
    if (!query) return hotels

    return hotels.filter(
      (hotel: any) =>
        hotel.name.toLowerCase().includes(query.toLowerCase()) ||
        (language === 'en'
          ? hotel.location_en.toLowerCase().includes(query.toLowerCase())
          : hotel.location_cz.toLowerCase().includes(query.toLowerCase()))
    )
  }

  const filteredHotels = getFilteredHotels(query)

  return (
    <div className='pt-24 pb-20 bg-white md:pt-32 md:pb-32'>
      <div className='max-w-5xl mx-auto'>
        <Container>
          <Input
            type='text'
            placeholder={
              language === 'en'
                ? 'Search for hotels or locations'
                : 'Hledej hotely nebo lokace'
            }
            onChange={e => setQuery(e.target.value)}
            className='bg-zinc-200 p-1 border border-zinc-300/40 w-full mb-5 md:mb-10'
          />

          <div className='grid w-full gap-6 md:grid-cols-2 md:gap-12'>
            {filteredHotels.map((hotel: any) => (
              <Hotel hotel={hotel} />
            ))}
          </div>
        </Container>
      </div>
    </div>
  )
}

export default HotelsGrid
