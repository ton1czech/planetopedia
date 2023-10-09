import Container from '../Container'

const Hero = () => {
  return (
    <div className='w-screen h-[90vh] lg:h-screen'>
      <video
        muted
        autoPlay
        loop
        playsInline
        className='absolute inset-0 object-cover object-center w-full h-full'
      >
        <source src='https://i.imgur.com/OXBeHNd.mp4' />
      </video>

      <div className='absolute inset-0 w-full h-full pt-24 md:pt-32'>
        <Container>
          <h1 className='text-5xl font-bold text-red-500'>ahoj</h1>
        </Container>
      </div>
    </div>
  )
}

export default Hero
