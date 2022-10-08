import AboutMe from "../components/AboutMe";
import Greet from "../components/Greet";
import Showcase from "../components/Showcase";

export default function Homepage() {
    return (
        <div>
            <Greet />
            <AboutMe />
            <Showcase />
        </div>
    );
}
