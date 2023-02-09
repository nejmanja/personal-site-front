import React from "react";
import Link from "next/link";

import styles from "./ButtonLarge.module.css";
import utilStyles from "../styles/utils.module.css";

// generic link button with custom text
export default function ButtonLarge({ className, text, link, accent }) {
    return (
        <Link href={link}>
            <a
                className={`${styles.buttonLarge} ${utilStyles.ffSansCond} ${
                    utilStyles.letterSpacing3
                } ${utilStyles.uppercase} ${utilStyles.fs500} ${
                    styles[`buttonLarge_${accent}`]
                } ${className}`}
            >
                {text}
            </a>
        </Link>
    );
}
