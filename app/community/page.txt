import CreatorsGrid from '@/components/creators/CreatorsGrid'
import { cachedClient } from '@/sanity/lib/client'
import { CreatorsQuery } from '@/sanity/lib/queries'

export const revalidate = 60

export default async function Creators() {
  const creators = await cachedClient(CreatorsQuery)

  return <CreatorsGrid creators={creators} />
}
