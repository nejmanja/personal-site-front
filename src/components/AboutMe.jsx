import React from "react";
import pfp from "../assets/sample-pfp.jpg";

import "./AboutMe.css";
import MultiColumnList from "./CollapsibleMultiColumnList";

function Skill({ title, rating }) {
	return (
		<div className="flex skill-item">
			<h4>{title}</h4>
			{rating && <div>{"★".repeat(rating) + "☆".repeat(5 - rating)}</div>}
		</div>
	);
}

function SkillSet({ title, rating, skillDesc, accent }) {
	return (
		<div>
			<div className={"flex skillset-header skill-item "}>
				<h3 className={"bold skillset-title skillset-title--" + accent}>
					{title}
				</h3>
				{rating && <div>{"★".repeat(rating) + "☆".repeat(5 - rating)}</div>}
			</div>
			<div className="skill-list">
				{skillDesc.map((skill) => (
					<Skill title={skill[0]} rating={skill[1]} />
				))}
			</div>
		</div>
	);
}

export default function AboutMe() {
	return (
		<section id="about-me" className="flex fullscreen-panel">
			<div className="grid container">
				<img className="profile-pic" src={pfp} alt="profile" />
				<div className="about-text flow">
					<h1 className="uppercase bold fs-800 ff-sans-cond text-light">
						Who am I?
					</h1>
					<p className="fs-600 about-desc">
						I'm a computer science student with strong interests in low-level
						programming, computer graphics, physics simulations, digital signal
						processing and audio programming.
					</p>
					<p className="tagline fs-600">
						I strive towards making complex things feel intuitive.
					</p>

					<MultiColumnList
						title="Skills"
						numCols={2}
						items={[
							<SkillSet
								title="OOP"
								accent={"r"}
								rating={5}
								skillDesc={[
									["C++", 5],
									["Java", 4],
									["C#", 4],
								]}
							/>,
							<SkillSet
								title="Computer Graphics"
								accent={"r"}
								rating={4}
								skillDesc={[
									["Unity 3D", 5],
									["OpenGL", 4],
								]}
							/>,
							<SkillSet
								title="Low-Level Programming"
								accent={"r"}
								rating={4}
								skillDesc={[
									["C", 4],
									["RISC-V", 3],
									["Z80", 3],
								]}
							/>,
							<SkillSet
								title="Web"
								accent={"r"}
								rating={3}
								skillDesc={[
									["React", 4],
									["CSS", 4],
									["MongoDB", 3],
								]}
							/>,
							<SkillSet
								title="Other Programming"
								accent={"r"}
								rating={4}
								skillDesc={[
									["JUCE API", 4],
									["OpenCL", 3],
								]}
							/>,
							<SkillSet
								title="Audio Production"
								accent={"g"}
								rating={4}
								skillDesc={[
									["Ableton Live", 4],
									["FL Studio", 4],
								]}
							/>,
							<SkillSet
								title="Visuals"
								accent={"b"}
								rating={4}
								skillDesc={[
									["TouchDesigner", 4],
									["3DS Max", 4],
								]}
							/>,
						]}
					/>

					<MultiColumnList
						title="Hobbies & Interests"
						numCols={3}
						items={[
							<SkillSet
								title="Science"
								skillDesc={[
									["Physical simulations"],
									["Applied Mathematics"],
									["Numerical Methods"],
									["GPGPU"],
								]}
							/>,
							<SkillSet
								title="Music"
								skillDesc={[
									["Guitar"],
									["Bass"],
									["Keyboard and Launchpad"],
									["Composition"],
									["Audio-Visual interaction"],
								]}
							/>,
							<SkillSet title="Other" skillDesc={[["Crochet"], ["Origami"]]} />,
						]}
					/>
				</div>
			</div>
		</section>
	);
}
