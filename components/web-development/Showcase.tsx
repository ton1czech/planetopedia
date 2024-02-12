'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { FC, useEffect, useState } from 'react'
import { useLanguage } from '@/store/useLanguage'
import Link from 'next/link'
import { projects } from '@/database/projects'
import Container from '../Container'

interface ProjectProps {
  name: string
  year: number
  image: string
  url: string
}

export const Project: FC<ProjectProps> = ({ name, year, image, url }) => {
  return (
    <Link href={url} target='_blank'>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <img src={image} alt={name} />

        <h3 className='mt-3 italic text-zinc-800'>
          {name}{' '}
          <span className='px-1 text-sm not-italic font-light text-zinc-600'>
            |
          </span>
          <span className='text-zinc-600'>{year}</span>
        </h3>
      </motion.div>
    </Link>
  )
}

export const Showcase = () => {
  const { language } = useLanguage()

  return (
    <section className='mb-20 md:mb-40'>
      <Container>
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className='mb-4 text-2xl font-semibold md:text-3xl xl:text-4xl'
        >
          {language === 'en' && <>Our projects, some of them.</>}
          {language === 'cs' && <>Naše projekty, některé z nich.</>}
        </motion.h2>
        <div className='grid gap-10 md:gap-20 lg:grid-cols-2'>
          {projects.map(({ name, year, image, url }) => (
            <Project
              key={name}
              name={name}
              year={year}
              image={image}
              url={url}
            />
          ))}
        </div>
      </Container>
    </section>
  )
}
