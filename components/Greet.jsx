import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useEffect, useState } from "react";

import styles from "./Greet.module.css";
import utilStyles from "../styles/utils.module.css";

function Box() {
    const ref = useRef();

    useFrame((state, delta) => (ref.current.rotation.x += 0.01));

    const [mousePos, setMousePos] = useState({});
    useEffect(() => {
        const handleMouseMove = (event) => {
          setMousePos({ x: event.clientX / window.innerWidth - 0.5, y: event.clientY / window.innerHeight - 0.5 });
          console.log(event.clientX, event.clientY);
        };
    
        window.addEventListener('mousemove', handleMouseMove);
    
        return () => {
          window.removeEventListener(
            'mousemove',
            handleMouseMove
          );
        };
      }, []);    

    return (
        <mesh ref={ref} rotation={[45, 45, 0]} position={[-mousePos.x/3,mousePos.y/3,0]}>
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
    const [seconds, setSeconds] = useState(0);
    const names = ["reader", "employer", "friend", "explorer", "world"];
    useEffect(() => {
        const interval = setInterval(() => {
          setSeconds(seconds => (seconds + 1) % 5);
        }, 1000);
        return () => clearInterval(interval);
      }, []);
    return (
        <div
            className={`${utilStyles.flex} ${utilStyles.fullscreenPanel} ${styles.greet}`}
        >
            <h1
                className={`${styles.mainTitle} ${utilStyles.fs800} ${utilStyles.bold} ${utilStyles.uppercase}`}
            >
                Greetings, {names[seconds]}
            </h1>
            <Scene />
        </div>
    );
}
