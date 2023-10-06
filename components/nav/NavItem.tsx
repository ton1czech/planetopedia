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
          'text-lg hover:underline hover:underline-offset-4',
          black ? 'text-white' : 'text-black'
        )}
      >
        {label}
      </Link>
    </li>
  )
}

export default NavItem
