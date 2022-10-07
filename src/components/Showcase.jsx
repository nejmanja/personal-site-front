import React from "react";
import CarouselItem from "./CarouselItem";

import sampleThumb1 from "../assets/thumb.png";
import sampleThumb2 from "../assets/thumb2.jpg";
import sampleThumb3 from "../assets/thumb3.png";

import "./Showcase.css";
import MediaScroller from "./MediaScroller";

export default function Showcase() {
	return (
		<div className="showcase container fullscreen-panel">
			<h1 className="uppercase bold fs-800 ff-sans-cond text-light">
				Still not convinced?
			</h1>
			<h2>Check out some of my past projects!</h2>
			<div className="flex">
				<CarouselItem title="Sample project" thumbnail={sampleThumb1} accent="r"/>
				<CarouselItem title="A really long sample project" thumbnail={sampleThumb2} accent="g"/>
				<CarouselItem title="Sample project" thumbnail={sampleThumb3} accent="b"/>
				<CarouselItem title="Sample project" thumbnail={sampleThumb1} />
			</div>

            <MediaScroller />
		</div>
	);
}
