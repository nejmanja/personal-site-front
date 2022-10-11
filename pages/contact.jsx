import React from "react";
import ContactForm from "../components/ContactForm";
import Socials from "../components/Socials";
import Head from "next/head";

import utilStyles from "../styles/utils.module.css";
import styles from "../styles/Contact.module.css";

export default function Contact() {
	return (
		<>
			<Head>
				<title>Contact Me!</title>
			</Head>
			<div className={styles.container}>
				<div className={styles.contact}>
					<h1
						className={`${styles.title} ${utilStyles.fs700} ${utilStyles.bold} ${utilStyles.uppercase}`}
					>
						Let's get in touch!
					</h1>
					<ContactForm className={styles.form} />
					<div className={styles.other}>
						<div>
							<h2>Prefer other methods?</h2>
							<p>You can also reach me here:</p>
						</div>
						<Socials
							className={`${utilStyles.fs700} ${styles.socials}`}
							linkClassName={styles.link}
						/>
					</div>
				</div>
			</div>
		</>
	);
}
