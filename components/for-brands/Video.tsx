import React from 'react'
import Container from '../Container'

const Video = () => {
  return (
    <div className='sticky top-0 snap-start scroll-mt-20 w-screen h-[90vh] z-20 bg-white flex items-center'>
      <Container className='py-10 w-full'>
        <h1 className='text-2xl md:text-3xl lg:text-4xl font-bold text-center text-black'>
          MORE THAN AN AGENCY.
        </h1>
        <p className='text-zinc-700 text-center max-w-[80ch] mx-auto'>
          Planetopedia specializes in creating eye-catching photography, video
          production and social media campaigns for the World’s leading luxury
          hotels, resorts and rental properties.
        </p>

        <div className='shadow-2xl'>
          <iframe
            src='https://www.youtube.com/embed/6FVQmdEMA3o?si=g37RNrek6Y-5PlpY'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            allowFullScreen
            className='w-full mt-4 md:mt-10 h-[350px] sm:h-[380px] md:h-[430px] lg:h-[480px] xl:h-[520px]'
          />
        </div>
      </Container>
    </div>
  )
}

export default Video
