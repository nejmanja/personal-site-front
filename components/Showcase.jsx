import React from "react";

import styles from "./Showcase.module.css";
import utilStyles from "../styles/utils.module.css";
import PostList from "./PostList";

export default function Showcase({ posts }) {
	return (
		<div
			className={`${styles.showcase} ${utilStyles.container} ${utilStyles.fullscreenPanel}`}
		>
			<h1
				className={`${utilStyles.uppercase} ${utilStyles.bold} ${utilStyles.fs800} ${utilStyles.ffSansCond} ${utilStyles.textLight}`}
			>
				Still not convinced?
			</h1>
			<h2 className={styles.subheading}>Check out some of my past projects!</h2>
			<PostList posts={posts} />
		</div>
	);
}
