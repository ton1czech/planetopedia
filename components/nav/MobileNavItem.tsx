import { cn } from '@/lib/utils'
import Link from 'next/link'

interface MobileNavItemProps {
  label: string
  href: string
  black?: boolean
  setIsOpen: any
}

const MobileNavItem = ({
  label,
  href,
  black,
  setIsOpen,
}: MobileNavItemProps) => {
  return (
    <li>
      <Link
        href={href}
        onClick={() => setIsOpen(false)}
        className={cn(
          'transition text-3xl whitespace-nowrap',
          black
            ? 'text-white hover:text-zinc-400'
            : 'text-black hover:text-zinc-600'
        )}
      >
        {label}
      </Link>
    </li>
  )
}

export default MobileNavItem
