'use client'

import Loader from './Loader'
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'

const EarthModel = () => {
  const earth = useGLTF('3d/earth2/scene.gltf')

  return (
    <mesh>
      <ambientLight color={0xa2a2a2} intensity={6} />
      <directionalLight
        color={0xc4c4c4}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        position={[0, 50, 50]}
      />
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
  return (
    <Canvas
      shadows
      frameloop='demand'
      gl={{ preserveDrawingBuffer: true }}
      camera={{ fov: 45, near: 3, far: 200, position: [-30, 3, 6] }}
      className='!w-screen !h-screen !opacity-90 !absolute !top-0 !-right-[40vw]'
    >
      <Suspense fallback={<Loader />}>
        <OrbitControls autoRotate autoRotateSpeed={0.8} enableZoom={false} />
        <EarthModel />
      </Suspense>

      <Preload all />
    </Canvas>
  )
}
