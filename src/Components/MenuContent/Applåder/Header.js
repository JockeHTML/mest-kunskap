import React from "react";
import styles from "./Applåder.module.css";
import { Typography } from "@material-ui/core";

const Header = (props) => {
  return (
    <div className={styles.header}>
      <Typography variant="h5">{props.text}</Typography>
    </div>
  );
};

export default Header;
