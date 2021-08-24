import React from "react";
import styles from "./ForWho.module.css";
import Grid from "@material-ui/core/Grid";
import { forWhoProducts } from "../Data/Data";
import Card from "./Card.js";
const ForWhoProducts = () => {
  return (
    <div className={styles.wrapper}>
      <Grid xl={8} container className={styles.forWhoProducts}>
        <div className={styles.title}>
          <h4>Innovativa utbildningar för dig</h4>
          <h2>Från privatperson till företag</h2>
        </div>
        <Grid xl={12} className={styles.productsContent}>
          {forWhoProducts.map((data, index) => {
            return <Card {...data} />;
          })}
        </Grid>
      </Grid>
    </div>
  );
};

export default ForWhoProducts;
