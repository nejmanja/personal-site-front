import React from "react";
import PostCard from "./PostCard";

import styles from "./PostList.module.css";
import utilStyles from "../styles/utils.module.css";

export default function PostList() {
	const cards = [];
	for (let i = 0; i < 50; i++) {
		cards.push(
			<PostCard
				key={i}
				thumb={"/images/thumb3.png"}
				title={"This is a post title".repeat(Math.floor(Math.random() * 6 + 1))}
			/>
		);
	}

	return <div className={`${styles.list}`}>{cards}</div>;
}
