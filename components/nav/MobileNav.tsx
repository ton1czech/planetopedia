'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/store/useLanguage'
import { cn } from '@/lib/utils'
import { Facebook, Instagram, Linkedin, X } from 'lucide-react'
import MobileExpandableNavItem from './MobileExpandableNavItem'
import MobileNavItem from './MobileNavItem'
import Link from 'next/link'

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
      <X
        onClick={() => setIsOpen(false)}
        className={cn(
          'absolute top-5 right-5',
          black ? 'text-white' : 'text-black'
        )}
      />
      <motion.ul
        initial={{ y: 50, opacity: 0, x: '-50%' }}
        animate={{ y: 0, opacity: 1, x: '-50%' }}
        transition={{ delay: 0.5 }}
        className={cn(
          'flex flex-col gap-2 absolute left-1/2 top-40 -translate-x-1/2',
          black ? 'text-white' : 'text-black'
        )}
      >
        {/* <MobileNavItem
          label={
            language === 'en'
              ? 'Community'
              : language === 'cs'
              ? 'Komunita'
              : language === 'de'
              ? 'Gemeinschaft'
              : ''
          }
          href='/community'
          black={black}
          setIsOpen={setIsOpen}
        /> */}
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
                  ? 'Our Story'
                  : language === 'cs'
                  ? 'Náš Příběh'
                  : language === 'de'
                  ? 'Unsere Geschichte'
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
                  ? 'Pro Firmy'
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
        className='absolute flex items-center gap-5 -translate-x-1/2 left-1/2 bottom-56'
      >
        <Link href='https://www.instagram.com/planetopedia/' target='_blank'>
          <Instagram
            className={cn('', black ? 'text-white' : 'text-black')}
            size={30}
          />
        </Link>
        <Link
          href='https://www.linkedin.com/company/planetopedia/'
          target='_blank'
        >
          <Facebook
            className={cn('', black ? 'text-white' : 'text-black')}
            size={30}
          />
        </Link>

        <Link
          href='https://www.youtube.com/@myplanetopedia/videos'
          target='_blank'
        >
          <Linkedin
            className={cn('', black ? 'text-white' : 'text-black')}
            size={30}
          />
        </Link>
      </motion.div>
    </motion.div>
  )
}

export default MobileNav
