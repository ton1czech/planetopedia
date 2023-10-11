import Image from 'next/image'
import Container from '../Container'

const Benefits = () => {
  return (
    <div className='sticky top-0 snap-start scroll-mt-20 w-screen h-[90vh] z-0 bg-black'>
      <Container className='grid grid-cols-2 gap-10'>
        <div className='text-white'>
          <h1>borec</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            tempore, consequatur ipsa minima natus fugiat molestias eos
            molestiae iusto officiis eum quo quia reprehenderit deleniti
            suscipit cupiditate delectus magnam quam velit libero! Corporis
            ducimus deserunt molestias vero quaerat incidunt sapiente,
            voluptates, hic exercitationem atque quod harum dolor eos! Atque,
            dolorum quis non odit earum recusandae? Voluptates autem alias
            officiis officia, numquam culpa voluptas vitae voluptatibus porro
            veritatis reprehenderit, et dolorum qui velit, vel laboriosam cumque
            eos ab? Illum vero consequatur rem, ducimus qui aliquid nesciunt
            quos ullam, fugit ipsum blanditiis est, laborum dolores hic debitis
            suscipit molestiae vitae corporis? Molestias!
          </p>
        </div>
        <Image
          src='/company/hero.webp'
          alt='hero'
          width={1200}
          height={900}
          className='w-full h-auto'
        />
      </Container>
    </div>
  )
}

export default Benefits
