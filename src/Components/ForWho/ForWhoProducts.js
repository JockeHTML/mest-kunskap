import React from "react";
import styles from "./ForWho.module.css";
import Grid from "@material-ui/core/Grid";
import { forWhoProducts } from "../Data/Data";
import Card from "./Card.js";
const ForWhoProducts = () => {
  return (
    <div className={styles.productsWrapper}>
      <Grid xs={12} xl={12} container className={styles.forWhoContainer}>
        <div className={styles.title}>
          <h4>Föreläsningar med tydligt fokus</h4>
          <h2>Inom dessa områden</h2>
        </div>
        <Grid xs={10} xl={12} className={styles.forWhoProducts}>
          {forWhoProducts.map((data, index) => {
            return <Card key={index} {...data} />;
          })}
        </Grid>
      </Grid>
    </div>
  );
};

export default ForWhoProducts;
