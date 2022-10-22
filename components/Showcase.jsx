import React from "react";
import CarouselItem from "./CarouselItem";

import styles from "./Showcase.module.css";
import utilStyles from "../styles/utils.module.css";
import ScrollableList from "./ScrollableList";
import PostList from "./PostList";

const sampleProjects = [
	{ title: "Sample project", thumbnail: "/images/thumb.png", accent: "r" },
	{
		title: "Slightly bigger title",
		thumbnail: "/images/thumb2.jpg",
		accent: "g",
	},
	{
		title:
			"A really elaborate and massive title, you cannnot even comprehend how big it is",
		thumbnail: "/images/thumb3.png",
		accent: "b",
	},
	{ title: "Sample project", thumbnail: "/images/thumb.png", accent: "" },
	{ title: "Sample project", thumbnail: "/images/thumb2.jpg", accent: "r" },
	{ title: "Sample project", thumbnail: "/images/thumb3.png", accent: "g" },
];

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
