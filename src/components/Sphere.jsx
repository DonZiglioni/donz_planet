import React, { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";

const Sphere = ({ position, size, color }) => {

    const [hovered, setHovered] = useState(false)

    const ref = useRef()

    useFrame((state, delta) => {
        // ref.current.rotation.x += delta / 2
        // ref.current.rotation.y += delta / 5

    })

    return (
        <mesh
            position={position}
            ref={ref}
            onPointerEnter={(e) => (
                e.stopPropagation(),
                setHovered(true)
            )}
            onPointerLeave={() => setHovered(false)}
        //onWheel={(e) => console.log(e)}
        >
            <sphereGeometry args={size} />
            <meshStandardMaterial color={hovered ? 'orange' : 'aqua'} />
        </mesh>
    )

}

export default Sphere;