import Header from "../components/Header";
import { StateContext } from "../context/StateContext";

import "../styles/globals.css";
import Head from "next/head";
import Navbar from "../components/Navbar";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>findYourThings</title>
      </Head>
      <StateContext>
        <Header />
        <Navbar />

        <Component {...pageProps} />
      </StateContext>
    </>
  );
}

export default MyApp;
