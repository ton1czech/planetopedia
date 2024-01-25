'use client'

import { useLanguage } from '@/store/useLanguage'
import Link from 'next/link'
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
        className='pt-6 mb-2 text-2xl font-semibold md:text-3xl lg:text-4xl xl:text-5xl md:pt-12 xl:pt-20'
      >
        {language === 'en' && <>Links</>}
        {language === 'cs' && <>Odkazy</>}
        {language === 'de' && <>Resultate</>}
      </motion.h2>

      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        className='space-y-2 overflow-hidden'
      >
        {links?.map(link => (
          <p className='truncate'>
            <span className='capitalize text-zinc-800'>{link.site}: </span>
            <Link
              href={link.url}
              className='underline text-zinc-600'
              target='_blank'
            >
              {link.url}
            </Link>
          </p>
        ))}
      </motion.div>
    </Container>
  )
}

export default Links
