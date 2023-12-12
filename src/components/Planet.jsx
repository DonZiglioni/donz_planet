import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from 'three/src/loaders/TextureLoader'

const Planet = (props) => {
    const { nodes, materials } = useGLTF("planet.glb");
    //const colorMap = useLoader(TextureLoader, 'fireworks.png')
    const ref = useRef()
    useFrame((state, delta) => {
        // ref.current.rotation.x += delta / 2
        ref.current.rotation.y += delta / 8

    })

    return (
        <group {...props} dispose={null}>
            <group position={[0, 2.55, 0]} rotation={[0, 0, 0]} scale={50} ref={ref}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_2.geometry}
                    material={materials.Puzzle_Piece}
                >
                    {/* <meshStandardMaterial map={colorMap} /> */}
                </mesh>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_3.geometry}
                    material={materials.Puzzle_Piece}
                >
                    {/* <meshStandardMaterial map={colorMap} /> */}
                </mesh>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_4.geometry}
                    material={materials.Puzzle_Piece}
                >

                    {/* <meshStandardMaterial map={colorMap} /> */}
                </mesh>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_5.geometry}
                    material={materials.Puzzle_Piece}
                >
                    {/* <meshStandardMaterial map={colorMap} /> */}
                </mesh>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_6.geometry}
                    material={materials.Puzzle_Piece}
                >
                    {/* <meshStandardMaterial map={colorMap} /> */}
                </mesh>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_7.geometry}
                    material={materials.Puzzle_Piece}
                >
                    {/* <meshStandardMaterial map={colorMap} /> */}
                </mesh>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_8.geometry}
                    material={materials.Puzzle_Piece}
                >
                    {/* <meshStandardMaterial map={colorMap} /> */}
                </mesh>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_9.geometry}
                    material={materials.Puzzle_Piece}
                >
                    {/* <meshStandardMaterial map={colorMap} /> */}
                </mesh>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_10.geometry}
                    material={materials.Puzzle_Piece}
                >
                    {/* <meshStandardMaterial map={colorMap} /> */}
                </mesh>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_11.geometry}
                    material={materials.Puzzle_Piece}
                >
                    {/* <meshStandardMaterial map={colorMap} /> */}
                </mesh>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_12.geometry}
                    material={materials.Puzzle_Piece}
                >
                    {/* <meshStandardMaterial map={colorMap} /> */}
                </mesh>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_13.geometry}
                    material={materials.Puzzle_Piece}
                >
                    {/* <meshStandardMaterial map={colorMap} /> */}
                </mesh>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_14.geometry}
                    material={materials.Puzzle_Piece}
                >
                    {/* <meshStandardMaterial map={colorMap} /> */}
                </mesh>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_15.geometry}
                    material={materials.Puzzle_Piece}
                >
                    {/* <meshStandardMaterial map={colorMap} /> */}
                </mesh>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_16.geometry}
                    material={materials.Puzzle_Piece}
                >
                    {/* <meshStandardMaterial map={colorMap} /> */}
                </mesh>
            </group>
        </group>
    );
}

useGLTF.preload("planet.glb");

export default Planet;