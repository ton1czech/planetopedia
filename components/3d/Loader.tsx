import { Html, useProgress } from '@react-three/drei'

const Loader = () => {
  const { progress } = useProgress()

  return (
    <Html>
      <p className='opacity-0'>{progress.toFixed(2)}%</p>
    </Html>
  )
}

export default Loader
