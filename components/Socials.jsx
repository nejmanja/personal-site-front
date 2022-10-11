import React from "react";
import {
	AiOutlineGithub,
	AiOutlineInstagram,
	AiOutlineYoutube,
} from "react-icons/ai";
import { SiFreelancer } from "react-icons/si";

import styles from "./Socials.module.css";
import utilStyles from "../styles/utils.module.css";

const items = [
	{ icon: <SiFreelancer />, link: "https://www.freelancer.com/u/necake" },
	{ icon: <AiOutlineGithub />, link: "https://www.github.com/nejmanja" },
	{ icon: <AiOutlineInstagram />, link: "https://www.instagram.com/the.apost" },
	{
		icon: <AiOutlineYoutube />,
		link: "https://www.youtube.com/channel/UCkd39Pcm9uZ0c7rt1zZYsVA",
	},
];

export default function Socials({ className, linkClassName }) {
	return (
		<div className={`${utilStyles.flex} ${styles.socials} ${className}`}>
			{items.map((item, index) => (
				<a
					target="_blank"
					className={`${styles.link} ${linkClassName}`}
					href={item.link}
                    key={index}
				>
					{item.icon}
				</a>
			))}
		</div>
	);
}
