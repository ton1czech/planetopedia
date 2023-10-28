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
        'fixed inset-0 w-screen h-screen z-[99999] grid justify-between origin-top',
        black ? 'bg-black' : 'bg-white'
      )}
    >
      <motion.ul
        initial={{ y: 50, opacity: 0, x: '-50%' }}
        animate={{ y: 0, opacity: 1, x: '-50%' }}
        transition={{ delay: 0.5 }}
        className={cn(
          'flex flex-col gap-2 absolute left-1/2 top-40 -translate-x-1/2',
          black ? 'text-white' : 'text-black'
        )}
      >
        <MobileNavItem
          label={
            language === 'en'
              ? 'Our Creators'
              : language === 'cs'
              ? 'Naši Tvůrci'
              : language === 'de'
              ? 'Unsere Schöpfer'
              : ''
          }
          href='/creators'
          black={black}
          setIsOpen={setIsOpen}
        />
        <MobileExpandableNavItem
          label='Blog'
          links={[
            {
              href: '/blog/hotels',
              label:
                language === 'en'
                  ? 'Luxury Hotels'
                  : language === 'cs'
                  ? 'Luxusní Hotely'
                  : language === 'de'
                  ? 'Luxushotels'
                  : '',
            },
            {
              label:
                language === 'en'
                  ? 'Luxury Restaurant'
                  : language === 'cs'
                  ? 'Luxusní Restaurace'
                  : language === 'de'
                  ? 'Luxuriöses Restaurant'
                  : '',
              href: '/blog/restaurants',
            },
          ]}
          black={black}
          setIsOpen={setIsOpen}
        />
        <MobileExpandableNavItem
          label={
            language === 'en'
              ? 'About'
              : language === 'cs'
              ? 'O Nás'
              : language === 'de'
              ? 'Über'
              : ''
          }
          links={[
            {
              label:
                language === 'en'
                  ? 'Team'
                  : language === 'cs'
                  ? 'Tým'
                  : language === 'de'
                  ? 'Team'
                  : '',
              href: '/about/team',
            },
            {
              label:
                language === 'en'
                  ? 'Company'
                  : language === 'cs'
                  ? 'Společnost'
                  : language === 'de'
                  ? 'Unternehmen'
                  : '',
              href: '/about/company',
            },
            {
              label:
                language === 'en'
                  ? 'Clients'
                  : language === 'cs'
                  ? 'Klienti'
                  : language === 'de'
                  ? 'Kunden'
                  : '',
              href: '/about/clients',
            },
            {
              label:
                language === 'en'
                  ? 'Feedback'
                  : language === 'cs'
                  ? 'Zpětná Vazba'
                  : language === 'de'
                  ? 'Rückmeldung'
                  : '',
              href: '/about/feedback',
            },
          ]}
          black={black}
          setIsOpen={setIsOpen}
        />
        <MobileExpandableNavItem
          label={
            language === 'en'
              ? 'Services'
              : language === 'cs'
              ? 'Služby'
              : language === 'de'
              ? 'Dienstleistungen'
              : ''
          }
          links={[
            {
              label:
                language === 'en'
                  ? 'For Creators'
                  : language === 'cs'
                  ? 'Pro Tvůrce'
                  : language === 'de'
                  ? 'Für Schöpfer'
                  : '',
              href: '/services/for-creators',
            },
            {
              label:
                language === 'en'
                  ? 'For Hotels'
                  : language === 'cs'
                  ? 'Pro Hotely'
                  : language === 'de'
                  ? 'Für Hotels'
                  : '',
              href: '/services/for-hotels',
            },
            {
              label:
                language === 'en'
                  ? 'For Brands'
                  : language === 'cs'
                  ? 'Pro Značky'
                  : language === 'de'
                  ? 'Für Marken'
                  : '',
              href: '/services/for-brands',
            },
          ]}
          black={black}
          setIsOpen={setIsOpen}
        />
        <MobileNavItem
          label={
            language === 'en'
              ? 'Case Studies'
              : language === 'cs'
              ? 'Případové studie'
              : language === 'de'
              ? 'Fallstudien'
              : ''
          }
          href='/case-studies'
          black={black}
          setIsOpen={setIsOpen}
        />
      </motion.ul>
      <motion.div
        initial={{ opacity: 0, y: 50, x: '-50%' }}
        animate={{ opacity: 1, y: 0, x: '-50%' }}
        transition={{ duration: 0.4, delay: 0.7 }}
        className='flex gap-5 items-center absolute left-1/2 bottom-56 -translate-x-1/2'
      >
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
      </motion.div>
    </motion.div>
  )
}

export default MobileNav
