import React from "react";
import ButtonLarge from "./ButtonLarge";
import Skills from "./Skills";

import styles from "./AboutMe.module.css";
import utilStyles from "../styles/utils.module.css";

export default function AboutMe() {
	const headerStyle = `${styles.title} ${utilStyles.uppercase} ${utilStyles.bold} ${utilStyles.fs800} ${utilStyles.ffSansCond} ${utilStyles.textLight}`;

	return (
		<section id="about-me" className={styles.aboutMe}>
			<div className={`${styles.content} ${utilStyles.container}`}>
				<img
					className={styles.profilePic}
					src="/images/pfp.jpg"
					alt="profile"
				/>
				<h1 className={headerStyle}>Who am I?</h1>
				<div className={`${styles.text} ${utilStyles.flow}`}>
					<p className={`${styles.desc} ${utilStyles.fs400}`}>
						I&apos;m a computer science student with strong interests in
						low-level programming, computer graphics, physics simulations,
						digital signal processing and audio programming.
					</p>
					<p className={`${styles.tagline} ${utilStyles.fs400}`}>
						I strive towards making complex things feel intuitive.
					</p>
				</div>
				<Skills className={styles.skills} />
				<ButtonLarge
					className={styles.contact}
					link="/contact"
					text="Contact Me"
					accent="light"
				/>
			</div>
		</section>
	);
}
