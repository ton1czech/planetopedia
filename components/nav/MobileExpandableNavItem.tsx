'use client'

import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import { ChevronDown, ChevronUp } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

interface MobileExpandableNavItemProps {
  label: string
  links: {
    label: string
    href: string
  }[]
  black?: boolean
  setIsOpen: any
}

const MobileExpandableNavItem = ({
  label,
  links,
  black,
  setIsOpen: setIsMenuOpen,
}: MobileExpandableNavItemProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const Icon = isOpen ? ChevronUp : ChevronDown

  return (
    <div onClick={() => setIsOpen(prev => !prev)} className='relative'>
      <p
        className={cn(
          'cursor-pointer flex gap-2 transition text-3xl items-center',
          black
            ? 'text-white hover:text-zinc-400'
            : 'text-black hover:text-zinc-600'
        )}
      >
        {label}
        <Icon size={20} />
      </p>
      {isOpen && (
        <div className='z-40 grid absolute top-9 left-1/2 translate-x-[-50%] h-min p-4 rounded-md gap-2 border border-zinc-300 bg-white'>
          {links.map(link => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className='text-black hover:text-zinc-600 whitespace-nowrap text-2xl'
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

export default MobileExpandableNavItem
