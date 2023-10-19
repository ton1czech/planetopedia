import Hero from '@/components/case-studies/Hero'

export default function FarmaHajek() {
  return (
    <div className='pt-24 pb-20 bg-white md:pb-32 md:pt-32'>
      <Hero
        img='/case-studies/farma-hajek/thumbnail.webp'
        servicesEn={[
          'marketing',
          'events - strongman',
          'web development',
          'social media management & content creation',
        ]}
        servicesCz={[
          'marketing',
          'akce - strongman',
          'tvorba webu',
          'správa a tvorba obsahu pro sociální sítě',
        ]}
        title='Farma Hájek'
      />
    </div>
  )
}
