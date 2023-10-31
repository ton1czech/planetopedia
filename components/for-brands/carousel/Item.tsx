'use client'

import { motion } from 'framer-motion'

interface ItemProps {
  src: string
  thumbnail: string
}

const Item = ({ src, thumbnail }: ItemProps) => {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5 }}
      className='!max-w-[200px] md:!max-w-[300px] xl:!max-w-[350px] 2xl:!max-w-[400px] !h-[370px] sm:!h-[580px] md:!h-[750px]'
    >
      {src.includes('.mp4') ? (
        <video
          className='!max-w-[200px] md:!max-w-[300px] xl:!max-w-[350px] 2xl:!max-w-[400px]'
          playsInline
          autoPlay
          muted
          loop
          poster={thumbnail}
        >
          <source src={src} />
        </video>
      ) : (
        <div className='!max-w-[200px] md:!max-w-[300px] xl:!max-w-[350px] 2xl:!max-w-[400px]'>
          <img src={src} alt='mockup' />
        </div>
      )}
    </motion.div>
  )
}

export default Item
