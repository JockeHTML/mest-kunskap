import React from "react";
import styles from "./ForWho.module.css";
import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <div className={styles.card}>
      <img src={props.src} alt={props.title} />
      <div className={styles.info}>
        <h3>{props.title}</h3>
        <p>{props.text}</p>
        <Link to={props.router}>{props.routerName}</Link>
        {props.routerName ? <i class="fas fa-chevron-right"></i> : null}
      </div>
    </div>
  );
};

export default Card;
