import Image from "next/image";
import styles from "../../styles/post.module.css";
import utilStyles from "../../styles/utils.module.css";
import PostBody from "../../components/PostBody";
import Head from "next/head";
import clientPromise from "../../lib/mongodb";
import { ObjectId } from "mongodb";

export default function Post({ post }) {
	return (
		<div className={styles.post}>
			<Head>
				<title>{post.title}</title>
			</Head>
			<div
				className={`${styles.imgContainer} ${
					post.categories.includes("programming") ? styles.accentR : ""
				} ${post.categories.includes("audio") ? styles.accentG : ""}
                ${post.categories.includes("visual") ? styles.accentB : ""}`}
			>
				<Image
					src={post.photo || "/images/thumb3.png"}
					layout="fill"
					objectFit="cover"
				/>
			</div>
			<div className={styles.content}>
				<h1
					className={`${styles.title} ${utilStyles.uppercase} ${utilStyles.bold} ${utilStyles.fs800}`}
				>
					{post.title}
				</h1>
				<div className={`${styles.desc} ${utilStyles.fs400}`}>
					<PostBody>{post.desc}</PostBody>
				</div>
			</div>
		</div>
	);
}

export async function getStaticPaths() {
	try {
		const client = await clientPromise;
		const db = client.db("test");

		const posts = await db.collection("posts").find({}).toArray();
		const paths = posts.map((post) => {
			return { params: { id: post._id.toString() } };
		});

		return {
			paths,
			fallback: false,
		};
	} catch (e) {
		console.log(e);
		return {
			paths: [],
			fallback: false,
		};
	}
}

export async function getStaticProps({ params }) {
	try {
		const client = await clientPromise;
		const db = client.db("test");

		const post = await db
			.collection("posts")
			.findOne({ _id: ObjectId(params.id) });
		const cats = await db.collection("categories").find({}).toArray();

		const strPost = JSON.parse(JSON.stringify(post));
		const strCats = JSON.parse(JSON.stringify(cats));

		// replace category ids with their names
		for (let i = 0; i < strPost.categories.length; i++) {
			strCats.forEach((cat) => {
				if (strPost.categories[i] === cat._id) strPost.categories[i] = cat.name;
			});
		}
		return {
			props: {
				post: strPost,
			},
		};
	} catch (e) {
		console.log(e);
	}
}
