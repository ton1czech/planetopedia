import Hero from '@/components/case-studies/Hero'
import What from '@/components/case-studies/What'
import Who from '@/components/case-studies/Who'
import { caseStudies } from '@/database/case-studies'

export default function EscapeNights() {
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
  } = caseStudies.filter((data: any) => data.title === 'Escape Nights')[0]

  return (
    <div className='pt-24 pb-20 bg-white md:pb-32 md:pt-32'>
      <Hero
        img='/case-studies/escape-nights/thumbnail.webp'
        servicesEn={servicesEn}
        servicesCz={servicesCz}
        servicesDe={servicesDe}
        title={title}
      />
      <Who title={title} bodyEn={whoEn} bodyCz={whoCz} bodyDe={whoDe} />
      <What bodyEn={whatEn} bodyCz={whatCz} bodyDe={whatDe} />
    </div>
  )
}
