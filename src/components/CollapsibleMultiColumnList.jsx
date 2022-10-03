import React from "react";
import { useRef } from "react";
import { useState } from "react";
import "./CollapsibleMultiColumnList.css";

export default function MultiColumnList({ title, numCols, items }) {
	const [expanded, expand] = useState(false);
	const contentRef = useRef();

	const listItems = items.map((item) => <div>{item}</div>);
	return (
		<div className="list-container">
			<div
				className="flex list-title"
				onClick={() => {
					expand((prev) => !prev);
				}}
			>
				<h1 className="fs-700 uppercase ff-sans-cond">{title}</h1>
				<h1>{expanded ? "X" : "V"}</h1>
			</div>

			<div
				ref={contentRef}
				className={"grid lists " + (expanded && "lists--active")}
				style={{
					"--num-cols": numCols,
					height: expanded ? contentRef.current.scrollHeight + "px" : "0px",
				}}
			>
				{listItems}
			</div>
		</div>
	);
}
