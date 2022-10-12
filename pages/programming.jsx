import React from "react";
import Head from "next/head";
import PostList from "../components/PostList";

import styles from "../styles/Programming.module.css";

export default function Programming() {
	return (
		<div className={styles.programming}>
			<Head>
				<title>Programming Projects</title>
			</Head>
            <PostList />
		</div>
	);
}
