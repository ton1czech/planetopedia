import ContentCreation from '@/components/case-studies/ContentCreation'
import Hero from '@/components/case-studies/Hero'
import Links from '@/components/case-studies/Links'
import Results from '@/components/case-studies/Results'
import What from '@/components/case-studies/What'
import Who from '@/components/case-studies/Who'
import Events from '@/components/case-studies/farma-hajek/Events'
import Marketing from '@/components/case-studies/farma-hajek/Marketing'
import { caseStudies } from '@/database/case-studies'

export default function FarmaHajek() {
  const {
    title,
    servicesEn,
    servicesCz,
    servicesDe,
    whoEn,
    whoCz,
    whoDe,
    whatEn,
    whatCz,
    whatDe,
    contentSrcs,
    links,
  } = caseStudies.filter((data: any) => data.title === 'Farma Hájek')[0]

  return (
    <div className='pt-24 pb-20 bg-white md:pb-32 md:pt-32'>
      <Hero
        img='/case-studies/farma-hajek/thumbnail.webp'
        servicesEn={servicesEn}
        servicesCz={servicesCz}
        servicesDe={servicesDe}
        title={title}
      />
      <Who title={title} bodyEn={whoEn} bodyCz={whoCz} bodyDe={whoDe} />
      <What bodyEn={whatEn} bodyCz={whatCz} bodyDe={whatDe} />
      <Results>
        {/* <Web /> */}
        <Marketing />
        <Events />
        <ContentCreation images={contentSrcs} rotate />
      </Results>
      <Links links={links} />
    </div>
  )
}
