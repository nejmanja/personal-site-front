import React from "react";
import PostCard from "./PostCard";

import styles from "./PostList.module.css";
import utilStyles from "../styles/utils.module.css";

export default function PostList({ posts }) {
	const cutTitle = (title) => {
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

	const cards = posts.map((post) => (
		<PostCard
			key={post._id}
			link={`/posts/${post._id}`}
			thumb={"/images/thumb3.png"}
			title={cutTitle(post.title)}
			categories={post.categories}
		/>
	));
	return <div className={`${styles.list}`}>{cards}</div>;
}
