'use client'

import { useEffect, useState } from 'react'
import Container from '../Container'
import { useLanguage } from '@/store/useLanguage'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

const Email = () => {
  const { language } = useLanguage()

  const [clicked, setClicked] = useState(false)

  useEffect(() => {
    const delay = setTimeout(() => {
      setClicked(false)
    }, 3000)

    return () => clearTimeout(delay)
  }, [clicked])

  return (
    <div className='sticky z-[80] bg-black snap-start scroll-mt-20 w-screen h-[calc(100vh-80px)]'>
      <Container className='grid place-content-center w-full h-full'>
        <div className='text-white'>
          <p>
            {language === 'en' && 'contact us at'}
            {language === 'cs' && 'kontaktujte nás na'}
            {language === 'de' && 'kontaktieren Sie uns unter'}
          </p>
          <h4
            onClick={() => {
              setClicked(true)
              navigator.clipboard.writeText('info@planetopedia.agency')
            }}
            className='font-bold text-2xl md:text-4xl lg:text-5xl xl:text-6xl hover:scale-105 transition cursor-pointer'
          >
            info@planetopedia.agency
          </h4>
          <motion.p
            className={cn(
              'mt-4 text-right opacity-0 transition text-zinc-200/70',
              clicked && 'opacity-100'
            )}
          >
            {language === 'en' && 'Copied'}
            {language === 'cs' && 'Zkopírováno'}
            {language === 'de' && 'Kopiert'}
          </motion.p>
        </div>
      </Container>
    </div>
  )
}

export default Email
