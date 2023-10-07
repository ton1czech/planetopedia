import { urlForImage } from '@/sanity/lib/image'
import Image from 'next/image'
import Link from 'next/link'

interface HotelProps {
  src: any
  name: string
  locationCz: string
  locationEn: string
  minutes: number
  href: string
}

const Hotel = ({
  src,
  name,
  locationCz,
  locationEn,
  minutes,
  href,
}: HotelProps) => {
  return (
    <Link href={`/blog/hotels/${href}`}>
      <div className='relative w-full aspect-video'>
        <Image src={src} fill alt={name} className='object-cover' />
      </div>
      <h3>{name}</h3>
      <p>{locationCz}</p>
      <p>{minutes} Minutes read</p>
    </Link>
  )
}

export default Hotel
