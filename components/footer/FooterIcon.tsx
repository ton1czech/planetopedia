import { LucideIcon } from 'lucide-react'
import Link from 'next/link'

interface FooterIconProps {
  icon: LucideIcon
  href: string
}

const FooterIcon = ({ icon: Icon, href }: FooterIconProps) => {
  return (
    <Link href={href}>
      <Icon className='w-6 h-6 stroke-white hover:stroke-zinc-300 transition' />
    </Link>
  )
}

export default FooterIcon
