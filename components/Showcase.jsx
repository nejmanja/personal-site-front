import React from "react";
import CarouselItem from "./CarouselItem";

import styles from "./Showcase.module.css";
import utilStyles from "../styles/utils.module.css";
import ScrollableList from "./ScrollableList";

export default function Showcase() {
	return (
		<div
			className={`${styles.showcase} ${utilStyles.container} ${utilStyles.fullscreenPanel}`}
		>
			<h1
				className={`${utilStyles.uppercase} ${utilStyles.bold} ${utilStyles.fs800} ${utilStyles.ffSansCond} ${utilStyles.textLight}`}
			>
				Still not convinced?
			</h1>
			<h2>Check out some of my past projects!</h2>
			<ScrollableList
				listItems={[
					<CarouselItem
						title="Sample project"
						thumbnail="/images/thumb.png"
						accent="r"
						link="#"
					/>,
					<CarouselItem
						title="Slightly bigger title"
						thumbnail="/images/thumb2.jpg"
						accent="g"
						link="#"
					/>,
					<CarouselItem
						title="A really elaborate and massive title, you cannnot even comprehend how big it is"
						thumbnail="/images/thumb3.png"
						accent="b"
						link="#"
					/>,
					<CarouselItem
						title="Sample project"
						thumbnail="/images/thumb3.png"
						link="#"
					/>,
					<CarouselItem
						title="Sample project"
						thumbnail="/images/thumb3.png"
						accent="b"
						link="#"
					/>,
					<CarouselItem
						title="Sample project"
						thumbnail="/images/thumb.png"
						accent="r"
						link="#"
					/>,
					<CarouselItem
						title="Slightly bigger title"
						thumbnail="/images/thumb2.jpg"
						accent="g"
						link="#"
					/>,
					<CarouselItem
						title="A really elaborate and massive title, you cannnot even comprehend how big it is"
						thumbnail="/images/thumb3.png"
						accent="b"
						link="#"
					/>,
					<CarouselItem
						title="Sample project"
						thumbnail="/images/thumb3.png"
						link="#"
					/>,
					<CarouselItem
						title="Sample project"
						thumbnail="/images/thumb3.png"
						accent="b"
						link="#"
					/>,
				]}
			/>
		</div>
	);
}
