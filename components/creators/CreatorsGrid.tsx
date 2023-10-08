import Container from '../Container'

interface CreatorsGridProps {
  creators: any
}

const CreatorsGrid = ({ creators }: CreatorsGridProps) => {
  return (
    <div className='pt-24 pb-20 bg-white md:pt-32 md:pb-32'>
      <Container className='grid w-full gap-6 md:grid-cols-2 md:gap-12'>
        <p>creator</p>
      </Container>
    </div>
  )
}

export default CreatorsGrid
