import "./MainNav.css";
import Logo from "../logo.png";
import {NavLink} from "react-router-dom"

export default function MainNav() {
    return (
        <nav className="main-nav">
            <div className="nav-buttons flex">
                <img className="logo text-white" src={Logo} alt="logo"/>
                <NavLink to="/" end activeClassName="active" className={"nav-button text-white ff-sans-cond uppercase fs-300"}>
                    Home
                </NavLink>
                <NavLink to="/programming" activeClassName="active" className={"nav-button nav-button--r text-white ff-sans-cond uppercase fs-300"}>
                    Programming
                </NavLink>
                <NavLink to="/audio" activeClassName="active" className={"nav-button nav-button--g text-white ff-sans-cond uppercase fs-300"}>
                    Audio
                </NavLink>
                <NavLink to="/visual" activeClassName="active" className={"nav-button nav-button--b text-white ff-sans-cond uppercase fs-300"}>
                    Visual
                </NavLink>
            </div>

            <NavLink to="/contact" activeClassName="active" className={"contact-button text-light ff-sans-cond letter-spacing-3 uppercase fs-300"}>
                Contact Me
            </NavLink>
        </nav>
    );
}
