import React from "react";
import PostList from "../../components/PostList";
import utilStyles from "../../styles/utils.module.css";
import clientPromise from "../../lib/mongodb";
import { ObjectId } from "mongodb";
import {
    getCategories,
    getPageCount,
    getPostsPaginated,
} from "../../lib/dbOps";
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

        const posts = await getPostsPaginated(
            db,
            ObjectId("634c60a70980c0847341425e"),
            1
        );
        const cats = await getCategories(db);

        const strPosts = formatPostsData(posts, cats);
        const numPages = await getPageCount(
            db,
            ObjectId("634c60a70980c0847341425e")
        );
        return {
            props: {
                posts: strPosts,
                title: "Programming Projects / 1",
                current: 1,
                total: numPages,
            },
        };
    } catch (e) {
        console.log(e);
        return {
            props: {},
        };
    }
}
