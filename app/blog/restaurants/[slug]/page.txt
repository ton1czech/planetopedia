import RestaurantDetail from '@/components/restaurants/RestaurantDetail'
import { cachedClient } from '@/sanity/lib/client'
import { RestaurantQuery, RestaurantsPathsQuery } from '@/sanity/lib/queries'

export const revalidate = 60

export async function generateStaticParams() {
  const restaurants = await cachedClient(RestaurantsPathsQuery)

  return restaurants
}

async function RestaurantPage({ params }: { params: any }) {
  const restaurant = await cachedClient(RestaurantQuery, params, {
    next: { revalidate },
  })

  return <RestaurantDetail restaurant={restaurant} />
}

export default RestaurantPage
