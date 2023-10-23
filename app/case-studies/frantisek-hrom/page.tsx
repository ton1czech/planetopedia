import Hero from '@/components/case-studies/Hero'
import Results from '@/components/case-studies/Results'
import What from '@/components/case-studies/What'
import Who from '@/components/case-studies/Who'
import BrandBuilding from '@/components/case-studies/frantisek-hrom/BrandBuilding'
import Marketing from '@/components/case-studies/frantisek-hrom/Marketing'
import { caseStudies } from '@/database/case-studies'

export default function FrantisekHrom() {
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
  } = caseStudies.filter((data: any) => data.title === 'František Hrom')[0]

  return (
    <div className='pt-24 pb-20 bg-white md:pb-32 md:pt-32'>
      <Hero
        img='/case-studies/frantisek-hrom/hero.webp'
        servicesEn={servicesEn}
        servicesCz={servicesCz}
        servicesDe={servicesDe}
        title={title}
      />
      <Who title={title} bodyEn={whoEn} bodyCz={whoCz} bodyDe={whoDe} />
      <What bodyEn={whatEn} bodyCz={whatCz} bodyDe={whatDe} />

      <Results>
        <BrandBuilding />
        <Marketing />
      </Results>
    </div>
  )
}
