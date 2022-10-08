import React from "react";
import { useState } from "react";
import Link from "next/link";

import styles from "./CarouselItem.module.css";
import utilStyles from "../styles/utils.module.css";

export default function CarouselItem({ className, title, thumbnail, accent }) {
    const [hover, setHover] = useState(false);

    return (
        <div
            className={`${styles.carouselItem} ${className}`}
            onMouseEnter={() => {
                setHover(true);
            }}
            onMouseLeave={() => {
                setHover(false);
            }}
            href="#"
        >
                <div className={styles.carouselItemThumbContainer}>
                    <img
                        className={styles.carouselItemThumb}
                        src={thumbnail}
                        alt="project thumbnail"
                    />
                </div>
                <h1
                    className={`
                        ${styles.carouselItemTitle} ${utilStyles.textWhite} ${
                        utilStyles.ffSansCond
                    } ${utilStyles.bold} ${utilStyles.fs500} ${
                        styles[`carouselItemTitle_${accent}`]
                    }
                        ${hover && styles.carouselItemTitle_active}`}
                >
                    {title}
                </h1>
        </div>
    );
}
