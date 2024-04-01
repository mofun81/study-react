import Image from "next/image";
import styles from "./page.module.css";
import Footer from "./components/Footer";
import Links from "./components/Links";

export default function Home() {
  const name = "page"
  return (
    <main className={styles.main}>
      <Links props={name}/>
      <Footer />
    </main>
  );
}
