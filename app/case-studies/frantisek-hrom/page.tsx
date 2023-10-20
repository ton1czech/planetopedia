import Hero from '@/components/case-studies/Hero'
import Results from '@/components/case-studies/Results'
import What from '@/components/case-studies/What'
import Who from '@/components/case-studies/Who'
import BrandBuilding from '@/components/case-studies/frantisek-hrom/BrandBuilding'
import { caseStudies } from '@/database/case-studies'

export default function FrantisekHrom() {
  return (
    <div className='pt-24 pb-20 bg-white md:pb-32 md:pt-32'>
      <Hero
        img='/case-studies/frantisek-hrom/hero.webp'
        servicesCz={['budování značky', 'marketing']}
        servicesEn={['brand building', 'marketing']}
        title='František hrom'
      />
      <Who title={caseStudies[1].title} bodyCz='borec' bodyEn='borec' />
      <What bodyCz='borec' bodyEn='borec' />

      <Results>
        <BrandBuilding />
      </Results>
    </div>
  )
}
