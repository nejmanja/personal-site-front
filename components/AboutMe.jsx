import React from "react";
import ButtonLarge from "./ButtonLarge";
import Skills from "./Skills";

import styles from "./AboutMe.module.css";
import utilStyles from "../styles/utils.module.css";

// about section of the home page, includes profile pic, description, and 2 dropdowns
export default function AboutMe() {
    return (
        // div inside section because the section stretches the background color to full width
        <section id="about-me" className={styles.aboutMe}>
            {/* responsive grid layout */}
            <div className={`${styles.content} ${utilStyles.container}`}>
                <img
                    className={styles.profilePic}
                    src="/images/pfp.jpg"
                    alt="profile"
                />
                <h1
                    className={`${styles.title} ${utilStyles.uppercase} ${utilStyles.bold} ${utilStyles.fs800} ${utilStyles.ffSansCond} ${utilStyles.textLight}`}
                >
                    Who am I?
                </h1>
                <div className={`${styles.text} ${utilStyles.flow}`}>
                    <p className={styles.desc}>
                        I&apos;m a computer science student with strong
                        interests in low-level programming, computer graphics,
                        physics simulations, digital signal processing and audio
                        programming.
                    </p>
                    <p className={styles.tagline}>
                        I strive towards making complex things feel intuitive.
                    </p>
                </div>
                {/* 2 dropdown menus */}
                <Skills className={styles.skills} />
                <ButtonLarge
                    className={styles.contact}
                    link="/contact"
                    text="Contact Me"
                    accent="light"
                />
            </div>
        </section>
    );
}
