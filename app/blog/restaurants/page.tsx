import RestaurantsGrid from '@/components/restaurants/RestaurantsGrid'
import { cachedClient } from '@/sanity/lib/client'
import { RestaurantsQuery } from '@/sanity/lib/queries'

export const revalidate = 60

export default async function Restaurants() {
  const restaurants = await cachedClient(RestaurantsQuery)

  return <RestaurantsGrid restaurants={restaurants} />
}
