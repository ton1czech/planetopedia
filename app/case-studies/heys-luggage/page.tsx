import Hero from '@/components/case-studies/Hero'

export default function HeysLuggage() {
  return (
    <div className='pt-24 pb-20 bg-white md:pb-32 md:pt-32'>
      <Hero
        img='/case-studies/rozmluv-se/thumbnail.webp'
        servicesCz={['influencer campaign', 'marketing', 'content creation']}
        servicesEn={['influencer campaign', 'marketing', 'content creation']}
        title='Heys Luggage'
      />
    </div>
  )
}
