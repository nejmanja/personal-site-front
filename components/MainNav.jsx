import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState, useRef } from "react";
import useWindowSize from "../utils/hooks/useWindowSize";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

import styles from "./MainNav.module.css";
import utilStyles from "../styles/utils.module.css";
import { useEffect } from "react";

const navLinks = [
    { title: "Home", path: "/", accent: null },
    { title: "Programming", path: "/programming", accent: styles.navButton_r },
    { title: "Audio", path: "/audio", accent: styles.navButton_g },
    { title: "Visual", path: "/visual", accent: styles.navButton_b },
];

export default function MainNav() {
    const router = useRouter();
    const { width: windowWidth, height: windowHeight } = useWindowSize();
    const buttonsRef = useRef();
    const [hidden, setHidden] = useState(true);

    useEffect(() => {
        if (windowWidth > 720) setHidden(true);
    }, [windowWidth]);

    // makes the code below at least slightly more readable
    const navButtonStyle = `${styles.navButton} ${utilStyles.textWhite} ${utilStyles.ffSansCond} ${utilStyles.uppercase} ${utilStyles.fs300}`;
    const contactButtonStyle = `${styles.contactButton} ${utilStyles.textLight} ${utilStyles.ffSansCond} ${utilStyles.letterSpacing3} ${utilStyles.uppercase} ${utilStyles.fs300}`;

    const navLinkElems = navLinks.map((linkStruct, ind) => (
        <Link key={linkStruct.path} href={linkStruct.path}>
            <a
                className={`${linkStruct.accent} ${navButtonStyle} ${
                    linkStruct.path === "/"
                        ? router.pathname === linkStruct.path && styles.active
                        : router.pathname.indexOf(linkStruct.path) !== -1 &&
                          styles.active
                }`}
            >
                {linkStruct.title}
            </a>
        </Link>
    ));

    return (
        <nav className={styles.mainNav}>
            <img className={styles.logo} src="/images/logo.png" alt="logo" />
            <button
                className={`${styles.hamburger} ${utilStyles.fs500}`}
                onClick={() => {
                    setHidden((prev) => !prev);
                }}
            >
                {hidden ? <AiOutlineMenu /> : <AiOutlineClose />}
            </button>

            <div
                ref={buttonsRef}
                className={styles.navButtons}
                style={
                    windowWidth < 720
                        ? {
                              height: !hidden
                                  ? buttonsRef.current.scrollHeight + "px"
                                  : "0px",
                          }
                        : {}
                }
            >
                <div className={`${utilStyles.flex} ${styles.leftContainer}`}>
                    {navLinkElems}
                </div>

                <Link href="/contact">
                    <a
                        className={`${contactButtonStyle} ${
                            router.pathname === "/contact" && styles.active
                        }`}
                    >
                        Contact Me
                    </a>
                </Link>
            </div>
        </nav>
    );
}
