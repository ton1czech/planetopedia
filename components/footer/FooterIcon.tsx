import { LucideIcon } from 'lucide-react'
import Link from 'next/link'

interface FooterIconProps {
  icon: LucideIcon
  href: string
  name: string
}

const FooterIcon = ({ icon: Icon, href, name }: FooterIconProps) => {
  return (
    <Link href={href} target='_blank'>
      <Icon className='w-5 h-5 stroke-zinc-300 hover:stroke-zinc-400 transition' />
      <p className='sr-only'>{name}</p>
    </Link>
  )
}

export default FooterIcon
