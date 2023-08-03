import Head from "next/head";
// import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Search from "./Components/Search/Search";
import { Raleway } from "next/font/google";
import Container from "./Components/Container/Container";

const raleway = Raleway({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Model Evaluation</title>
        {/* <meta name="description" content="Generated by create next app" /> */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;900&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <main className={`${styles.main} ${raleway.className} `}>
        <Search />
        <Container />
      </main>
    </>
  );
}
