import { cn } from '@/lib/utils'
import Link from 'next/link'

interface NavItemProps {
  label: string
  href: string
  black?: boolean
}

const NavItem = ({ label, href, black }: NavItemProps) => {
  return (
    <li>
      <Link
        href={href}
        className={cn(
          'transition',
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

export default NavItem
