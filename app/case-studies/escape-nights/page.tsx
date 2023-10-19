import Hero from '@/components/case-studies/Hero'

export default function EscapeNights() {
  return (
    <div className='pt-24 pb-20 bg-white md:pb-32 md:pt-32'>
      <Hero
        img='/case-studies/rozmluv-se/thumbnail.webp'
        servicesCz={['budování značky', 'akce']}
        servicesEn={['brand building', 'events']}
        title='Escape Nights'
      />
    </div>
  )
}
