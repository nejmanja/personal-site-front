import { AiOutlineDown } from "react-icons/ai";
import { useState, useEffect } from "react";

import styles from "./ScrollButton.module.css";
import utilStyles from "../styles/utils.module.css";

export default function ScrollButton({className}) {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY < window.innerHeight) setVisible(true);
            else setVisible(false);
        };
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const scrollDown = () => {
        // window.scrollTo({
        //     top: window.innerHeight * 0.93,
        //     behavior: "smooth",
        // });
        document.getElementById("about-me").scrollIntoView({behavior: "smooth"});
    };

    return (
        visible && (
            <div className={className}>
                <AiOutlineDown
                    className={styles.scrollButton}
                    onClick={scrollDown}
                />
            </div>
        )
    );
}
