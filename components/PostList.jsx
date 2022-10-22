import React from "react";
import PostCard from "./PostCard";
import Head from "next/head";
import styles from "./PostList.module.css";

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
            key={post.slug}
            link={`/posts/${post.slug}`}
            thumb={post.photo}
            title={cutTitle(post.title)}
            thumbTitle={post.fancyTitle}
            thumbStyle={post.thumbStyle}
            categories={post.categories}
        />
    ));
    return (
        <div className={`${styles.list}`}>
            {cards}
        </div>
    );
}
