import Container from '../Container'
import Creator from './Creator'

interface CreatorsGridProps {
  creators: any
}

const CreatorsGrid = ({ creators }: CreatorsGridProps) => {
  return (
    <div className='pt-24 pb-20 bg-white md:pt-32 md:pb-32'>
      <Container className='grid w-full gap-6 md:grid-cols-2 lg:grid-cols-3 md:gap-12'>
        {creators.map(
          ({
            image,
            name,
            instagram,
            categories,
            code,
            locationCz,
            locationEn,
            locationDe,
            followers,
          }: any) => (
            <Creator
              key={instagram}
              src={image}
              name={name}
              instagram={instagram}
              categories={categories}
              code={code}
              locationCz={locationCz}
              locationEn={locationEn}
              locationDe={locationDe}
              followers={followers}
            />
          )
        )}
      </Container>
    </div>
  )
}

export default CreatorsGrid
