import Hero from '@/components/case-studies/Hero'

export default function FarmaHajek() {
  return (
    <div className='pt-24 pb-20 bg-white md:pb-32 md:pt-32'>
      <Hero
        img='/case-studies/farma-hajek/thumbnail.webp'
        servicesCz={['social sites', 'website', 'social content']}
        servicesEn={['social sites', 'website', 'social content']}
        title='Farma Hájek'
      />
    </div>
  )
}
