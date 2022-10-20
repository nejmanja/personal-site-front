import React from "react";
import Head from "next/head";
import PostList from "../../components/PostList";
import styles from "../../styles/Programming.module.css";
import clientPromise from "../../lib/mongodb";
import { ObjectId } from "mongodb";

export default function Programming({ posts }) {
	return (
		<div className={styles.programming}>
			<Head>
				<title>Programming Projects</title>
			</Head>
			<PostList posts={posts} />
		</div>
	);
}

export async function getStaticProps({ params }) {
	try {
		const client = await clientPromise;
		const db = client.db("test");

		const posts = await db
			.collection("posts")
			.find({ categories: ObjectId("634c60a70980c0847341425e") })
			.project({ title: 1, photo: 1, categories: 1 })
			.toArray();

		const cats = await db.collection("categories").find({}).toArray();

		const strPosts = JSON.parse(JSON.stringify(posts));
		const strCats = JSON.parse(JSON.stringify(cats));
		for (let i = 0; i < strPosts.length; i++) {
			for (let j = 0; j < strPosts[i].categories.length; j++) {
				strCats.forEach((cat) => {
					if (strPosts[i].categories[j] === cat._id){
						strPosts[i].categories[j] = cat.name;}
				});
			}
		}

		return {
			props: { posts: strPosts },
		};
	} catch (e) {
		console.log(e);
		return {
			props: {},
		};
	}
}
