'use client'

interface ItemProps {
  src: string
  thumbnail: string
}

const Item = ({ src, thumbnail }: ItemProps) => {
  return (
    <div className='!max-w-[240px] md:!max-w-[300px] xl:!max-w-[350px] 2xl:!max-w-[400px] !h-[370px] sm:!h-[580px] md:!h-[750px]'>
      {src.includes('.mp4') ? (
        <video
          className='!max-w-[240px] md:!max-w-[300px] xl:!max-w-[350px] 2xl:!max-w-[400px]'
          playsInline
          autoPlay
          muted
          loop
          poster={thumbnail}
        >
          <source src={src} />
        </video>
      ) : (
        <div className='!max-w-[240px] md:!max-w-[300px] xl:!max-w-[350px] 2xl:!max-w-[400px]'>
          <img src={src} alt='mockup' />
        </div>
      )}
    </div>
  )
}

export default Item
