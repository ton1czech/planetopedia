import { LucideIcon } from 'lucide-react'
import Link from 'next/link'

interface FooterIconProps {
  icon: LucideIcon
  href: string
}

const FooterIcon = ({ icon: Icon, href }: FooterIconProps) => {
  return (
    <Link href={href} target='_blank'>
      <Icon className='w-8 h-8 stroke-zinc-300 hover:stroke-zinc-400 transition' />
    </Link>
  )
}

export default FooterIcon
