import { urlForImage } from '@/sanity/lib/image'
import { Instagram } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

interface CreatorProps {
  src: any
  name: string
  instagram: string
}

const Creator = ({ src, name, instagram }: CreatorProps) => {
  return (
    <Link
      href={`https://www.instagram.com/${instagram}/`}
      className='group'
      target='_blank'
    >
      <div className='relative w-full overflow-hidden transition duration-500 aspect-square group-hover:shadow-2xl'>
        <Image
          src={urlForImage(src).url()}
          fill
          alt={name}
          className='object-cover transition duration-500 group-hover:scale-110'
        />

        <div className='absolute inset-0 grid transition duration-500 bg-transparent group-hover:bg-black/50 place-content-center'>
          <Instagram
            size={45}
            className='transition duration-500 group-hover:stroke-white stroke-transparent'
          />
        </div>
      </div>

      <h3 className='text-lg font-semibold text-center'>@{instagram}</h3>
      <p className='text-center text-zinc-600'>{name}</p>
    </Link>
  )
}

export default Creator
