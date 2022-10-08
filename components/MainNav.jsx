import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

import styles from "./MainNav.module.css";
import utilStyles from "../styles/utils.module.css";

const navLinks = [
    { title: "Home", path: "/", accent: null },
    { title: "Programming", path: "/programming", accent: styles.navButton_r },
    { title: "Audio", path: "/audio", accent: styles.navButton_g },
    { title: "Visual", path: "/visual", accent: styles.navButton_b },
];

export default function MainNav() {
    const router = useRouter();

    // makes the code below at least slightly more readable
    const navButtonStyle = `${styles.navButton} ${utilStyles.textWhite} ${utilStyles.ffSansCond} ${utilStyles.uppercase} ${utilStyles.fs300}`;
    const contactButtonStyle = `${styles.contactButton} ${utilStyles.textLight} ${utilStyles.ffSansCond} ${utilStyles.letterSpacing3} ${utilStyles.uppercase} ${utilStyles.fs300}`;
    
    return (
        <nav className={styles.mainNav}>
            <div className={utilStyles.flex}>
                <img
                    className={styles.logo}
                    src="/images/logo.png"
                    alt="logo"
                />
                {navLinks.map((linkStruct) => (
                    <Link key={linkStruct.path} href={linkStruct.path}>
                        <a
                            className={`${
                                linkStruct.accent
                            } ${navButtonStyle} ${
                                router.pathname === linkStruct.path &&
                                styles.active
                            }`}
                        >
                            {linkStruct.title}
                        </a>
                    </Link>
                ))}
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
        </nav>
    );
}
