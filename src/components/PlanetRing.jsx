import React, { useState, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { OrbitControls, ScrollControls, Scroll, useScroll } from '@react-three/drei';
import Card from './Card'

const PlanetRing = () => {
    const [ringRotate, setRingRotate] = useState([0, 0, 0]);
    const ref = useRef();
    const scroll = useScroll()

    useFrame((state, delta) => {
        ref.current.rotation.y = Math.PI * -scroll.offset;
        setRingRotate([0, Number(`${ref.current.rotation.z}`), 0])
    })

    return (
        <group rotation={ringRotate} ref={ref}>
            <Card position={[0, 0, 3]} rotation={[1.57, 0, 0]} />
            <Card position={[3.5, 0, -0.25]} rotation={[1.57, 0, 1.57]} />
            <Card position={[-2.5, 0, 2]} rotation={[1.57, 0, .75]} />
            <Card position={[-2.5, 0, -2.5]} rotation={[1.57, 0, 2.25]} />
            <Card position={[0, 0, -3.5]} rotation={[1.57, 0, 0]} />
            <Card position={[-3.5, 0, -0.25]} rotation={[1.57, 0, 1.57]} />
            <Card position={[2.5, 0, 2]} rotation={[1.57, 0, -.75]} />
            <Card position={[2.5, 0, -2.5]} rotation={[1.57, 0, -2.25]} />
        </group>
    )
}

export default PlanetRing