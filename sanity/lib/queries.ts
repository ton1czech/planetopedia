import { groq } from 'next-sanity'

export const HotelsQuery = groq`
    *[_type=='hotel'] {
        ...,
    } | order(_createdAt desc)
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
    } | order(_createdAt desc)
`

export const RestaurantsPathsQuery = groq`*[_type == "restaurant" && defined(slug.current)][]{
    "params": { "slug": slug.current }
  }
`

export const RestaurantQuery = groq`*[_type == "restaurant" && slug.current == $slug][0]{
    ...
  }
`
