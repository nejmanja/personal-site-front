import "./MainNav.css";
import Logo from "../logo.png";

export default function MainNav() {
    const content = ["Home", "Programming", "Audio", "Visual", "Contact me"];
    const elems = content.map((str) => (
        <button className="nav-button active text-white ff-sans-cond uppercase fs-300">
            {str}
        </button>
    ));

    return (
        <div className="main-nav">
            <img className="logo text-white" src={Logo} />
            <div>
                <button className="nav-button active text-white ff-sans-cond uppercase fs-300">
                    Home
                </button>
                <button className="nav-button nav-button--r active text-white ff-sans-cond uppercase fs-300">
                    Programming
                </button>
                <button className="nav-button nav-button--g active text-white ff-sans-cond uppercase fs-300">
                    Audio
                </button>
                <button className="nav-button nav-button--b active text-white ff-sans-cond uppercase fs-300">
                    Visual
                </button>
                <button className="nav-button nav-button active bold text-light ff-sans-cond uppercase fs-300">
                    Contact Me
                </button>
            </div>
        </div>
    );
}
