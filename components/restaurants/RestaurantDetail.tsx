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
    <div className='pt-24 pb-20 bg-white md:pt-32 md:pb-32'>
      <Container className='relative'>
        <div className='fixed flex-col hidden w-full -translate-y-1/2 top-1/2 xl:flex font-cantarell'>
          <h1 className='text-2xl font-bold'>{restaurant?.name}</h1>
          {language === 'en' && <p>{restaurant.location_en}</p>}
          {language === 'cs' && <p>{restaurant.location_cz}</p>}
          <div className='flex items-center gap-4 mt-3'>
            {restaurant?.web_link && (
              <Link href={restaurant.web_link}>
                <Link2
                  size={20}
                  className='transition text-zinc-700 hover:text-black'
                />
              </Link>
            )}
            {restaurant?.instagram_link && (
              <Link href={restaurant.instagram_link}>
                <Instagram
                  size={20}
                  className='transition text-zinc-700 hover:text-black'
                />
              </Link>
            )}
          </div>
        </div>

        <div className='grid px-3 mx-auto place-content-center md:max-w-screen-md 2xl:max-w-screen-md'>
          <div className='xl:hidden font-cantarell'>
            <h1 className='text-2xl font-bold md:text-3xl'>
              {restaurant?.name}
            </h1>
            {language === 'en' && (
              <p className='mb-2'>{restaurant.location_en}</p>
            )}
            {language === 'cs' && (
              <p className='mb-2'>{restaurant.location_cz}</p>
            )}
          </div>

          <div className='space-y-4'>
            {restaurant?.intro_images?.map((image: any) => (
              <Image
                src={urlForImage(image).url()}
                alt='intro image'
                width={900}
                height={400}
                className='mb-6 rounded-lg shadow-xl md:mb-10'
              />
            ))}
          </div>

          {(restaurant?.overview_en || restaurant?.overview_cz) && (
            <h1 className='pb-2 text-2xl font-bold uppercase md:text-3xl font-cantarell'>
              restaurant overview
            </h1>
          )}
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

          <div className='space-y-4'>
            {restaurant?.overview_images?.map((image: any) => (
              <Image
                src={urlForImage(image).url()}
                alt='intro image'
                width={900}
                height={400}
                className='rounded-lg shadow-xl'
              />
            ))}
          </div>

          {(restaurant?.menu_en || restaurant?.menu_cz) && (
            <h1 className='pt-6 pb-2 text-2xl font-bold uppercase md:pt-10 md:text-3xl font-cantarell'>
              menu & food
            </h1>
          )}
          {language === 'en' && (
            <div className='pb-6 md:pb-10'>
              <PortableText value={restaurant?.menu_en} components={RichText} />
            </div>
          )}
          {language === 'cs' && (
            <div className='pb-6 md:pb-10'>
              <PortableText value={restaurant?.menu_cz} components={RichText} />
            </div>
          )}

          <div className='grid gap-8 md:grid-cols-2'>
            {restaurant?.menu_images?.map((item: any) => (
              <div>
                <Image
                  src={urlForImage(item.image).url()}
                  alt='food image'
                  width={900}
                  height={400}
                  className='rounded-lg shadow-xl'
                />
                <p className='mt-1 text-center text-zinc-800'>{item.alt}</p>
              </div>
            ))}
          </div>

          {(restaurant?.conclusion_en || restaurant?.conclusion_cz) && (
            <h1 className='pt-6 pb-2 text-2xl font-bold uppercase md:pt-10 md:text-3xl lg:text-4xl md:pb-4 font-cantarell'>
              conclusion
            </h1>
          )}
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

          <div className='space-y-4'>
            {restaurant?.conclusion_images?.map((image: any) => (
              <Image
                src={urlForImage(image).url()}
                alt='fitness image'
                width={900}
                height={400}
                className='rounded-lg shadow-xl'
              />
            ))}
          </div>

          <h1 className='pt-6 pb-2 text-2xl font-bold uppercase md:pt-10 md:text-3xl lg:text-4xl md:pb-4 font-cantarell'>
            essential info
          </h1>

          <iframe
            src={restaurant?.address}
            scrolling='no'
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
    </div>
  )
}

export default RestaurantDetail
