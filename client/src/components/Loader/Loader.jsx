import React from "react";
import Card from "../../commonComp/card/Card";
import styles from "./loader.module.css";
function Loader({ message }) {
  return (
    <div>
      <Card>
      <div className={`${styles.box}`}>
      <span className={`${styles.loader}`}></span>
      </div>
      
      
      </Card>
    </div>
  );
}

export default Loader;
