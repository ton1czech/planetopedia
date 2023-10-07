import { groq } from 'next-sanity'

export const HotelsQuery = groq`
    *[_type=='hotel'] {
        ...,
    } | order(order desc)
`

export const HotelsPathsQuery = groq`*[_type == "hotel" && defined(slug.current)][]{
    "params": { "slug": slug.current }
  }
`

export const HotelQuery = groq`*[_type == "hotel" && slug.current == $slug][0]{
    ...
  }
`

export const RestaurantsQuery = groq`
    *[_type=='restaurant'] {
        ...,
    } | order(order desc)
`

export const RestaurantsPathsQuery = groq`*[_type == "restaurant" && defined(slug.current)][]{
    "params": { "slug": slug.current }
  }
`

export const RestaurantQuery = groq`*[_type == "restaurant" && slug.current == $slug][0]{
    ...
  }
`
