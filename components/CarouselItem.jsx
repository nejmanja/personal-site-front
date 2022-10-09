import React from "react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import styles from "./CarouselItem.module.css";
import utilStyles from "../styles/utils.module.css";

export default function CarouselItem({
	className,
	title,
	thumbnail,
	accent,
	link,
}) {
	const [hover, setHover] = useState(false);

	return (
		<Link href={link}>
			<div
				className={`${styles.carouselItem} ${className}`}
				onMouseEnter={() => {
					setHover(true);
				}}
				onMouseLeave={() => {
					setHover(false);
				}}
			>
				<div
					className={`${styles.thumbContainer} ${styles[`thumbContainer_${accent}`]} 
                        ${hover && styles.active}`}
				>
					<Image
						src={thumbnail}
						layout="fill"
						objectFit="cover"
						alt="project thumbnail"
					/>
				</div>
				<p
					className={`
                        ${styles.title} ${utilStyles.textWhite} 
                        ${utilStyles.ffSansCond} 
                        ${utilStyles.bold} ${utilStyles.fs400} 
                        ${styles[`title_${accent}`]}`}
				>
					{title}
				</p>
			</div>
		</Link>
	);
}
