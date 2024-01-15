'use client'

import Loader from './Loader'
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'
import useMediaQuery from '@/hooks/useMediaQuery'

const EarthModel = () => {
  const earth = useGLTF('3d/earth/scene.gltf')

  return (
    <mesh>
      <ambientLight color={0xffffff} intensity={10} />
      <directionalLight color={0xc4c4c4} castShadow position={[0, 50, 50]} />
      <pointLight intensity={100} position={[0, 50, 20]} />
      <primitive
        object={earth.scene}
        scale={11}
        position-y={0}
        position-x={0}
        rotation={[0, 2.7, -0.5]}
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
      frameloop='always'
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 3,
        far: 200,
        position: [isMobile ? -40 : -20, 3, 6],
      }}
      className='!w-[100vw] md:!w-[200vh] !h-screen !opacity-90 !absolute !top-0 !right-0 md:!-right-[43vw]'
    >
      <Suspense fallback={<Loader />}>
        <OrbitControls
          enablePan={true}
          enableDamping
          enableRotate={isMobile ? false : true}
          autoRotate
          autoRotateSpeed={0.4}
          rotateSpeed={0.3}
          enableZoom={false}
        />
        <EarthModel />
      </Suspense>

      <Preload all />
    </Canvas>
  )
}
