import Hero from '@/components/case-studies/Hero'

export default function RozmluvSe() {
  return (
    <div className='pt-24 pb-20 bg-white md:pb-32 md:pt-32'>
      <Hero
        img='/case-studies/rozmluv-se/thumbnail.webp'
        servicesCz={[
          'marketing - privedeni x novych studentu',
          'content creation',
        ]}
        servicesEn={[
          'marketing - privedeni x novych studentu',
          'content creation',
        ]}
        title='Rozmluv se'
      />
    </div>
  )
}