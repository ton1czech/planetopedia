'use client'

import { cn } from '@/lib/utils'
import { LucideIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

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
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      <div className='relative w-full aspect-square'>
        <Image
          src={src}
          fill
          className={cn(
            'object-cover',
            imagetop ? 'object-top' : 'object-center'
          )}
          alt={name}
        />
      </div>
      <h2 className='pt-4 text-2xl font-semibold sm:text-3xl md:text-2xl drop-shadow-lg'>
        {name}
      </h2>
      <h5 className='pb-3 text-xl italic text-zinc-500 md:pb-5 drop-shadow-md'>
        {role}
      </h5>
      <p className='text-justify md:text-lg'>{body}</p>
      <div className='flex gap-2 pt-3'>
        {links.map(({ href, icon: Icon }) => (
          <Link href={href} key={href} target='_blank'>
            {<Icon className='transition hover:stroke-zinc-600' />}
          </Link>
        ))}
      </div>
    </motion.div>
  )
}

export default Member
