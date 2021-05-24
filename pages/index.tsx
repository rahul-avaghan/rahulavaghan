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
    <div>
      <Head>
        <title>Rahul Avaghan</title>
        <meta name="description" content="Rahul avaghan" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP&display=swap"
          rel="stylesheet"
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
          <BlogList/>
        </section>
      </main>
      
      <footer className={styles.footer}>
        Hand crafted by me ❤️
      </footer>
    </div>
  );
}
