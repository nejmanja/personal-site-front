import React, { useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

import styles from "./PostCard.module.css";
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
                className={styles.card}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                onFocus={() => setActive(true)}
                onBlur={() => setActive(false)}
            >
                <div
                    className={`${styles.imgContainer} ${
                        categories.includes("programming") ? styles.accentR : ""
                    } ${categories.includes("audio") ? styles.accentG : ""}
                ${categories.includes("visual") ? styles.accentB : ""} ${
                        active || hover ? styles.hover : ""
                    }`}
                >
                    {thumb ? (
                        <Image src={thumb} layout="fill" objectFit="cover" />
                    ) : (
                        <div
                            style={{
                                ...thumbStyle,
                                backgroundColor: "black",
                                height: "100%",
                                width: "100%",
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
                                width: "100%",
                                lineHeight: 1.4,
                            }}
                        >
                            {thumbTitle}
                        </div>
                    )}
                    {loading && (
                        <div className={styles.loading}>
                            <AiOutlineLoading />
                        </div>
                    )}
                </div>
                <p className={`${styles.title} ${utilStyles.fs400}`}>{title}</p>
            </a>
        </Link>
    );
}
