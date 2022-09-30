import "./MainNav.css";
import Logo from "../logo.png";
import {Link} from "react-router-dom"
import { useState } from "react";

export default function MainNav() {

    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <nav className="main-nav">
            <div className="nav-buttons flex">
                <img className="logo text-white" src={Logo} />
                <Link to="/" className={"nav-button text-white ff-sans-cond uppercase fs-300" + (activeIndex === 0 ? " active": "")} onClick={()=>{setActiveIndex(0);}}>
                    Home
                </Link>
                <Link to="/programming" className={"nav-button nav-button--r text-white ff-sans-cond uppercase fs-300" + (activeIndex === 1 ? " active": "")} onClick={()=>{setActiveIndex(1);}}>
                    Programming
                </Link>
                <Link to="/audio" className={"nav-button nav-button--g text-white ff-sans-cond uppercase fs-300" + (activeIndex === 2 ? " active": "")} onClick={()=>{setActiveIndex(2);}}>
                    Audio
                </Link>
                <Link to="/visual" className={"nav-button nav-button--b text-white ff-sans-cond uppercase fs-300" + (activeIndex === 3 ? " active": "")} onClick={()=>{setActiveIndex(3);}}>
                    Visual
                </Link>
            </div>

            <Link to="/contact" className={"contact-button text-light ff-sans-cond letter-spacing-3 uppercase fs-300"  + (activeIndex === 4 ? " active": "")} onClick={()=>{setActiveIndex(4);}}>
                Contact Me
            </Link>
        </nav>
    );
}
