'use client'

import { ChevronDown } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

interface ExpandableNavItemProps {
  label: string
  links: {
    label: string
    href: string
  }[]
}

const ExpandableNavItem = ({ label, links }: ExpandableNavItemProps) => {
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
      <p className='cursor-pointer flex gap-2 text-white'>
        {label}
        <ChevronDown size={20} />
      </p>
      {isOpen && (
        <div className='grid absolute top-6 left-1/2 translate-x-[-50%] bg-white h-max p-4 rounded-md gap-2'>
          {links.map(link => (
            <Link
              href={link.href}
              className='text-black hover:underline whitespace-nowrap'
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
