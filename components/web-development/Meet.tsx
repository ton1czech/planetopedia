'use client'

import { useLanguage } from '@/store/useLanguage'
import Container from '../Container'
import { motion } from 'framer-motion'

export const Meet = () => {
  const { language } = useLanguage()

  return (
    <section className=''>
      <Container>
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className='mb-4 text-xl font-semibold md:text-3xl lg:text-4xl'
        >
          {language === 'en' && <>Meet your team.</>}
          {language === 'cs' && <>Seznamte se se svým týmem.</>}
        </motion.h2>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className='flex flex-col gap-20 lg:gap-8'
        >
          <div className='grid lg:grid-cols-[1fr_2.35fr] gap-4'>
            <img
              src='/team/daniel-anthony-baudys.webp'
              alt='Daniel Anthony Baudyš'
            />
            <div>
              <p className='text-3xl font-semibold md:text-4xl'>
                Daniel Anthony Baudyš
              </p>
              <p className='mb-3 text-xl md:text-2xl text-zinc-700'>
                {language === 'en' && 'developer'}
                {language === 'cs' && 'vývojář'}
              </p>
              <p className='text-justify text-zinc-800'>
                {language === 'en' &&
                  'Daniel Anthony Baudyš specializes in design and programming. He has been working in design and photography since 2015 and programming since 2019. During this time he has created dozens of projects, both for himself and for clients. His portfolio includes graphic design of inflation in the Czech Republic, several projects for the Pilsen office. The website you are reading right now is also my creation. He has also given several educational talks for children, mainly in Minecraft. Currently, his main focus is creating websites using the latest technologies, of which he is developing his knowledge every day. It is also important to mention that he successfully passed the Microsoft Office Specialist exams in PowerPoint and Word at the Bett 2023 event in London.'}
                {language === 'cs' &&
                  'Daniel Anthony Baudyš se specializuje v oblasti designu a programování. Designu a fotografování se věnuje již od roku 2015, programování následně od roku 2019. Za tuto dobu stihl vytvořit desítky projektů, ať už sám pro sebe, tak i pro klienty. Jeho portfolia zahrnuje grafické zpracování inflace v České republice, několik projektů pro úřad Plzeňského. Web, který právě čtete je také můj výtvor. Také vedl několik výukových přednášek pro děti, především v Minecraftu. V současné době je jeho hlavním zaměřením tvorba webových stránek pomocí nejnovějších technologií, o kterých svou znalost rozvíjí každý den. Důležité je také zmínit, že úspěšně absolvoval Microsoft Office Specialist zkoušky z PowerPointu a Wordu na akci Bett 2023 v Londýně.'}
              </p>
            </div>
          </div>
          <div className='grid lg:grid-cols-[1fr_2.35fr] gap-4'>
            <img src='/team/dominik-grossl.webp' alt='Dominik Grossl' />
            <div>
              <p className='text-3xl font-semibold md:text-4xl'>
                Dominik Grössl
              </p>
              <p className='mb-3 text-xl md:text-2xl text-zinc-700'>
                {language === 'en' && 'project manager'}
                {language === 'cs' && 'projektový manažer'}
              </p>
              <p className='text-justify text-zinc-800'>
                {language === 'en' &&
                  'Dominik is the founder of digital marketing agency Planetopedia with a focus on digital marketing and content creation. He is a multi-faceted, highly motivated digital marketer, networker and community builder. In recent years, he has had the opportunity to work with many content creators and collaborate with numerous companies and luxury hotels around the world such as Four Seasons, Ritz-Carlton, Six Senses and more. He not only managed to turn his travel dreams into reality, but also successfully entered the tourism industry through social media and created highly effective campaigns. Now with all these services he is able to inspire and build an audience to provide value to others.'}
                {language === 'cs' &&
                  'Dominik je zakladatelem digitální marketingové agentury Planetopedia se zaměřením na digitální marketing a tvorbu obsahu. Je všestranný, vysoce motivovaný digitální marketér, networker a budovatel komunit. V posledních letech měl příležitost pracovat s mnoha jednotlivci a spolupracovat s mnoha firmami a luxusními hotely po celém světě, jako jsou Four Seasons, Ritz-Carlton, Six Senses a další. Podařilo se mu nejen proměnit své sny o cestování ve skutečnost, ale také úspěšně vstoupit do cestovního ruchu skrz sociální média a vytvářet vysoce efektivní kampaně. Nyní je díky všem těmto službám schopen inspirovat a budovat publikum, aby mohl poskytovat hodnotu ostatním.'}
              </p>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
