import React from "react";
import styles from "./ForWho.module.css";

const Card = (props) => {
  return (
    <div className={styles.card}>
      <img src={props.src} alt={props.title} />
      <div className={styles.info}>
        <h3>{props.title}</h3>
        <p>{props.text}</p>
      </div>
    </div>
  );
};

export default Card;
