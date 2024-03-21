'use client'

import { useLanguage } from '@/store/useLanguage'
import Container from '../Container'
import Cz from './videos/Cz'
import En from './videos/En'
import { motion } from 'framer-motion'

const Feedback = () => {
  const { language } = useLanguage(state => state)

  return (
    <div className='sticky top-0 snap-start scroll-mt-20 w-screen z-40 bg-black flex items-center h-[calc(100vh-80px)]'>
      <Container className='h-[80vh] grid place-content-center'>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className='mx-auto'
        >
          <h2 className='text-2xl text-center text-white md:text-3xl mb-2'>
            {language === 'en' && (
              <>
                What our <b>clients </b>say
              </>
            )}
            {language === 'cs' && (
              <>
                Co říkají naši <b>klienti</b>
              </>
            )}
            {language === 'de' && (
              <>
                Was unsere <b>Kunden </b>sagen
              </>
            )}
          </h2>

          <div className='lg:hidden'>
            {language === 'cs' ? (
              <>
                <Cz />
              </>
            ) : (
              <>
                <En />
              </>
            )}
          </div>

          <div className='lg:grid grid-cols-2 hidden gap-8'>
            <Cz />
            <En />
          </div>
        </motion.div>
      </Container>
    </div>
  )
}

export default Feedback
