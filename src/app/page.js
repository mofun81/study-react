import Image from "next/image";
import styles from "./page.module.css";
import Footer from "./components/Footer";
import Links from "./components/Links";
import Headline from "./components/Headline";

export default function Home() {
  const name = "page"
  return (
    <main className={styles.main}>
      <Headline page="index"/>
      <Links />
      <Footer />
    </main>
  );
}
