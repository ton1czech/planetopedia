'use client'

import { useState } from 'react'
import Container from '../Container'
import { Input } from '../ui/input'
import Restaurant from './Restaurant'
import { useLanguage } from '@/store/useLanguage'
import { locations } from '@/database/restaurantLocations'
import dynamic from 'next/dynamic'
const Map = dynamic(() => import('@/components/Map'), { ssr: false })

interface RestaurantsGridProps {
  restaurants: any
}

const RestaurantsGrid = ({ restaurants }: RestaurantsGridProps) => {
  const { language } = useLanguage(state => state)

  const [query, setQuery] = useState<string>('')

  const getFilteredRestaurants = (query: string) => {
    if (!query) return restaurants

    return restaurants.filter(
      (hotel: any) =>
        hotel.name.toLowerCase().includes(query.toLowerCase()) ||
        (language === 'en'
          ? hotel.location_en.toLowerCase().includes(query.toLowerCase())
          : hotel.location_cz.toLowerCase().includes(query.toLowerCase()))
    )
  }

  const filteredRestaurants = getFilteredRestaurants(query)

  return (
    <div className='pb-20 bg-white md:pb-32'>
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

          {filteredRestaurants.length === 0 ? (
            <h1 className='text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-center'>
              {language === 'en' ? (
                <>No restaurants found</>
              ) : (
                <>Žádná restaurace nenalezena</>
              )}
            </h1>
          ) : (
            <div className='grid gap-6 md:grid-cols-2 md:gap-12'>
              {filteredRestaurants.map((restaurant: any) => (
                <Restaurant
                  key={restaurant.slug.current}
                  restaurant={restaurant}
                />
              ))}
            </div>
          )}
        </Container>
      </div>
    </div>
  )
}

export default RestaurantsGrid
