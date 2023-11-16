'use client'

import { useLanguage } from '@/store/useLanguage'
import Link from 'next/link'
import FooterIcon from './FooterIcon'
import { Instagram, Linkedin, Youtube } from 'lucide-react'
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
        <div className='grid place-content-center mb-10 md:mb-20 gap-y-4'>
          <div className='flex gap-x-2 md:gap-x-4 items-center md:justify-end justify-center'>
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

        <div className='flex justify-center items-center text-zinc-300 gap-10 mb-20'>
          <Link href='/personal-data-protection'>
            {language === 'en' && <>Personal data protection</>}
            {language === 'cs' && <>Ochrana osobních údajů</>}
            {language === 'de' && <>Schutz personenbezogener Daten</>}
          </Link>
          <Link href='/terms-and-conditions'>
            {language === 'en' && <>Obchodní podmínky</>}
            {language === 'cs' && <>Terms and conditions</>}
            {language === 'de' && <>Bedingungen und Konditionen</>}
          </Link>
        </div>

        <p className='mb-4 text-xs text-center text-zinc-500'>
          {language === 'en' && <> earth model by </>}
          {language === 'cs' && <> model planety od </>}
          {language === 'cs' && <> Erdmodell von </>}
          <Link
            href='https://sketchfab.com/3d-models/earth-c2e4294c32ea4d8b850e152fc26aeeb4'
            target='_blank'
            className='underline'
          >
            @Abdullrahman
          </Link>
        </p>

        <p className='text-sm text-center text-white'>
          &copy;{new Date().getFullYear()} Planetopedia.
          {language === 'en' && <> All rights reserved. Created by </>}
          {language === 'cs' && <> Všechna práva vyhrazena. Vytvořil </>}
          {language === 'de' && <> Alle Rechte vorbehalten. Erstellt von </>}
          <Link
            href='https://github.com/ton1czech'
            target='_blank'
            className='underline'
          >
            Daniel Anthony Baudyš
          </Link>
        </p>
      </Container>
    </motion.footer>
  )
}

export default Footer
