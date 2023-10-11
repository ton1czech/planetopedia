'use client'

import Container from '../Container'
import Restaurant from './Restaurant'

interface RestaurantsGridProps {
  restaurants: any
}

const RestaurantsGrid = ({ restaurants }: RestaurantsGridProps) => {
  return (
    <div className='pt-24 pb-20 bg-white md:pt-32 md:pb-32'>
      <div className='max-w-5xl mx-auto'>
        <Container className='grid gap-6 md:grid-cols-2 md:gap-12'>
          {restaurants.map((restaurant: any) => (
            <Restaurant restaurant={restaurant} />
          ))}
        </Container>
      </div>
    </div>
  )
}

export default RestaurantsGrid
