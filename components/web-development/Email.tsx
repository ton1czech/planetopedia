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
    <section className='bg-white'>
      <Container className='grid w-full h-full place-content-center'>
        <div>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
            {language === 'en' && 'contact us at'}
            {language === 'cs' && 'kontaktujte nás na'}
          </motion.p>
          <motion.h4
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            onClick={() => {
              setClicked(true)
              navigator.clipboard.writeText('info@planetopedia.agency')
            }}
            className='text-2xl font-bold transition cursor-pointer md:text-4xl lg:text-5xl xl:text-6xl hover:scale-105'
          >
            info@planetopedia.agency
          </motion.h4>
          <motion.p
            className={cn(
              'mt-4 text-right opacity-0 transition text-zinc-800/70',
              clicked && 'opacity-100'
            )}
          >
            {language === 'en' && 'Copied'}
            {language === 'cs' && 'Zkopírováno'}
          </motion.p>
        </div>
      </Container>
    </section>
  )
}

export default Email
