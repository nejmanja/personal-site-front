import React from "react";
import CarouselItem from "./CarouselItem";

import styles from "./Showcase.module.css";
import utilStyles from "../styles/utils.module.css";

export default function Showcase() {
	return (
		<div className={`${styles.showcase} ${utilStyles.container} ${utilStyles.fullscreenPanel}`}>
			<h1 className={`${utilStyles.uppercase} ${utilStyles.bold} ${utilStyles.fs800} ${utilStyles.ffSansCond} ${utilStyles.textLight}`}>
				Still not convinced?
			</h1>
			<h2>Check out some of my past projects!</h2>
			<div className={utilStyles.flex}>
				<CarouselItem title="Sample project" thumbnail="/images/thumb.png" accent="r"/>
				<CarouselItem title="A really long sample project" thumbnail="/images/thumb2.jpg" accent="g"/>
				<CarouselItem title="Sample project" thumbnail="/images/thumb3.png" accent="b"/>
				<CarouselItem title="Sample project" thumbnail="/images/thumb.png" />
			</div>
		</div>
	);
}
