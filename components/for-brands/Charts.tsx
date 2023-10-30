'use client'

import { useLanguage } from '@/store/useLanguage'
import { useEffect, useState } from 'react'
import Followers from './charts/Followers'
import Grow from './charts/Grow'
import Imprese from './charts/Imprese'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { Skeleton } from '@/components/ui/skeleton'
import Container from '../Container'

const Charts = () => {
  const { language } = useLanguage(state => state)

  const [chart, setChart] = useState('followers')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(false)
  }, [])

  return (
    <div className='sticky top-0 snap-start scroll-mt-20 w-screen z-20 bg-white h-[calc(100vh-80px)] grid place-content-center'>
      <Container>
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

        {isLoading ? (
          <Skeleton className='w-full h-[500px]' />
        ) : (
          <>
            <>{chart === 'followers' && <Followers />}</>
            <>{chart === 'grow' && <Grow />}</>
            <>{chart === 'imprese' && <Imprese />}</>
          </>
        )}
        <p className='italic mt-1 text-justify sm:text-left'>
          {language === 'en' ? (
            <>
              The results to date have been positively influenced by: influencer
              campaign, marketing campaigns on Seznam.cz / Google.com,
              organizing events.
            </>
          ) : language === 'cs' ? (
            <>
              Dosavadní výsledky pozitivně ovlivnilo: influencer kampaň,
              marketingové kampaně na Seznam.cz / Google.com, pořádání eventů.
            </>
          ) : language === 'de' ? (
            <>
              Die bisherigen Ergebnisse wurden positiv beeinflusst durch:
              Influencer Influencer-Kampagne, Marketing-Kampagnen auf Seznam.cz
              / Google.com, Organisation von Veranstaltungen.
            </>
          ) : null}
        </p>
      </Container>
    </div>
  )
}

export default Charts
