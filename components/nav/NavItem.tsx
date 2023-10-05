import Link from 'next/link'

interface NavItemProps {
  label: string
  href: string
}

const NavItem = ({ label, href }: NavItemProps) => {
  return (
    <li>
      <Link href={href}>{label}</Link>
    </li>
  )
}

export default NavItem
