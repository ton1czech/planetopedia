'use client'

import Image from 'next/image'
import { urlForImage } from '@/sanity/lib/image'
import { useLanguage } from '@/store/useLanguage'
import { PortableText } from '@portabletext/react'
import { RichText } from '../RichText'
import { Instagram, Link2 } from 'lucide-react'
import Link from 'next/link'
import Container from '../Container'

interface RestaurantDetailProps {
  restaurant: any
}

const RestaurantDetail = ({ restaurant }: RestaurantDetailProps) => {
  const { language } = useLanguage(state => state)

  return (
    <div className='bg-white'>
      <div className='relative w-full h-[300px] md:h-[400px]'>
        restaurant.banner && (
        <Image
          src={urlForImage(restaurant.banner).url()}
          alt='banner'
          fill
          className='object-cover'
        />
        )
        <h1 className='text-2xl font-bold md:text-3xl absolute bottom-1/2 translate-y-1/2 left-1/2 -translate-x-1/2'>
          {restaurant?.name}
        </h1>
        {language === 'en' && (
          <p className='absolute bottom-1/3 -translate-y-[100%] left-1/2 -translate-x-1/2'>
            {restaurant.location_en}
          </p>
        )}
        {language === 'cs' && (
          <p className='absolute bottom-1/3 -translate-y-[100%] left-1/2 -translate-x-1/2'>
            {restaurant.location_cz}
          </p>
        )}
        {language === 'de' && (
          <p className='absolute bottom-1/3 -translate-y-[100%] left-1/2 -translate-x-1/2'>
            {restaurant.location_de}
          </p>
        )}
      </div>
      <div className='pt-10 pb-20 bg-white md:pt-20 md:pb-32'>
        <Container>
          <div className='grid mx-auto place-content-center md:max-w-screen-md 2xl:max-w-screen-md'>
            <div>
              <h1 className='pb-2 text-2xl font-bold uppercase md:text-3xl lg:text-4xl md:pb-4'>
                {restaurant?.name}
              </h1>
              {language === 'en' && (
                <p className='mb-2'>{restaurant.location_en}</p>
              )}
              {language === 'cs' && (
                <p className='mb-2'>{restaurant.location_cz}</p>
              )}
              {language === 'de' && (
                <p className='mb-2'>{restaurant.location_de}</p>
              )}
            </div>

            <div>
              {restaurant?.intro_images?.map((image: any) => (
                <Image
                  key={image}
                  src={urlForImage(image).url()}
                  alt='intro image'
                  width={900}
                  height={400}
                  className='mb-2 last:mb-6 last:md:mb-10 md:mb-4'
                />
              ))}
            </div>

            {(restaurant?.overview_en ||
              restaurant?.overview_cz ||
              restaurant?.overview_de) && (
              <>
                <h1 className='pb-2 text-2xl font-bold uppercase md:text-3xl lg:text-4xl md:pb-4'>
                  {language === 'en' && <>restaurant overview</>}
                  {language === 'cs' && <>přehled restaurace</>}
                  {language === 'de' && <>Restaurant-Übersicht</>}
                </h1>
                {language === 'en' && (
                  <div className='pb-6 md:pb-10'>
                    <PortableText
                      value={restaurant?.overview_en}
                      components={RichText}
                    />
                  </div>
                )}
                {language === 'cs' && (
                  <div className='pb-6 md:pb-10'>
                    <PortableText
                      value={restaurant?.overview_cz}
                      components={RichText}
                    />
                  </div>
                )}
                {language === 'de' && (
                  <div className='pb-6 md:pb-10'>
                    <PortableText
                      value={restaurant?.overview_de}
                      components={RichText}
                    />
                  </div>
                )}

                <div>
                  {restaurant?.overview_images?.map((image: any) => (
                    <Image
                      key={image}
                      src={urlForImage(image).url()}
                      alt='intro image'
                      width={900}
                      height={400}
                      className='mb-2 last:mb-6 last:md:mb-10 md:mb-4'
                    />
                  ))}
                </div>
              </>
            )}

            {(restaurant?.menu_en ||
              restaurant?.menu_cz ||
              restaurant?.menu_de) && (
              <>
                <h1 className='pb-2 text-2xl font-bold uppercase md:text-3xl lg:text-4xl md:pb-4'>
                  {language === 'en' && <>food & drinks</>}
                  {language === 'cs' && <>jídlo a nápoje</>}
                  {language === 'de' && <>Essen & Trinken</>}
                </h1>
                {language === 'en' && (
                  <div className='pb-6 md:pb-10'>
                    <PortableText
                      value={restaurant?.menu_en}
                      components={RichText}
                    />
                  </div>
                )}
                {language === 'cs' && (
                  <div className='pb-6 md:pb-10'>
                    <PortableText
                      value={restaurant?.menu_cz}
                      components={RichText}
                    />
                  </div>
                )}
                {language === 'de' && (
                  <div className='pb-6 md:pb-10'>
                    <PortableText
                      value={restaurant?.menu_de}
                      components={RichText}
                    />
                  </div>
                )}

                <div className='grid gap-x-2 md:gap-x-4 md:grid-cols-2'>
                  {restaurant?.menu_images?.map((item: any) => (
                    <div className='mb-2 last:mb-6 last:md:mb-10 md:mb-4'>
                      <Image
                        key={item.image}
                        src={urlForImage(item.image).url()}
                        alt='food image'
                        width={900}
                        height={400}
                      />
                      {item.alt && (
                        <p className='mt-1 mb-2 text-center md:mb-4 text-zinc-800'>
                          {item.alt}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </>
            )}

            {(restaurant?.conclusion_en ||
              restaurant?.conclusion_cz ||
              restaurant?.conclusion_de) && (
              <>
                <h1 className='pb-2 text-2xl font-bold uppercase md:text-3xl lg:text-4xl md:pb-4'>
                  {language === 'en' && <>conclusion</>}
                  {language === 'cs' && <>závěr</>}
                  {language === 'de' && <>Schlussfolgerung</>}
                </h1>
                {language === 'en' && (
                  <div className='pb-6 md:pb-10'>
                    <PortableText
                      value={restaurant?.conclusion_en}
                      components={RichText}
                    />
                  </div>
                )}
                {language === 'cs' && (
                  <div className='pb-6 md:pb-10'>
                    <PortableText
                      value={restaurant?.conclusion_cz}
                      components={RichText}
                    />
                  </div>
                )}
                {language === 'de' && (
                  <div className='pb-6 md:pb-10'>
                    <PortableText
                      value={restaurant?.conclusion_de}
                      components={RichText}
                    />
                  </div>
                )}

                <div>
                  {restaurant?.conclusion_images?.map((image: any) => (
                    <Image
                      key={image}
                      src={urlForImage(image).url()}
                      alt='fitness image'
                      width={900}
                      height={400}
                      className='mb-2 last:mb-6 last:md:mb-10 md:mb-4'
                    />
                  ))}
                </div>
              </>
            )}

            <h1 className='pb-2 text-2xl font-bold uppercase md:text-3xl lg:text-4xl md:pb-4'>
              {language === 'en' && <>essential info</>}
              {language === 'cs' && <>základní informace</>}
              {language === 'de' && <>wichtige Infos</>}
            </h1>

            <iframe
              src={restaurant?.address}
              referrerPolicy='no-referrer-when-downgrade'
              className='w-full h-80'
            />

            <div className='flex items-center justify-center gap-4 mt-4 md:mt-6'>
              {restaurant?.web_link && (
                <Link href={restaurant.web_link}>
                  <Link2
                    size={30}
                    className='transition text-zinc-700 hover:text-black'
                  />
                </Link>
              )}
              {restaurant?.instagram_link && (
                <Link href={restaurant.instagram_link}>
                  <Instagram
                    size={30}
                    className='transition text-zinc-700 hover:text-black'
                  />
                </Link>
              )}
            </div>
          </div>
        </Container>
      </div>{' '}
    </div>
  )
}

export default RestaurantDetail
