import React, { ReactElement } from "react";
import NavBar from "../header/navBar";
import Head from "next/head";
import Footer from "../footer/footer";

type Props = {
  children?: JSX.Element;
};

const LandingLayout = ({ children }: Props) => {
  return (
    <>
      <Head>
        <title>Retro Wiki</title>
        <meta name="description" content="RetroWiki" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/retrowiki.ico" />
      </Head>
      <NavBar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

// LandingPage.getLayout = function getLayout({page} : Props){
//   return (
//     <
//   )
// }

export default LandingLayout;
