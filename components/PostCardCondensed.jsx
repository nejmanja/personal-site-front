import React, { useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

import styles from "./PostCardCondensed.module.css";
import utilStyles from "../styles/utils.module.css";
import { useState } from "react";
import { AiOutlineLoading } from "react-icons/ai";
import Link from "next/link";
import useLoading from "../lib/hooks/useLoading";

export default function PostCard({
    title,
    thumb,
    thumbTitle,
    thumbStyle,
    categories,
    link,
    desc,
}) {
    const [hover, setHover] = useState(false);
    const [active, setActive] = useState(false);
    const [loading, setLoading] = useState(false);
    useLoading(
        (url) => {
            if (url === link) setLoading(true);
        },
        () => {
            setLoading(false);
        }
    );

    return (
        <Link href={link}>
            <a
                className={styles.link}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                onFocus={() => setActive(true)}
                onBlur={() => setActive(false)}
            >
                <div
                    className={`${styles.card} ${
                        categories.includes("programming") ? styles.accentR : ""
                    } ${categories.includes("audio") ? styles.accentG : ""}
                ${categories.includes("visual") ? styles.accentB : ""} ${
                        active || hover ? styles.hover : ""
                    }`}
                >
                    <div className={`${styles.imgContainer}`}>
                        {thumb ? (
                            <div style={{width: '100%', height: '100%', position: 'relative'}}>
                            <Image
                                src={thumb}
                                style={{
                                    border: "1px solid green"
                                }}
                                layout="fill"
                                objectFit="cover"
                            />
                            </div>
                        ) : (
                            <div
                                style={{
                                    ...thumbStyle,
                                    backgroundColor: "black",
                                    height: "100%",
                                    aspectRatio: "1/1",
                                    display: "flex",
                                    textAlign: "center",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    flexDirection: "column",
                                    position: "absolute",
                                    fontSize: "100%",
                                    fontStyle: "normal",
                                    letterSpacing: "-0.025em",
                                    color: "white",
                                }}
                            >
                                {"🎞️"}
                            </div>
                        )}
                        {loading && (
                            <div className={styles.loading}>
                                <AiOutlineLoading />
                            </div>
                        )}
                    </div>
                    <p className={`${styles.title} ${utilStyles.fs400}`}>
                        {title}
                    </p>
                </div>
                <p className={`${styles.desc} ${utilStyles.fs300}`}>{desc}</p>
            </a>
        </Link>
    );
}
