import Head from "next/head";
import Footer from "../components/Footer";
import MainNav from "../components/MainNav";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
	return (
		<div
			style={{
				minHeight: "100vh",
				display: "flex",
				flexDirection: "column",
				justifyContent: "space-between",
			}}
		>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			</Head>
			<MainNav />
			<Component {...pageProps} />
			<Footer />
		</div>
	);
}

export default MyApp;
