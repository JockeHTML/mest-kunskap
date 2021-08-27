import React from "react";
import styles from "./ForWho.module.css";
import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <div className={styles.card}>
      <img src={props.src} alt={props.title} />
      <div className={styles.info}>
        <h3>{props.title}</h3>
        <p>{props.text.substring(0, 90)}...</p>
        {props.routerName ? (
          <Link to={props.router}>
            {props.routerName} <i className="fas fa-chevron-right"></i>
          </Link>
        ) : null}
      </div>
    </div>
  );
};

export default Card;
