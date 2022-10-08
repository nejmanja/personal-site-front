import Head from "next/head";
import MainNav from "../components/MainNav";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
    return (
        <>
            <MainNav />
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
