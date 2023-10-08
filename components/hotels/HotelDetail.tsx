'use client'

import Image from 'next/image'
import { urlForImage } from '@/sanity/lib/image'
import { useLanguage } from '@/store/useLanguage'
import { PortableText } from '@portabletext/react'
import { RichText } from '../RichText'
import { Instagram, Link2 } from 'lucide-react'
import Link from 'next/link'
import Container from '../Container'

interface HotelDetailProps {
  hotel: any
}

const HotelDetail = ({ hotel }: HotelDetailProps) => {
  const { language } = useLanguage(state => state)

  return (
    <div className='pt-24 pb-20 bg-white md:pt-32 md:pb-32'>
      <Container className='relative'>
        <div className='fixed flex-col hidden w-full -translate-y-1/2 top-1/2 xl:flex'>
          <h1 className='text-2xl font-bold'>{hotel?.name}</h1>
          {language === 'en' && <p>{hotel.location_en}</p>}
          {language === 'cs' && <p>{hotel.location_cz}</p>}
          <div className='flex items-center gap-4 mt-3'>
            {hotel?.web_link && (
              <Link href={hotel.web_link}>
                <Link2
                  size={20}
                  className='transition text-zinc-700 hover:text-black'
                />
              </Link>
            )}
            {hotel?.instagram_link && (
              <Link href={hotel.instagram_link}>
                <Instagram
                  size={20}
                  className='transition text-zinc-700 hover:text-black'
                />
              </Link>
            )}
          </div>
        </div>

        <div className='grid px-3 mx-auto place-content-center md:max-w-screen-md 2xl:max-w-screen-md'>
          <div className='xl:hidden'>
            <h1 className='text-2xl font-bold md:text-3xl'>{hotel?.name}</h1>
            {language === 'en' && <p className='mb-2'>{hotel.location_en}</p>}
            {language === 'cs' && <p className='mb-2'>{hotel.location_cz}</p>}
          </div>

          <div>
            {hotel?.intro_images?.map((image: any) => (
              <Image
                src={urlForImage(image).url()}
                alt='intro image'
                width={900}
                height={400}
                className='mb-6 md:mb-10'
              />
            ))}
          </div>

          {(hotel?.overview_en || hotel?.overview_cz) && (
            <>
              <h1 className='pb-2 text-2xl font-bold uppercase md:text-3xl lg:text-4xl md:pb-4'>
                hotel overview
              </h1>
              {language === 'en' && (
                <div className='pb-6 md:pb-10'>
                  <PortableText
                    value={hotel?.overview_en}
                    components={RichText}
                  />
                </div>
              )}
              {language === 'cs' && (
                <div className='pb-6 md:pb-10'>
                  <PortableText
                    value={hotel?.overview_cz}
                    components={RichText}
                  />
                </div>
              )}
              <div>
                {hotel?.overview_images?.map((image: any) => (
                  <Image
                    src={urlForImage(image).url()}
                    alt='overview image'
                    width={900}
                    height={400}
                    className='pb-6 md:pb-10'
                  />
                ))}
              </div>
            </>
          )}

          {(hotel?.rooms_en || hotel?.rooms_cz) && (
            <>
              <h1 className='pb-2 text-2xl font-bold uppercase md:text-3xl lg:text-4xl md:pb-4'>
                the rooms
              </h1>
              {language === 'en' && (
                <div className='pb-6 md:pb-10'>
                  <PortableText value={hotel?.rooms_en} components={RichText} />
                </div>
              )}
              {language === 'cs' && (
                <div className='pb-6 md:pb-10'>
                  <PortableText value={hotel?.rooms_cz} components={RichText} />
                </div>
              )}

              <div>
                {hotel?.rooms_images?.map((image: any) => (
                  <Image
                    src={urlForImage(image).url()}
                    alt='rooms image'
                    width={900}
                    height={400}
                    className='pb-6 md:pb-10'
                  />
                ))}
              </div>
            </>
          )}

          {(hotel?.services_en || hotel?.services_cz) && (
            <>
              <h1 className='pb-2 text-2xl font-bold uppercase md:text-3xl lg:text-4xl md:pb-4'>
                services and facilities
              </h1>
              {language === 'en' && (
                <div className='pb-6 md:pb-10'>
                  <PortableText
                    value={hotel?.services_en}
                    components={RichText}
                  />
                </div>
              )}
              {language === 'cs' && (
                <div className='pb-6 md:pb-10'>
                  <PortableText
                    value={hotel?.services_cz}
                    components={RichText}
                  />
                </div>
              )}

              <div>
                {hotel?.services_images?.map((image: any) => (
                  <Image
                    src={urlForImage(image).url()}
                    alt='services image'
                    width={900}
                    height={400}
                    className='pb-6 md:pb-10'
                  />
                ))}
              </div>
            </>
          )}

          {(hotel?.fitness_en || hotel?.fitness_cz) && (
            <>
              <h1 className='pb-2 text-2xl font-bold uppercase md:text-3xl lg:text-4xl md:pb-4'>
                spa & fitness
              </h1>
              {language === 'en' && (
                <div className='pb-6 md:pb-10'>
                  <PortableText
                    value={hotel?.fitness_en}
                    components={RichText}
                  />
                </div>
              )}
              {language === 'cs' && (
                <div className='pb-6 md:pb-10'>
                  <PortableText
                    value={hotel?.fitness_cz}
                    components={RichText}
                  />
                </div>
              )}
              <div>
                {hotel?.fitness_images?.map((image: any) => (
                  <Image
                    src={urlForImage(image).url()}
                    alt='fitness image'
                    width={900}
                    height={400}
                    className='pb-6 md:pb-10'
                  />
                ))}
              </div>
            </>
          )}

          {(hotel?.food_en || hotel?.food_cz) && (
            <>
              <h1 className='pb-2 text-2xl font-bold uppercase md:text-3xl lg:text-4xl md:pb-4'>
                food & drinks
              </h1>
              {language === 'en' && (
                <div className='pb-6 md:pb-10'>
                  <PortableText value={hotel?.food_en} components={RichText} />
                </div>
              )}
              {language === 'cs' && (
                <div className='pb-6 md:pb-10'>
                  <PortableText value={hotel?.food_cz} components={RichText} />
                </div>
              )}

              <div>
                {hotel?.food_images?.map((image: any) => (
                  <Image
                    src={urlForImage(image).url()}
                    alt='food image'
                    width={900}
                    height={400}
                    className='pb-6 md:pb-10'
                  />
                ))}
              </div>
            </>
          )}

          <div className='grid gap-8 md:grid-cols-2'>
            {hotel?.labeled_images?.map((item: any) => (
              <div className='pb-6 md:pb-10'>
                <Image
                  src={urlForImage(item.image).url()}
                  alt='food image'
                  width={900}
                  height={400}
                />
                <p className='mt-1 text-center text-zinc-800'>{item.alt}</p>
              </div>
            ))}
          </div>

          {(hotel?.conclusion_en || hotel?.conclusion_cz) && (
            <>
              <h1 className='pb-2 text-2xl font-bold uppercase md:text-3xl lg:text-4xl md:pb-4'>
                conclusion
              </h1>
              {language === 'en' && (
                <div className='pb-6 md:pb-10'>
                  <PortableText
                    value={hotel?.conclusion_en}
                    components={RichText}
                  />
                </div>
              )}
              {language === 'cs' && (
                <div className='pb-6 md:pb-10'>
                  <PortableText
                    value={hotel?.conclusion_cz}
                    components={RichText}
                  />
                </div>
              )}

              <div>
                {hotel?.conclusion_images?.map((image: any) => (
                  <Image
                    src={urlForImage(image).url()}
                    alt='fitness image'
                    width={900}
                    height={400}
                    className='pb-6 md:pb-10'
                  />
                ))}
              </div>
            </>
          )}

          <h1 className='pb-2 text-2xl font-bold uppercase md:text-3xl lg:text-4xl md:pb-4'>
            essential info
          </h1>

          <iframe
            src={hotel?.address}
            scrolling='no'
            referrerPolicy='no-referrer-when-downgrade'
            className='w-full h-80'
          />

          <div className='flex items-center justify-center gap-4 mt-4 md:mt-6'>
            {hotel?.web_link && (
              <Link href={hotel.web_link}>
                <Link2
                  size={30}
                  className='transition text-zinc-700 hover:text-black'
                />
              </Link>
            )}
            {hotel?.instagram_link && (
              <Link href={hotel.instagram_link}>
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

export default HotelDetail
