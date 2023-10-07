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
