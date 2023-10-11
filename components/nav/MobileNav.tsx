'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/store/useLanguage'
import { cn } from '@/lib/utils'
import { Facebook, Instagram, Linkedin } from 'lucide-react'
import MobileExpandableNavItem from './MobileExpandableNavItem'
import MobileNavItem from './MobileNavItem'

interface MobileNavProps {
  black?: boolean
  setIsOpen: any
}

const MobileNav = ({ black, setIsOpen }: MobileNavProps) => {
  const { language } = useLanguage(state => state)

  return (
    <motion.div
      initial={{ scaleY: 0 }}
      animate={{
        scaleY: 1,
        transition: {
          duration: 0.5,
          ease: [0.12, 0, 0.39, 0],
        },
      }}
      exit={{
        scaleY: 0,
        transition: {
          duration: 0.5,
          ease: [0.22, 1, 0.36, 1],
        },
      }}
      className={cn(
        'fixed inset-0 w-screen h-screen z-40 grid justify-between origin-top',
        black ? 'bg-black' : 'bg-white'
      )}
    >
      <ul
        className={cn(
          'flex flex-col gap-2 absolute left-1/2 top-40 -translate-x-1/2',
          black ? 'text-white' : 'text-black'
        )}
      >
        <MobileNavItem
          label={language === 'en' ? 'Our Creators' : 'Naši Tvůrci'}
          href='/creators'
          black={black}
          setIsOpen={setIsOpen}
        />
        <MobileExpandableNavItem
          label='Blog'
          links={[
            {
              label: language === 'en' ? 'Luxury Hotels' : 'Luxusní Hotely',
              href: '/blog/hotels',
            },
            {
              label:
                language === 'en' ? 'Luxury Restaurant' : 'Luxusní Restaurace',
              href: '/blog/restaurants',
            },
          ]}
          black={black}
          setIsOpen={setIsOpen}
        />
        <MobileExpandableNavItem
          label={language === 'en' ? 'About' : 'O Nás'}
          links={[
            {
              label: language === 'en' ? 'Team' : 'Tým',
              href: '/about/team',
            },
            {
              label: language === 'en' ? 'Company' : 'Společnost',
              href: '/about/company',
            },
            {
              label: language === 'en' ? 'Clients' : 'Klienti',
              href: '/about/clients',
            },
            {
              label: language === 'en' ? 'Feedback' : 'Zpětná Vazba',
              href: '/about/feedback',
            },
          ]}
          black={black}
          setIsOpen={setIsOpen}
        />
        <MobileExpandableNavItem
          label={language === 'en' ? 'Services' : 'Služby'}
          links={[
            {
              label: language === 'en' ? 'For Creators' : 'Pro Tvůrce',
              href: '/services/for-creators',
            },
            {
              label: language === 'en' ? 'For Hotels' : 'Pro Hotely',
              href: '/services/for-hotels',
            },
            {
              label: language === 'en' ? 'For Brands' : 'Pro Značky',
              href: '/services/for-brands',
            },
          ]}
          black={black}
          setIsOpen={setIsOpen}
        />
      </ul>
      <div className='flex gap-5 items-center absolute left-1/2 bottom-56 -translate-x-1/2'>
        <Instagram
          className={cn('', black ? 'text-white' : 'text-black')}
          size={30}
        />
        <Facebook
          className={cn('', black ? 'text-white' : 'text-black')}
          size={30}
        />
        <Linkedin
          className={cn('', black ? 'text-white' : 'text-black')}
          size={30}
        />
      </div>
    </motion.div>
  )
}

export default MobileNav
