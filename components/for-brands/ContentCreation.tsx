'use client'

import { forBrands } from '@/database/for-brands'
import Image from 'next/image'
import React from 'react'
import Container from '../Container'
import { useLanguage } from '@/store/useLanguage'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

const ContentCreation = () => {
  const { language } = useLanguage(state => state)

  return (
    <div className='sticky top-0 snap-start scroll-mt-20 w-screen h-[calc(100vh-80px)] z-40 bg-white grid place-content-center'>
      <Container>
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className='text-black text-justify lg:text-center max-w-[90ch] mx-auto mb-6'
        >
          {language === 'en' && (
            <>
              Because our team is spread <b>worldwide</b>, we can reach many of
              the most beautiful locations on Earth to successfully capture
              <b> your products/services </b>at its best and realize the
              <b> goal </b>you want <b> to achieve </b>as a brand.
            </>
          )}
          {language === 'cs' && (
            <>
              Protože je náš tým rozšířen <b>po celém světě</b>, můžeme se
              dostat na mnoho nejkrásnějších míst na Zemi, abychom úspěšně
              zachytili<b> vaše produkty/služby </b>v tom nejlepším světle a
              realizovali <b>cíl,</b> kterého chcete jako značka dosáhnout.
            </>
          )}
          {language === 'de' && (
            <>
              Da unser Team <b>weltweit </b>verteilt ist, können wir viele der
              schönsten Orte der Welt erreichen, um
              <b> Ihre Produkte/Dienstleistungen </b>von ihrer besten Seite zu
              zeigen und das <b>Ziel</b>, das Sie als Marke erreichen wollen, zu
              verwirklichen.
            </>
          )}
        </motion.p>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className='grid grid-cols-2 gap-1 sm:grid-cols-3 lg:grid-cols-4'
        >
          {forBrands.map(item => (
            <>
              {item.content.map(image => (
                <Image
                  src={image.src}
                  alt='content creation'
                  width={600}
                  height={650}
                  className={cn(
                    'object-cover w-full aspect-square',
                    image.noPhone && 'hidden lg:block'
                  )}
                  key={image.src}
                />
              ))}
            </>
          ))}
        </motion.div>
      </Container>
    </div>
  )
}

export default ContentCreation
