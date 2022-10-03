import "./Greet.css";

import { Canvas, useFrame } from "react-three-fiber";
import { useRef } from "react";

function Box() {
	const ref = useRef();

	useFrame((state, delta) => (ref.current.rotation.x += 0.01));

	return (
		<mesh ref={ref} rotation={[45, 45, 0]}>
			<boxGeometry attach="geometry" />
			<meshLambertMaterial attach="material" color="hotpink" />
		</mesh>
	);
}

function Scene() {
	return (
		<Canvas style={{ height: "100vh" }}>
			<ambientLight intensity={0.5} />
			<spotLight position={[10, 15, 10]} angle={0.3} />
			<Box />
		</Canvas>
	);
}

export default function Greet() {
	return (
		<div className="flex fullscreen-panel greet">
			<h1 className="main-title fs-800 bold uppercase">Greetings, reader</h1>
			<Scene />
		</div>
	);
}
