import React from 'react';
import {useRouter} from "next/router";
import Head from "next/head";
import styles from '@/styles/Layout.module.css';
import Header from "./Header";
import ShowCase from "@/components/ShowCase";
import Footer from "./Footer";

const Layout = ({title, keywords, description, children}) => {

  const router = useRouter();

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description}/>
        <meta name="keywords" content={keywords}/>
      </Head>

      <Header/>
      {router.pathname === "/" && <ShowCase />}
      <div className={styles.container}>
        {children}
      </div>
      <Footer/>
    </>
  );
};

Layout.defaultProps = {
  title: "DJ Events | Find the hottest parties",
  description: "Find the latest DJ and other musical events",
  keywords: "music, dj, edm, events"
}

export default Layout;
