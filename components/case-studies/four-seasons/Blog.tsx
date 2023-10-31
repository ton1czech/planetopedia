'use client'

import { useLanguage } from '@/store/useLanguage'
import Image from 'next/image'
import Link from 'next/link'

interface BlogProps {
  posts: any[] | undefined
}

const Blog = ({ posts }: BlogProps) => {
  const { language } = useLanguage(state => state)

  return (
    <div>
      <h2 className='text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold mb-2'>
        / Blog
      </h2>
      <div className='grid lg:grid-cols-3 gap-4'>
        {posts?.map(post => (
          <Link href={post.slug} className='group' key={post.slug}>
            {post.src && (
              <div className='relative w-full mb-3 overflow-hidden transition duration-500 aspect-square group-hover:shadow-2xl'>
                <Image
                  src={post.src}
                  fill
                  alt={post.title}
                  className='object-cover transition duration-500 group-hover:scale-110'
                />
              </div>
            )}
            {language === 'en' && (
              <p className='text-center text-zinc-700'>{post.locationEn}</p>
            )}
            {language === 'cs' && (
              <p className='text-center text-zinc-700'>{post.locationCz}</p>
            )}
            {language === 'de' && (
              <p className='text-center text-zinc-700'>{post.locationDe}</p>
            )}
            <h3 className='text-xl font-medium text-center md:text-xl'>
              {post.title}
            </h3>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Blog
