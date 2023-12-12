import React, { useRef, useState } from "react";
import { useGLTF, useScroll, Scroll } from "@react-three/drei";
import { useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from 'three/src/loaders/TextureLoader'


const Card = (props) => {
    const { nodes, materials } = useGLTF("jigzzaw_puzzlezz.glb");
    const [initialPos, setInitialPos] = useState(props.position);
    // const colorMap = useLoader(TextureLoader, 'fireworks.png')
    //const ref = useRef();

    return (
        <group {...props} dispose={null} rotation={props.rotation}>
            <group scale={0.05}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes._Puzzle_Piece_11_Puzzle_Piece_0.geometry}
                    material={materials.Puzzle_Piece}
                    position={[5.17, 0, 4.994]}
                >
                    {/* <meshStandardMaterial map={colorMap} /> */}
                </mesh>

                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes._Puzzle_Piece_13_Puzzle_Piece_0.geometry}
                    material={materials.Puzzle_Piece}
                    position={[-13.239, 0, 13.985]}
                >
                    {/* <meshStandardMaterial map={colorMap} /> */}
                </mesh>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes._Puzzle_Piece_09_Puzzle_Piece_0.geometry}
                    material={materials.Puzzle_Piece}
                    position={[-13.669, 0, 5.102]}
                >
                    {/* <meshStandardMaterial map={colorMap} /> */}
                </mesh>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes._Puzzle_Piece_12_Puzzle_Piece_0.geometry}
                    material={materials.Puzzle_Piece}
                    position={[13.792, 0, 4.554]}
                >
                    {/* <meshStandardMaterial map={colorMap} /> */}
                </mesh>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes._Puzzle_Piece_16_Puzzle_Piece_0.geometry}
                    material={materials.Puzzle_Piece}
                    position={[13.982, 0, 13.302]}
                >
                    {/* <meshStandardMaterial map={colorMap} /> */}
                </mesh>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes._Puzzle_Piece_15_Puzzle_Piece_0.geometry}
                    material={materials.Puzzle_Piece}
                    position={[5.202, 0, 13.232]}
                >
                    {/* <meshStandardMaterial map={colorMap} /> */}
                </mesh>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes._Puzzle_Piece_14_Puzzle_Piece_0.geometry}
                    material={materials.Puzzle_Piece}
                    position={[-4.813, 0, 13.83]}
                >
                    {/* <meshStandardMaterial map={colorMap} /> */}
                </mesh>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes._Puzzle_Piece_10_Puzzle_Piece_0.geometry}
                    material={materials.Puzzle_Piece}
                    position={[-5.209, 0, 5.322]}
                >
                    {/* <meshStandardMaterial map={colorMap} /> */}
                </mesh>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes._Puzzle_Piece_06_Puzzle_Piece_0.geometry}
                    material={materials.Puzzle_Piece}
                    position={[-4.836, 0, -4.637]}
                >
                    {/* <meshStandardMaterial map={colorMap} /> */}
                </mesh>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes._Puzzle_Piece_05_Puzzle_Piece_0.geometry}
                    material={materials.Puzzle_Piece}
                    position={[-13.249, 0, -5.416]}
                >
                    {/* <meshStandardMaterial map={colorMap} /> */}
                </mesh>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes._Puzzle_Piece_01_Puzzle_Piece_0.geometry}
                    material={materials.Puzzle_Piece}
                    position={[-13.248, 0, -13.657]}
                >
                    {/* <meshStandardMaterial map={colorMap} /> */}
                </mesh>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes._Puzzle_Piece_02_Puzzle_Piece_0.geometry}
                    material={materials.Puzzle_Piece}
                    position={[-4.848, 0, -13.068]}
                >
                    {/* <meshStandardMaterial map={colorMap} /> */}
                </mesh>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes._Puzzle_Piece_03_Puzzle_Piece_0.geometry}
                    material={materials.Puzzle_Piece}
                    position={[4.708, 0, -13.637]}
                >
                    {/* <meshStandardMaterial map={colorMap} /> */}
                </mesh>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes._Puzzle_Piece_04_Puzzle_Piece_0.geometry}
                    material={materials.Puzzle_Piece}
                    position={[13.307, 0, -13.255]}
                >
                    {/* <meshStandardMaterial map={colorMap} /> */}
                </mesh>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes._Puzzle_Piece_08_Puzzle_Piece_0.geometry}
                    material={materials.Puzzle_Piece}
                    position={[13.202, 0, -5.099]}
                >
                    {/* <meshStandardMaterial map={colorMap} /> */}
                </mesh>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes._Puzzle_Piece_07_Puzzle_Piece_0.geometry}
                    material={materials.Puzzle_Piece}
                    position={[4.719, 0, -5.005]}
                >
                    {/* <meshStandardMaterial map={colorMap} /> */}
                </mesh>
            </group>
        </group>
    );
}

useGLTF.preload("jigzzaw_puzzlezz.glb");

export default Card