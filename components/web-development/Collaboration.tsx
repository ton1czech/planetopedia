'use client'

import { useLanguage } from '@/store/useLanguage'
import Container from '../Container'
import { FC, useRef } from 'react'
import { useScroll, motion } from 'framer-motion'

interface TimelineItemProps {
  week: string
  label: string
  body: string
  src: string
}

export const TimelineItem: FC<TimelineItemProps> = ({
  week,
  label,
  body,
  src,
}) => {
  const ref = useRef<HTMLImageElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 1', '1 1'],
  })

  return (
    <li>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className='flex items-center pt-3 flex-start'
      >
        <div className='-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-zinc-400' />
        <p className='text-sm text-zinc-600'>{week}</p>
      </motion.div>
      <div className='mt-2 mb-6 ml-4'>
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className='mb-3 text-xl font-semibold'
        >
          {label}
        </motion.h3>
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
          {body}
        </motion.p>
        {/* <motion.img
          ref={ref}
          src={src}
          style={{ scale: scrollYProgress, opacity: scrollYProgress }}
        /> */}
      </div>
    </li>
  )
}

export const Collaboration = () => {
  const { language } = useLanguage()

  return (
    <section className='mb-20 md:mb-40'>
      <Container>
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className='mb-4 text-xl font-semibold text-center md:text-3xl xl:text-4xl'
        >
          {language === 'en' && <>Collaboration Timeline</>}
          {language === 'cz' && <>Seznamte se se svým vývojářem</>}
        </motion.h2>
        <ol className='border-l-2 border-zinc-400 dark:border-zinc-600 space-y-20 lg:space-y-32 max-w-[80ch] mx-auto'>
          <TimelineItem
            week={language === 'en' ? '1st step' : '1. krok'}
            label={
              language === 'en'
                ? 'Embarking on Visual Foundations'
                : 'Začínáme s vizuálním základem'
            }
            body={
              language === 'en'
                ? "In the first week, we'll focus on creating the fundamental structure and design of the website. Creativity meets functionality as we craft a visual identity that captivates and engages visitors."
                : 'V prvním týdnu se společně zaměříme na vytvoření základní struktury a designu webu. Kreativita se setká s funkcionalitou, abychom vytvořili vizuální podobu, která bude zaujímat a lákat návštěvníky.'
            }
            src='/services/web-development/timeline/1.webp'
          />
          <TimelineItem
            week={language === 'en' ? '2nd step' : '2. krok'}
            label={
              language === 'en'
                ? 'Content Shapes Form and Purpose'
                : 'Obsah plní formu a smysl'
            }
            body={
              language === 'en'
                ? "The second week is dedicated to populating the website with content that is not only visually appealing but also conveys crucial information. Together, we'll work on texts, images, and other elements to give the content meaning and value."
                : 'Druhý týden bude věnován naplnění obsahu, který bude nejen esteticky působivý, ale bude také sdělovat důležité informace. Společně pracujeme na textech, obrázcích a dalších prvcích, které dodají obsahu webu jeho význam a hodnotu.'
            }
            src='/services/web-development/timeline/2.webp'
          />
          <TimelineItem
            week={language === 'en' ? '3rd step' : '3. krok'}
            label={
              language === 'en'
                ? 'Finetuning for a Flawless Impression'
                : 'Ladění pro dokonalý dojem'
            }
            body={
              language === 'en'
                ? "The third week focuses on refining details and making subtle adjustments. We'll pay attention to every minor tweak to ensure the website exudes professionalism and aligns precisely with your vision."
                : 'Třetí týden se zaměříme na detaily a jemné úpravy. Věnujeme se všem drobným úpravám, které zajistí, že web bude působit profesionálně a přesně podle vašich představ.'
            }
            src='/services/web-development/timeline/3.webp'
          />
          <TimelineItem
            week={language === 'en' ? '4th step' : '4. krok'}
            label={
              language === 'en'
                ? 'When Vision Becomes Reality'
                : 'Když se vize stane skutečností'
            }
            body={
              language === 'en'
                ? "The final week is dedicated to final preparations for launching the website. We'll review all elements to ensure your website is ready for deployment and poised to welcome your visitors."
                : 'Poslední týden je věnován finálním přípravám k spuštění webu. Zkontrolujeme všechny prvky, abychom zajistili, že váš web je připraven k uvedení do provozu a k přivítání vašich návštěvníků.'
            }
            src='/services/web-development/timeline/4.webp'
          />
        </ol>
      </Container>
    </section>
  )
}
