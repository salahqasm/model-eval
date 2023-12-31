import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Search from "./Components/Search/Search";
import { Cairo } from "next/font/google";
import Container from "./Components/Container/Container";
import Header from "./Components/Header/Header";

const cairo = Cairo({ subsets: ["latin"] });
export default function Home() {
  
  return (
    <>
      <Head>
        <title>Model Evaluation</title>
        {/* <meta name="description" content="Generated by create next app" /> */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;900&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <Header />
      <main className={`${styles.main} ${cairo.className} `}>
        <Container />
      </main>
    </>
  );
}



// useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const res = await axios.post('http://127.0.0.1:8000/llmsResponse', { prompt: "Test" });
  //       console.log(res.data); // Log the response data instead of the entire response object
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };

  //   fetchData();
  // }, []);