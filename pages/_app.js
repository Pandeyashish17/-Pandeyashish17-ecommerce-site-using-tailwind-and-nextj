import Header from "../components/Header";
import { StateContext } from "../context/StateContext";

import "../styles/globals.css";
import Head from "next/head";
import Navbar from "../components/Navbar";
import SearchPart from "../components/SearchPart";
import { UserProvider } from "@auth0/nextjs-auth0";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>findYourThings</title>
      </Head>
      <UserProvider>
        <StateContext>
          <Header />
          <Navbar />
          <SearchPart />
          <Component {...pageProps} />
        </StateContext>
      </UserProvider>
    </>
  );
}

export default MyApp;
