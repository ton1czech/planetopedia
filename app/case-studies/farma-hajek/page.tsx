import Hero from '@/components/case-studies/Hero'
import Results from '@/components/case-studies/Results'
import What from '@/components/case-studies/What'
import Who from '@/components/case-studies/Who'
import ContentCreation from '@/components/case-studies/farma-hajek/ContentCreation'
import Events from '@/components/case-studies/farma-hajek/Events'
import Marketing from '@/components/case-studies/farma-hajek/Marketing'
import Web from '@/components/case-studies/farma-hajek/Web'
import { caseStudies } from '@/database/case-studies'

export default function FarmaHajek() {
  return (
    <div className='pt-24 pb-20 bg-white md:pb-32 md:pt-32'>
      <Hero
        img='/case-studies/farma-hajek/thumbnail.webp'
        servicesEn={[
          'marketing',
          'events',
          'web development',
          'social media management & content creation',
        ]}
        servicesCz={[
          'marketing',
          'akce',
          'tvorba webu',
          'správa a tvorba obsahu pro sociální sítě',
        ]}
        title='Farma Hájek'
      />
      <Who
        title={caseStudies[0].title}
        bodyEn={caseStudies[0].whoEn!}
        bodyCz={caseStudies[0].whoCz!}
        bodyDe={caseStudies[0].whoDe!}
      />
      <What
        bodyEn={caseStudies[0].whatEn!}
        bodyCz={caseStudies[0].whatCz!}
        bodyDe={caseStudies[0].whatDe!}
      />
      <Results>
        <Web />
        <Marketing />
        <Events />
        <ContentCreation />
      </Results>
    </div>
  )
}
