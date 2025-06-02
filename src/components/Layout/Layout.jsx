import React from "react";
import Head from "next/head";
import Footer from "../footer/Footer";
import LayoutHeader from "../header/LayoutHeader";

function Layout({ children }) {
  return (
    <>
      <Head>
        <link rel="icon" href="favicon.ico" />
      </Head>
      <LayoutHeader />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
