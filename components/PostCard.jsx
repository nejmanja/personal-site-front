import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

import styles from "./PostCard.module.css";
import utilStyles from "../styles/utils.module.css";
import { useState } from "react";
import { AiOutlineLoading } from "react-icons/ai";
import Link from "next/link";
import useLoading from "../lib/hooks/useLoading";

export default function PostCard({ title, thumb, categories, link }) {
	const [hover, setHover] = useState(false);
	const [active, setActive] = useState(false);
	const [loading, setLoading] = useState(false);
    useLoading((url)=>{
        if(url === link) setLoading(true);
    },
    ()=>{
        setLoading(false);
    });

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
					<Image src={thumb} layout="fill" objectFit="cover" />
					<div className={loading ? styles.loading : ""}>
						<AiOutlineLoading />
					</div>
				</div>
				<p className={`${styles.title} ${utilStyles.fs400}`}>{title}</p>
			</a>
		</Link>
	);
}
