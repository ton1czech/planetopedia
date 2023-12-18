'use client'

import Container from '@/components/Container'
import WorkWith from '@/components/WorkWith'
import Paragraph from '@/components/company/Paragraph'
import { useLanguage } from '@/store/useLanguage'
import { motion } from 'framer-motion'

const paragraphs = [
  {
    en: 'Planetopedia was founded by Dominik Grössl as a way to share his passion for travel with the world. Dominik visited Javea, Spain a few years back as a volunteer as he wanted to get among the new cultures and interests of the people in the world.',
    cz: 'Planetopedia založil Dominik Grössl jako způsob, jak se podělit se světem o svou vášeň pro cestování. Dominik před několika lety navštívil španělské město Javea jako dobrovolník, protože se chtěl dostat mezi nové kultury a zájmy lidí ve světě.',
    de: 'Planetopedia wurde von Dominik Grössl gegründet, um seine Leidenschaft für das Reisen mit der Welt zu teilen. Dominik besuchte Javea, Spanien vor ein paar Jahren als Freiwilliger, da er neue Kulturen und Interessen der Menschen in der Welt kennenlernen wollte.',
  },
  {
    en: 'Precisely because of this decision and gaining different perspectives, it filled him so much that he decided to share these moments not only with his loved ones but also to connect individual people from different locations and share it with audiences around the world.',
    cz: 'Právě toto rozhodnutí a získání různých pohledů ho naplnilo natolik, že se rozhodl sdílet tyto okamžiky nejen se svými blízkými, ale také propojit jednotlivé lidi z různých míst a podělit se o ně s diváky po celém světě.',
    de: 'Gerade diese Entscheidung und das Gewinnen verschiedener Perspektiven erfüllten ihn so sehr, dass er beschloss, diese Momente nicht nur mit seinen Lieben zu teilen, sondern auch einzelne Menschen an verschiedenen Orten miteinander zu verbinden und sie mit dem Publikum in aller Welt zu teilen.',
  },
  {
    en: 'Shortly thereafter, Planetopedia was born and has gradually become a digital marketing influencer agency, focused on the future. With proven expertise in the luxury hospitality, we offer innovative and eye-catching photography and video marketing solutions.',
    cz: 'Krátce poté se zrodila Planetopedia, která se postupně stala marketingovou agenturou se zaměřením nejen na digitální marketing. Díky prokazatelným zkušenostem v oblasti luxusního pohostinství nabízíme inovativní a poutavá fotografická a video marketingová řešení.',
    de: 'Kurz darauf wurde Planetopedia geboren und hat sich nach und nach zu einer auf die Zukunft ausgerichteten Influencer-Agentur für digitales Marketing entwickelt. Mit bewährter Expertise in der Luxusgastronomie bieten wir innovative und auffällige Fotografie- und Videomarketinglösungen.',
  },
  {
    en: 'Since then, we as a whole have been able to offer the capabilities of our creators for luxury brands, companies and personal purposes around the world. A worldwide community filled with more than 200 talented creators.',
    cz: 'Od té doby můžeme jako celek nabízet schopnosti tvůrců pro luxusní značky, firmy i osobní účely po celém světě. Celosvětová komunita plná více než 200 talentovaných tvůrců.',
    de: 'Seitdem sind wir in der Lage, die Fähigkeiten unserer Schöpfer für Luxusmarken, Unternehmen und persönliche Zwecke auf der ganzen Welt anzubieten. Eine weltweite Gemeinschaft mit mehr als 200 talentierten Schöpfern.',
  },
  {
    en: 'The journey begins with Planetopedia, a global travel community with unique combination of inspirational and aspirational experiences, photographs, and locations. We mutually connect creators and brand businesses across all horizons in the travel / tourism and outdoor industry.',
    cz: 'Cesta začíná na Planetopedia, globální cestovatelské komunitě s jedinečnou kombinací inspirativních a aspiračních zážitků, fotografií a míst. Vzájemně propojujeme napříč všemi obzory v oblasti cestování/turistiky a outdooru.',
    de: 'Die Reise beginnt mit Planetopedia, einer globalen Reise-Community mit einer einzigartigen Kombination aus inspirierenden und aufstrebenden Erfahrungen, Fotos und Orten. Wir verbinden Schöpfer und Markenunternehmen über alle Horizonte der Reise-/Tourismus- und Outdoor-Branche hinweg miteinander.',
  },
  {
    en: 'Our goal isn’t just to share curated images that capture the essence of an extraordinary places, but provide to people a forward-thinking approach to travel with the meaning of which unlike anything they have ever known.',
    cz: 'Naším cílem není jen sdílet vybrané snímky, které zachycují podstatu výjimečných míst, ale poskytnout lidem pokrokový přístup k cestování, jehož smysl se nepodobá ničemu, co kdy poznali.',
    de: 'Unser Ziel ist es nicht nur, kuratierte Bilder zu teilen, die die Essenz eines außergewöhnlichen Ortes einfangen, sondern den Menschen einen zukunftsweisenden Ansatz für das Reisen zu bieten, dessen Bedeutung sich von allem unterscheidet, was sie bisher kannten.',
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
            transition={{ duration: 0.3 }}
            className='mb-3 text-4xl font-semibold text-center md:mb-12 lg:mb-6 md:text-5xl lg:text-6xl'
          >
            {language === 'en' && <>Our story</>}
            {language === 'cs' && <>Náš příběh</>}
            {language === 'de' && <>Unsere Geschichte</>}
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className='max-w-3xl mb-16 space-y-6 text-lg text-justify md:mb-40'
          >
            {paragraphs.map((paragraph, index) => (
              <Paragraph
                key={index}
                text={
                  language === 'en'
                    ? paragraph.en
                    : language === 'cs'
                    ? paragraph.cz
                    : language === 'de'
                    ? paragraph.de
                    : ''
                }
              />
            ))}
          </motion.div>
        </div>

        <WorkWith isCompanyPage />
      </Container>
    </div>
  )
}
