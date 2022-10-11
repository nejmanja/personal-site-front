import Head from "next/head";

import AboutMe from "../components/AboutMe";
import Greet from "../components/Greet";
import Showcase from "../components/Showcase";

export default function Homepage() {
	return (
		<div>
			<Head>
				<title>nejmanja / apost</title>
			</Head>
			<Greet />
			<AboutMe />
			<Showcase />
		</div>
	);
}
