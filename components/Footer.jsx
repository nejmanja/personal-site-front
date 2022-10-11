import React from "react";
import Socials from "./Socials";
import styles from "./Footer.module.css";
import utilStyles from "../styles/utils.module.css";

export default function Footer() {
	return (
		<footer className={`${styles.footer} ${utilStyles.fs400} ${utilStyles.flex}`}>
			<Socials className={`${utilStyles.fs500} ${styles.socials}`} linkClassName={styles.link} />
			<p className={utilStyles.fs300}>Copyright © Nemanja Milanović, 2022.</p>
		</footer>
	);
}
