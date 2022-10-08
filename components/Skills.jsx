import React from "react";
import MultiColumnList from "./CollapsibleMultiColumnList";

import styles from "./Skills.module.css";
import utilStyles from "../styles/utils.module.css";

// describes a single skill using a name and an optional rating, only used here
function Skill({ title, rating }) {
    return (
        <div
            className={`${utilStyles.flex} ${utilStyles.fs300} ${styles.skillItem}`}
        >
            <h4>{title}</h4>
            {rating && <div>{"★".repeat(rating) + "☆".repeat(5 - rating)}</div>}
        </div>
    );
}

// Groups multiple skills in a nice list, with optional ratings and color accents, only used here
function SkillSet({ title, rating, skillDesc, accent }) {
    return (
        <div>
            <div className={`${utilStyles.flex} ${styles.skillsetHeader} ${styles.skillItem} `}>
                <h3 className={`${utilStyles.bold} ${styles.skillsetTitle} ${styles[`skillsetTitle_${accent}`]}`}>
                    {title}
                </h3>
                {rating && (
                    <div>{"★".repeat(rating) + "☆".repeat(5 - rating)}</div>
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
                        rating={5}
                        skillDesc={[
                            ["C++", 5],
                            ["Java", 4],
                            ["C#", 4],
                        ]}
                        key={0}
                    />,
                    <SkillSet
                        title="Computer Graphics"
                        accent={"r"}
                        rating={4}
                        skillDesc={[
                            ["Unity 3D", 5],
                            ["OpenGL", 4],
                        ]}
                        key={1}
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
                        key={2}
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
                        key={3}
                    />,
                    <SkillSet
                        title="Other Programming"
                        accent={"r"}
                        rating={4}
                        skillDesc={[
                            ["JUCE API", 4],
                            ["OpenCL", 3],
                        ]}
                        key={4}
                    />,
                    <SkillSet
                        title="Audio Production"
                        accent={"g"}
                        rating={4}
                        skillDesc={[
                            ["Ableton Live", 4],
                            ["FL Studio", 4],
                        ]}
                        key={5}
                    />,
                    <SkillSet
                        title="Visuals"
                        accent={"b"}
                        rating={4}
                        skillDesc={[
                            ["TouchDesigner", 4],
                            ["3DS Max", 4],
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
