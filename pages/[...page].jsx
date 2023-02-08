import React from "react";
import { getPostIndexPaths, getPostIndexProps } from "../lib/dbOps";
import clientPromise from "../lib/mongodb";
import { ObjectId } from "mongodb";
import utilStyles from "../styles/utils.module.css";
import PostList from "../components/PostList";
import Head from "next/head";
import PostsNavigation from "../components/PostsNavigation";

export default function PostIndex({ title, posts, current, total, baseLink }) {
    return (
        <div className={utilStyles.postListContainer}>
            <Head>
                <title>{title}</title>
            </Head>
            <PostsNavigation
                baseLink={baseLink}
                currentPage={current}
                totalPages={total}
            />
            <PostList posts={posts} />
            <PostsNavigation
                baseLink={baseLink}
                currentPage={current}
                totalPages={total}
            />
        </div>
    );
}

export async function getStaticProps({ params }) {
    if (
        !params.page[0] ||
        (params.page[0] !== "programming" &&
            params.page[0] !== "audio" &&
            params.page[0] !== "visual")
    )
        return {
            props: {},
            notFound: true,
        };

    try {
        const client = await clientPromise;
        const db = client.db("test");

        let category;
        switch (params.page[0]) {
            case "programming":
                category = ObjectId("634c60a70980c0847341425e");
                break;
            case "audio":
                category = ObjectId("634c60c10980c08473414261");
                break;
            case "visual":
                category = ObjectId("634c60cb0980c08473414263");
                break;
            default:
                break;
        }

        const res = await getPostIndexProps(
            db,
            params,
            category,
            params.page[0]
        );
        return res;
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
        const paths = await getPostIndexPaths(db, [
            { id: ObjectId("634c60a70980c0847341425e"), name: "programming" },
            { id: ObjectId("634c60c10980c08473414261"), name: "audio" },
            { id: ObjectId("634c60cb0980c08473414263"), name: "visual" },
        ]);
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
