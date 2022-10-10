import Head from "next/head";
import Footer from "../components/Footer";
import MainNav from "../components/MainNav";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
    return (
        <>
            <MainNav />
            <Component {...pageProps} />
            <Footer />
        </>
    );
}

export default MyApp;
