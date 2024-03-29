'use client'

import { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import Container from '../Container'
import { useLanguage } from '@/store/useLanguage'

export const Collaboration: React.FC = () => {
  const { language } = useLanguage()

  const ref = useRef<HTMLOListElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start center', 'end center'],
  })

  return (
    <section className='mb-20 md:mb-40'>
      <Container>
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className='mb-4 text-xl font-bold md:text-3xl xl:text-4xl'
        >
          {language === 'en' && <>Our cooperation, step by step.</>}
          {language === 'cs' && <>Naše spolupráce, krok po kroku.</>}
        </motion.h2>
        <ol ref={ref} className='relative border-l-2 border-zinc-400 '>
          <motion.div
            className='absolute -left-[3px] z-10 w-[4px] h-full bg-sky-500 origin-top'
            style={{ scaleY: scrollYProgress }}
          />
          <div className='space-y-10 lg:space-y-36'>
            <TimelineItem
              step={language === 'en' ? '1st step' : '1. krok'}
              label={
                language === 'en'
                  ? 'Embarking on Visual Foundations'
                  : 'Začínáme s vizuálním základem'
              }
              body={
                language === 'en'
                  ? 'We will focus on creating the fundamental structure and design of the website. Creativity meets functionality as we craft a visual identity that captivates and engages visitors.'
                  : 'Budeme se věnovat vytvoření základní struktury a designu webu. Kreativita se setká s funkcionalitou, abychom vytvořili vizuální podobu, která bude zaujímat a lákat návštěvníky.'
              }
            />
            <TimelineItem
              step={language === 'en' ? '2nd step' : '2. krok'}
              label={
                language === 'en'
                  ? 'Content Shapes Form and Purpose'
                  : 'Obsah se začíná formulovat a dávat smysl'
              }
              body={
                language === 'en'
                  ? "We will focus on populating the website with content that is not only visually appealing but also conveys crucial information. Together, we'll work on texts, images, and other elements to give the content meaning and value."
                  : 'Budeme se věnovat naplnění obsahu, který bude nejen esteticky působivý, ale bude také sdělovat důležité informace. Společně pracujeme na textech, obrázcích a dalších prvcích, které dodají obsahu webu jeho význam a hodnotu.'
              }
            />
            <TimelineItem
              step={language === 'en' ? '3rd step' : '3. krok'}
              label={
                language === 'en'
                  ? 'Finetuning for a Flawless Impression'
                  : 'Ladění pro dokonalý dojem'
              }
              body={
                language === 'en'
                  ? 'We will focus on refining details and making subtle adjustments to ensure the website exudes professionalism and aligns precisely with your vision.'
                  : 'Budeme se věnovat detailům a jemným úpravám, které zajistí, že web bude působit profesionálně a přesně podle vašich představ.'
              }
            />
            <TimelineItem
              step={language === 'en' ? '4th step' : '4. krok'}
              label={
                language === 'en'
                  ? 'When Vision Becomes Reality'
                  : 'Když se vize stane skutečností'
              }
              body={
                language === 'en'
                  ? "We will focus on final preparations for launching the website. We'll review all elements to ensure your website is ready for deployment and poised to welcome your visitors, future customers."
                  : 'Budeme se věnovat finálním přípravám k spuštění webu. Zkontrolujeme všechny prvky, abychom zajistili, že váš web je připraven k uvedení do provozu a k přivítání vašich návštěvníků, budoucích zákazníků.'
              }
            />
          </div>
        </ol>
      </Container>
    </section>
  )
}

interface TimelineItemProps {
  step: string
  label: string
  body: string
}

const TimelineItem: React.FC<TimelineItemProps> = ({ step, label, body }) => {
  const ref = useRef<any>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start center', 'end center'],
  })

  return (
    <li>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className='relative flex items-center pt-3 flex-start'
      >
        <motion.div className='absolute -ml-[5px] mr-3 h-[9px] w-[9px] rounded-full z-10 bg-zinc-400' />
        <motion.div
          ref={ref}
          style={{ opacity: scrollYProgress }}
          className='absolute -ml-[5px] mr-3 h-[9px] w-[9px] rounded-full z-10 bg-sky-500'
        />
        <motion.p className='absolute ml-3 text-sm text-zinc-500'>
          {step}
        </motion.p>
        <motion.p
          ref={ref}
          style={{ opacity: scrollYProgress }}
          className='absolute ml-3 text-sm text-sky-500'
        >
          {step}
        </motion.p>
      </motion.div>
      <div className='mt-6 ml-4'>
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className='mb-1 text-xl font-semibold'
        >
          {label}
        </motion.h3>
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
          {body}
        </motion.p>
      </div>
    </li>
  )
}

export default Collaboration
