import React from "react";
import MultiColumnList from "./CollapsibleMultiColumnList";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

import styles from "./Skills.module.css";
import utilStyles from "../styles/utils.module.css";

// describes a single skill using a name and an optional rating, only used here
function Skill({ title, rating }) {
	return (
		<div
			className={`${utilStyles.flex} ${utilStyles.fs300} ${styles.skillItem}`}
		>
			<h4>{title}</h4>
			{rating && (
				<div className={styles.rating}>
					{[...Array(Math.floor(rating / 2))].map((e, ind) => (
						<FaStar key={ind} />
					))}
					{rating % 2 === 1 && <FaStarHalfAlt />}
					{[...Array(Math.floor(5 - rating / 2))].map((e, ind) => (
						<FaRegStar key={ind} />
					))}
				</div>
			)}
		</div>
	);
}

// Groups multiple skills in a nice list, with optional ratings and color accents, only used here
function SkillSet({ title, rating, skillDesc, accent }) {
	return (
		<div>
			<div
				className={`${utilStyles.flex} ${styles.skillsetHeader} ${styles.skillItem} `}
			>
				<h3
					className={`${utilStyles.bold} ${utilStyles.ffSansCond} ${styles.skillsetTitle} ${
						styles[`skillsetTitle_${accent}`]
					}`}
				>
					{title}
				</h3>
				{rating && (
					<div className={styles.rating}>
						{[...Array(Math.floor(rating / 2))].map((e, ind) => (
							<FaStar key={ind} />
						))}
						{rating % 2 === 1 && <FaStarHalfAlt />}
						{[...Array(Math.floor(5 - rating / 2))].map((e, ind) => (
							<FaRegStar key={ind} />
						))}
					</div>
				)}
			</div>
			<div className={styles.skillList}>
				{skillDesc.map((skill) => (
					// TODO: create a structure instead of using an array
					<Skill key={skill[0]} title={skill[0]} rating={skill[1]} />
				))}
			</div>
		</div>
	);
}
export default function Skills({ className }) {
	// the data for this could be fetched from an external resource, but it wouldn't benefit code brevity
	return (
		<div className={`${styles.skills} ${className}`}>
			<MultiColumnList
				title="Skills"
				numCols={3}
				items={[
					<SkillSet
						title="OOP"
						accent={"r"}
						rating={9}
						skillDesc={[
							["C++", 9],
							["Java", 8],
							["C#", 7],
						]}
						key={0}
					/>,
					<SkillSet
						title="Computer Graphics"
						accent={"r"}
						rating={8}
						skillDesc={[
							["Unity 3D", 9],
							["OpenGL", 8],
						]}
						key={1}
					/>,
					<SkillSet
						title="Low-Level Programming"
						accent={"r"}
						rating={7}
						skillDesc={[
							["C", 8],
							["RISC-V", 6],
							["Z80", 6],
						]}
						key={2}
					/>,
					<SkillSet
						title="Web"
						accent={"r"}
						rating={6}
						skillDesc={[
							["React", 7],
							["CSS", 8],
							["Next.js", 6],
							["MongoDB", 6],
						]}
						key={3}
					/>,
					<SkillSet
						title="Other Programming"
						accent={"r"}
						rating={7}
						skillDesc={[
							["JUCE API", 8],
							["OpenCL", 6],
						]}
						key={4}
					/>,
					<SkillSet
						title="Audio Production"
						accent={"g"}
						rating={8}
						skillDesc={[
							["Ableton Live", 9],
							["FL Studio", 8],
						]}
						key={5}
					/>,
					<SkillSet
						title="Visuals"
						accent={"b"}
						rating={8}
						skillDesc={[
							["TouchDesigner", 8],
							["3DS Max", 9],
						]}
						key={6}
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
						key={0}
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
						key={1}
					/>,
					<SkillSet
						title="Other"
						skillDesc={[["Crochet"], ["Origami"]]}
						key={2}
					/>,
				]}
			/>
		</div>
	);
}
