'use client'

import Container from '@/components/Container'
import Member from '@/components/team/Member'
import { useLanguage } from '@/store/useLanguage'
import { Instagram, Link, Linkedin } from 'lucide-react'

export default function Team() {
  const { language } = useLanguage(state => state)

  return (
    <div className='bg-white'>
      <Container className='grid gap-20 pt-24 pb-20 md:pt-32 md:pb-32 md:grid-cols-2 xl:grid-cols-3 md:gap-16'>
        <Member
          src='/team/dominik-grossl.webp'
          name='Dominik Grössl'
          role={
            language === 'en' ? 'Founder & CEO' : 'Zakladatel a Výkonný Ředitel'
          }
          body={
            language === 'en'
              ? 'I am Dominik, founder of Travel Magazine Planetopedia with a focus on digital marketing, content creation and collaborating with luxury brands. In recent years, I have been blessed and given the opportunity to work with many photographers, creators and collaborate with many prestigious and luxurious hotels around the world such as Four Seasons, Shangri-La, Sheraton,.. I have been able to not only turn my dreams of travelling into a reality, but also successfully enter the travel industry throughout social media. Now through all the Planetopedia services I am able to inspire and build an audience in order to provide value to others.'
              : 'Jsem Dominik, zakladatel cestovního časopisu Planetopedia se zaměřením na digitální marketing, tvorbu obsahu a spolupráci s luxusními značkami. V posledních letech jsem měl požehnání a příležitost pracovat s mnoha fotografy, tvůrci a spolupracovat s mnoha prestižními a luxusními hotely po celém světě, jako jsou Four Seasons, Shangri-La, Sheraton,... Podařilo se mi nejen proměnit své sny o cestování ve skutečnost, ale také úspěšně vstoupit do cestovního průmyslu prostřednictvím sociálních médií. Nyní se mi prostřednictvím všech služeb Planetopedie daří inspirovat a budovat publikum, abych mohl poskytovat hodnotu ostatním.'
          }
          links={[
            {
              icon: Instagram,
              href: 'https://www.instagram.com/dominik_grossl',
            },
            {
              icon: Linkedin,
              href: 'https://www.linkedin.com/in/dominik-gr%C3%B6ssl/',
            },
          ]}
          index={1}
        />
        <Member
          src='/team/fabian-dagostin.webp'
          name='Fabian Dagostin'
          role={
            language === 'en'
              ? 'Strategy & Technology'
              : 'Strategie a Technologie'
          }
          body={
            language === 'en'
              ? "Fabian Dagostin is a technology entrepreneur and product/marketing expert. He is the CEO & Co-Founder of Raush, the first travel booking system for Social Media that helps travel influencers & brands monetize their travel content. Prior, Fabian founded & scaled Street Life, a digital tour-guide application named by media outlets as the 'Tiktok for travel'. Previously he exited Street Inc, a virality marketing agency servicing the likes of Gucci, Bacardi, Red Bull, (Careem) (and many more/as well as governmental institutions). His products & content can be enjoyed on OSN and Wavo TV networks, Google Arts & Culture and every Emirates Airlines flight. His stories have been broadcasted globally on CNN TV, newspapers like The National, Radio 103.8 and other noteworthy mediums."
              : 'Fabian Dagostin je technologický podnikatel a odborník na produkty a marketing. Je generálním ředitelem a spoluzakladatelem společnosti Raush, prvního cestovního rezervačního systému pro sociální média, který pomáhá cestovním influencerům a značkám zpeněžit jejich cestovní obsah. Předtím Fabian založil a rozšířil Street Life, digitální průvodcovskou aplikaci, kterou média označila za "Tiktok pro cestování". Předtím opustil Street Inc, agenturu pro virální marketing, která poskytovala služby například společnostem Gucci, Bacardi, Red Bull, (Careem) (a mnoha dalším / stejně jako vládním institucím). Jeho produkty a obsah si můžete vychutnat na televizních sítích OSN a Wavo, Google Arts & Culture a v každém letu Emirates Airlines. Jeho příběhy byly celosvětově vysílány v televizi CNN, novinách jako The National, rádiu 103,8 a dalších pozoruhodných médiích.'
          }
          links={[
            {
              icon: Instagram,
              href: 'https://www.instagram.com/fabiandagostin/',
            },
            {
              icon: Linkedin,
              href: 'https://www.linkedin.com/in/fabiandagostin/',
            },
          ]}
          index={2}
        />
        <Member
          src='/team/felipe-prieto.webp'
          name='Felipe Prieto'
          role={language === 'en' ? 'Community Manager' : 'Manažer Komunity'}
          body={
            language === 'en'
              ? "I am Felipe Prieto, photographer and filmmaker based out in Philadelphia, PA. I am a travel enthusiast, who enjoys learn about new cultures and experiencing the world as it is. Traveling for work and for pleasure has broadened my perspective on life, and given me the opportunity to capture images that tell interesting stories. Whether it's the tall skyscrapers of New York City, the serene landscapes of Okinawa, or the vibrant colors of the colonial streets of Cartagena. Through the 8 years of my career I have worked with multiple brands and companies like; RedBull, JanSport, Hisea Outdoor Boots, MTV, Tamron Lenses and much more. I am grateful for everything that photography has brought into my life so far, and I can't wait to see where this passion takes me next. Photography will always be a big part of my life, and I hope to continue exploring the world, capturing its essence through my lens."
              : 'Jsem Felipe Prieto, fotograf a filmař z Filadelfie. Jsem nadšenec do cestování, který rád poznává nové kultury a zažívá svět takový, jaký je. Cestování za prací i zábavou mi rozšířilo pohled na život a dalo mi příležitost zachytit snímky, které vyprávějí zajímavé příběhy. Ať už jsou to vysoké mrakodrapy New Yorku, klidná krajina Okinawy nebo zářivé barvy koloniálních ulic Cartageny. Za 8 let své kariéry jsem spolupracoval s mnoha značkami a společnostmi, jako jsou: RedBull, JanSport, Hisea Outdoor Boots, MTV, Tamron Lenses a mnoho dalších. Jsem vděčný za vše, co mi fotografování doposud přineslo do života, a nemohu se dočkat, kam mě tato vášeň zavede dál. Fotografie bude vždy velkou součástí mého života a doufám, že budu i nadále objevovat svět a zachycovat jeho podstatu prostřednictvím svého objektivu.'
          }
          links={[
            {
              icon: Instagram,
              href: 'https://www.instagram.com/felipepprieto',
            },
            {
              icon: Link,
              href: 'https://www.felipeprietofineart.com/',
            },
          ]}
          index={1}
        />
        <Member
          src='/team/francesco-de-franco.webp'
          name='Francesco De Franco'
          role={language === 'en' ? 'Community Manager' : 'Manažer Komunity'}
          body={
            language === 'en'
              ? "My name is Francesco, I am a photographer and drone pilot. I collaborate with some companies for product photography and some events. I am a lover of the Nordic countries and I only feel alive when I walk in nature. If you want to go trekking in Iceland I'm up for it!"
              : 'Jmenuji se Francesco, jsem fotograf a pilot dronu. Spolupracuji s některými společnostmi na produktových fotografiích a některých akcích. Jsem milovníkem severských zemí a cítím se živý, jen když se procházím přírodou. Pokud chcete vyrazit na trek na Island, jsem pro!'
          }
          links={[
            {
              icon: Instagram,
              href: 'https://www.instagram.com/ergodyne/',
            },
          ]}
          index={2}
        />
        <Member
          src='/team/drew-peden.webp'
          name='Drew Peden'
          role={language === 'en' ? 'Community Manager' : 'Manažer Komunity'}
          body={
            language === 'en'
              ? "I'm Drew Peden, a Content Creator based in South Carolina! I’ve been a creator since 2016 and continue to grow my skills for this passion every single day! Currently I am working as a full time Content Creator for a marketing agency in Greenville, South Carolina while still pursuing freelance travel photography gigs on the side! My biggest passions are landscape / adventure lifestyle photography, because I love to take people on all of my crazy adventures! I hope to continue to grow and inspire others to follow their passions and explore this beautiful planet we call home!"
              : 'Jsem Drew Peden, tvůrce obsahu z Jižní Karolíny! Tvůrcem jsem od roku 2016 a své dovednosti pro tuto vášeň rozvíjím každý den! V současné době pracuji na plný úvazek jako Content Creator pro marketingovou agenturu v Greenville v Jižní Karolíně a zároveň se stále věnuji cestovatelské fotografii na volné noze! Mou největší vášní je fotografování krajiny / dobrodružného životního stylu, protože miluji brát lidi na všechna svá bláznivá dobrodružství! Doufám, že se budu i nadále rozvíjet a inspirovat ostatní, aby následovali své vášně a prozkoumali tuto krásnou planetu, kterou nazýváme domovem!'
          }
          links={[
            {
              icon: Instagram,
              href: 'https://www.instagram.com/drewpeden/',
            },
            {
              icon: Linkedin,
              href: 'https://www.linkedin.com/in/drew-peden-438a62172/',
            },
          ]}
          index={3}
        />
      </Container>
    </div>
  )
}
