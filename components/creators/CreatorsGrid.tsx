import Container from '../Container'
import Creator from './Creator'

interface CreatorsGridProps {
  creators: any
}

const CreatorsGrid = ({ creators }: CreatorsGridProps) => {
  return (
    <div className='pt-24 pb-20 bg-white md:pt-32 md:pb-32'>
      <Container className='grid w-full grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 md:gap-12'>
        {creators.map(({ image, name, instagram }: any) => (
          <Creator src={image} name={name} instagram={instagram} />
        ))}
      </Container>
    </div>
  )
}

export default CreatorsGrid
