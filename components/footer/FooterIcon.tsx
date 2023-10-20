import { LucideIcon } from 'lucide-react'
import Link from 'next/link'

interface FooterIconProps {
  icon: LucideIcon
  href: string
}

const FooterIcon = ({ icon: Icon, href }: FooterIconProps) => {
  return (
    <Link href={href}>
      <Icon className='w-5 h-5 md:w-7 md:h-7 lg:w-8 lg:h-8 stroke-white hover:stroke-zinc-300 transition' />
    </Link>
  )
}

export default FooterIcon
