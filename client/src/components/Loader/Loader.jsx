import React from "react";
import styles from "./loader.module.css";
function Loader({ message }) {
  return (
    <div>
     
      <div className={`${styles.box}`}>
      <span className={`${styles.loader}`}></span>
      </div>
      
      
      
    </div>
  );
}

export default Loader;
