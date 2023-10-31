'use client'

import { videos } from '@/database/videos'
import Container from '../Container'
import Videos from '../testimonials/Videos'
import { useLanguage } from '@/store/useLanguage'
import { motion } from 'framer-motion'

const Expecting = () => {
  const { language } = useLanguage(state => state)

  return (
    <div className='sticky top-0 snap-start scroll-mt-20 w-screen z-10 bg-white h-[calc(100vh-80px)]'>
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <Container className='h-[80vh] grid place-content-center'>
          <h2 className='text-2xl text-center text-black md:text-3xl mt-40 -mb-14 2xl:-mb-4'>
            {language === 'en' && (
              <>
                What our <b>creators </b>say
              </>
            )}
            {language === 'cs' && (
              <>
                Co říkají naši <b>tvůrci</b>
              </>
            )}
            {language === 'de' && (
              <>
                Was unsere <b>Schöpfer </b>sagen
              </>
            )}
          </h2>
          <Videos data={videos} />
        </Container>
      </motion.div>
    </div>
  )
}

export default Expecting
