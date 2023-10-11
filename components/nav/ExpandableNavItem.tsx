'use client'

import { cn } from '@/lib/utils'
import { ChevronDown } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

interface ExpandableNavItemProps {
  label: string
  links: {
    label: string
    href: string
  }[]
  black?: boolean
}

const ExpandableNavItem = ({ label, links, black }: ExpandableNavItemProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <div
      onMouseEnter={() => setIsOpen(true)}
      onClick={() => setIsOpen(true)}
      onMouseOver={() => setIsOpen(true)}
      onMouseDown={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      className='relative'
    >
      <p
        className={cn(
          'cursor-pointer flex gap-2 transition',
          black
            ? 'text-white hover:text-zinc-400'
            : 'text-black hover:text-zinc-600'
        )}
      >
        {label}
        <ChevronDown size={20} />
      </p>
      {isOpen && (
        <div className='grid absolute top-6 left-1/2 translate-x-[-50%] h-min p-4 rounded-md gap-2 border border-zinc-300 bg-white'>
          {links.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className='text-black hover:text-zinc-600 whitespace-nowrap'
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

export default ExpandableNavItem
