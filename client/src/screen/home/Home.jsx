import React from "react";
import { Outlet } from "react-router-dom";
import styles from "./home.module.css";

function Home() {
  return (
    <div className={styles.box}>
      <header className={`${styles.header} p-3`}>
        <img src="./imgs/logo.svg" alt="" />
      </header>
      <section className={styles.boxSection}>
      <Outlet />
      </section>
    </div>
  );
}

export default Home;
