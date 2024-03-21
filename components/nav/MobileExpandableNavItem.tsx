'use client'

import { cn } from '@/lib/utils'
import { ChevronDown, ChevronUp } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

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
  const ref = useRef<HTMLDivElement>(null)

  const Icon = isOpen ? ChevronUp : ChevronDown

  useEffect(() => {
    const handleOutsideClick = (event: any) => {
      if (isOpen && ref.current && !ref?.current?.contains(event.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('click', handleOutsideClick)

    return () => {
      document.removeEventListener('click', handleOutsideClick)
    }
  }, [isOpen])

  return (
    <div onClick={() => setIsOpen(prev => !prev)} className='relative'>
      <p
        className={cn(
          'cursor-pointer flex gap-2 transition text-3xl items-center whitespace-nowrap',
          black
            ? 'text-white hover:text-zinc-400'
            : 'text-black hover:text-zinc-600'
        )}
      >
        {label}
        <Icon size={20} />
      </p>
      {isOpen && (
        <div
          ref={ref}
          className='z-40 flex flex-col absolute top-9 left-1/2 translate-x-[-50%] h-min p-4 rounded-md gap-2'
        >
          {links.map(link => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className={cn(
                'text-2xl whitespace-nowrap',
                black
                  ? 'text-zinc-200 hover:text-zinc-600'
                  : 'text-zinc-800 hover:text-zinc-900'
              )}
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
