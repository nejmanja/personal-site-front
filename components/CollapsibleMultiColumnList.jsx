import React from "react";
import { useRef } from "react";
import { useState } from "react";
import { AiOutlineDown, AiOutlineClose } from "react-icons/ai";

import styles from "./CollapsibleMultiColumnList.module.css";
import utilStyles from "../styles/utils.module.css";

// a collapsible list
export default function MultiColumnList({ title, numCols, items }) {
    const [expanded, expand] = useState(false);
    const contentRef = useRef();

    // create elements from text items
    const listItems = items.map((item, ind) => <div key={ind}>{item}</div>);
    return (
        <div>
            {/* button for toggling list */}
            <button
                className={`${utilStyles.flex} ${styles.listTitle}`}
                onClick={() => {
                    expand((prev) => !prev);
                }}
            >
                <h1
                    className={`${utilStyles.fs500} ${utilStyles.uppercase} ${utilStyles.ffSansCond}`}
                >
                    {title}
                </h1>
                <h1>{expanded ? <AiOutlineClose /> : <AiOutlineDown />}</h1>
            </button>

            {/* list content */}
            <div
                ref={contentRef}
                className={`${utilStyles.grid} ${styles.lists}`}
                style={
                    // manually set height based on state (is it expanded?)
                    {
                        "--num-cols": numCols,
                        height: expanded
                            ? contentRef.current.scrollHeight + "px"
                            : "0px",
                    }
                }
            >
                {listItems}
            </div>
        </div>
    );
}
