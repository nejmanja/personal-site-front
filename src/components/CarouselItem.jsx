import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

import "./CarouselItem.css";

export default function CarouselItem({ className, title, thumbnail, accent }) {
	const [hover, setHover] = useState(false);

	return (
		<Link
			className={"carousel-item " + className}
			onMouseEnter={() => {
				setHover(true);
			}}
			onMouseLeave={() => {
				setHover(false);
			}}
		>
			<div className="carousel-item-thumb-container">
				<img
					className="carousel-item-thumb"
					src={thumbnail}
					alt="project thumbnail"
				/>
			</div>
			<h1
				className={
					"carousel-item-title text-white ff-sans-cond bold fs-500 carousel-item-title--" +
					accent +
					(hover ? " carousel-item-title--active" : "")
				}
			>
				{title}
			</h1>
		</Link>
	);
}
