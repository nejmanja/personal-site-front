import "./Greet.css";

import { Canvas, useFrame } from "react-three-fiber";
import { useRef } from "react";

function Box() {

	const ref = useRef();

	useFrame((state, delta) => (ref.current.rotation.x += 0.01));

	return (
		<mesh ref={ref} rotation={[45, 45, 0]}>
			<icosahedronGeometry attach="geometry" args={[1.75, 0]}/>
			<meshLambertMaterial wireframe wireframeLinewidth={2} attach="material" color="lightgrey" /> 
		</mesh>
	);
}

function Scene() {
	return (
		<Canvas className="canvas" style={{ height: "100vh" }}>
			<ambientLight intensity={0.5} />
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
