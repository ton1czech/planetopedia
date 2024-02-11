'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useLanguage } from '@/store/useLanguage'
import Container from '../Container'
import { Button } from '../ui/button'
import Link from 'next/link'

const srcs = [
  '/services/for-brands/web/1.webp',
  '/services/for-brands/web/2.webp',
  '/services/for-brands/web/3.webp',
]

const Web = () => {
  const { language } = useLanguage(state => state)

  const [src, setSrc] = useState<string>(srcs[0])
  const [index, setIndex] = useState<number>(0)

  useEffect(() => {
    const interval = setInterval(() => {
      const nextImageIndex = (index + 1) % srcs.length
      setIndex(nextImageIndex)
      setSrc(srcs[nextImageIndex])
    }, 3000)

    return () => clearInterval(interval)
  }, [index, srcs])

  return (
    <div className='sticky top-0 snap-start scroll-mt-20 w-screen z-[60] bg-white h-[calc(100vh-80px)] grid place-content-center'>
      <Container>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <h2 className='mb-6 text-2xl font-bold text-center text-black md:mb-20 -mt-28 md:text-3xl lg:text-4xl'>
            {language === 'en' && <>We develop websites, including this one.</>}
            {language === 'cs' && <>Vyvíjíme webové stránky, včetně této.</>}
            {language === 'de' && (
              <>wir entwickeln Websites, einschließlich dieser hier</>
            )}
          </h2>
          <div className='grid md:grid-cols-[4fr_6fr] md:gap-6'>
            <div>
              <p className='mx-auto mb-6 text-justify text-black'>
                {language === 'en' && (
                  <>
                    Our web development combines innovative technologies with a
                    focus on speed, clear display on all devices, and high
                    rankings in search engines thanks to SEO. Every detail is
                    carefully considered to not only appeal to your visitors but
                    also transform them into loyal customers. With us, you have
                    a guarantee of success and professional support. Your online
                    presence is our passion.
                  </>
                )}
                {language === 'cs' && (
                  <>
                    Naše tvorba webu spojuje inovativní technologie s ohledem na
                    rychlost, přehledné zobrazení na všech zařízeních a vysoké
                    umístění ve vyhledávačích díky SEO. Každý detail je pečlivě
                    promyšlen, aby váš web nejen oslovil, ale také přetvořil
                    návštěvníky na loajální zákazníky. S námi máte záruku
                    úspěchu a profesionální podpory. Vaše přítomnost online je
                    naší vášní.
                  </>
                )}
                {language === 'de' && <></>}
              </p>
              <Link href='/web-development'>
                <Button className='w-full max-md:hidden'>
                  {language === 'en' && 'Learn More'}
                  {language === 'cs' && 'Dozvědět se více'}
                  {language === 'de' && ''}
                </Button>
              </Link>
            </div>
            <Image src={src} alt='website' width={1100} height={650} />
            <Link href='/web-development'>
              <Button className='w-full mt-12 md:hidden'>
                {language === 'en' && 'Learn More'}
                {language === 'cs' && 'Dozvědět se více'}
                {language === 'de' && ''}
              </Button>
            </Link>
          </div>
        </motion.div>
      </Container>
    </div>
  )
}

export default Web
