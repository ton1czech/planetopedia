import Hero from '@/components/case-studies/Hero'

export default function FourSeasons() {
  return (
    <div className='pt-24 pb-20 bg-white md:pb-32 md:pt-32'>
      <Hero
        img='/case-studies/farma-hajek/thumbnail.webp'
        servicesEn={['content creation', 'marketing']}
        servicesCz={['tvorba obsahu', 'marketing']}
        title='Four Seasons'
      />
    </div>
  )
}
