'use client'

import Image from 'next/image'
import { urlForImage } from '@/sanity/lib/image'
import { useLanguage } from '@/store/useLanguage'
import { PortableText } from '@portabletext/react'
import { RichText } from '../RichText'
import Link from 'next/link'
import Container from '../Container'
import { motion } from 'framer-motion'

interface HotelDetailProps {
  hotel: any
}

const HotelDetail = ({ hotel }: HotelDetailProps) => {
  const { language } = useLanguage(state => state)

  return (
    <div className='bg-white'>
      <div className='relative w-full h-[300px] md:h-[400px]'>
        {hotel.banner && (
          <Image
            src={urlForImage(hotel.banner).url()}
            alt='banner'
            fill
            className='object-cover'
          />
        )}
        <div className='absolute text-center -translate-x-1/2 translate-y-1/2 bottom-1/2 left-1/2'>
          <h1 className='text-2xl font-bold md:text-3xl'>{hotel?.name}</h1>
          {language === 'en' && <p>{hotel.location_en}</p>}
          {language === 'cs' && <p>{hotel.location_cz}</p>}
          {language === 'de' && <p>{hotel.location_de}</p>}
        </div>
      </div>

      <div className='pt-10 pb-20 bg-white md:pt-20 md:pb-32'>
        <Container>
          <div className='grid mx-auto place-content-center md:max-w-screen-md 2xl:max-w-screen-md'>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
            >
              {hotel?.intro_images?.map((image: any) => (
                <Image
                  key={image}
                  src={urlForImage(image).url()}
                  alt='intro image'
                  width={900}
                  height={400}
                  className='mb-2 last:mb-6 last:md:mb-10 md:mb-4'
                />
              ))}
            </motion.div>

            {(hotel?.overview_en ||
              hotel?.overview_cz ||
              hotel?.overview_de) && (
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
              >
                <h1 className='pb-2 text-2xl font-bold uppercase md:text-3xl lg:text-4xl md:pb-4'>
                  {language === 'en' && <>hotel overview</>}
                  {language === 'cs' && <>přehled hotelu</>}
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
                    <Image
                      key={image}
                      src={urlForImage(image).url()}
                      alt='overview image'
                      width={900}
                      height={400}
                      className='mb-2 last:mb-6 last:md:mb-10 md:mb-4'
                    />
                  ))}
                </div>
              </motion.div>
            )}

            {(hotel?.rooms_en || hotel?.rooms_cz || hotel?.rooms_de) && (
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
              >
                <h1 className='pb-2 text-2xl font-bold uppercase md:text-3xl lg:text-4xl md:pb-4'>
                  {language === 'en' && <>the rooms</>}
                  {language === 'cs' && <>pokoje</>}
                  {language === 'de' && <>die Räume</>}
                </h1>
                {language === 'en' && (
                  <div className='pb-6 md:pb-10'>
                    <PortableText
                      value={hotel?.rooms_en}
                      components={RichText}
                    />
                  </div>
                )}
                {language === 'cs' && (
                  <div className='pb-6 md:pb-10'>
                    <PortableText
                      value={hotel?.rooms_cz}
                      components={RichText}
                    />
                  </div>
                )}
                {language === 'de' && (
                  <div className='pb-6 md:pb-10'>
                    <PortableText
                      value={hotel?.rooms_de}
                      components={RichText}
                    />
                  </div>
                )}

                <div>
                  {hotel?.rooms_images?.map((image: any) => (
                    <Image
                      key={image}
                      src={urlForImage(image).url()}
                      alt='rooms image'
                      width={900}
                      height={400}
                      className='mb-2 last:mb-6 last:md:mb-10 md:mb-4'
                    />
                  ))}
                </div>
              </motion.div>
            )}

            {(hotel?.services_en ||
              hotel?.services_cz ||
              hotel?.services_de) && (
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
              >
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
                    <Image
                      key={image}
                      src={urlForImage(image).url()}
                      alt='services image'
                      width={900}
                      height={400}
                      className='mb-2 last:mb-6 last:md:mb-10 md:mb-4'
                    />
                  ))}
                </div>
              </motion.div>
            )}

            {(hotel?.fitness_en || hotel?.fitness_cz || hotel?.fitness_de) && (
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
              >
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
              </motion.div>
            )}

            {(hotel?.food_en || hotel?.food_cz || hotel?.food_de) && (
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
              >
                <h1 className='pb-2 text-2xl font-bold uppercase md:text-3xl lg:text-4xl md:pb-4'>
                  {language === 'en' && <>food & drinks</>}
                  {language === 'cs' && <>jídlo a nápoje</>}
                  {language === 'de' && <>Essen & Trinken</>}
                </h1>
                {language === 'en' && (
                  <div className='pb-6 md:pb-10'>
                    <PortableText
                      value={hotel?.food_en}
                      components={RichText}
                    />
                  </div>
                )}
                {language === 'cs' && (
                  <div className='pb-6 md:pb-10'>
                    <PortableText
                      value={hotel?.food_cz}
                      components={RichText}
                    />
                  </div>
                )}
                {language === 'de' && (
                  <div className='pb-6 md:pb-10'>
                    <PortableText
                      value={hotel?.food_en}
                      components={RichText}
                    />
                  </div>
                )}

                <div>
                  {hotel?.food_images?.map((image: any) => (
                    <Image
                      key={image}
                      src={urlForImage(image).url()}
                      alt='food image'
                      width={900}
                      height={400}
                      className='mb-2 last:mb-6 last:md:mb-10 md:mb-4'
                    />
                  ))}
                </div>
              </motion.div>
            )}

            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              className='grid gap-x-2 md:gap-x-4 md:grid-cols-2'
            >
              {hotel?.labeled_images?.map((item: any) => (
                <div className='mb-2 last:mb-6 last:md:mb-10 md:mb-4'>
                  <>
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
                  </>
                </div>
              ))}
            </motion.div>

            {(hotel?.conclusion_en ||
              hotel?.conclusion_cz ||
              hotel?.conclusion_de) && (
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
              >
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
              </motion.div>
            )}

            <motion.h1
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              className='pb-2 text-2xl font-bold uppercase md:text-3xl lg:text-4xl md:pb-4'
            >
              {language === 'en' && <>essential info</>}
              {language === 'cs' && <>základní informace</>}
              {language === 'de' && <>wichtige Infos</>}
            </motion.h1>

            {hotel.credits_en && hotel.credits_cz && hotel.credits_de && (
              <motion.p className='text-zinc-800'>
                {language === 'en' && hotel.credits_en}
                {language === 'cs' && hotel.credits_cz}
                {language === 'de' && hotel.credits_de}
              </motion.p>
            )}

            <motion.p className='text-zinc-800'>
              {language === 'en' && (
                <>This hotel review is part of barter collaboration.</>
              )}
              {language === 'cs' && (
                <>Tato recenze hotelu je součástí barterové spolupráce.</>
              )}
              {language === 'de' && (
                <>Diese Hotelkritik ist Teil einer Tauschgemeinschaft.</>
              )}
            </motion.p>

            <motion.iframe
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              src={hotel?.address}
              referrerPolicy='no-referrer-when-downgrade'
              className='w-full mt-6 h-80 md:mt-10'
            />

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className='mt-8 space-y-3 overflow-hidden md:mt-12'
            >
              {hotel?.web_link && (
                <p className='truncate'>
                  <span className='text-zinc-600'>Web: </span>
                  <Link
                    href={hotel.web_link}
                    className='underline'
                    target='_blank'
                  >
                    {hotel.web_link}
                  </Link>
                </p>
              )}
              {hotel?.instagram_link && (
                <p className='truncate'>
                  <span className='text-zinc-600'>Instagram: </span>
                  <Link
                    href={hotel.instagram_link}
                    className='underline'
                    target='_blank'
                  >
                    {hotel.instagram_link}
                  </Link>
                </p>
              )}
            </motion.div>
          </div>
        </Container>
      </div>
    </div>
  )
}

export default HotelDetail
