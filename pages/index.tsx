import Head from "next/head";
import Image from "next/image";
import Avatar from "../src/components/avatar/Avatar";
import BlogList from "../src/components/bloglist/BlogList";
import Experience from "../src/components/experince/Experience";
import Hero from "../src/components/hero/Hero";
import Introduction from "../src/components/introduction/Introduction";
import Skills from "../src/components/skills/Skills";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP&display=swap"
          rel="stylesheet"
        />
        <meta name="robots" content="all" />

        <title>Resume for rahul avaghan</title>
        <meta name="title" content="Resume for rahul avaghan" />
        <meta name="description" content="Quick career walk through." />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://rahulavaghan.vercel.app/" />
        <meta property="og:title" content="Resume for rahul avaghan" />
        <meta property="og:description" content="Quick career walk through." />
        <meta
          property="og:image"
          content="https://rahulavaghan.vercel.app/rahul.jpeg"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://rahulavaghan.vercel.app/"
        />
        <meta property="twitter:title" content="Resume for rahul avaghan" />
        <meta
          property="twitter:description"
          content="Quick career walk through."
        />
        <meta
          property="twitter:image"
          content="https://rahulavaghan.vercel.app/rahul.jpeg"
        />
      </Head>

      <main className={styles.container}>
        <Hero />
        <Introduction />
        <section>
          <Skills />
        </section>
        <section>
          <Experience />
        </section>
        <section>
          <BlogList />
        </section>
      </main>

      <footer className={styles.footer}>Hand crafted by me ❤️</footer>
    </>
  );
}
