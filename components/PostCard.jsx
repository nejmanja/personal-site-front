import React from "react";
import Image from "next/image";

import styles from "./PostCard.module.css";
import utilStyles from "../styles/utils.module.css";

export default function PostCard({ title, thumb }) {
	const cutTitle = () => {
		const charLimit = 60;
		if (title.length > charLimit) {
			let cutTitle = title.substring(0, charLimit);
			cutTitle =
				cutTitle.lastIndexOf(" ") === cutTitle.length - 1
					? cutTitle.trim()
					: cutTitle.substring(0, cutTitle.lastIndexOf(" "));
			cutTitle += "…";
			return cutTitle;
		}
		return title;
	};

	return (
		<div className={styles.card}>
			<div className={styles.imgContainer}>
				<Image src={thumb} layout="fill" objectFit="cover" />
			</div>
			<p className={`${styles.title} ${utilStyles.fs400}`}>{cutTitle()}</p>
		</div>
	);
}
