import Container from '@/components/Container'
import Member from '@/components/team/Member'
import { Instagram, Link, Linkedin } from 'lucide-react'

export default function Team() {
  return (
    <div className='bg-white'>
      <Container className='grid md:grid-cols-2 xl:grid-cols-3 gap-20 md:gap-16 pt-32'>
        <Member
          src='/team/dominik-grossl.webp'
          name='Dominik Grössl'
          role='Founder & CEO'
          body='I am Dominik, founder of Travel Magazine Planetopedia with a focus on digital marketing, content creation and collaborating with luxury brands. In recent years, I have been blessed and given the opportunity to work with many photographers, creators and collaborate with many prestigious and luxurious hotels around the world such as Four Seasons, Shangri-La, Sheraton,.. I have been able to not only turn my dreams of travelling into a reality, but also successfully enter the travel industry throughout social media. Now through all the Planetopedia services I am able to inspire and build an audience in order to provide value to others.'
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
        />
        <Member
          src='/team/fabian-dagostin.webp'
          name='Fabian Dagostin'
          role='Strategy & Technology'
          body="Fabian Dagostin is a technology entrepreneur and product/marketing expert. He is the CEO & Co-Founder of Raush, the first travel booking system for Social Media that helps travel influencers & brands monetize their travel content. Prior, Fabian founded & scaled Street Life, a digital tour-guide application named by media outlets as the 'Tiktok for travel'. Previously he exited Street Inc, a virality marketing agency servicing the likes of Gucci, Bacardi, Red Bull, (Careem) (and many more/as well as governmental institutions). His products & content can be enjoyed on OSN and Wavo TV networks, Google Arts & Culture and every Emirates Airlines flight. His stories have been broadcasted globally on CNN TV, newspapers like The National, Radio 103.8 and other noteworthy mediums."
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
        />
        <Member
          src='/team/adam-vaughan.webp'
          name='Adam Vaughan'
          role='Sales & Marketing '
          body='Hi! I’m Adam Vaughan (aka Vonski), a world traveler, history lover, and Star Wars nerd. I appreciate the chance to show you the world through my eyes. Throughout my almost 3 decades of traveling the world, I’ve experienced so many amazing things and nothing would make me happier than inspiring you. After retiring from the US Air Force in 2018, I went to work at Facebook (now Meta) where I am a senior manager and head the product security division. My focus is on travel destinations, luxury hotels, and elevated dining experiences. Let’s all experience something remarkable together!'
          links={[
            {
              icon: Instagram,
              href: 'https://www.instagram.com/vonski_travels/',
            },
            {
              icon: Linkedin,
              href: 'https://www.linkedin.com/in/adam-vaughan-93819650/',
            },
          ]}
          imagetop
        />
        <Member
          src='/team/felipe-prieto.webp'
          name='Felipe Prieto'
          role='Community Manager'
          body="I am Felipe Prieto, photographer and filmmaker based out in Philadelphia, PA. I am a travel enthusiast, who enjoys learn about new cultures and experiencing the world as it is. Traveling for work and for pleasure has broadened my perspective on life, and given me the opportunity to capture images that tell interesting stories. Whether it's the tall skyscrapers of New York City, the serene landscapes of Okinawa, or the vibrant colors of the colonial streets of Cartagena.
Through the 8 years of my career I have worked with multiple brands and companies like; RedBull, JanSport, Hisea Outdoor Boots, MTV, Tamron Lenses and much more.
I am grateful for everything that photography has brought into my life so far, and I can't wait to see where this passion takes me next. Photography will always be a big part of my life, and I hope to continue exploring the world, capturing its essence through my lens."
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
        />
        <Member
          src='/team/francesco-de-franco.webp'
          name='Francesco De Franco'
          role='Community Manager'
          body="My name is Francesco, I am a photographer and drone pilot. I collaborate with some companies for product photography and some events. I am a lover of the Nordic countries and I only feel alive when I walk in nature. If you want to go trekking in Iceland I'm up for it!"
          links={[
            {
              icon: Instagram,
              href: 'https://www.instagram.com/ergodyne/',
            },
          ]}
        />
        <Member
          src='/team/drew-peden.webp'
          name='Drew Peden'
          role='Community Manager'
          body="I'm Drew Peden, a Content Creator based in South Carolina! I’ve been a creator since 2016 and continue to grow my skills for this passion every single day! Currently I am working as a full time Content Creator for a marketing agency in Greenville, South Carolina while still pursuing freelance travel photography gigs on the side! My biggest passions are landscape / adventure lifestyle photography, because I love to take people on all of my crazy adventures! I hope to continue to grow and inspire others to follow their passions and explore this beautiful planet we call home!"
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
        />
      </Container>
    </div>
  )
}
