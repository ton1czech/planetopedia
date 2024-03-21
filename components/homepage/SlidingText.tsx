import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useLanguage } from '@/store/useLanguage'

export const SlidingText = () => {
  const { language } = useLanguage()

  const sentences =
    language === 'en'
      ? [
          ' content that resonates.',
          ' marketing solutions.',
          ' added value.',
          ' compelling stories.',
          ' uniqueness.',
        ]
      : [
          ' obsah, který rezonuje.',
          ' marketingová řešení.',
          ' přidanou hodnotu.',
          ' poutavé příběhy.',
          ' jedinečnost.',
        ]

  const [currentSentence, setCurrentSentence] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      const nextSentence = (currentSentence + 1) % sentences.length
      setCurrentSentence(nextSentence)
    }, 3000)

    return () => clearInterval(interval)
  }, [currentSentence])

  const words = sentences[currentSentence].split(' ')

  return (
    <AnimatePresence>
      <div className='relative w-full h-full'>
        <p className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-left w-[350px] sm:w-[550px] md:w-[620px] lg:w-[750px] xl:w-[950px] 2xl:w-[1150px] text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl z-10 inline-flex flex-col flex-nowrap'>
          <span className='flex whitespace-nowrap font-light'>
            At Planetopedia,
          </span>
          <span className='flex font-light'>
            {language === 'en' && <>we create </>}
            {language === 'cs' && <>vytváříme </>}
            <motion.div
              key={currentSentence}
              initial={{ translateY: '100%' }}
              animate={{ translateY: '0' }}
              exit={{ translateY: '-100%' }}
              transition={{ duration: 0.5 }}
              className='inline-flex gap-1 md:gap-2 lg:gap-3 font-black'
            >
              {words.map((word, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, translateY: '100%' }}
                  animate={{ opacity: 1, translateY: '0' }}
                  exit={{ opacity: 0, translateY: '-100%' }}
                  transition={{ duration: 0.5 }}
                  className='inline-flex'
                >
                  {word}{' '}
                </motion.span>
              ))}
            </motion.div>
          </span>
        </p>
      </div>
    </AnimatePresence>
  )
}
