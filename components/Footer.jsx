import React from "react";
import {
	AiOutlineGithub,
	AiOutlineInstagram,
	AiOutlineYoutube,
	AiOutlineMail,
} from "react-icons/ai";

import styles from "./Footer.module.css";
import utilStyles from "../styles/utils.module.css";

export default function Footer() {
	return (
		<div className={`${styles.footer} ${utilStyles.fs400} ${utilStyles.flex}`}>
			<div className={`${utilStyles.flex} ${utilStyles.fs500}`}>
				<a href="mailto:nejmanja.m@gmail.com" target="_blank" className={styles.link}>
					<AiOutlineMail />
				</a>
				<a href="https://www.github.com/nejmanja" target="_blank" className={styles.link}>
					<AiOutlineGithub />
				</a>
				<a href="https://www.instagram.com/the.apost" target="_blank" className={styles.link}>
					<AiOutlineInstagram />
				</a>
				<a
					href="https://www.youtube.com/channel/UCkd39Pcm9uZ0c7rt1zZYsVA"
                    target="_blank"
					className={styles.link}
				>
					<AiOutlineYoutube />
				</a>
			</div>
			<p>Copyright © Nemanja Milanović, 2022.</p>
		</div>
	);
}
