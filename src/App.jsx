import React, { useState, Suspense, useRef } from 'react';
import { Canvas, useLoader, useFrame } from '@react-three/fiber';
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import { OrbitControls, ScrollControls, Scroll, useScroll } from '@react-three/drei';
import Planet from './components/Planet'
//import Card from './components/Card';
//import Cube from './components/Cube';
import PlanetRing from './components/PlanetRing';
import './App.css';


const App = () => {

  return (
    <Canvas>
      <Suspense fallback={null}>
        <directionalLight position={[0, 0, 2]} intensity={1} />
        <group position={[0, 0, -3]}>
          <Planet />
          <ScrollControls pages={4} damping={0.25}  >
            <PlanetRing />
          </ScrollControls>
        </group>
      </Suspense>
    </Canvas>
  )
}
export default App
