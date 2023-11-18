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
      <Container className='py-20 hidden lg:block'>
        <div className='flex justify-between items-center lg:items-start mb-14 gap-y-14'>
          <div>
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

          <div className='flex gap-x-2 md:gap-x-4 items-center justify-center'>
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

        <div className='flex justify-center lg:justify-between items-start flex-row'>
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

          <div className='flex gap-10 text-zinc-400 mt-0 text-center'>
            <Link href='/personal-data-protection' className='hover:underline'>
              {language === 'en' && <>Personal data protection</>}
              {language === 'cs' && <>Ochrana osobních údajů</>}
              {language === 'de' && <>Schutz personenbezogener Daten</>}
            </Link>
            {/* <Link href='/terms-and-conditions' className='hover:underline'>
              {language === 'en' && <>Terms and conditions</>}
              {language === 'cs' && <>Obchodní podmínky</>}
              {language === 'de' && <>Bedingungen und Konditionen</>}
            </Link> */}
            <p>
              {language === 'en' && <>Terms and conditions</>}
              {language === 'cs' && <>Obchodní podmínky</>}
              {language === 'de' && <>Bedingungen und Konditionen</>}
            </p>
          </div>
        </div>

        <p className='text-sm text-zinc-400 mt-2 text-center lg:text-left'>
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
        <p className='text-white text-center mb-7 text-sm'>
          {language === 'en' && <>All rights reserved</>}
          {language === 'cs' && <>Všechna práva vyhrazena.</>}
          {language === 'de' && <>Alle Rechte vorbehalten.</>}
          <br />
          &copy;{new Date().getFullYear()} Planetopedia,{' '}
          {language === 'en' && <>founder Dominik Grössl.</>}
          {language === 'cs' && <>zakladatel Dominik Grössl.</>}
          {language === 'de' && <>Gründer Dominik Grössl.</>}
        </p>

        <div className='mb-7 text-sm'>
          <p className='text-zinc-100'>
            Dominik Grössl, Němčice 26, 34506 Němčice, Czech Republic
          </p>
          <p className='text-zinc-100'>ID No.: 14184397</p>
          <p className='flex gap-2 items-center mt-2 text-zinc-100'>
            <Phone className='w-4 h-4' />
            +420 739 830 034
          </p>
          <p className='flex gap-2 items-center text-zinc-100'>
            <Mail className='w-4 h-4' />
            dominik@planetopedia.agency
          </p>
        </div>

        <div className='flex gap-10 text-zinc-400 mb-7 text-center text-xs items-center justify-center'>
          <Link href='/personal-data-protection' className='hover:underline'>
            {language === 'en' && <>Personal data protection</>}
            {language === 'cs' && <>Ochrana osobních údajů</>}
            {language === 'de' && <>Schutz personenbezogener Daten</>}
          </Link>
          {/* <Link href='/terms-and-conditions' className='hover:underline'>
            {language === 'en' && <>Terms and conditions</>}
            {language === 'cs' && <>Obchodní podmínky</>}
            {language === 'de' && <>Bedingungen und Konditionen</>}
          </Link> */}
          <p>
            {language === 'en' && <>Terms and conditions</>}
            {language === 'cs' && <>Obchodní podmínky</>}
            {language === 'de' && <>Bedingungen und Konditionen</>}
          </p>
        </div>

        <p className='text-sm text-zinc-400 mb-7 text-center lg:text-left'>
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

        <div className='flex gap-x-2 md:gap-x-4 items-center justify-center'>
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
