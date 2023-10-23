'use client'

import { useLanguage } from '@/store/useLanguage'
import { useState } from 'react'
import Followers from './charts/Followers'
import Grow from './charts/Grow'
import Imprese from './charts/Imprese'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const Marketing = () => {
  const { language } = useLanguage(state => state)
  const [chart, setChart] = useState('followers')

  return (
    <div>
      <h2 className='text-lg md:text-xl'>
        {language === 'en' && <>~ Marketing Results</>}
        {language === 'cs' && <>~ Marketingové Výsledky</>}
        {language === 'de' && <>~ Marketing-Ergebnisse</>}
      </h2>

      <div className='grid lg:grid-cols-3 gap-2 lg:gap-8 mt-4 mb-2'>
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
      </div>

      {chart === 'followers' && <Followers />}
      {chart === 'grow' && <Grow />}
      {chart === 'imprese' && <Imprese />}
    </div>
  )
}

export default Marketing
