'use client'

import Container from '@/components/Container'
import WorkWith from '@/components/WorkWith'
import Paragraph from '@/components/company/Paragraph'
import { useLanguage } from '@/store/useLanguage'
import { motion } from 'framer-motion'

const paragraphs = [
  {
    en: 'Planetopedia was founded by Dominik Grössl as a way to share his passion for travel with the world. Dominik visited Javea, Spain a few years back as a volunteer as he wanted to get among the new cultures and interests of the people in the world.',
    cz: 'Planetopedii založil Dominik Grössl jako způsob, jak se podělit se světem o svou vášeň pro cestování. Dominik před několika lety navštívil španělské město Javea jako dobrovolník, protože se chtěl dostat mezi nové kultury a zájmy lidí ve světě.',
  },
  {
    en: 'Precisely because of this decision and gaining different perspectives, it filled him so much that he decided to share these moments not only with his loved ones but also to connect individual people from different locations and share it with audiences around the world.',
    cz: 'Právě toto rozhodnutí a získání různých pohledů ho naplnilo natolik, že se rozhodl sdílet tyto okamžiky nejen se svými blízkými, ale také propojit jednotlivé lidi z různých míst a podělit se o ně s diváky po celém světě.',
  },
  {
    en: 'Shortly thereafter, Planetopedia was born and has gradually become a digital marketing influencer agency, focused on the future. With proven expertise in the luxury hospitality, we offer innovative and eye-catching photography and video marketing solutions.',
    cz: 'Krátce poté se zrodila společnost Planetopedia, která se postupně stala influencerskou agenturou zaměřenou na digitální marketing a budoucnost. Díky prokazatelným zkušenostem v oblasti luxusního pohostinství nabízíme inovativní a poutavá fotografická a video marketingová řešení.',
  },
  {
    en: 'Since then, we as a whole have been able to offer the capabilities of our creators for luxury brands, companies and personal purposes around the world. A worldwide community filled with more than 250 talented creators.',
    cz: 'Od té doby můžeme jako celek nabízet schopnosti našich tvůrců pro luxusní značky, firmy i osobní účely po celém světě. Celosvětová komunita plná více než 250 talentovaných tvůrců.',
  },
  {
    en: 'The journey begins with Planetopedia, a global travel community with unique combination of inspirational and aspirational experiences, photographs, and locations. We mutually connect creators and brand businesses across all horizons in the travel / tourism and outdoor industry.',
    cz: 'Cesta začíná na Planetopedii, globální cestovatelské komunitě s jedinečnou kombinací inspirativních a aspiračních zážitků, fotografií a míst. Vzájemně propojujeme tvůrce a značkové firmy napříč všemi obzory v oblasti cestování/turistiky a outdooru.',
  },
  {
    en: 'Our goal isn’t just to share curated images that capture the essence of an extraordinary places, but provide to people a forward-thinking approach to travel with the meaning of which unlike anything they have ever known.',
    cz: 'Naším cílem není jen sdílet vybrané snímky, které zachycují podstatu výjimečných míst, ale poskytnout lidem pokrokový přístup k cestování, jehož smysl se nepodobá ničemu, co kdy poznali.',
  },
]

export default function Company() {
  const { language } = useLanguage(state => state)

  return (
    <div className='pt-24 pb-20 bg-white md:pb-32 md:pt-32'>
      <Container>
        <div className='grid justify-center'>
          <motion.h2
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className='mb-3 text-4xl font-semibold text-center md:mb-12 lg:mb-6 md:text-5xl lg:text-6xl'
          >
            {language === 'en' ? <>Our story</> : <>Náš příběh</>}
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className='max-w-3xl mb-16 space-y-6 text-lg text-justify md:mb-40'
          >
            {paragraphs.map((paragraph, index) => (
              <Paragraph
                key={index}
                text={language === 'en' ? paragraph.en : paragraph.cz}
              />
            ))}
          </motion.div>
        </div>

        <WorkWith />
      </Container>
    </div>
  )
}
