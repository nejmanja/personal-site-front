import React from "react";
import ButtonLarge from "./ButtonLarge";
import Skills from "./Skills";

import styles from "./AboutMe.module.css";
import utilStyles from "../styles/utils.module.css";

export default function AboutMe() {
    const headerStyle = `${styles.aboutTitle} ${utilStyles.uppercase} ${utilStyles.bold} ${utilStyles.fs800} ${utilStyles.ffSansCond} ${utilStyles.textLight}`;

    return (
        <section id="about-me" className={styles.aboutMe}>
            <img
                className={styles.profilePic}
                src="/images/pfp.jpg"
                alt="profile"
            />
            <h1 className={headerStyle}>Who am I?</h1>
            <div className={`${styles.aboutText} ${utilStyles.flow}`}>
                <p className={`${styles.aboutDesc} ${utilStyles.fs400}`}>
                    I'm a computer science student with strong interests in
                    low-level programming, computer graphics, physics
                    simulations, digital signal processing and audio
                    programming.
                </p>
                <p className={`${styles.tagline} ${utilStyles.fs400}`}>
                    I strive towards making complex things feel intuitive.
                </p>
            </div>
             <Skills className={styles.aboutSkills} />
			<ButtonLarge
				className={styles.aboutContact}
				link="/contact"
				text="Contact Me"
				accent="light"
			/>
        </section>
    );
}
