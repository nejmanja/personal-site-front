import Image from "next/image";
import styles from "../../styles/post.module.css";
import utilStyles from "../../styles/utils.module.css";
import PostBody from "../../components/PostBody";
import Head from "next/head";
import clientPromise from "../../lib/mongodb";

export default function Post({ post }) {
    return (
        <div className={styles.post}>
            <Head>
                <title>{post.title}</title>
                <meta
                    property="og:image"
                    content={`/api/og_post?title=${post.title}`}
                />
            </Head>
            <div
                className={`${styles.imgContainer} ${
                    post.categories.includes("programming")
                        ? styles.accentR
                        : ""
                } ${post.categories.includes("audio") ? styles.accentG : ""}
                ${post.categories.includes("visual") ? styles.accentB : ""}`}
            >
                {post.photo ? (
                    <Image src={post.photo} layout="fill" objectFit="cover" />
                ) : (
                    <div
                        className={`${utilStyles.uppercase} ${utilStyles.bold}`}
                        style={{
                            ...post.thumbStyle,
                            backgroundColor: "black",
                            height: "100%",
                            width: "100%",
                            display: "flex",
                            textAlign: "center",
                            alignItems: "center",
                            justifyContent: "center",
                            flexDirection: "column",
                            position: "absolute",
                            fontStyle: "normal",
                            fontSize: "4vw",
                            letterSpacing: "-0.025em",
                            color: "white",
                            width: "100%",
                            lineHeight: 1.4,
                        }}
                    >
                        {post.fancyTitle + ' ' + post.title}
                    </div>
                )}
            </div>
            <div className={styles.content}>
                <div className={`${styles.desc} ${utilStyles.fs300}`}>
                    <PostBody>{post.body}</PostBody>
                </div>
            </div>
        </div>
    );
}

export async function getStaticPaths() {
    try {
        const client = await clientPromise;
        const db = client.db("test");

        // only pre-render the first 20 posts
        const posts = await db.collection("posts").find({}).limit(20).toArray();
        const paths = posts.map((post) => {
            return { params: { id: post.slug } };
        });

        return {
            paths: paths,
            fallback: "blocking",
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

        const post = await db.collection("posts").findOne({ slug: params.id });

        if (!post) {
            return { props: {}, notFound: true };
        }

        const cats = await db.collection("categories").find({}).toArray();

        const strPost = JSON.parse(JSON.stringify(post));
        const strCats = JSON.parse(JSON.stringify(cats));

        // replace category ids with their names
        for (let i = 0; i < strPost.categories.length; i++) {
            strCats.forEach((cat) => {
                if (strPost.categories[i] === cat._id)
                    strPost.categories[i] = cat.name;
            });
        }
        return {
            props: {
                post: strPost,
            },
        };
    } catch (e) {
        console.log(e);
        return {
            props: {},
            notFound: true,
        };
    }
}
