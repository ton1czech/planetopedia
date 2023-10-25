'use client'

import Image from 'next/image'
import { urlForImage } from '@/sanity/lib/image'
import { useLanguage } from '@/store/useLanguage'
import { PortableText } from '@portabletext/react'
import { RichText } from '../RichText'
import { Instagram, Link2 } from 'lucide-react'
import Link from 'next/link'
import Container from '../Container'
import { useEffect, useState } from 'react'
import { Skeleton } from '../ui/skeleton'

interface HotelDetailProps {
  hotel: any
}

const HotelDetail = ({ hotel }: HotelDetailProps) => {
  const { language } = useLanguage(state => state)

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(false)
  }, [])

  return (
    <div className='pt-24 pb-20 bg-white md:pt-32 md:pb-32'>
      <Container>
        <div className='grid mx-auto place-content-center md:max-w-screen-md 2xl:max-w-screen-md'>
          <div>
            <h1 className='text-2xl font-bold md:text-3xl'>{hotel?.name}</h1>
            {language === 'en' && <p className='mb-2'>{hotel.location_en}</p>}
            {language === 'cs' && <p className='mb-2'>{hotel.location_cz}</p>}
            {language === 'de' && <p className='mb-2'>{hotel.location_de}</p>}
          </div>

          <div>
            {hotel?.intro_images?.map((image: any) => (
              <>
                {isLoading ? (
                  <Skeleton className='w-full h-[425px] sm:h-[750px] md:h-[900px]' />
                ) : (
                  <Image
                    key={image}
                    src={urlForImage(image).url()}
                    alt='intro image'
                    width={900}
                    height={400}
                    className='mb-2 last:mb-6 last:md:mb-10 md:mb-4'
                  />
                )}
              </>
            ))}
          </div>

          {(hotel?.overview_en || hotel?.overview_cz || hotel?.overview_de) && (
            <>
              <h1 className='pb-2 text-2xl font-bold uppercase md:text-3xl lg:text-4xl md:pb-4'>
                {language === 'en' && <>hotel overview</>}
                {language === 'cs' && <>přehled hotelů</>}
                {language === 'de' && <>Hotelübersicht</>}
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
              {language === 'de' && (
                <div className='pb-6 md:pb-10'>
                  <PortableText
                    value={hotel?.overview_de}
                    components={RichText}
                  />
                </div>
              )}
              <div>
                {hotel?.overview_images?.map((image: any) => (
                  <>
                    {isLoading ? (
                      <Skeleton className='w-full h-[425px] sm:h-[750px] md:h-[900px]' />
                    ) : (
                      <Image
                        key={image}
                        src={urlForImage(image).url()}
                        alt='overview image'
                        width={900}
                        height={400}
                        className='mb-2 last:mb-6 last:md:mb-10 md:mb-4'
                      />
                    )}
                  </>
                ))}
              </div>
            </>
          )}

          {(hotel?.rooms_en || hotel?.rooms_cz || hotel?.rooms_de) && (
            <>
              <h1 className='pb-2 text-2xl font-bold uppercase md:text-3xl lg:text-4xl md:pb-4'>
                {language === 'en' && <>the rooms</>}
                {language === 'cs' && <>pokoje</>}
                {language === 'de' && <>die Räume</>}
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
              {language === 'de' && (
                <div className='pb-6 md:pb-10'>
                  <PortableText value={hotel?.rooms_de} components={RichText} />
                </div>
              )}

              <div>
                {hotel?.rooms_images?.map((image: any) => (
                  <>
                    {isLoading ? (
                      <Skeleton className='w-full h-[425px] sm:h-[750px] md:h-[900px]' />
                    ) : (
                      <Image
                        key={image}
                        src={urlForImage(image).url()}
                        alt='rooms image'
                        width={900}
                        height={400}
                        className='mb-2 last:mb-6 last:md:mb-10 md:mb-4'
                      />
                    )}
                  </>
                ))}
              </div>
            </>
          )}

          {(hotel?.services_en || hotel?.services_cz || hotel?.services_de) && (
            <>
              <h1 className='pb-2 text-2xl font-bold uppercase md:text-3xl lg:text-4xl md:pb-4'>
                {language === 'en' && <>services and facilities</>}
                {language === 'cs' && <>služby a zařízení</>}
                {language === 'de' && <>Dienstleistungen und Einrichtungen</>}
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
              {language === 'de' && (
                <div className='pb-6 md:pb-10'>
                  <PortableText
                    value={hotel?.services_de}
                    components={RichText}
                  />
                </div>
              )}

              <div>
                {hotel?.services_images?.map((image: any) => (
                  <>
                    {isLoading ? (
                      <Skeleton className='w-full h-[425px] sm:h-[750px] md:h-[900px]' />
                    ) : (
                      <Image
                        key={image}
                        src={urlForImage(image).url()}
                        alt='services image'
                        width={900}
                        height={400}
                        className='mb-2 last:mb-6 last:md:mb-10 md:mb-4'
                      />
                    )}
                  </>
                ))}
              </div>
            </>
          )}

          {(hotel?.fitness_en || hotel?.fitness_cz || hotel?.fitness_de) && (
            <>
              <h1 className='pb-2 text-2xl font-bold uppercase md:text-3xl lg:text-4xl md:pb-4'>
                {language === 'en' && <>spa & fitness</>}
                {language === 'cs' && <>lázně a fitness</>}
                {language === 'de' && <>Wellness & Fitness</>}
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
              {language === 'de' && (
                <div className='pb-6 md:pb-10'>
                  <PortableText
                    value={hotel?.fitness_de}
                    components={RichText}
                  />
                </div>
              )}
              <div>
                {hotel?.fitness_images?.map((image: any) => (
                  <>
                    {isLoading ? (
                      <Skeleton className='w-full h-[425px] sm:h-[750px] md:h-[900px]' />
                    ) : (
                      <Image
                        key={image}
                        src={urlForImage(image).url()}
                        alt='fitness image'
                        width={900}
                        height={400}
                        className='mb-2 last:mb-6 last:md:mb-10 md:mb-4'
                      />
                    )}
                  </>
                ))}
              </div>
            </>
          )}

          {(hotel?.food_en || hotel?.food_cz || hotel?.food_de) && (
            <>
              <h1 className='pb-2 text-2xl font-bold uppercase md:text-3xl lg:text-4xl md:pb-4'>
                {language === 'en' && <>food & drinks</>}
                {language === 'cs' && <>jídlo a nápoje</>}
                {language === 'de' && <>Essen & Trinken</>}
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
              {language === 'de' && (
                <div className='pb-6 md:pb-10'>
                  <PortableText value={hotel?.food_en} components={RichText} />
                </div>
              )}

              <div>
                {hotel?.food_images?.map((image: any) => (
                  <>
                    {isLoading ? (
                      <Skeleton className='w-full h-[425px] sm:h-[750px] md:h-[900px]' />
                    ) : (
                      <Image
                        key={image}
                        src={urlForImage(image).url()}
                        alt='food image'
                        width={900}
                        height={400}
                        className='mb-2 last:mb-6 last:md:mb-10 md:mb-4'
                      />
                    )}
                  </>
                ))}
              </div>
            </>
          )}

          <div className='grid gap-x-2 md:gap-x-4 md:grid-cols-2'>
            {hotel?.labeled_images?.map((item: any) => (
              <div className='mb-2 last:mb-6 last:md:mb-10 md:mb-4'>
                <>
                  {isLoading ? (
                    <Skeleton className='w-full h-[400px] sm:h-[750px] md:h-[450px]' />
                  ) : (
                    <Image
                      key={item.image}
                      src={urlForImage(item.image).url()}
                      alt='food image'
                      width={900}
                      height={400}
                    />
                  )}
                  {item.alt && (
                    <p className='mt-1 mb-2 text-center md:mb-4 text-zinc-800'>
                      {item.alt}
                    </p>
                  )}
                </>
              </div>
            ))}
          </div>

          {(hotel?.conclusion_en ||
            hotel?.conclusion_cz ||
            hotel?.conclusion_de) && (
            <>
              <h1 className='pb-2 text-2xl font-bold uppercase md:text-3xl lg:text-4xl md:pb-4'>
                {language === 'en' && <>conclusion</>}
                {language === 'cs' && <>závěr</>}
                {language === 'de' && <>Schlussfolgerung</>}
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
              {language === 'de' && (
                <div className='pb-6 md:pb-10'>
                  <PortableText
                    value={hotel?.conclusion_de}
                    components={RichText}
                  />
                </div>
              )}

              <div>
                {hotel?.conclusion_images?.map((image: any) => (
                  <>
                    {isLoading ? (
                      <Skeleton className='w-full h-[425px] sm:h-[750px] md:h-[900px]' />
                    ) : (
                      <Image
                        key={image}
                        src={urlForImage(image).url()}
                        alt='fitness image'
                        width={900}
                        height={400}
                        className='mb-2 last:mb-6 last:md:mb-10 md:mb-4'
                      />
                    )}
                  </>
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
            src={hotel?.address}
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
