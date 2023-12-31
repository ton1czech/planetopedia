'use client'

import Image from 'next/image'
import Container from '../Container'
import { useLanguage } from '@/store/useLanguage'
import { motion } from 'framer-motion'

interface HeroProps {
  title: string
  img: string
  servicesCz: string[]
  servicesEn: string[]
  servicesDe: string[]
}

const Hero = ({
  title,
  servicesCz,
  servicesEn,
  servicesDe,
  img,
}: HeroProps) => {
  const { language } = useLanguage(state => state)

  return (
    <Container>
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        className='flex flex-col md:flex-row justify-between mb-2 md:mb-4'
      >
        <h1 className='text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold md:self-end'>
          {title}
        </h1>
        {language === 'en' && (
          <div>
            {servicesEn.map(service => (
              <p
                key={service}
                className='text-zinc-700 text-lg md:text-xl text-right'
              >
                {service}
              </p>
            ))}
          </div>
        )}
        {language === 'cs' && (
          <div>
            {servicesCz.map(service => (
              <p
                key={service}
                className='text-zinc-700 text-lg md:text-xl text-right'
              >
                {service}
              </p>
            ))}
          </div>
        )}
        {language === 'de' && (
          <div>
            {servicesDe.map(service => (
              <p
                key={service}
                className='text-zinc-700 text-lg md:text-xl text-right'
              >
                {service}
              </p>
            ))}
          </div>
        )}
      </motion.div>
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        className='relative w-full h-[300px] lg:h-[500px]'
      >
        <Image src={img} alt={title} fill className='object-cover' />
      </motion.div>
    </Container>
  )
}

export default Hero
