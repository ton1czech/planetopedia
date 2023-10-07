import Image from 'next/image'

const logos = [
  {
    src: '/logos/fourseasons.webp',
    label: 'Four Seasons',
  },
  {
    src: '/logos/jumeirah.webp',
    label: 'Jumeirah',
  },
  {
    src: '/logos/shangrila.webp',
    label: 'Shangri-la',
  },
  {
    src: '/logos/sheraton.webp',
    label: 'Sheraton',
  },
  {
    src: '/logos/theluxurycollection.webp',
    label: 'The luxury collection',
  },
  {
    src: '/logos/ritzcarlton.webp',
    label: 'Ritz Carlton',
  },
]

const WorkWith = () => {
  return (
    <div>
      <div className='mb-12'>
        <h2 className='mb-2 text-xl font-thin md:text-2xl lg:text-3xl text-zinc-500'>
          Who we work with
        </h2>
        <div className='grid gap-6 md:grid-cols-2 md:gap-12'>
          <p className='text-2xl font-semibold text-justify md:text-3xl lg:text-4xl'>
            We are here for people who want to stay connected.
          </p>
          <p className='text-lg'>
            From the biggest hotel companies to brands and world-inspiring
            marketing agencies, our clients have the same thing in common: big
            challenges that require a fresh & different approach.
          </p>
        </div>
      </div>

      <div className='grid items-center justify-center w-full grid-cols-2 gap-14 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6'>
        {logos.map(({ src, label }) => (
          <div className='grid place-content-center'>
            <Image
              src={src}
              alt={label}
              width={100}
              height={50}
              className='w-auto h-24'
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default WorkWith
