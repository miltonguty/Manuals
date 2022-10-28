import Head from "next/head";
import Footer from "./Footer";
import Menu from "./Menu";
import styles from "../styles/MainLayout.module.css";

function MainLayout({ children }) {
  return (
    <>
      <Head>
        <Head>
          <title>Create Next App</title>
          <meta name="title Page" content="Manuals" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
      </Head>
      <Menu />
      <main className={styles.main}>{children}</main>
      <Footer />
    </>
  );
}

export default MainLayout;
