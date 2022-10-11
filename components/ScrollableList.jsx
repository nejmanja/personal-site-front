import React from "react";
import { useEffect, useState, useRef } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

import styles from "./ScrollableList.module.css";
import utilStyles from "../styles/utils.module.css";

export default function ScrollableList({ listItems }) {
	const scroller = useRef();
	const [itemWidth, setItemWidth] = useState(0);
	const [leftHidden, hideLeft] = useState(true);
	const [rightHidden, hideRight] = useState(false);

	useEffect(() => {
		setItemWidth(scroller.current.offsetWidth);
	}, []);

	useEffect(() => {
		function handleResize() {
			scroller.current && setItemWidth(scroller.current.offsetWidth);
		}

		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	useEffect(() => {
		const hideButtons = () => {
			if (scroller.current.scrollLeft == 0) hideLeft(true);
			else if (
				scroller.current.scrollLeft <
				scroller.current.scrollWidth - scroller.current.offsetWidth - 2
			) {
				hideLeft(false);
				hideRight(false);
			} else hideRight(true);
		};

		scroller.current.addEventListener("scroll", hideButtons);
	}, []);

	return (
		<div className={styles.container}>
			{!leftHidden && (
				<button
					className={`${styles.scrollButton} ${styles.scrollButtonLeft} ${utilStyles.fs400} ${utilStyles.textWhite}`}
					onClick={() => {
						scroller.current.scrollLeft -= itemWidth;
					}}
				>
					<AiOutlineLeft />
				</button>
			)}
			<div
				className={`${styles.scrollableList} ${styles.snapsInline}`}
				ref={scroller}
			>
				{listItems}
			</div>
			{!rightHidden && (
				<button
					className={`${styles.scrollButton} ${styles.scrollButtonRight}  ${utilStyles.fs400} ${utilStyles.textWhite}`}
					onClick={() => {
						scroller.current.scrollLeft += itemWidth;
					}}
				>
					<AiOutlineRight />
				</button>
			)}
		</div>
	);
}
