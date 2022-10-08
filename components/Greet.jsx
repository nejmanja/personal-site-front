import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";

import styles from "./Greet.module.css";
import utilStyles from "../styles/utils.module.css";

function Box() {
    const ref = useRef();

    useFrame((state, delta) => (ref.current.rotation.x += 0.01));

    return (
        <mesh ref={ref} rotation={[45, 45, 0]}>
            <icosahedronGeometry attach="geometry" args={[1.75, 0]} />
            <meshLambertMaterial
                wireframe
                attach="material"
                color="lightgrey"
            />
        </mesh>
    );
}

function Scene() {
    return (
        <Canvas className={styles.canvas} style={{ height: "100vh" }}>
            <ambientLight intensity={0.5} />
            <Box />
        </Canvas>
    );
}

export default function Greet() {
    return (
        <div
            className={`${utilStyles.flex} ${utilStyles.fullscreenPanel} ${styles.greet}`}
        >
            <h1
                className={`${styles.mainTitle} ${utilStyles.fs800} ${utilStyles.bold} ${utilStyles.uppercase}`}
            >
                Greetings, reader
            </h1>
            <Scene />
        </div>
    );
}
