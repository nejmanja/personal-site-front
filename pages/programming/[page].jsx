import utilStyles from "../../styles/utils.module.css";
import PostList from "../../components/PostList";
import { ObjectId } from "mongodb";
import {
    getCategories,
    getPageCount,
    getPostIndexPaths,
    getPostsPaginated,
} from "../../lib/dbOps";
import clientPromise from "../../lib/mongodb";
import { formatPostsData } from "../../lib/utils";
import Head from "next/head";

export default function Programming({ title, posts, current, total }) {
    return (
        <div className={utilStyles.postListContainer}>
            <Head>
                <title>{title}</title>
            </Head>
            <PostList posts={posts} />
            <div>
                Page {current}/{total}
            </div>
        </div>
    );
}

export async function getStaticProps({ params }) {
    try {
        const client = await clientPromise;
        const db = client.db("test");

        const numPages = await getPageCount(
            db,
            ObjectId("634c60a70980c0847341425e")
        );

        // total range of page numbers, [2, ..., n]
        // if this page is larger than expected, return a 404
        const currentPage = parseInt(params.page);
        if (currentPage < 2 || currentPage > numPages) {
            return {
                props: {},
                notFound: true,
            };
        }

        const posts = await getPostsPaginated(
            db,
            ObjectId("634c60a70980c0847341425e"),
            currentPage
        );

        const cats = await getCategories(db);

        const strPosts = formatPostsData(posts, cats);

        return {
            props: {
                posts: strPosts,
                title: `Programming Projects / ${params.page}`,
                current: currentPage,
                total: numPages,
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

export async function getStaticPaths() {
    try {
        const client = await clientPromise;
        const db = client.db("test");
        const paths = await getPostIndexPaths(
            db,
            ObjectId("634c60a70980c0847341425e")
        );

        return {
            paths: paths,
            fallback: "blocking",
        };
    } catch (e) {
        console.log(e);
        return {
            paths: {},
            fallback: "blocking",
        };
    }
}
