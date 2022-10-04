import React from "react";
import { Link } from "react-router-dom";

import "./ButtonLarge.css";

export default function ButtonLarge({ className, text, link, accent }) {
	return (
		<Link
			to={link}
			className={
				"button-large ff-sans-cond letter-spacing-3 uppercase fs-500 button-large--" +
				accent + ' ' +
				className
			}
		>
			{text}
		</Link>
	);
}
