'use client'

import Container from '../Container'
import Image from 'next/image'
import { useLanguage } from '@/store/useLanguage'
import { cn } from '@/lib/utils'
import { forBrands } from '@/database/for-brands'
import Numbers from './Numbers'
import { motion } from 'framer-motion'

const Work = () => {
  const { language } = useLanguage(state => state)

  return (
    <div className='sticky top-0 snap-start scroll-mt-20 w-screen z-20 bg-white h-[calc(100vh-80px)]'>
      <Container className='py-10 text-white grid place-content-center h-full'>
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className='text-2xl font-bold text-center text-black md:text-3xl lg:text-4xl mb-5'
        >
          {language === 'en' && <>More than an agency</>}
          {language === 'cs' && <>Více než jen agentura</>}
          {language === 'de' && <></>}
        </motion.h1>
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className='text-zinc-700 md:text-center max-w-[80ch] mx-auto text-justify'
        >
          {language === 'en' && (
            <>
              Planetopedia specializes in creating branded content and launching
              social media campaigns. To do so, our team uses eye-catching
              techniques, which resonate with our clients and your readers.
            </>
          )}
          {language === 'cs' && (
            <>
              Planetopedia se specializuje na vytváření značkového obsahu a
              zajištuje marketingové kampaně. K tomu náš tým používá poutavé
              techniky, které mají ohlas u našich klientů i Vašich diváků a
              zákazníků.
            </>
          )}
          {language === 'de' && (
            <>
              Planetopedia ist auf die Erstellung von Markeninhalten und die
              Durchführung von Social-Media-Kampagnen. Dazu verwendet unser Team
              aufmerksamkeitsstarke Techniken, die bei unseren Kunden und Ihren
              Lesern gut ankommen.
            </>
          )}
        </motion.p>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <Numbers />
        </motion.div>

        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className='text-2xl font-bold text-center text-black md:text-3xl lg:text-4xl mb-5 mt-8 md:mt-16'
        >
          {language === 'en' && <>Who We Work With</>}
          {language === 'cs' && <>S kým spolupracujeme</>}
          {language === 'de' && <>Mit wem wir arbeiten</>}
        </motion.h1>
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className='text-zinc-700 md:text-center text-justify max-w-[80ch] mx-auto'
        >
          {language === 'en' && (
            <>
              From the biggest hotel chains to companies and dynamic marketing
              agencies, our clients have the same thing in common: they face
              substantial challenges demanding innovative and distinctive
              solutions.
            </>
          )}
          {language === 'cs' && (
            <>
              Od největších hotelových řetězců po firmy a dynamické marketingové
              agentury mají naši klienti společné jedno: čelí zásadním výzvám
              vyžadující inovativní a osobitá řešení.
            </>
          )}
          {language === 'de' && (
            <>
              Von den größten Hotelketten bis hin zu Unternehmen und dynamischen
              Marketingagenturen haben unsere Kunden eines gemeinsam: Sie stehen
              vor grundlegenden Herausforderungen, die innovative und
              unverwechselbare Lösungen erfordern.
            </>
          )}
        </motion.p>

        {forBrands.map(brands => (
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className='grid items-center justify-center w-full grid-cols-3 mt-10 gap-14 lg:grid-cols-6'
          >
            {brands.logos.map(brand => (
              <div
                key={brand.src}
                className={cn(
                  'grid place-content-center',
                  brand.noPhone && 'hidden md:grid'
                )}
              >
                <Image
                  src={brand.src}
                  alt='hotel'
                  width={100}
                  height={50}
                  className='w-full'
                />
              </div>
            ))}
          </motion.div>
        ))}
      </Container>
    </div>
  )
}

export default Work
