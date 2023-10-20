import Hero from '@/components/case-studies/Hero'
import Results from '@/components/case-studies/Results'
import What from '@/components/case-studies/What'
import Who from '@/components/case-studies/Who'
import ContentCreation from '@/components/case-studies/farma-hajek/ContentCreation'
import Events from '@/components/case-studies/farma-hajek/Events'
import Marketing from '@/components/case-studies/farma-hajek/Marketing'
import Web from '@/components/case-studies/farma-hajek/Web'

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
      <Who
        bodyCz='Farma Hájek je českou rodinnou farmou, která se specializuje na celoroční chov kuřat a slepic na volné podestýlce, výrobu čerstvých vajec a pěstování kvalitních brambor. S hrdostí dbají na tradici a kvalitu, a to nejen v chovu zvířat, ale i v moderním designu kurníků, které jsou inspirovány českým lesem. Farma Hájek není jen farmou, ale jsou to vášniví chovatelé a zemědělci, kteří si zakládají na kvalitě a udržitelnosti.'
        bodyEn='Farm Hájek is a Czech family farm specializing in year-round free-range chicken and hen rearing, fresh egg production, and the cultivation of high-quality potatoes. They take pride in upholding tradition and quality, not only in animal husbandry but also in the modern design of coops inspired by the Czech forest. Farm Hájek is not just a farm; they are passionate breeders and farmers who value quality and sustainability.'
      />
      <What
        bodyCz='Zvýšit podvědomí o značce. Nový, moderní web. Optimalizace reklamních kampaní. Správa sociálních sítí. Budování značky online. Organizace akcí.'
        bodyEn='To increase brand awareness. Create a new, modern website. Optimize advertising campaigns. Manage social media. Build the brand online. Organize events.'
      />
      <Results>
        <Web />
        <Marketing />
        <Events />
        <ContentCreation />
      </Results>
    </div>
  )
}
