import Image from "next/image";
import styles from "../../styles/post.module.css";
import utilStyles from "../../styles/utils.module.css";
import PostBody from "../../components/PostBody";

export default function Post({ post }) {
	return (
		<div className={styles.post}>
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
	const res = await fetch("http://localhost:5000/posts/");
	const posts = await res.json();
	const paths = posts.map((post) => {
		return { params: { id: post._id } };
	});

	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps({ params }) {
	const res = await fetch(`http://localhost:5000/posts/${params.id}`);
	const post = await res.json();

	const resCat = await fetch("http://localhost:5000/categories");
	const cats = await resCat.json();

	// replace category ID with category name
	for (let i = 0; i < post.categories.length; i++) {
		cats.forEach((cat) => {
			if (post.categories[i] === cat._id) post.categories[i] = cat.name;
		});
	}

	return {
		props: {
			post,
		},
	};
}
