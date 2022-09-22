import React from "react";
import "./ColorInfo.css";

export default function ColorInfo({ type, hex, rgb, hsl }) {
    return (
        <div className="color-info">
            <p
                className={
                    "color-box fs-700 ff-serif bg-" +
                    type +
                    (type === "dark" ? " text-white" : " text-dark")
                }
            >
                {hex}
            </p>
            <p className="color-meta">
                <span className="text-light">rgb: </span>
                {rgb}
            </p>
            <p className="color-meta">
                <span className="text-light">hsl: </span>
                {hsl}
            </p>
        </div>
        
    );
}
