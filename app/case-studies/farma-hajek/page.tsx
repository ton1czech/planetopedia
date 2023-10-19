import Hero from '@/components/case-studies/Hero'

export default function FarmaHajek() {
  return (
    <div className='pt-24 pb-20 bg-white md:pb-32 md:pt-32'>
      <Hero
        img='/case-studies/farma-hajek/thumbnail.webp'
        servicesEn={[
          'social media management',
          'content creation',
          'brand building',
          'marketing',
          'events - strongman',
          'web development',
        ]}
        servicesCz={[
          'správa sociálních sítí',
          'tvorba obsahu',
          'budování značky',
          'marketing',
          'akce - strongman',
          'tvorba webu',
        ]}
        title='Farma Hájek'
      />
    </div>
  )
}
