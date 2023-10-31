import Hero from '@/components/case-studies/Hero'
import Links from '@/components/case-studies/Links'
import Results from '@/components/case-studies/Results'
import What from '@/components/case-studies/What'
import Who from '@/components/case-studies/Who'
import Review from '@/components/case-studies/rozmluv-se/Review'
import { caseStudies } from '@/database/case-studies'

export default function RozmluvSe() {
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
    links,
  } = caseStudies.filter((data: any) => data.title === 'Rozmluv se')[0]

  return (
    <div className='pt-24 pb-20 bg-white md:pb-32 md:pt-32'>
      <Hero
        img='/case-studies/rozmluv-se/thumbnail.webp'
        servicesEn={servicesEn}
        servicesCz={servicesCz}
        servicesDe={servicesDe}
        title={title}
      />
      <Who title={title} bodyEn={whoEn} bodyCz={whoCz} bodyDe={whoDe} />
      <What bodyEn={whatEn} bodyCz={whatCz} bodyDe={whatDe} />

      <Results>
        <Review />
      </Results>

      <Links links={links} />
    </div>
  )
}
