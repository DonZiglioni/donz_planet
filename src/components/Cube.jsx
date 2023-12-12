import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";

const Cube = ({ position, size, color }) => {

    const ref = useRef()
    useFrame((state, delta) => {
        // ref.current.rotation.x += delta / 2
        ref.current.rotation.y += delta / 5

    })

    return (
        <group scale={2}>
            <mesh position={position} ref={ref}>
                <boxGeometry args={size} />
                <meshStandardMaterial color={color} />
            </mesh>
        </group>

    )
}

export default Cube;