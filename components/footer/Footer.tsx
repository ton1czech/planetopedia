'use client'

import { useLanguage } from '@/store/useLanguage'
import Link from 'next/link'
import FooterIcon from './FooterIcon'
import { Instagram, Linkedin, Mail, Phone, Youtube } from 'lucide-react'
import Container from '../Container'
import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

const Footer = () => {
  const pathname = usePathname()
  const { language } = useLanguage()

  const services = pathname.includes('services')

  return (
    <motion.footer
      initial={{ y: services ? 0 : 50, opacity: services ? 1 : 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      className={cn(
        '',
        services && 'sticky z-[120] snap-start scroll-mt-20 h-screen bg-black'
      )}
    >
      <Container className='hidden py-20 lg:block'>
        <div className='flex items-center justify-between lg:items-start mb-14 gap-y-14'>
          <div className='text-sm'>
            <p className='text-zinc-100'>
              {language === 'en' && (
                <>Dominik Grössl, Němčice 26, 34506 Němčice, Czech Republic</>
              )}
              {language === 'cs' && (
                <>Dominik Grössl, Němčice 26, 34506 Němčice, Česká Republika</>
              )}
              {language === 'de' && (
                <>
                  Dominik Grössl, Němčice 26, 34506 Němčice, Tsechische Republik
                </>
              )}
            </p>
            <p className='text-zinc-100'>
              {language === 'en' && <>ID No.: 14184397</>}
              {language === 'cs' && <>IČO: 14184397</>}
              {language === 'de' && <>ID No.: 14184397</>}
            </p>
            <p className='flex items-center gap-2 mt-2 text-zinc-400'>
              <Phone className='w-4 h-4' />
              +420 739 830 034
            </p>
            <p className='flex items-center gap-2 text-zinc-400'>
              <Mail className='w-4 h-4' />
              dominik@planetopedia.agency
            </p>
            <p className='flex items-center gap-2 text-zinc-400'>
              <Mail className='w-4 h-4' />
              info@planetopedia.agency
            </p>
          </div>

          <div className='flex items-center justify-center gap-x-2 md:gap-x-4'>
            <FooterIcon
              icon={Instagram}
              href='https://www.instagram.com/planetopedia/'
              name='instagram'
            />
            <FooterIcon
              icon={Linkedin}
              href='https://www.linkedin.com/company/planetopedia/'
              name='linkedin'
            />
            <FooterIcon
              icon={Youtube}
              href='https://www.youtube.com/@myplanetopedia/videos'
              name='youtube'
            />
          </div>
        </div>

        <div className='flex flex-row items-start justify-center text-sm lg:justify-between'>
          <p className='text-white'>
            &copy;{new Date().getFullYear()} Planetopedia,{' '}
            {language === 'en' && (
              <>founder Dominik Grössl. All rights reserved.</>
            )}
            {language === 'cs' && (
              <>zakladatel Dominik Grössl. Všechna práva vyhrazena.</>
            )}
            {language === 'de' && (
              <>Gründer Dominik Grössl. Alle Rechte vorbehalten.</>
            )}
          </p>

          <Link
            href='/personal-data-protection'
            className='text-center hover:underline text-zinc-400'
          >
            {language === 'en' && <>Personal data protection</>}
            {language === 'cs' && <>Ochrana osobních údajů</>}
            {language === 'de' && <>Schutz personenbezogener Daten</>}
          </Link>
        </div>

        <p className='mt-2 text-xs text-center text-zinc-400 lg:text-left'>
          {language === 'en' && <>website created by </>}
          {language === 'cs' && <>webové stránky vytvořil </>}
          {language === 'de' && <>Website erstellt von </>}
          <Link
            href='https://github.com/ton1czech'
            target='_blank'
            className='underline'
          >
            Daniel Anthony Baudyš
          </Link>
          {language === 'en' && <> / earth model by </>}
          {language === 'cs' && <> / model planety od </>}
          {language === 'de' && <> / Erdmodell von </>}
          <Link
            href='https://sketchfab.com/3d-models/earth-c2e4294c32ea4d8b850e152fc26aeeb4'
            target='_blank'
            className='underline'
          >
            @Abdullrahman
          </Link>
        </p>
      </Container>

      <Container className='py-20 lg:hidden'>
        <p className='text-sm text-center text-white mb-7'>
          {language === 'en' && <>All rights reserved</>}
          {language === 'cs' && <>Všechna práva vyhrazena.</>}
          {language === 'de' && <>Alle Rechte vorbehalten.</>}
          <br />
          &copy;{new Date().getFullYear()} Planetopedia,{' '}
          {language === 'en' && <>founder Dominik Grössl.</>}
          {language === 'cs' && <>zakladatel Dominik Grössl.</>}
          {language === 'de' && <>Gründer Dominik Grössl.</>}
        </p>

        <div className='text-sm mb-7'>
          <p className='text-zinc-100'>
            Dominik Grössl, Němčice 26, 34506 Němčice, Czech Republic
          </p>
          <p className='text-zinc-100'>ID No.: 14184397</p>
          <p className='flex items-center gap-2 mt-2 text-zinc-100'>
            <Phone className='w-4 h-4' />
            +420 739 830 034
          </p>
          <p className='flex items-center gap-2 text-zinc-400'>
            <Mail className='w-4 h-4' />
            dominik@planetopedia.agency
          </p>
          <p className='flex items-center gap-2 text-zinc-100'>
            <Mail className='w-4 h-4' />
            info@planetopedia.agency
          </p>
        </div>

        <div className='flex items-center justify-center gap-10 text-xs text-center text-zinc-400 mb-7'>
          <Link href='/personal-data-protection' className='hover:underline'>
            {language === 'en' && <>Personal data protection</>}
            {language === 'cs' && <>Ochrana osobních údajů</>}
            {language === 'de' && <>Schutz personenbezogener Daten</>}
          </Link>
        </div>

        <p className='text-sm text-center text-zinc-400 mb-7 lg:text-left'>
          {language === 'en' && <>website created by </>}
          {language === 'cs' && <>webové stránky vytvořil </>}
          {language === 'de' && <>Website erstellt von </>}
          <Link href='https://baudys.dev' target='_blank' className='underline'>
            Daniel Anthony Baudyš
          </Link>

          <br />

          {language === 'en' && <>earth model by </>}
          {language === 'cs' && <>model planety od </>}
          {language === 'de' && <>Erdmodell von </>}
          <Link
            href='https://sketchfab.com/3d-models/earth-c2e4294c32ea4d8b850e152fc26aeeb4'
            target='_blank'
            className='underline'
          >
            @Abdullrahman
          </Link>
        </p>

        <div className='flex items-center justify-center gap-x-2 md:gap-x-4'>
          <FooterIcon
            icon={Instagram}
            href='https://www.instagram.com/planetopedia/'
            name='instagram'
          />
          <FooterIcon
            icon={Linkedin}
            href='https://www.linkedin.com/company/planetopedia/'
            name='linkedin'
          />
          <FooterIcon
            icon={Youtube}
            href='https://www.youtube.com/@myplanetopedia/videos'
            name='youtube'
          />
        </div>
      </Container>
    </motion.footer>
  )
}

export default Footer
