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
    <div className='sticky top-0 snap-start scroll-mt-20 z-20 bg-black h-[calc(100vh-80px)] grid place-content-center'>
      <Container>
        <motion.h2
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className='text-2xl text-center text-white md:text-3xl mb-6 font-bold'
        >
          {language === 'en' && (
            <>Social Media Management - Our Client's Results (2023)</>
          )}
          {language === 'cs' && (
            <>Správa Sociálních Sítí - Výsledky Našeho Klienta (2023)</>
          )}
          {language === 'de' && (
            <>Social Media Management - Die Ergebnisse unseres Kunden (2023)</>
          )}
        </motion.h2>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className='grid lg:grid-cols-3 gap-2 lg:gap-8 mt-4 mb-2'
        >
          <Button
            onClick={() => setChart('followers')}
            className={cn(
              'bg-black text-white ring-2 ring-white hover:bg-zinc-900',
              chart === 'followers' && 'bg-white text-black hover:bg-zinc-200'
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
              'bg-black text-white ring-2 ring-white hover:bg-zinc-900',
              chart === 'grow' && 'bg-white text-black hover:bg-zinc-200'
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
              'bg-black text-white ring-2 ring-white hover:bg-zinc-900',
              chart === 'imprese' && 'bg-white text-black hover:bg-zinc-200'
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
          className='italic mt-1 text-justify sm:text-left text-sm'
        >
          {language === 'en' ? (
            <>
              The results to date have been positively influenced by: influencer
              campaign, marketing campaigns on Seznam.cz / Google.com.
            </>
          ) : language === 'cs' ? (
            <>
              Dosavadní výsledky pozitivně ovlivnili: influencer kampaně,
              marketingové kampaně na Seznam.cz / Google.com.
            </>
          ) : language === 'de' ? (
            <>
              Die bisherigen Ergebnisse wurden positiv beeinflusst durch:
              Influencer Influencer-Kampagne, Marketing-Kampagnen auf Seznam.cz
              / Google.com.
            </>
          ) : null}
        </motion.p>
      </Container>
    </div>
  )
}

export default Charts
