import React from "react";
import { Link } from "react-router-dom";
import styles from "./Nav.module.css";

const Icon = (props) => {
  return (
    <Link to="/home" className={styles.title}>
      <img src="" alt="Mest Kunskap Apple Icon" />
      <h1>{props.defaultHeading ? props.defaultHeading : "Mest Kunskap"}</h1>
    </Link>
  );
};

export default Icon;
