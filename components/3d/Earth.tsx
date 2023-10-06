'use client'

import Loader from './Loader'
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'
import useMediaQuery from '@/hooks/useMediaQuery'

const EarthModel = () => {
  const earth = useGLTF('3d/earth2/scene.gltf')

  return (
    <mesh>
      <ambientLight color={0xa2a2a2} intensity={6} />
      <directionalLight color={0xc4c4c4} castShadow position={[0, 50, 50]} />
      <pointLight intensity={100} position={[0, 50, 20]} />
      <primitive
        object={earth.scene}
        scale={2}
        position-y={0}
        position-x={0}
        castShadow
      />
    </mesh>
  )
}

export default function Earth() {
  const isMobile = useMediaQuery('(max-width: 450px)')

  return (
    <Canvas
      shadows
      frameloop='demand'
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 3,
        far: 200,
        position: [isMobile ? -35 : -20, 3, 6],
      }}
      className='!w-screen !h-screen !opacity-90 !absolute !top-0 !right-0 md:!-right-[45vw]'
    >
      <Suspense fallback={<Loader />}>
        <OrbitControls
          autoRotate
          autoRotateSpeed={0.1}
          rotateSpeed={0.3}
          enableZoom={false}
        />
        <EarthModel />
      </Suspense>

      <Preload all />
    </Canvas>
  )
}
