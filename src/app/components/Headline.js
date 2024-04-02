import styles from "@/app/page.module.css";
import React from "react";

const Headline = (props) => {
  return (
    <div>
      <h1 className={styles.description2}>{props.page} page</h1>
      <div className={styles.description}></div>
      <p>
        Get started by editing&nbsp;
        <code className={styles.code}>
          src/app/
          {props.page === "about" ? `${props.page}/page` : "page"}
          .js
        </code>
      </p>
    </div>
  );
};

export default Headline;
