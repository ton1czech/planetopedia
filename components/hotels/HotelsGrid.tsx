'use client'

import { useState } from 'react'
import Container from '../Container'
import Hotel from './Hotel'
import { Input } from '../ui/input'
import { useLanguage } from '@/store/useLanguage'
import { locations } from '@/database/hotelLocations'
import dynamic from 'next/dynamic'
const Map = dynamic(() => import('@/components/Map'), { ssr: false })

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
    <div className='bg-white pb-20 md:pb-32'>
      <div className='mb-5 md:mb-10 relative'>
        <Map locations={locations} />
        <div className='absolute inset-0 w-full h-full bg-gradient-to-b from-transparent to-white from-75% z-[999] pointer-events-none' />
        <div />
      </div>
      <div className='max-w-5xl mx-auto'>
        <Container>
          <Input
            type='text'
            placeholder='🔎 Search...'
            onChange={e => setQuery(e.target.value)}
            className='bg-zinc-200 p-1 border border-zinc-300/40 w-full mb-5 md:mb-10'
          />

          {filteredHotels.length === 0 ? (
            <h1 className='text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-center'>
              {language === 'en' ? (
                <>No hotels found</>
              ) : (
                <>Žádný hotel nenalezen</>
              )}
            </h1>
          ) : (
            <div className='grid w-full gap-6 md:grid-cols-2 md:gap-12'>
              {filteredHotels.map((hotel: any) => (
                <Hotel key={hotel.slug.current} hotel={hotel} />
              ))}
            </div>
          )}
        </Container>
      </div>
    </div>
  )
}

export default HotelsGrid
