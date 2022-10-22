import Link from "next/link";
import styles from "./PostsNavigation.module.css";
import utilStyles from "../styles/utils.module.css";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import useLoading from "../lib/hooks/useLoading";
import { useState } from "react";
import { formatPostNavLinks } from "../lib/utils";

export default function PostsNavigation({ baseLink, currentPage, totalPages }) {
    const [loading, setLoading] = useState(false);
    const [clicked, setClicked] = useState(false);
    useLoading(
        () => {
            setLoading(true);
        },
        () => {
            setLoading(false);
            setClicked(false);
        }
    );

    const pageLinks = [];
    formatPostNavLinks(pageLinks, currentPage, totalPages);

    const pageLinkElems = pageLinks.map((elem) =>
        elem === "…" || elem === currentPage.toString() ? (
            <span>{elem}</span>
        ) : (
            <Link href={`${baseLink}/${elem === "1" ? "" : elem}`}>
                <a className={styles.link}>{elem}</a>
            </Link>
        )
    );
    return (
        <div className={`${styles.nav} ${utilStyles.fs500}`}>
            {currentPage > 1 && (
                <Link
                    href={`${baseLink}/${
                        currentPage === 2 ? "" : currentPage - 1
                    }`}
                    className={styles.link}
                >
                    <a
                        className={`${styles.button} ${styles.buttonL}`}
                        onClick={() => setClicked(true)}
                    >
                        <AiOutlineLeft />
                    </a>
                </Link>
            )}
            <div className={styles.links}>{pageLinkElems}</div>
            {currentPage < totalPages && (
                <Link href={`${baseLink}/${currentPage + 1}`}>
                    <a
                        className={`${styles.button} ${styles.buttonR}`}
                        onClick={() => setClicked(true)}
                    >
                        <AiOutlineRight />
                    </a>
                </Link>
            )}
            {loading && clicked && <div className={styles.loading} />}
        </div>
    );
}
