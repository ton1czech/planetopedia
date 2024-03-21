'use client'

import { useLanguage } from '@/store/useLanguage'
import { useState } from 'react'
import Followers from './charts/Followers'
import Grow from './charts/Grow'
import Imprese from './charts/Imprese'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'

const Marketing = () => {
  const { language } = useLanguage(state => state)

  const [chart, setChart] = useState('followers')

  return (
    <div>
      <motion.h2
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        className='text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold mb-2'
      >
        {language === 'en' && <>/ Marketing Results (2023)</>}
        {language === 'cs' && <>/ Marketingové Výsledky (2023)</>}
        {language === 'de' && <>/ Marketing-Ergebnisse (2023)</>}
      </motion.h2>

      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        className='grid lg:grid-cols-3 gap-2 lg:gap-8 mt-4 mb-2'
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
            <>Sledujících</>
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
      >
        {chart === 'followers' && <Followers />}
        {chart === 'grow' && <Grow />}
        {chart === 'imprese' && <Imprese />}
      </motion.div>

      <motion.p
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        className='italic mt-1 text-justify sm:text-left'
      >
        {language === 'en' ? (
          <>The results are positively influenced by other marketing steps.</>
        ) : language === 'cs' ? (
          <>Výsledky jsou pozitivně ovlivněny dalšími marketingovými kroky.</>
        ) : language === 'de' ? (
          <></>
        ) : null}
      </motion.p>
    </div>
  )
}

export default Marketing
