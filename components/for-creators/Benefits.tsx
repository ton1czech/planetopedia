'use client'

import Image from 'next/image'
import Container from '../Container'
import { useLanguage } from '@/store/useLanguage'
import { motion } from 'framer-motion'

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
      <h3 className='text-xl font-semibold lg:text-2xl'>
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
      <Container className='h-full py-10 text-white'>
        <div className='grid h-full gap-8 lg:grid-cols-2 place-content-center'>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className='mb-12'
          >
            <h1 className='text-2xl font-bold md:text-3xl lg:text-4xl'>
              Main Benefits
            </h1>
            <ul className='mt-4 space-y-6 md:mt-10 2xl:mt-12 md:space-y-10'>
              <Item
                headingEn='1. Instagram connection'
                headingCz='1. Spojení na Instagramu'
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
                headingCz='3. Pracujme společně'
                headingDe='3. Gemeinsam arbeiten'
                textEn='Unlock success through our community.'
                textCz='Odemkněte si úspěch prostřednictvím naší komunity.'
                textDe='Erschließen Sie sich den Erfolg durch unsere Gemeinschaft.'
              />
              <Item
                headingEn='4. Whatsapp Group'
                headingCz='4. Whatsapp Skupina'
                headingDe='4. Whatsapp-Gruppe'
                textEn='Discussion & Entertainment'
                textCz='Diskuze & Zábava'
                textDe='Diskussion und Unterhaltung'
              />
              <Item
                headingEn='5. Engagement Groups'
                headingCz='5. Engagement Skupiny'
                headingDe='5. Engagement-Gruppen'
                multiEn={[
                  'a) Luxury Travel Support Group',
                  'b) Photographers Support Group',
                  'c) Travel Tips Support Group',
                ]}
                multiCz={[
                  'a) Luxury Travel Support Skupina',
                  'b) Photographers Support Skupina',
                  'c) Travel Tips Support Skupina',
                ]}
                multiDe={[
                  'a) Unterstützungsgruppe für Luxusreisen',
                  'b) Selbsthilfegruppe für Fotografen',
                  'c) Selbsthilfegruppe Reisetipps',
                ]}
              />
            </ul>
          </motion.div>

          <div className='hidden overflow-hidden lg:block'>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <Image
                src='/services/for-creators/3.webp'
                alt='heys luggage mockup'
                width={300}
                height={500}
                className='w-[17vw] absolute left-[48%] top-[6rem]'
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
            >
              <Image
                src='/services/for-creators/2.webp'
                alt='heys luggage mockup'
                width={300}
                height={500}
                className='w-[17vw] absolute left-[58%] top-[9rem]'
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1.1 }}
            >
              <Image
                src='/services/for-creators/1.webp'
                alt='heys luggage mockup'
                width={300}
                height={500}
                className='w-[17vw] absolute left-[68%] top-[12rem]'
              />
            </motion.div>
          </div>
        </div>

        <p className='absolute text-sm text-center -translate-x-1/2 text-zinc-400 bottom-10 left-1/2'>
          #planetopedia Team
        </p>
      </Container>
    </div>
  )
}

export default Benefits
