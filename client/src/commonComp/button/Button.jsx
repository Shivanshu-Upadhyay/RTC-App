import React from "react";
import styles from "./button.module.css";
function Button({ text, handleClick }) {
  return (
    <div className="buttonWrapper">
      <button onClick={handleClick} className={`${styles.button} rounded-3xl`}>
        {text} <i className="fa-solid fa-arrow-right mx-1"></i>
      </button>
    </div>
  );
}

export default Button;
