'use client'

import { urlForImage } from '@/sanity/lib/image'
import Container from '../Container'
import Restaurant from './Restaurant'

interface RestaurantsGridProps {
  restaurants: any
}

const RestaurantsGrid = ({ restaurants }: RestaurantsGridProps) => {
  return (
    <div className='pt-24 pb-20 bg-white md:pt-32 md:pb-32'>
      <Container className='grid gap-6 md:grid-cols-2 lg:grid-cols-3 md:gap-12'>
        {restaurants.map((restaurant: any) => (
          <Restaurant
            name={restaurant.name}
            locationCz={restaurant.location_cz}
            locationEn={restaurant.location_en}
            minutes={restaurant.minutes}
            src={urlForImage(restaurant.image).url()}
            href={restaurant.slug.current}
          />
        ))}
      </Container>
    </div>
  )
}

export default RestaurantsGrid
