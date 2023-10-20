'use client'

import { useLanguage } from '@/store/useLanguage'
import Link from 'next/link'
import FooterIcon from './FooterIcon'
import { Instagram, Linkedin, Youtube } from 'lucide-react'
import Container from '../Container'

const Footer = () => {
  const { language } = useLanguage()

  return (
    <footer>
      <Container className='py-20'>
        <div className='grid md:grid-cols-2 mb-10 md:mb-20 gap-y-4'>
          <h2 className='uppercase text-2xl md:text-3xl lg:text-4xl font-semibold text-white text-center md:text-left'>
            {language === 'en' && <>follow us on social media</>}
            {language === 'cs' && <>sleduj nás na sociálních sítích</>}
          </h2>
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
        <p className='mb-4 text-xs text-center text-zinc-500'>
          {language === 'en' && <> earth model by </>}
          {language === 'cs' && <> model planety od </>}
          <Link href='https://sketchfab.com/3d-models/earth-c2e4294c32ea4d8b850e152fc26aeeb4'>
            @Abdullrahman
          </Link>
        </p>
        <p className='text-sm text-center text-white'>
          &copy;{new Date().getFullYear()} Planetopedia.
          {language === 'en' && <> All rights reserved. Created by </>}
          {language === 'cs' && <> Všechna práva vyhrazena. Vytvořil </>}
          <Link href='https://github.com/ton1czech' className='underline'>
            Daniel Anthony Baudyš
          </Link>
        </p>
      </Container>
    </footer>
  )
}

export default Footer
