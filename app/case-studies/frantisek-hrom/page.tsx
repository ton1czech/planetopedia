import Hero from '@/components/case-studies/Hero'

export default function FrantisekHrom() {
  return (
    <div className='pt-24 pb-20 bg-white md:pb-32 md:pt-32'>
      <Hero
        img='/case-studies/frantisek-hrom/thumbnail.webp'
        servicesCz={['brand building', 'marketing']}
        servicesEn={['brand building', 'marketing']}
        title='František hrom'
      />
    </div>
  )
}