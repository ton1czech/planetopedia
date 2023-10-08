'use client'

import { useLanguage } from '@/store/useLanguage'
import Link from 'next/link'

const Footer = () => {
  const { language } = useLanguage()

  return (
    <footer className='py-20'>
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
    </footer>
  )
}

export default Footer
