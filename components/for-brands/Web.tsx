import Image from 'next/image'

const Web = () => {
  return (
    <div className='sticky top-0 snap-start scroll-mt-20 w-screen z-[60] bg-white h-[calc(100vh-80px)] grid place-content-center'>
      <Image
        src='/case-studies/farma-hajek/new-web-en.webp'
        alt='website'
        width={1300}
        height={750}
      />
    </div>
  )
}

export default Web
