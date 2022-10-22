import Head from "next/head";

import AboutMe from "../components/AboutMe";
import Greet from "../components/Greet";
import Showcase from "../components/Showcase";
import clientPromise from "../lib/mongodb";

export default function Homepage({posts}) {
	return (
		<div>
			<Head>
				<title>nejmanja / apost</title>
			</Head>
			<Greet />
			<AboutMe />
			<Showcase posts={posts}/>
		</div>
	);
}

export async function getStaticProps({ params }) {
	try {
		const client = await clientPromise;
		const db = client.db("test");

		const posts = await db
			.collection("posts")
			.find({})
            .sort({index: -1})
			.project({ title: 1, photo: 1, categories: 1, slug: 1, fancyTitle: 1, thumbStyle: 1 })
            .limit(24)
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