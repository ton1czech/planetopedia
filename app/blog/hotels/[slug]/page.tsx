import HotelDetail from '@/components/hotels/HotelDetail'
import { cachedClient } from '@/sanity/lib/client'
import { HotelQuery, HotelsPathsQuery } from '@/sanity/lib/queries'

export const revalidate = 60

export async function generateStaticParams() {
  const hotels = await cachedClient(HotelsPathsQuery)

  return hotels
}

async function HotelPage({ params }: { params: any }) {
  const hotel = await cachedClient(HotelQuery, params, {
    next: { revalidate },
  })

  return <HotelDetail hotel={hotel} />
}

export default HotelPage
