import { cn } from '@/lib/utils'
import { LucideIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

interface MemberProps {
  src: string
  name: string
  role: string
  body: string
  links: {
    icon: LucideIcon
    href: string
  }[]
  imagetop?: boolean
}

const Member = ({ src, name, body, links, role, imagetop }: MemberProps) => {
  return (
    <div>
      <div className='aspect-square w-full relative rounded-3xl'>
        <Image
          src={src}
          fill
          className={cn(
            'object-cover rounded-3xl',
            imagetop ? 'object-top' : 'object-center'
          )}
          alt={name}
        />
      </div>
      <h2 className='font-bold text-4xl sm:text-5xl md:text-4xl lg:text-5xl pt-4 drop-shadow-lg'>
        {name}
      </h2>
      <h5 className='text-gold text-xl md:text-2xl pb-3 md:pb-5 drop-shadow-md italic'>
        {role}
      </h5>
      <p className='text-justify md:text-lg'>{body}</p>
      <div className='flex gap-2 pt-3'>
        {links.map(({ href, icon: Icon }) => (
          <Link href={href}>
            {<Icon className='hover:stroke-yellow-700 transition' />}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Member
