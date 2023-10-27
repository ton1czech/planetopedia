import Image from 'next/image'
import Container from '../Container'

interface ItemProps {
  heading: string
  text?: string
  multi?: string[]
}

const Item = ({ heading, text, multi }: ItemProps) => {
  return (
    <li>
      <h3 className='text-xl md:text-2xl lg:text-3xl font-semibold'>
        {heading}
      </h3>
      {text && <p className='text-zinc-300'>{text}</p>}
      {multi && (
        <>
          {multi.map(mul => (
            <p key={mul}>{mul}</p>
          ))}
        </>
      )}
    </li>
  )
}

const Benefits = () => {
  return (
    <div className='sticky top-0 snap-start scroll-mt-20 w-screen h-[90vh] z-20 bg-black'>
      <Container className='py-10 text-white'>
        <div className='grid lg:grid-cols-2 gap-8'>
          <div>
            <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold'>
              Main Benefits
            </h1>
            <ul className='mt-10 md:mt-20 space-y-6 md:space-y-10'>
              <Item
                heading='1. Instagram connection'
                text="Let's group together on instagram!"
              />
              <Item
                heading='2. Meet the community'
                text='Meet and connect with our creators around the world.'
              />
              <Item
                heading='3. Work together'
                text='Unlock success through our social media influencer campaigns.'
              />
              <Item
                heading='4. Whatsapp Group'
                text='Vote in polls / Give feedback / Platform News'
              />
              <Item
                heading='5. Engagement Groups'
                multi={[
                  'a) Luxury Travel Support Group',
                  'b) Photographers Support Group',
                  'c) Travel Tips Support Group',
                ]}
              />
            </ul>
          </div>

          <div className='hidden lg:block'>
            <Image
              src='/services/for-creators/1.webp'
              alt='heys luggage mockup'
              width={300}
              height={500}
              className='absolute bottom-20 left-1/2 w-[16vw]'
            />
            <Image
              src='/services/for-creators/2.webp'
              alt='heys luggage mockup'
              width={300}
              height={500}
              className='absolute bottom-48 left-[65%] w-[16vw]'
            />
            <Image
              src='/services/for-creators/3.webp'
              alt='heys luggage mockup'
              width={300}
              height={500}
              className='absolute bottom-64 left-[80%] w-[16vw]'
            />
          </div>
        </div>

        <p className='text-sm text-zinc-400 pt-14 md:pt-20 text-center'>
          #planetopedia Team
        </p>
      </Container>
    </div>
  )
}

export default Benefits
