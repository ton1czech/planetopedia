'use client'

import Image from 'next/image'
import Container from '../Container'
import { useLanguage } from '@/store/useLanguage'

interface ItemProps {
  headingEn: string
  headingCz: string
  headingDe: string
  textEn?: string
  textCz?: string
  textDe?: string
  multiEn?: string[]
  multiCz?: string[]
  multiDe?: string[]
}

const Item = ({
  headingCz,
  headingDe,
  headingEn,
  textCz,
  textDe,
  textEn,
  multiCz,
  multiDe,
  multiEn,
}: ItemProps) => {
  const { language } = useLanguage(state => state)
  return (
    <li>
      <h3 className='text-xl lg:text-2xl font-semibold'>
        {language === 'en' ? (
          <>{headingEn}</>
        ) : language === 'cs' ? (
          <>{headingCz}</>
        ) : language === 'de' ? (
          <>{headingDe}</>
        ) : null}
      </h3>
      {(textCz || textEn || textDe) && (
        <p className='text-zinc-300'>
          {language === 'en' ? (
            <>{textEn}</>
          ) : language === 'cs' ? (
            <>{textCz}</>
          ) : language === 'de' ? (
            <>{textDe}</>
          ) : null}
        </p>
      )}
      {(multiCz || multiEn || multiDe) && (
        <>
          {language === 'en' ? (
            <>
              {multiEn?.map(mul => (
                <p key={mul}>{mul}</p>
              ))}
            </>
          ) : language === 'cs' ? (
            <>
              {multiCz?.map(mul => (
                <p key={mul}>{mul}</p>
              ))}
            </>
          ) : language === 'de' ? (
            <>
              {multiDe?.map(mul => (
                <p key={mul}>{mul}</p>
              ))}
            </>
          ) : null}
        </>
      )}
    </li>
  )
}

const Benefits = () => {
  return (
    <div className='sticky top-0 snap-start scroll-mt-20 w-screen z-20 bg-black h-[calc(100vh-80px)]'>
      <Container className='py-10 text-white'>
        <div className='grid lg:grid-cols-2 gap-8'>
          <div>
            <h1 className='text-2xl md:text-3xl lg:text-4xl font-bold'>
              Main Benefits
            </h1>
            <ul className='mt-10 md:mt-20 space-y-6 md:space-y-10'>
              <Item
                headingEn='1. Instagram connection'
                headingCz='1. Připojení k Instagramu'
                headingDe='1. Instagram-Verbindung'
                textEn="Let's group together on instagram!"
                textCz='Pojďme se společně sdružit na instagramu!'
                textDe='Lass uns auf Instagram zusammenarbeiten!'
              />
              <Item
                headingEn='2. Meet the community'
                headingCz='2. Setkání s komunitou'
                headingDe='2. Treffen mit der Gemeinschaft'
                textEn='Meet and connect with our creators around the world.'
                textCz='Seznamte se s našimi tvůrci po celém světě a navažte s nimi kontakt.'
                textDe='Treffen Sie unsere Schöpfer auf der ganzen Welt und treten Sie mit ihnen in Kontakt.'
              />
              <Item
                headingEn='3. Work together'
                headingCz='3. Pracujte společně'
                headingDe='3. Gemeinsam arbeiten'
                textEn='Unlock success through our social media influencer campaigns.'
                textCz='Odemkněte si úspěch prostřednictvím našich kampaní pro influencery na sociálních sítích.'
                textDe='Erschließen Sie sich den Erfolg durch unsere Social-Media-Influencer-Kampagnen.'
              />
              <Item
                headingEn='4. Whatsapp Group'
                headingCz='4. Skupina Whatsapp'
                headingDe='4. Whatsapp-Gruppe'
                textEn='Vote in polls / Give feedback / Platform News'
                textCz='Hlasování v anketách / Poskytněte zpětnou vazbu / Novinky z platformy'
                textDe='An Umfragen teilnehmen / Feedback geben / Plattform News'
              />
              <Item
                headingEn='5. Engagement Groups'
                headingCz='5. Skupiny pro zapojení'
                headingDe='5. Engagement-Gruppen'
                multiEn={[
                  'a) Luxury Travel Support Group',
                  'b) Photographers Support Group',
                  'c) Travel Tips Support Group',
                ]}
                multiCz={[
                  'a) Skupina pro podporu luxusního cestování',
                  'b) Podpůrná skupina fotografů',
                  'c) Podpůrná skupina pro cestovní tipy',
                ]}
                multiDe={[
                  'a) Unterstützungsgruppe für Luxusreisen',
                  'b) Selbsthilfegruppe für Fotografen',
                  'c) Selbsthilfegruppe Reisetipps',
                ]}
              />
            </ul>
          </div>

          <div className='lg:block overflow-hidden hidden'>
            <Image
              src='/services/for-creators/3.webp'
              alt='heys luggage mockup'
              width={300}
              height={500}
              className='w-[17vw] absolute left-[48%] top-[6rem]'
            />
            <Image
              src='/services/for-creators/2.webp'
              alt='heys luggage mockup'
              width={300}
              height={500}
              className='w-[17vw] absolute left-[58%] top-[9rem]'
            />
            <Image
              src='/services/for-creators/1.webp'
              alt='heys luggage mockup'
              width={300}
              height={500}
              className='w-[17vw] absolute left-[68%] top-[12rem]'
            />
          </div>
        </div>

        <p className='text-sm text-zinc-400 text-center absolute bottom-10 left-1/2 -translate-x-1/2'>
          #planetopedia Team
        </p>
      </Container>
    </div>
  )
}

export default Benefits
