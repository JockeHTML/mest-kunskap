import React from "react";
import styles from "./ForWho.module.css";
import Grid from "@material-ui/core/Grid";
import { forWho } from "../Data/Data";
import Card from "./Card.js";

const ForWho = () => {
  return (
    <div className={styles.wrapper}>
      <Grid xl={8} container className={styles.forWho}>
        <div className={styles.title}>
          <h4>Innovativa utbildningar för dig</h4>
          <h2>Från privatperson till företag</h2>
        </div>
        <Grid container xl={12} className={styles.content}>
          {forWho.map((data, index) => {
            return <Card {...data} />;
          })}
        </Grid>
      </Grid>
    </div>
  );
};

export default ForWho;