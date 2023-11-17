'use client'

import { useLanguage } from '@/store/useLanguage'
import Link from 'next/link'
import FooterIcon from './FooterIcon'
import { Instagram, Linkedin, Mail, Phone, Youtube } from 'lucide-react'
import Container from '../Container'
import { motion } from 'framer-motion'

const Footer = () => {
  const { language } = useLanguage()

  return (
    <motion.footer
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
    >
      <Container className='py-20'>
        <div className='flex justify-between items-center lg:items-start mb-14 flex-col lg:flex-row gap-y-14'>
          <div className='order-2 lg:order-1'>
            <p className='text-zinc-100'>
              Dominik Grössl, Němčice 26, 34506 Němčice, Czech Republic
            </p>
            <p className='text-zinc-100'>ID No.: 14184397</p>
            <p className='flex gap-2 items-center mt-2 text-zinc-400'>
              <Phone className='w-4 h-4' />
              +420 739 830 034
            </p>
            <p className='flex gap-2 items-center text-zinc-400'>
              <Mail className='w-4 h-4' />
              dominik@planetopedia.agency
            </p>
          </div>

          <div className='flex gap-x-2 md:gap-x-4 items-center md:justify-end justify-center order-1 lg:order-2'>
            <FooterIcon
              icon={Instagram}
              href='https://www.instagram.com/planetopedia/'
            />
            <FooterIcon
              icon={Linkedin}
              href='https://www.linkedin.com/company/planetopedia/'
            />
            <FooterIcon
              icon={Youtube}
              href='https://www.youtube.com/@myplanetopedia/videos'
            />
          </div>
        </div>

        <div className='flex justify-center items-center lg:justify-between lg:items-start flex-col lg:flex-row'>
          <p className='text-white order'>
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

          <div className='flex gap-10 text-zinc-400 mt-14 lg:mt-0 text-center'>
            <Link href='/personal-data-protection'>
              {language === 'en' && <>Personal data protection</>}
              {language === 'cs' && <>Ochrana osobních údajů</>}
              {language === 'de' && <>Schutz personenbezogener Daten</>}
            </Link>
            <Link href='/terms-and-conditions'>
              {language === 'en' && <>Terms and conditions</>}
              {language === 'cs' && <>Obchodní podmínky</>}
              {language === 'de' && <>Bedingungen und Konditionen</>}
            </Link>
          </div>
        </div>

        <p className='text-sm text-zinc-400 mt-14 lg:mt-2 text-center lg:text-left'>
          {language === 'en' && <>website created by </>}
          {language === 'cs' && <>webové stránky vytvořil </>}
          {language === 'de' && <>Website erstellt von </>}
          <Link
            href='https://github.com/ton1czech'
            target='_blank'
            className='underline'
          >
            Daniel Anthony Baudyš /
          </Link>
          <br className='lg:hidden' />
          {language === 'en' && <> earth model by </>}
          {language === 'cs' && <> model planety od </>}
          {language === 'de' && <> Erdmodell von </>}
          <Link
            href='https://sketchfab.com/3d-models/earth-c2e4294c32ea4d8b850e152fc26aeeb4'
            target='_blank'
            className='underline'
          >
            @Abdullrahman
          </Link>
        </p>
      </Container>
    </motion.footer>
  )
}

export default Footer
