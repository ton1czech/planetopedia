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
  index: number
}

const Member = ({
  src,
  name,
  body,
  links,
  role,
  imagetop,
  index,
}: MemberProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: index * 0.5 }}
    >
      <div className='relative w-full aspect-square rounded-3xl'>
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
      <h2 className='pt-4 text-4xl font-bold sm:text-5xl md:text-4xl lg:text-5xl drop-shadow-lg font-cantarell'>
        {name}
      </h2>
      <h5 className='pb-3 text-xl italic text-gold md:text-2xl md:pb-5 drop-shadow-md font-cantarell'>
        {role}
      </h5>
      <p className='text-justify md:text-lg'>{body}</p>
      <div className='flex gap-2 pt-3'>
        {links.map(({ href, icon: Icon }) => (
          <Link href={href} key={href}>
            {<Icon className='transition hover:stroke-yellow-700' />}
          </Link>
        ))}
      </div>
    </motion.div>
  )
}

export default Member
