'use client'

import { useLanguage } from '@/store/useLanguage'
import {
  Facebook,
  Instagram,
  LinkIcon,
  ShoppingCart,
  Youtube,
} from 'lucide-react'
import Link from 'next/link'
import { FaPinterest, FaTiktok } from 'react-icons/fa'
import Container from '../Container'
import { motion } from 'framer-motion'

interface LinksProps {
  links:
    | {
        site: string
        url: string
      }[]
    | undefined
}

const Links = ({ links }: LinksProps) => {
  const { language } = useLanguage(state => state)

  return (
    <Container>
      <motion.h2
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        className='text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold pt-6 md:pt-12 xl:pt-20 mb-2'
      >
        {language === 'en' && <>Links</>}
        {language === 'cs' && <>Odkazy</>}
        {language === 'de' && <>Resultate</>}
      </motion.h2>

      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        className='flex gap-4'
      >
        {links?.map(link => (
          <Link
            key={link.url}
            href={link.url}
            className='hover:scale-95 transition'
            target='_blank'
          >
            {link.site === 'web' && (
              <LinkIcon className='h-6 w-6 md:h-8 md:w-8 lg:h-10 lg:w-10' />
            )}
            {link.site === 'instagram' && (
              <Instagram className='h-6 w-6 md:h-8 md:w-8 lg:h-10 lg:w-10' />
            )}
            {link.site === 'facebook' && (
              <Facebook className='h-6 w-6 md:h-8 md:w-8 lg:h-10 lg:w-10' />
            )}
            {link.site === 'tiktok' && (
              <FaTiktok className='h-6 w-6 md:h-8 md:w-8 lg:h-10 lg:w-10' />
            )}
            {link.site === 'youtube' && (
              <Youtube className='h-6 w-6 md:h-8 md:w-8 lg:h-10 lg:w-10' />
            )}
            {link.site === 'eshop' && (
              <ShoppingCart className='h-6 w-6 md:h-8 md:w-8 lg:h-10 lg:w-10' />
            )}
            {link.site === 'pinterest' && (
              <FaPinterest className='h-6 w-6 md:h-8 md:w-8 lg:h-10 lg:w-10' />
            )}
          </Link>
        ))}
      </motion.div>
    </Container>
  )
}

export default Links
