import React from "react";
import ButtonLarge from "./ButtonLarge";
import Skills from "./Skills";
import pfp from "../assets/pfp.jpg";

import "./AboutMe.css";

export default function AboutMe() {
	return (
		<section id="about-me" className="">
			<img className="profile-pic" src={pfp} alt="profile" />
			<h1 className="about-title uppercase bold fs-800 ff-sans-cond text-light">
				Who am I?
			</h1>
			<div className="about-text flow">
				<p className="fs-400 about-desc">
					I'm a computer science student with strong interests in low-level
					programming, computer graphics, physics simulations, digital signal
					processing and audio programming.
				</p>
				<p className="tagline fs-400">
					I strive towards making complex things feel intuitive.
				</p>
			</div>
			<Skills className="about-skills" />
			<ButtonLarge
				className="about-contact"
				link="/contact"
				text="Contact Me"
				accent="light"
			/>
		</section>
	);
}
