import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

import styles from "./MainNav.module.css";

const navLinks = [
    { title: "Home", path: "/", accent: null },
    { title: "Programming", path: "/programming", accent: styles.navButton_r },
    { title: "Audio", path: "/audio", accent: styles.navButton_g },
    { title: "Visual", path: "/visual", accent: styles.navButton_b },
];

export default function MainNav() {
    const router = useRouter();

    return (
        <nav className={styles.mainNav}>
            <div className="flex">
                <img
                    className={styles.logo}
                    src="/images/logo.png"
                    alt="logo"
                />
                {navLinks.map((linkStruct) => (
                    <Link key={linkStruct.path} href={linkStruct.path}>
                        <a
                            className={`${styles.navButton} ${
                                linkStruct.accent
                            } text-white ff-sans-cond uppercase fs-300 ${
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
                    className={`${
                        styles.contactButton
                    } text-light ff-sans-cond letter-spacing-3 uppercase fs-300 ${
                        router.pathname === "/contact" && styles.active
                    }`}
                >
                    Contact Me
                </a>
            </Link>
        </nav>
    );
}
