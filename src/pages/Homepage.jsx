import AboutMe from "../components/AboutMe";
import Greet from "../components/Greet";
import "./Homepage.css";

export default function Homepage() {
  return (
    <div className="home">
        <Greet />
        <AboutMe />
    </div>
  );
}
