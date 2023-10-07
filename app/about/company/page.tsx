'use client'

import Container from '@/components/Container'
import WorkWith from '@/components/WorkWith'
import Paragraph from '@/components/company/Paragraph'
import { ScrollContext } from '@/utils/scroll-observer'
import { useContext, useRef } from 'react'
import { motion } from 'framer-motion'
import useMediaQuery from '@/hooks/useMediaQuery'

const opacityForBlock = (sectionProgress: number, blockNo: number) => {
  const progress = sectionProgress - blockNo
  if (progress >= 0 && progress < 1) return 1

  return 0.2
}

const paragraphs = [
  {
    text: 'Planetopedia was founded by Dominik Grössl as a way to share his passion for travel with the world. Dominik visited Javea, Spain a few years back as a volunteer as he wanted to get among the new cultures and interests of the people in the world.',
  },
  {
    text: 'Precisely because of this decision and gaining different perspectives, it filled him so much that he decided to share these moments not only with his loved ones but also to connect individual people from different locations and share it with audiences around the world.',
  },
  {
    text: 'Shortly thereafter, Planetopedia was born and has gradually become a digital marketing influencer agency, focused on the future. With proven expertise in the luxury hospitality, we offer innovative and eye-catching photography and video marketing solutions.',
  },
  {
    text: 'Since then, we as a whole have been able to offer the capabilities of our creators for luxury brands, companies and personal purposes around the world. A worldwide community filled with more than 250 talented creators.',
  },
  {
    text: 'The journey begins with Planetopedia, a global travel community with unique combination of inspirational and aspirational experiences, photographs, and locations. We mutually connect creators and brand businesses across all horizons in the travel / tourism and outdoor industry.',
  },
  {
    text: 'Our goal isn’t just to share curated images that capture the essence of an extraordinary places, but provide to people a forward-thinking approach to travel with the meaning of which unlike anything they have ever known.',
  },
]

export default function Company() {
  const isMobile = useMediaQuery('(max-width: 450px)')
  const { scrollY } = useContext(ScrollContext)
  const refContainer = useRef<HTMLDivElement>(null)

  const numOfPages = 6
  let progress = 0

  const { current: elContainer } = refContainer
  if (elContainer) {
    const { clientHeight, offsetTop } = elContainer
    const screenH = window.innerHeight
    const halfH = screenH / 2 - (isMobile ? 100 : 278)
    const percentY =
      Math.min(
        clientHeight + halfH,
        Math.max(-screenH, scrollY - offsetTop) + halfH
      ) / clientHeight

    progress = Math.min(numOfPages + 0.5, Math.max(0.5, percentY * numOfPages))
  }

  return (
    <div className='pt-24 pb-20 bg-white md:pb-32 md:pt-32'>
      <Container>
        <div className='grid justify-center'>
          <motion.h2
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className='mb-3 text-4xl font-semibold text-center md:mb-12 lg:mb-6 md:text-5xl lg:text-6xl font-cantarell'
          >
            Our story
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            ref={refContainer}
            className='max-w-3xl mb-16 space-y-6 text-lg text-justify md:mb-40'
          >
            {paragraphs.map((paragraph, index) => (
              <Paragraph
                key={index}
                text={paragraph.text}
                opacityForBlock={opacityForBlock}
                progress={progress}
                pageNum={index}
              />
            ))}
          </motion.div>
        </div>

        <WorkWith />
      </Container>
    </div>
  )
}
