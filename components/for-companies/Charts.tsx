'use client'

import { useLanguage } from '@/store/useLanguage'
import { useState } from 'react'
import Followers from './charts/Followers'
import Grow from './charts/Grow'
import Imprese from './charts/Imprese'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import Container from '../Container'
import { motion } from 'framer-motion'

const Charts = () => {
  const { language } = useLanguage(state => state)

  const [chart, setChart] = useState('followers')

  return (
    <div className='sticky top-0 snap-start scroll-mt-20 z-40 bg-white h-[calc(100vh-80px)] grid place-content-center'>
      <Container>
        <motion.h2
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className='text-2xl text-center text-black md:text-3xl mb-6 font-bold'
        >
          {language === 'en' && (
            <>Social Media Management - Results Farma Hájek (2023)</>
          )}
          {language === 'cs' && (
            <>Správa Sociálních Sítí - Výsledky Farma Hájek (2023)</>
          )}
          {language === 'de' && (
            <>Social Media Management - Ergebnisse Farma Hájek (2023)</>
          )}
        </motion.h2>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className='grid grid-cols-3 gap-4 lg:gap-8 mt-4 mb-2'
        >
          <Button
            onClick={() => setChart('followers')}
            className={cn(
              'bg-white text-black ring-2 ring-black hover:text-white',
              chart === 'followers' && 'bg-black text-white'
            )}
          >
            {language === 'en' ? (
              <>Followers</>
            ) : language === 'cs' ? (
              <>Sledující</>
            ) : language === 'de' ? (
              <>Follower</>
            ) : null}
          </Button>
          <Button
            onClick={() => setChart('grow')}
            className={cn(
              'bg-white text-black ring-2 ring-black hover:text-white',
              chart === 'grow' && 'bg-black text-white'
            )}
          >
            {language === 'en' ? (
              <>Grow</>
            ) : language === 'cs' ? (
              <>Růst</>
            ) : language === 'de' ? (
              <>Wachsen</>
            ) : null}
          </Button>
          <Button
            onClick={() => setChart('imprese')}
            className={cn(
              'bg-white text-black ring-2 ring-black hover:text-white',
              chart === 'imprese' && 'bg-black text-white'
            )}
          >
            {language === 'en' ? (
              <>Impressions</>
            ) : language === 'cs' ? (
              <>Imprese</>
            ) : language === 'de' ? (
              <>Importe</>
            ) : null}
          </Button>
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {chart === 'followers' && <Followers />}
          {chart === 'grow' && <Grow />}
          {chart === 'imprese' && <Imprese />}
        </motion.div>

        <motion.p
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className='italic mt-1 text-justify sm:text-left text-sm text-zinc-400'
        >
          {language === 'en' ? (
            <>The results are positively influenced by other marketing steps.</>
          ) : language === 'cs' ? (
            <>Výsledky jsou pozitivně ovlivněny dalšími marketingovými kroky.</>
          ) : language === 'de' ? (
            <></>
          ) : null}
        </motion.p>
      </Container>
    </div>
  )
}

export default Charts
