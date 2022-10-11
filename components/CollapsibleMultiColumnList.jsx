import React from "react";
import { useRef } from "react";
import { useState } from "react";
import { AiOutlineDown, AiOutlineClose } from "react-icons/ai";

import styles from "./CollapsibleMultiColumnList.module.css";
import utilStyles from "../styles/utils.module.css";

export default function MultiColumnList({ title, numCols, items }) {
    const [expanded, expand] = useState(false);
    const contentRef = useRef();

    const listItems = items.map((item, ind) => <div key={ind}>{item}</div>);
    return (
        <div className={styles.listContainer}>
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
                <h1>{expanded ? <AiOutlineClose/> : <AiOutlineDown />}</h1>
            </button>

            <div
                ref={contentRef}
                className={`${utilStyles.grid} ${styles.lists} + ${
                    expanded && styles.lists_active
                }`}
                style={{
                    "--num-cols": numCols,
                    height: expanded
                        ? contentRef.current.scrollHeight + "px"
                        : "0px",
                }}
            >
                {listItems}
            </div>
        </div>
    );
}
