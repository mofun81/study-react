import Image from "next/image";
import styles from "@/app/page.module.css";
import Footer from "../components/Footer";
import Links from "../components/Links";
import Headline from "../components/Headline";

export default function Home() {
  const name = "about"
  return (
    <main className={styles.main}>
      <Headline page="about"/>
      <Links />
      <Footer />
    </main>
  );
}
