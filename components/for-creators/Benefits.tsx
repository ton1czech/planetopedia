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
    <div className='sticky top-0 snap-start scroll-mt-20 w-screen h-[90vh] z-20 bg-black'>
      <Container className='py-10 text-white'>
        <div className='grid lg:grid-cols-2 gap-8'>
          <div>
            <h1 className='text-2xl md:text-3xl lg:text-4xl font-bold'>
              Main Benefits
            </h1>
            <ul className='mt-10 md:mt-20 space-y-6 md:space-y-10'>
              <Item
                headingEn='1. Instagram connection'
                headingCz=''
                headingDe=''
                textEn="Let's group together on instagram!"
              />
              <Item
                headingEn='2. Meet the community'
                headingCz=''
                headingDe=''
                textEn='Meet and connect with our creators around the world.'
              />
              <Item
                headingEn='3. Work together'
                headingCz=''
                headingDe=''
                textEn='Unlock success through our social media influencer campaigns.'
              />
              <Item
                headingEn='4. Whatsapp Group'
                headingCz=''
                headingDe=''
                textEn='Vote in polls / Give feedback / Platform News'
              />
              <Item
                headingEn='5. Engagement Groups'
                headingCz=''
                headingDe=''
                multiEn={[
                  'a) Luxury Travel Support Group',
                  'b) Photographers Support Group',
                  'c) Travel Tips Support Group',
                ]}
              />
            </ul>
          </div>

          <div className='lg:flex overflow-hidden hidden justify-center items-center'>
            <Image
              src='/services/for-creators/1.webp'
              alt='heys luggage mockup'
              width={300}
              height={500}
              className='w-[11vw] mb-16'
            />
            <Image
              src='/services/for-creators/2.webp'
              alt='heys luggage mockup'
              width={300}
              height={500}
              className='w-[11vw]'
            />
            <Image
              src='/services/for-creators/3.webp'
              alt='heys luggage mockup'
              width={300}
              height={500}
              className='w-[11vw] mt-16'
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
