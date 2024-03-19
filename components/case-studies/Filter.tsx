'use client'

import { cn } from '@/lib/utils'
import { useLanguage } from '@/store/useLanguage'
import { motion } from 'framer-motion'

interface ItemProps {
  labelEn: string
  labelCz: string
  labelDe: string
  setService: any
  service: string
}

const Item = ({
  labelEn,
  labelCz,
  labelDe,
  setService,
  service,
}: ItemProps) => {
  const { language } = useLanguage(state => state)

  const handleClick = () => {
    if (
      service ===
      (language === 'en' ? labelEn : language === 'cs' ? labelCz : labelDe)
    ) {
      setService('')
    } else {
      setService(
        language === 'en' ? labelEn : language === 'cs' ? labelCz : labelDe
      )
    }
  }

  return (
    <p
      onClick={handleClick}
      className={cn(
        'px-4 py-2 text-center rounded-md cursor-pointer ring-1 ring-black/40 hover:bg-zinc-300 grid place-content-center',
        service ===
          (language === 'en'
            ? labelEn
            : language === 'cs'
            ? labelCz
            : language === 'de'
            ? labelDe
            : '') && 'bg-zinc-300 ring-zinc-400'
      )}
    >
      {language === 'en' && <>{labelEn}</>}
      {language === 'cs' && <>{labelCz}</>}
      {language === 'de' && <>{labelDe}</>}
    </p>
  )
}

interface FilterProps {
  service: string
  setService: any
}

const Filter = ({ setService, service }: FilterProps) => {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      className='grid grid-cols-2 p-1 gap-x-4 gap-y-2 md:grid-cols-3 md:gap-x-8 md:gap-y-4 lg:grid-cols-4'
    >
      <Item
        labelEn='marketing'
        labelCz='marketing'
        labelDe='marketing'
        setService={setService}
        service={service}
      />
      <Item
        labelEn='content creation'
        labelCz='tvorba obsahu'
        labelDe='erstellung von inhalten'
        setService={setService}
        service={service}
      />
      <Item
        labelEn='social media management'
        labelCz='správa sociálních sítí'
        labelDe='verwaltung sozialer medien'
        setService={setService}
        service={service}
      />
      <Item
        labelEn='brand building'
        labelCz='budování značky'
        labelDe='markenbildung'
        setService={setService}
        service={service}
      />
      <Item
        labelEn='strategy'
        labelCz='strategie'
        labelDe='strategie'
        setService={setService}
        service={service}
      />
    </motion.div>
  )
}

export default Filter
