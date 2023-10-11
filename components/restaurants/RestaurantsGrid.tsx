'use client'

import { useState } from 'react'
import Container from '../Container'
import { Input } from '../ui/input'
import Restaurant from './Restaurant'
import { useLanguage } from '@/store/useLanguage'
import Map from '../Map'
import { locations } from '@/database/restaurantLocations'
import { Label } from '../ui/label'

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
    <div className='pt-24 pb-20 bg-white md:pt-32 md:pb-32'>
      <div className='max-w-5xl mx-auto'>
        <Container>
          <div className='mb-5 md:mb-10'>
            <Map locations={locations} />
          </div>

          <Label className='text-lg md:text-xl lg:text-2xl'>
            {language === 'en' ? (
              <>Search for restaurants or locations</>
            ) : (
              <>Hledej restaurace nebo lokace</>
            )}
          </Label>
          <Input
            type='text'
            placeholder={
              language === 'en'
                ? "L'ATELIER DE JOEL ROBUCHON, france"
                : "L'ATELIER DE JOEL ROBUCHON, francie"
            }
            onChange={e => setQuery(e.target.value)}
            className='bg-zinc-200 p-1 border border-zinc-300/40 w-full mb-5 md:mb-10'
          />

          <div className='grid gap-6 md:grid-cols-2 md:gap-12'>
            {filteredRestaurants.map((restaurant: any) => (
              <Restaurant restaurant={restaurant} />
            ))}
          </div>
        </Container>
      </div>
    </div>
  )
}

export default RestaurantsGrid
