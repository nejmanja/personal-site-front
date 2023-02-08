import React from "react";
import PostCardCondensed from "./PostCardCondensed";
import styles from "./PostList.module.css";

export default function PostList({ posts }) {
    const cutText = (title, charLimit) => {
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
        <PostCardCondensed
            key={post.slug}
            link={`/posts/${post.slug}`}
            thumb={post.photo}
            title={cutText(post.title, 60)}
            desc={cutText(post.desc, 300)}
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
